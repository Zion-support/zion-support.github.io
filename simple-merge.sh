#!/bin/bash

# Simple merge script to handle the current situation
cd /workspace

# Try to switch to main
git checkout main || echo "Could not checkout main"

# Try to pull latest changes
git pull origin main || echo "Could not pull main"

# Try to merge the current branch
git merge cursor/fix-netlify-build-and-merge-to-main-bd25 || echo "Merge failed"

# Try to push changes
git push origin main || echo "Could not push to main"

echo "Merge attempt completed"