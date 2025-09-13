#!/bin/bash

# Quick Merge Resolution Script
# This script will quickly resolve merge conflicts and merge PRs

set -e

echo "🚀 Quick Merge Resolution Starting..."

# Step 1: Check current status
echo "📊 Checking current status..."
git status --porcelain

# Step 2: Fetch latest changes
echo "📥 Fetching latest changes..."
git fetch origin

# Step 3: Update main branch
echo "🔄 Updating main branch..."
git checkout main
git pull origin main

# Step 4: Get PR branches
echo "🔍 Finding PR branches..."
pr_branches=$(git branch -r | grep -E "(pull|pr|feature|bugfix|cursor)" | sed 's/origin\///' | tr -d ' ')

if [ -z "$pr_branches" ]; then
    echo "ℹ️  No PR branches found"
    exit 0
fi

echo "📋 Found PR branches: $pr_branches"

# Step 5: Process each PR
for branch in $pr_branches; do
    echo "🔄 Processing branch: $branch"
    
    # Checkout the branch
    git checkout "$branch" 2>/dev/null || continue
    
    # Try to merge main
    if git merge main --no-commit 2>/dev/null; then
        echo "✅ No conflicts for $branch"
        git commit -m "Merge main into $branch"
    else
        echo "⚠️  Conflicts in $branch, resolving..."
        
        # Auto-resolve conflicts
        git checkout --ours . 2>/dev/null || true
        git add .
        git commit -m "Auto-resolve conflicts in $branch"
    fi
    
    # Merge into main
    git checkout main
    if git merge "$branch" --no-ff -m "Merge $branch into main"; then
        echo "✅ Merged $branch into main"
        git push origin main
        git branch -d "$branch" 2>/dev/null || true
        git push origin --delete "$branch" 2>/dev/null || true
    else
        echo "❌ Failed to merge $branch"
    fi
done

echo "🎉 Merge process completed!"