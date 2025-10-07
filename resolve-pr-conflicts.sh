#!/bin/bash

# Resolve conflicts and update PR branches
# This script resolves conflicts for all open PRs

set -e

TOKEN="ghs_AQKreA8RlgGQCNY8DMu0QdzvhW17kR0R1Mxm"
REPO="Zion-Holdings/zion.app"

# Array of PR numbers and their branches
declare -a PRS=(
  "25821:cursor/fix-errors-and-merge-to-main-8876"
  "25822:cursor/fix-errors-and-merge-to-main-a502"
  "25823:cursor/fix-errors-and-merge-to-main-bf21"
  "25824:cursor/fix-errors-and-merge-to-main-ffbe"
)

echo "Starting PR conflict resolution..."

# Ensure we're on main and up to date
git checkout main
git pull origin main

for pr_info in "${PRS[@]}"; do
  IFS=':' read -r pr_num branch <<< "$pr_info"
  
  echo "========================================="
  echo "Processing PR #$pr_num ($branch)"
  echo "========================================="
  
  # Fetch the branch
  git fetch origin "$branch"
  
  # Create a temporary branch for conflict resolution
  temp_branch="temp-resolve-$pr_num"
  git checkout -b "$temp_branch" "origin/$branch"
  
  # Attempt to merge main into the branch
  if git merge origin/main --no-edit; then
    echo "No conflicts for PR #$pr_num"
    git checkout main
    git branch -D "$temp_branch"
    continue
  fi
  
  echo "Resolving conflicts for PR #$pr_num..."
  
  # Resolve conflicts programmatically
  # For healthCheck.ts
  if [ -f "app/utils/healthCheck.ts" ]; then
    # Use HEAD version (template literals)
    git checkout --ours app/utils/healthCheck.ts
    git add app/utils/healthCheck.ts
  fi
  
  # For performanceUtils.ts
  if [ -f "app/utils/performanceUtils.ts" ]; then
    # Use HEAD version (more type-safe)
    git checkout --ours app/utils/performanceUtils.ts
    git add app/utils/performanceUtils.ts
  fi
  
  # For testUtils.ts
  if [ -f "app/utils/testUtils.ts" ]; then
    # Use HEAD version
    git checkout --ours app/utils/testUtils.ts
    git add app/utils/testUtils.ts
  fi
  
  # For monitoring.ts
  if [ -f "src/monitoring.ts" ]; then
    # Use HEAD version (template literals)
    git checkout --ours src/monitoring.ts
    git add src/monitoring.ts
  fi
  
  # Commit the merge
  git commit -m "Resolve merge conflicts with main"
  
  # Push to the original branch
  echo "Pushing resolved conflicts to $branch..."
  git push origin "HEAD:$branch"
  
  # Clean up
  git checkout main
  git branch -D "$temp_branch"
  
  echo "✓ PR #$pr_num conflicts resolved and pushed"
  echo ""
done

echo "========================================="
echo "All PR conflicts resolved!"
echo "PRs are now ready to be merged."
echo "========================================="
