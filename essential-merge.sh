#!/bin/bash

echo "🚀 Essential Merge Process..."

cd /workspace

# Get current branch
CURRENT_BRANCH=$(git branch --show-current)
echo "Current branch: $CURRENT_BRANCH"

# Add and commit any changes
git add .
git commit -m "fix: Resolve conflicts and prepare merge" || echo "No changes to commit"

# Switch to main
git checkout main || git checkout -b main

# Merge the branch
git merge $CURRENT_BRANCH --no-ff -m "feat: Merge $CURRENT_BRANCH into main" || {
    echo "Resolving conflicts..."
