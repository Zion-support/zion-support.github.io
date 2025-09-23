#!/usr/bin/env bash
set -euo pipefail

# Auto-merge all open PRs into main with conflict resolution preferring PR changes.
# Usage:
#   AUTO_PUSH=true DRY_RUN=false MAX_COUNT=0 bash scripts/auto-merge-open-prs.sh
# Env Vars:
#   DRY_RUN   - if "true", do not push changes (default: false)
#   AUTO_PUSH - if "true", push after each merge (default: true)
#   MAX_COUNT - limit number of PRs to process; 0 means unlimited (default: 0)
#   BASE_BRANCH - base branch to merge into (default: main)

DRY_RUN=${DRY_RUN:-false}
AUTO_PUSH=${AUTO_PUSH:-true}
MAX_COUNT=${MAX_COUNT:-0}
BASE_BRANCH=${BASE_BRANCH:-main}

cd "$(git rev-parse --show-toplevel)"

echo "[info] Fetching remotes..."
git fetch origin "+refs/pull/*/head:refs/remotes/origin/pr/*" >/dev/null 2>&1 || true

echo "[info] Ensuring local ${BASE_BRANCH} matches origin/${BASE_BRANCH}"
if git show-ref --quiet refs/heads/${BASE_BRANCH}; then
  git checkout ${BASE_BRANCH} >/dev/null 2>&1 || true
else
  git checkout -B ${BASE_BRANCH} origin/${BASE_BRANCH} >/dev/null 2>&1 || true
fi
git fetch origin ${BASE_BRANCH} >/dev/null 2>&1 || true
git reset --hard origin/${BASE_BRANCH}

echo "[info] Collecting PR refs..."
mapfile -t PR_REFS < <(git for-each-ref --sort=creatordate --format='%(refname)' refs/remotes/origin/pr)

TOTAL=${#PR_REFS[@]}
echo "[info] Found ${TOTAL} PR refs"

processed=0
merged=0
skipped=0
failed_list=()

for ref in "${PR_REFS[@]}"; do
  pr_num=$(basename "$ref")
  ((processed++)) || true

  if [[ "$MAX_COUNT" != "0" && "$processed" -gt "$MAX_COUNT" ]]; then
    echo "[info] Reached MAX_COUNT=${MAX_COUNT}; stopping."
    break
  fi

  echo "\n[info] Processing PR #${pr_num} ($ref)"

  # Check if already merged
  if git merge-base --is-ancestor "$ref" "origin/${BASE_BRANCH}"; then
    echo "[skip] PR #${pr_num} already merged into origin/${BASE_BRANCH}"
    ((skipped++)) || true
    continue
  fi

  # Prepare temp branch from the latest origin/${BASE_BRANCH}
  git checkout -B "auto-merge-pr-${pr_num}" "origin/${BASE_BRANCH}" >/dev/null 2>&1

  # Attempt merge preferring PR changes
  set +e
  git merge -X theirs "$ref" -m "Auto-merge PR #${pr_num} into ${BASE_BRANCH} (prefer PR changes)"
  merge_ec=$?
  set -e

  if [[ $merge_ec -ne 0 ]]; then
    echo "[warn] Conflicts while merging PR #${pr_num}; attempting auto-resolve by staging all changes"
    git add -A || true
    set +e
    git commit -m "Auto-resolve conflicts for PR #${pr_num}: prefer PR changes where possible"
    commit_ec=$?
    set -e
    if [[ $commit_ec -ne 0 ]]; then
      echo "[fail] Could not auto-resolve PR #${pr_num}. Adding to failure list."
      failed_list+=("${pr_num}")
      # Reset back to base branch to continue with others
      git checkout ${BASE_BRANCH} >/dev/null 2>&1 || true
      git reset --hard origin/${BASE_BRANCH}
      continue
    fi
  fi

  # Merge temp branch back into ${BASE_BRANCH}
  git checkout ${BASE_BRANCH} >/dev/null 2>&1
  git pull --ff-only origin ${BASE_BRANCH} >/dev/null 2>&1 || true
  git merge --no-ff -m "Merge auto-resolved PR #${pr_num}" "auto-merge-pr-${pr_num}" >/dev/null 2>&1 || true

  ((merged++)) || true

  if [[ "$DRY_RUN" != "true" && "$AUTO_PUSH" == "true" ]]; then
    echo "[info] Pushing ${BASE_BRANCH} after PR #${pr_num}"
    git push origin ${BASE_BRANCH}
  else
    echo "[info] Skipping push (DRY_RUN=$DRY_RUN, AUTO_PUSH=$AUTO_PUSH)"
  fi

done

echo "\n[summary] Processed: ${processed}, Merged: ${merged}, Skipped: ${skipped}"
if [[ ${#failed_list[@]} -gt 0 ]]; then
  echo "[summary] Failed PRs: ${failed_list[*]}"
else
  echo "[summary] No failures"
fi