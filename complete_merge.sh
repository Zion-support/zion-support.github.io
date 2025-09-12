#!/bin/bash

# Complete the git merge operations
cd /workspace

# Check current status
echo "Current git status:"
git status

# Add all resolved files
echo "Adding all resolved files..."
git add .

# Complete the cherry-pick
echo "Completing cherry-pick..."
git cherry-pick --continue

# Check final status
echo "Final git status:"
git status

# Switch to main branch
echo "Switching to main branch..."
git checkout main

# Merge our improvements
echo "Merging improvements branch..."
git merge clean-merge-with-main

# Push to main
echo "Pushing to main..."
git push origin main

echo "Merge completed successfully!"