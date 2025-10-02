#!/bin/bash

# Script to continue merging remaining PR branches
set -e

echo "Continuing PR merge process..."

# Ensure we're on main and up to date
git checkout main
git pull origin main

# Remaining branches to merge
branches=(
  "cursor/create-and-deploy-new-content-a02f"
  "cursor/create-and-deploy-new-content-45fb"
  "cursor/create-and-deploy-new-content-53f4"
  "cursor/create-and-deploy-new-content-976a"
  "cursor/create-and-deploy-new-content-3a9a"
  "cursor/create-and-deploy-new-content-4eb2"
  "cursor/create-and-deploy-new-content-84c6"
  "cursor/create-and-deploy-new-content-db31"
  "cursor/create-and-deploy-new-content-0d76"
  "cursor/create-and-deploy-new-content-7a98"
  "cursor/create-and-deploy-new-content-9ba7"
  "cursor/create-and-deploy-new-content-6cb8"
  "cursor/create-and-deploy-new-content-e11b"
  "cursor/create-and-deploy-new-content-6b72"
  "cursor/create-and-deploy-new-content-f136"
  "ai-2027-content-integration"
  "feature/revolutionary-2026-ai-content"
  "ultimate-neural-fusion-content"
)

success_count=0
failed_count=0

for branch in "${branches[@]}"; do
  echo "========================================="
  echo "Processing: $branch"
  echo "========================================="
  
  # Fetch the branch
  if ! git fetch origin "$branch" 2>/dev/null; then
    echo "✗ Could not fetch $branch"
    ((failed_count++))
    continue
  fi
  
  # Try to merge
  if git merge "origin/$branch" --no-edit --strategy-option=theirs -m "Merge $branch" 2>&1; then
    echo "✓ Successfully merged $branch"
    ((success_count++))
  else
    # Try auto-resolve
    echo "Attempting auto-resolution..."
    git checkout --theirs .
    git add .
    
    if git commit --no-edit -m "Merge $branch (auto-resolved)" 2>&1; then
      echo "✓ Auto-resolved $branch"
      ((success_count++))
    else
      echo "✗ Failed to resolve $branch"
      git merge --abort 2>/dev/null || true
      ((failed_count++))
    fi
  fi
  
  # Push after every 5 successful merges
  if [ $((success_count % 5)) -eq 0 ] && [ $success_count -gt 0 ]; then
    echo "Pushing intermediate changes..."
    git push origin main || true
  fi
done

echo "========================================="
echo "Final Summary"
echo "========================================="
echo "✓ Successfully merged: $success_count"
echo "✗ Failed: $failed_count"

echo "Pushing final changes..."
git push origin main

echo "Done!"
