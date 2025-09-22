#!/bin/bash
set -e

echo "=== Git Workflow Script ==="

# Check if we're in a git repository
if [ ! -d ".git" ]; then
    echo "Error: Not in a git repository"
    exit 1
fi

# Get current branch
CURRENT_BRANCH=$(git rev-parse --abbrev-ref HEAD)
echo "Current branch: $CURRENT_BRANCH"

# Check for uncommitted changes
if [ -n "$(git status --porcelain)" ]; then
    echo "Warning: There are uncommitted changes"
    git status --short
    echo "Proceeding anyway..."
fi

# Push current branch
echo "Pushing current branch..."
git push origin "$CURRENT_BRANCH"

# Switch to main
echo "Switching to main branch..."
git checkout main

# Pull latest
echo "Pulling latest changes..."
git pull origin main

# Merge feature branch
echo "Merging $CURRENT_BRANCH into main..."
git merge "$CURRENT_BRANCH"

# Push merged changes
echo "Pushing merged changes..."
git push origin main

echo "=== Workflow completed successfully ==="