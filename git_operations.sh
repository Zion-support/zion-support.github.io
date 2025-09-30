#!/bin/bash
set -e

echo "Starting git operations..."

# Change to workspace directory
cd /workspace

# Check current status
echo "=== Current Git Status ==="
git status --short

echo "=== Current Branch ==="
git branch --show-current

echo "=== Last Commit ==="
git log --oneline -1

echo "=== Checking for merge conflicts ==="
if git diff --check; then
    echo "No merge conflicts found"
else
    echo "Merge conflicts detected"
fi

echo "=== Attempting to pull latest changes ==="
if git pull origin main --no-rebase; then
    echo "Successfully pulled latest changes"
else
    echo "Pull failed, checking status..."
    git status
fi

echo "=== Attempting to push changes ==="
if git push origin main; then
    echo "Successfully pushed to main"
else
    echo "Push failed, checking status..."
    git status
fi

echo "Git operations completed"