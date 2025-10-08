#!/bin/bash

# Script to merge open PRs
set -e

echo "Starting PR merge process..."

# Define the PR branches from the JSON
PR_BRANCHES=(
  "cursor/fix-errors-and-merge-to-main-8876"
)

# Try to merge each branch
for branch in "${PR_BRANCHES[@]}"; do
  echo "========================================"
  echo "Processing branch: $branch"
  echo "========================================"
  
  # Check if branch exists
  if git show-ref --verify --quiet "refs/remotes/origin/$branch"; then
    echo "✓ Branch exists on origin"
    
    # Try to merge
    echo "Attempting to merge $branch..."
    if git merge "origin/$branch" --no-edit; then
      echo "✓ Successfully merged $branch"
    else
      echo "✗ Merge conflict detected for $branch"
      echo "Checking merge status..."
      git status
      
      # Try to resolve automatically by keeping our version
      echo "Attempting automatic conflict resolution..."
      git checkout --ours .
      git add .
      git commit -m "Merge $branch: resolved conflicts automatically"
    fi
  else
    echo "✗ Branch $branch does not exist on origin"
  fi
  
  echo ""
done

echo "========================================"
echo "PR merge process completed"
echo "======================================"
git log --oneline -5
