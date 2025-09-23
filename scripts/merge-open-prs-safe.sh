#!/usr/bin/env bash
set -euo pipefail

REPO_OWNER="Zion-Holdings"
REPO_NAME="zion.app"
GITHUB_API="https://api.github.com/repos/${REPO_OWNER}/${REPO_NAME}"

echo "🚀 Starting safe batch merge of open PRs into main"
echo "⏰ $(date)"

# Ensure git user is set (in CI containers it may be missing)
git config user.name >/dev/null 2>&1 || git config user.name "automation"
git config user.email >/dev/null 2>&1 || git config user.email "automation@local"

echo "🔄 Fetching latest from origin"
git fetch origin --prune

echo "🔁 Checking out main"
git checkout main
git pull --ff-only origin main || true

# Create a safety backup branch
BACKUP_BRANCH="backup-main-$(date +%Y%m%d-%H%M%S)"
echo "🔒 Creating backup branch ${BACKUP_BRANCH}"
git branch -f "${BACKUP_BRANCH}"
git push -u origin "${BACKUP_BRANCH}" || true

# Fetch open PRs (unauthenticated; switch to authenticated if GH_TOKEN is present)
AUTH_HEADER=()
if [[ -n "${GH_TOKEN:-}" ]]; then
  AUTH_HEADER=(-H "Authorization: Bearer ${GH_TOKEN}")
fi

echo "📋 Fetching open PRs list"
PRS_JSON=$(curl -sS "${GITHUB_API}/pulls?state=open&per_page=100" "${AUTH_HEADER[@]}" -H "Accept: application/vnd.github+json")

# Extract PR numbers and head refs without jq
# We look for lines containing \"number\": and \"head\": then next \"ref\":
mapfile -t PR_ENTRIES < <(echo "${PRS_JSON}" | awk '
  /"number"/ {
    gsub(/,/, "");
    num = $2;
  }
  /"head"/ { in_head=1; next }
  in_head && /"ref"/ {
    # Extract after colon, strip quotes and comma
    ref_line = $0;
    sub(/^[^:]*:\s*"/, "", ref_line);
    sub(/",?\s*$/, "", ref_line);
    printf "%s\t%s\n", num, ref_line;
    in_head=0;
  }
')

TOTAL=${#PR_ENTRIES[@]}
echo "🧮 Found ${TOTAL} open PRs"

SUCCESS=0
FAILED=0
BATCH_COUNT=0

for entry in "${PR_ENTRIES[@]}"; do
  PR_NUMBER="${entry%%$'\t'*}"
  HEAD_REF="${entry#*$'\t'}"

  [[ -z "${PR_NUMBER}" || -z "${HEAD_REF}" ]] && continue

  echo "\n———\n🔄 Processing PR #${PR_NUMBER} (branch: ${HEAD_REF})"

  # Ensure we have the latest for the head ref
  git fetch origin "${HEAD_REF}:${HEAD_REF}" || true

  # Merge strategy: prefer PR (theirs) on conflicts; fallback to force-choose theirs for conflicted files
  if git merge --no-ff -m "Merge PR #${PR_NUMBER} from ${HEAD_REF} into main" -X theirs "origin/${HEAD_REF}" 2>/dev/null; then
    echo "✅ Merged PR #${PR_NUMBER}"
    ((SUCCESS+=1))
  else
    echo "⚠️  Merge conflicts in PR #${PR_NUMBER}; attempting automatic resolution (prefer theirs)"
    # Collect conflicted files
    CONFLICTED=$(git diff --name-only --diff-filter=U || true)
    if [[ -n "${CONFLICTED}" ]]; then
      while IFS= read -r f; do
        [[ -z "${f}" ]] && continue
        # Prefer incoming (theirs) version
        git checkout --theirs -- "${f}" || true
        git add -- "${f}" || true
      done <<<"${CONFLICTED}"
      # Commit resolved merge
      if git commit -m "Resolve conflicts preferring PR for PR #${PR_NUMBER}"; then
        echo "✅ Conflicts resolved for PR #${PR_NUMBER}"
        ((SUCCESS+=1))
      else
        echo "❌ Failed to commit resolution for PR #${PR_NUMBER}; aborting merge"
        git merge --abort || true
        ((FAILED+=1))
      fi
    else
      echo "❌ Merge failed without detectable conflicted files; aborting"
      git merge --abort || true
      ((FAILED+=1))
    fi
  fi

  ((BATCH_COUNT+=1))
  # Push periodically to avoid losing work
  if (( BATCH_COUNT % 5 == 0 )); then
    echo "💾 Pushing batch to origin/main"
    git push origin main || true
  fi
done

echo "💾 Final push to origin/main"
git push origin main || true

echo "\n🎉 Completed. Successful merges: ${SUCCESS}, Failed: ${FAILED}"
echo "🔒 Backup branch: ${BACKUP_BRANCH}"
