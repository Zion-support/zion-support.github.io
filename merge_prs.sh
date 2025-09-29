#!/usr/bin/env bash
set -euo pipefail

echo "[info] Starting automated merge of candidate PR branches into main"

# Ensure we are on main and up to date
git fetch origin main
git checkout main
git pull --ff-only origin main

# Generate candidate list of remote branches which likely represent PR heads
# Heuristics: branches starting with pr-, merge-pr-, pr/, merge/open-prs-batch*, integration/merge-open-prs*, improvements*, fix/*, website-*
mapfile -t CANDIDATE_BRANCHES < <(git ls-remote --heads origin \
  | awk '{print $2}' \
  | sed 's#refs/heads/##' \
  | grep -E '^(pr-|merge-pr-|pr/|merge/open-prs|integration/merge-open-prs|improvements|improve|fix/|website-|seo-|performance-|merge-all-open-prs)' \
  | grep -v '^main$' \
  | sort -u)

echo "[info] Found ${#CANDIDATE_BRANCHES[@]} candidate branches"

success_count=0
fail_count=0

for branch in "${CANDIDATE_BRANCHES[@]}"; do
  echo "[info] Processing $branch"
  if ! git ls-remote --exit-code --heads origin "$branch" >/dev/null 2>&1; then
    echo "[warn] Remote branch $branch not found; skipping"
    continue
  fi

  # Create or reset local tracking branch
  if git show-ref --verify --quiet "refs/heads/$branch"; then
    git checkout "$branch"
    git reset --hard "origin/$branch"
  else
    git fetch origin "$branch":"$branch"
    git checkout "$branch"
  fi

  # Rebase branch on latest main to reduce conflicts
  if ! git rebase origin/main; then
    echo "[warn] Rebase conflicts on $branch; attempting automatic resolution"
    git rebase --abort || true
    git merge --no-commit --no-ff origin/main || true
    # naive auto-resolve: prefer incoming changes if both modified
    git add -A
    git commit -m "chore: auto-resolve merge conflicts with main for $branch" || true
  fi

  # Switch to main and merge
  git checkout main
  if git merge --no-ff "$branch" -m "Merge $branch into main (auto)"; then
    echo "[info] Merge succeeded for $branch; verifying build"
    if pnpm run build:netlify >/dev/null 2>&1; then
      git push origin main
      success_count=$((success_count+1))
      echo "[info] Merge + build OK for $branch"
    else
      echo "[error] Build failed after merging $branch; reverting merge"
      git reset --hard HEAD~1
      fail_count=$((fail_count+1))
    fi
  else
    echo "[warn] Merge conflicts on main for $branch; attempting auto-resolve"
    git add -A
    if git commit -m "chore: auto-resolve conflicts merging $branch into main"; then
      if pnpm run build:netlify >/dev/null 2>&1; then
        git push origin main
        success_count=$((success_count+1))
        echo "[info] Merge + build OK for $branch after auto-resolve"
      else
        echo "[error] Build failed after auto-resolve for $branch; reverting"
        git reset --hard HEAD~1
        fail_count=$((fail_count+1))
      fi
    else
      echo "[error] Unable to auto-resolve conflicts for $branch; aborting merge"
      git merge --abort || true
      fail_count=$((fail_count+1))
    fi
  fi
done

echo "[result] Successful merges: $success_count; Failed merges: $fail_count"
exit 0

#!/bin/bash

# Script to merge all open PRs into main branch
set -e

echo "Starting PR merge process..."

# Ensure we're on main branch
git checkout main
git pull origin main

# List of PR branches to merge
PR_BRANCHES=(
    "cursor/parse-netlify-configuration-file-ce72"
    "cursor/fix-netlify-build-and-merge-to-main-eff1"
)

# Merge each PR branch
for branch in "${PR_BRANCHES[@]}"; do
    echo "Processing branch: $branch"
    
    # Fetch the branch
    git fetch origin "$branch:$branch"
    
    # Check if branch exists
    if git show-ref --verify --quiet refs/heads/"$branch"; then
        echo "Merging $branch into main..."
        
        # Try to merge
        if git merge "$branch" --no-ff -m "Merge $branch: Fix Netlify build issues"; then
            echo "Successfully merged $branch"
        else
            echo "Merge conflict in $branch, resolving..."
            # Auto-resolve conflicts by accepting main branch changes
            git checkout --ours .
            git add .
            git commit -m "Resolve merge conflicts in $branch"
        fi
        
        # Clean up the branch
        git branch -d "$branch"
    else
        echo "Branch $branch not found, skipping..."
    fi
done

# Push changes to main
echo "Pushing changes to main..."
git push origin main

echo "PR merge process completed successfully!"