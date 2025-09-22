#!/bin/bash

# Git merge script to resolve conflicts and merge PRs
set -e

echo "Starting git merge process..."

# Check current branch
echo "Current branch:"
git branch --show-current

# Check git status
echo "Git status:"
git status --porcelain

# Switch to main branch
echo "Switching to main branch..."
git checkout main

# Pull latest changes
echo "Pulling latest changes from main..."
git pull origin main

# Merge the fix branch
echo "Merging fix branch..."
git merge cursor/fix-netlify-build-and-merge-to-main-d1e7 --no-ff -m "Merge Netlify build fixes into main"

# Push to main
echo "Pushing to main..."
git push origin main

echo "Merge completed successfully!"