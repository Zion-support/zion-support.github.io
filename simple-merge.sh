#!/bin/bash

# Simple merge script
cd /workspace

echo "Current directory: $(pwd)"
echo "Git status:"
git status

echo "Current branch:"
git branch --show-current

echo "Available branches:"
git branch -a | head -10

echo "Attempting to switch to main..."
git checkout main

echo "Pulling latest changes..."
git pull origin main

echo "Attempting to merge first PR branch..."
git merge origin/cursor/fix-netlify-build-and-merge-to-main-74ad --no-ff -m "Merge PR 12714"

echo "Git status after merge:"
git status

echo "Pushing changes..."
git push origin main

echo "Done!"