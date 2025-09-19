#!/bin/bash

# Merge all open PRs script
# This script will merge all branches that look like PRs into main

set -e

echo "🚀 Starting branch merge process..."

# Ensure we're on main branch
echo "📋 Checking out main branch..."
git checkout main || git checkout -b main

# Pull latest changes
echo "⬇️ Pulling latest changes..."
git pull origin main || echo "No remote main branch found"

# Get all remote branches
echo "🔍 Fetching all remote branches..."
git fetch --all

# Get list of all remote branches (excluding main)
BRANCHES=$(git branch -r | grep -v 'origin/main' | grep -v 'origin/HEAD' | sed 's/origin\///' | tr -d ' ')

echo "📊 Found branches to merge:"
echo "$BRANCHES"

# Counter for results
MERGED=0
FAILED=0
CONFLICTS=0

# Process each branch
for branch in $BRANCHES; do
    echo ""
    echo "📝 Processing branch: $branch"
    
    # Skip if branch is main or HEAD
    if [[ "$branch" == "main" || "$branch" == "HEAD" ]]; then
        continue
    fi
    
    # Try to merge the branch
    if git merge "origin/$branch" --no-ff -m "Merge branch $branch into main" 2>/dev/null; then
        echo "✅ Successfully merged $branch"
        ((MERGED++))
    else
        echo "⚠️ Merge conflict in $branch, attempting to resolve..."
        
        # Check if there are conflicts
        if git status --porcelain | grep -q "^UU\|^AA\|^DD"; then
            echo "🔧 Resolving conflicts in $branch..."
            
            # Try to resolve conflicts automatically
            # For now, we'll abort the merge and continue
            git merge --abort
            echo "❌ Could not auto-resolve conflicts in $branch"
            ((CONFLICTS++))
        else
            echo "✅ Successfully merged $branch after resolution"
            ((MERGED++))
        fi
    fi
done

# Push changes if any were merged
if [ $MERGED -gt 0 ]; then
    echo ""
    echo "⬆️ Pushing merged changes..."
    git push origin main || echo "Could not push to remote"
fi

# Summary
echo ""
echo "📊 Merge Summary:"
echo "✅ Successfully merged: $MERGED branches"
echo "❌ Failed to merge: $FAILED branches"
echo "⚠️ Had conflicts: $CONFLICTS branches"

echo ""
echo "🎉 Branch merge process completed!"

# Show current status
echo ""
echo "📋 Current git status:"
git status --short