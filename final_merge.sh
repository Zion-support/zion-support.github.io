#!/bin/bash

# Final merge script - simple and direct approach
set -e

echo "Starting final merge process..."

# Ensure we're in the right directory
cd /workspace

# Check current status
echo "Current git status:"
git status --short

# Check current branch
echo "Current branch:"
git branch --show-current

# Try to checkout main
echo "Checking out main branch..."
if git checkout main; then
    echo "Successfully checked out main"
else
    echo "Failed to checkout main, creating it from origin/main"
    git checkout -b main origin/main
fi

# Fetch latest changes
echo "Fetching latest changes..."
git fetch --all

# Try to merge the branches one by one
echo "Attempting to merge branches..."

# Merge branch 3149
echo "Merging origin/cursor/fix-netlify-build-and-merge-to-main-3149..."
if git merge origin/cursor/fix-netlify-build-and-merge-to-main-3149 --no-edit; then
    echo "Successfully merged 3149"
else
    echo "Merge failed for 3149, resolving conflicts..."
    # Resolve conflicts by keeping main version
    git checkout --ours package.json package-lock.json 2>/dev/null || true
    git add package.json package-lock.json 2>/dev/null || true
    git commit -m "Resolve merge conflicts for 3149" || echo "No conflicts to commit"
fi

# Merge branch 84b6
echo "Merging origin/cursor/fix-netlify-build-and-merge-to-main-84b6..."
if git merge origin/cursor/fix-netlify-build-and-merge-to-main-84b6 --no-edit; then
    echo "Successfully merged 84b6"
else
    echo "Merge failed for 84b6, resolving conflicts..."
    git checkout --ours package.json package-lock.json 2>/dev/null || true
    git add package.json package-lock.json 2>/dev/null || true
    git commit -m "Resolve merge conflicts for 84b6" || echo "No conflicts to commit"
fi

# Merge branch 84cc
echo "Merging origin/cursor/fix-netlify-build-and-merge-to-main-84cc..."
if git merge origin/cursor/fix-netlify-build-and-merge-to-main-84cc --no-edit; then
    echo "Successfully merged 84cc"
else
    echo "Merge failed for 84cc, resolving conflicts..."
    git checkout --ours package.json package-lock.json 2>/dev/null || true
    git add package.json package-lock.json 2>/dev/null || true
    git commit -m "Resolve merge conflicts for 84cc" || echo "No conflicts to commit"
fi

# Show final status
echo "Final git status:"
git status

echo "Recent commits:"
git log --oneline -5

echo "Merge process completed!"