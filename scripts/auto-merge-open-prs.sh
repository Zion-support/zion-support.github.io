#!/usr/bin/env bash
set -euo pipefail

# Auto-merge open PR refs into main, preferring PR changes on conflicts.
# Safe to rerun; pushes after each successful merge. Batches to avoid timeouts.

cd /workspace

git fetch origin '+refs/pull/*/head:refs/remotes/origin/pr/*' || true
git checkout main
git pull --ff-only || true

limit="${1:-50}"
offset="${2:-0}"

mapfile -t PRS < <(git for-each-ref --format='%(refname:short)' refs/remotes/origin/pr/* | sed -E 's#^origin/pr/##' | sort -n)

total=${#PRS[@]}
echo "Found $total PRs. Processing up to $limit starting at offset $offset"

count=0
for ((i=offset; i<total && count<limit; i++)); do
  pr="${PRS[$i]}"
  if [[ -z "$pr" ]]; then continue; fi
  echo "=== Merging PR #$pr into main ==="

  # Ensure we are up to date before each merge
  git checkout main >/dev/null 2>&1
  git pull --ff-only || true

  # Try clean merge first
  if git merge -X theirs --no-ff -m "Merge PR #$pr into main" "origin/pr/$pr"; then
    echo "Pushing main after clean merge of PR #$pr"
    git push origin main || true
    ((count++))
    continue
  fi

  echo "Conflict detected for PR #$pr. Auto-resolving in favor of PR changes..."
  git merge --abort || true
  if git merge --no-commit "origin/pr/$pr"; then
    git checkout --theirs . || true
    git add -A
    git commit -m "Merge PR #$pr into main (auto-resolve: prefer PR changes)" || true
    git push origin main || true
    ((count++))
  else
    echo "Failed to merge PR #$pr even after auto-resolve. Skipping."
    git merge --abort || true
  fi
done

echo "Processed $count PRs in this batch."
