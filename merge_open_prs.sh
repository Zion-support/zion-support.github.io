#!/bin/bash

#!/bin/bash

set -euo pipefail

echo "Starting systematic PR merge process..."

# Ensure on main and up to date
git checkout main
git pull --rebase

echo "Fetching open PRs from GitHub..."
PR_LIST=$(curl -s "https://api.github.com/repos/Zion-Holdings/zion.app/pulls?state=open&per_page=100" | grep -o '"number":[0-9]*' | grep -o '[0-9]*')

if [ -z "$PR_LIST" ]; then
  echo "No open PRs found. Exiting."
  exit 0
fi

echo "Found PRs: $PR_LIST"

for pr_number in $PR_LIST; do
  echo "---"
  echo "Processing PR #$pr_number"
  pr_json=$(curl -s "https://api.github.com/repos/Zion-Holdings/zion.app/pulls/$pr_number")
  branch_name=$(echo "$pr_json" | grep -o '"head":{[^}]*"ref":"[^"]*"' | grep -o '"ref":"[^"]*"' | cut -d '"' -f4)
  if [ -z "$branch_name" ]; then
    echo "Could not determine branch for PR #$pr_number, skipping."
    continue
  fi
  echo "Branch: $branch_name"

  git fetch origin "$branch_name" || true

  # Attempt a merge
  if git merge --no-ff --no-edit "origin/$branch_name"; then
    echo "Merged PR #$pr_number from $branch_name"
    git push origin main || { echo "Push failed"; exit 1; }
    continue
  fi

  echo "Conflicts detected for PR #$pr_number. Attempting automatic resolution (prefer incoming changes)."
  # Resolve by taking theirs for all conflicted files
  conflicted_files=$(git diff --name-only --diff-filter=U || true)
  if [ -z "$conflicted_files" ]; then
    echo "No conflicted files found after merge failure. Aborting merge."
    git merge --abort || true
    continue
  fi
  for file in $conflicted_files; do
    git checkout --theirs -- "$file" || true
    git add -- "$file"
  done
  if git commit -m "chore: auto-resolve conflicts by preferring PR changes for #$pr_number ($branch_name)"; then
    git push origin main || { echo "Push failed"; exit 1; }
    echo "Auto-resolved and merged PR #$pr_number"
  else
    echo "Auto-resolution failed. Aborting merge for PR #$pr_number"
    git merge --abort || true
  fi
done

echo "All PRs processed."
