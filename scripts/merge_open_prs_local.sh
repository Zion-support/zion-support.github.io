#!/usr/bin/env bash
set -euo pipefail

LOG_FILE="${1:-/workspace/merge_prs.log}"

exec > >(tee -a "$LOG_FILE") 2>&1

echo "["$(date -Is)"] 🚀 Starting local batch merge of open PRs"

cd /workspace

echo "["$(date -Is)"] 📥 Fetching latest main and PR refs"
git fetch origin main
git fetch origin '+refs/pull/*/head:refs/remotes/origin/pr/*' || true

echo "["$(date -Is)"] 🔁 Resetting local main to origin/main"
git checkout -q main || git checkout -q -b main
git reset --hard origin/main

mapfile -t PR_REFS < <(git for-each-ref --format='%(refname:short)' refs/remotes/origin/pr/ | sort -V)

echo "["$(date -Is)"] 📋 Found ${#PR_REFS[@]} PR heads to process"

success=0
skipped=0
failed=0

for ref in "${PR_REFS[@]}"; do
  prnum="${ref##*/}"
  echo "["$(date -Is)"] ▶️ Processing $ref (PR #$prnum)"

  # Prepare tmp branch from PR head
  git branch -D tmp-merge-$prnum >/dev/null 2>&1 || true
  if ! git checkout -q -B tmp-merge-$prnum "$ref"; then
    echo "["$(date -Is)"] ⚠️ Could not checkout $ref; skipping"
    ((skipped++))
    continue
  fi

  # Rebase PR on top of latest origin/main; if conflicts, attempt ours/theirs strategies
  if ! git rebase origin/main; then
    echo "["$(date -Is)"] 🧩 Rebase conflict for PR #$prnum; attempting auto-resolve (take PR changes)"
    git rebase --abort || true
    # Merge main into PR branch preferring PR changes (theirs when merging main)
    if ! git merge -X ours origin/main -m "chore: sync with origin/main before merge (prefer PR content)"; then
      echo "["$(date -Is)"] ❌ Failed to auto-resolve rebase for PR #$prnum; skipping"
      git merge --abort || true
      git checkout -q main
      ((failed++))
      continue
    fi
  fi

  # Merge into main
  git checkout -q main
  if git merge --no-ff -m "Merge PR #$prnum via local batch merge" tmp-merge-$prnum; then
    :
  else
    echo "["$(date -Is)"] 🔀 Merge conflict merging PR #$prnum into main; retry with -X theirs"
    git merge --abort || true
    if ! git merge -X theirs --no-ff -m "Merge PR #$prnum (prefer PR changes on conflict)" tmp-merge-$prnum; then
      echo "["$(date -Is)"] ❌ Merge still failing for PR #$prnum; skipping"
      git merge --abort || true
      ((failed++))
      # Reset main to a clean state
      git reset --hard origin/main
      continue
    fi
  fi

  # Push after each successful merge to reduce conflicts with remote updates
  if git push origin main; then
    echo "["$(date -Is)"] ✅ Merged and pushed PR #$prnum"
    ((success++))
  else
    echo "["$(date -Is)"] ⚠️ Push rejected for PR #$prnum; refreshing main and retrying once"
    git fetch origin main
    git reset --hard origin/main
    # Re-apply merge quickly
    if git merge --no-ff -m "Merge PR #$prnum via local batch merge (retry)" tmp-merge-$prnum && git push origin main; then
      echo "["$(date -Is)"] ✅ Merged and pushed PR #$prnum on retry"
      ((success++))
    else
      echo "["$(date -Is)"] ❌ Could not push PR #$prnum; skipping"
      git merge --abort || true
      ((failed++))
      git reset --hard origin/main
    fi
  fi

  # Cleanup tmp branch
  git branch -D tmp-merge-$prnum >/dev/null 2>&1 || true
done

echo "["$(date -Is)"] 🧮 Merge summary: success=$success skipped=$skipped failed=$failed"
exit 0

