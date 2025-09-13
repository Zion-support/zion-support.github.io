#!/bin/bash

# Simple Merge Resolver Script
echo "🚀 Starting simple merge resolution process..."

# Switch to main branch and pull latest
git checkout main
git pull origin main

# Get all cursor branches
echo "📋 Getting cursor branches..."
git fetch origin

# Get list of cursor branches
CURSOR_BRANCHES=$(git branch -r | grep "origin/cursor/" | head -10)

echo "Found branches to merge:"
echo "$CURSOR_BRANCHES"

# Process each branch
for branch in $CURSOR_BRANCHES; do
    clean_branch=$(echo $branch | sed 's/origin\///')
    echo "🔄 Attempting to merge: $clean_branch"
    
    # Try to merge
    if git merge "$branch" --no-edit; then
        echo "✅ Successfully merged $clean_branch"
    else
        echo "⚠️  Conflict in $clean_branch, resolving..."
        # Auto-resolve by taking our version
        git checkout --ours .
        git add .
        git commit --no-edit
        echo "✅ Resolved conflicts for $clean_branch"
    fi
done

# Push changes
echo "📤 Pushing changes..."
git push origin main

echo "🎉 Merge process completed!"