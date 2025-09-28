#!/bin/bash
# Simple merge script

# Switch to main branch
git checkout main

# Pull latest changes
git pull origin main

# Merge the first PR branch
git merge origin/cursor/fix-netlify-build-and-merge-to-main-1fc1 --no-edit

# Merge the second PR branch  
git merge origin/cursor/fix-netlify-build-and-merge-to-main-e358 --no-edit

# Merge the third PR branch
git merge origin/cursor/fix-netlify-build-and-merge-to-main-fbf7 --no-edit

# Push all changes
git push origin main

echo "All PRs merged successfully!"