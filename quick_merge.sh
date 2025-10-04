#!/bin/bash

# Quick merge script for unmerged branches
set -e

echo "Starting quick merge process..."

# Switch to main and update
git checkout main
git pull origin main

# Merge the first branch
echo "Merging cursor/fix-errors-and-merge-to-main-0ce9..."
git merge origin/cursor/fix-errors-and-merge-to-main-0ce9 -X theirs --no-edit

# Merge the second branch  
echo "Merging cursor/fix-errors-and-merge-to-main-3529..."
git merge origin/cursor/fix-errors-and-merge-to-main-3529 -X theirs --no-edit

# Merge the third branch
echo "Merging cursor/fix-errors-and-merge-to-main-9056..."
git merge origin/cursor/fix-errors-and-merge-to-main-9056 -X theirs --no-edit

# Push changes
echo "Pushing to remote..."
git push origin main

echo "All merges completed successfully!"