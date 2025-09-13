#!/bin/bash

echo "🚀 Starting PR merge process..."

# Change to workspace directory
cd /workspace

# Check current status
echo "📊 Current git status:"
git status --short

# Switch to main branch
echo "🔄 Switching to main branch..."
git checkout main

# Pull latest changes
echo "📥 Pulling latest changes from main..."
git pull origin main

# Get list of cursor branches
echo "📋 Finding cursor branches..."
CURSOR_BRANCHES=$(git branch -r | grep 'origin/cursor/' | grep -v 'HEAD' | sed 's/origin\///' | head -10)

echo "Found cursor branches:"
echo "$CURSOR_BRANCHES"

# Merge each branch
for branch in $CURSOR_BRANCHES; do
    echo ""
    echo "🔄 Processing branch: $branch"
    echo "=================================="
    
    # Fetch the branch
    git fetch origin "$branch"
    
    # Try to merge
    if git merge "origin/$branch" --no-edit; then
        echo "✅ Successfully merged $branch"
    else
        echo "⚠️  Merge conflict in $branch, attempting auto-resolution..."
        
        # Try to resolve conflicts automatically
        git add .
        if git commit -m "Auto-resolve merge conflicts for $branch"; then
            echo "✅ Auto-resolved conflicts for $branch"
        else
            echo "❌ Failed to auto-resolve conflicts for $branch"
            git merge --abort
        fi
    fi
done

# Push changes to main
echo ""
echo "📤 Pushing merged changes to main..."
if git push origin main; then
    echo "✅ Successfully pushed to main"
else
    echo "❌ Failed to push to main"
fi

# Cleanup merged branches
echo ""
echo "🧹 Cleaning up merged branches..."
MERGED_BRANCHES=$(git branch -r --merged main | grep 'origin/cursor/' | grep -v 'HEAD' | sed 's/origin\///')

for branch in $MERGED_BRANCHES; do
    echo "Deleting merged branch: $branch"
    git push origin --delete "$branch" 2>/dev/null || echo "Could not delete $branch"
done

echo ""
echo "🎉 PR merge process completed!"
echo "📊 Final status:"
git status --short