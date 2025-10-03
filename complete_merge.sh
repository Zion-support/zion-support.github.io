#!/bin/bash

echo "=== Completing merge to main branch ==="

# Check current branch
echo "Current branch: $(git branch --show-current)"

# Ensure we're on main
git checkout main

# Pull latest changes
echo "Pulling latest main..."
git pull origin main

# Merge our fix branch
echo "Merging fix branch..."
git merge cursor/fix-errors-and-merge-to-main-d49a

# Push to main
echo "Pushing to main..."
git push origin main

echo "=== Merge completed successfully ==="