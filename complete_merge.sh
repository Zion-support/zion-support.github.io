#!/bin/bash

# Complete the current merge
echo "Completing the current merge..."

# Add all files to staging
git add .

# Complete the merge with the existing message
git commit --no-edit

# Switch to main branch
git checkout main

# Pull latest changes
git pull origin main

# Merge the remaining PR branches
echo "Merging remaining PR branches..."

# Merge PR 23639 branch
git merge origin/cursor/fix-netlify-build-and-merge-to-main-e358 --no-edit

# Merge PR 23635 branch  
git merge origin/cursor/fix-netlify-build-and-merge-to-main-fbf7 --no-edit

# Push all changes to main
git push origin main

echo "✅ All PRs merged successfully into main branch!"