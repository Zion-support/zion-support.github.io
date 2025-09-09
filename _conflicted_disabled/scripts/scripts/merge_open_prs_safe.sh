#!/usr/bin/env bash
set -euo pipefail

# Merge all open PR heads from origin into main, preferring ours on conflicts
# Requires: existing git origin remote with PR refs available (refs/pull/*/head)

echo "🚀 Starting safe PR merge run"
START_TS=$(date -u +"%Y-%m-%dT%H:%M:%SZ")
echo "⏰ Started at: ${START_TS}"

git fetch origin --prune

echo "🔧 Ensuring we are on main and up to date"
CURRENT_BRANCH=$(git rev-parse --abbrev-ref HEAD)
if [[ "$CURRENT_BRANCH" != "main" ]]; then
  git checkout main
fi
git pull --ff-only origin main || true

BACKUP_BRANCH="backup-main-$(date +%Y%m%d-%H%M%S)"
echo "🔒 Creating backup branch: ${BACKUP_BRANCH}"
git branch -f "${BACKUP_BRANCH}"
git push -u origin "${BACKUP_BRANCH}" || true

echo "📋 Listing PR heads from origin"
# Format: <sha>\trefs/pull/<num>/head
mapfile -t PR_REFS < <(git ls-remote origin 'refs/pull/*/head' | awk '{print $2}' | sed -E 's#refs/pull/([0-9]+)/head#\1#' | sort -n | uniq)

if [[ ${#PR_REFS[@]} -eq 0 ]]; then
  echo "ℹ️ No PR refs found at origin (refs/pull/*/head). Exiting."
  exit 0
fi

echo "🔢 Found ${#PR_REFS[@]} PR(s)"

SUCCESS=0
FAILED=0
CONFLICTED=0

for PR_NUM in "${PR_REFS[@]}"; do
  echo "\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
  echo "🔄 Processing PR #${PR_NUM}"
  TMP_BRANCH="pr-${PR_NUM}"

  # Fetch PR head into a local branch
  if ! git fetch origin "pull/${PR_NUM}/head:${TMP_BRANCH}" ; then
    echo "❌ Failed to fetch PR #${PR_NUM}"
    ((FAILED++))
    continue
  fi

  # Attempt merge with strategy preferring ours
  echo "🔀 Merging ${TMP_BRANCH} into main with -Xours"
  if git merge -Xours --no-edit "${TMP_BRANCH}" ; then
    echo "✅ Merged PR #${PR_NUM}"
    ((SUCCESS++))
  else
    echo "⚠️ Merge reported conflicts for PR #${PR_NUM}. Attempting auto-resolution by keeping ours."
    CONFLICTED=$((CONFLICTED+1))
    # Keep our version for all conflicted files, then commit
    if git checkout --ours . && git add -A && git commit -m "Merge PR #${PR_NUM} with conflicts resolved preferring ours" ; then
      echo "✅ Conflicts resolved (ours) and committed for PR #${PR_NUM}"
      ((SUCCESS++))
    else
      echo "❌ Could not auto-resolve conflicts for PR #${PR_NUM}. Aborting merge."
      git merge --abort || true
      ((FAILED++))
    fi
  fi

  # Cleanup temp branch
  git branch -D "${TMP_BRANCH}" >/dev/null 2>&1 || true

  # Periodic push to avoid large divergence
  if (( SUCCESS % 5 == 0 )); then
    echo "💾 Pushing progress to origin/main"
    git push origin main || true
  fi

done

echo "\n💾 Final push to origin/main"
git push origin main || true

END_TS=$(date -u +"%Y-%m-%dT%H:%M:%SZ")
echo "\n🎉 Done."
echo "📊 Summary:"
echo "   ✅ Successful merges: ${SUCCESS}"
echo "   ❌ Failed merges: ${FAILED}"
echo "   🔧 Conflicted (auto-resolved): ${CONFLICTED}"
echo "   🔒 Backup branch: ${BACKUP_BRANCH}"
echo "⏰ Completed at: ${END_TS}"