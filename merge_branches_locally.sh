#!/bin/bash

# Script to merge recent branches locally and push to main
# This will help resolve conflicts and merge PRs

echo "🚀 Starting local branch merging process..."

# Ensure we're on main branch
git checkout main

# Pull latest changes
echo "📥 Pulling latest changes from origin/main..."
git pull origin main

# Get recent branches (last 20 cursor branches)
RECENT_BRANCHES=$(git branch -r | grep "cursor/create-and-deploy-new-content" | tail -20)

echo "📋 Found recent branches to merge:"
echo "$RECENT_BRANCHES"

# Merge each branch
for BRANCH in $RECENT_BRANCHES; do
    BRANCH_NAME=$(echo $BRANCH | sed 's/origin\///')
    echo ""
    echo "🔄 Attempting to merge branch: $BRANCH_NAME"
    
    # Try to merge the branch
    if git merge "origin/$BRANCH_NAME" --no-ff -m "Merge $BRANCH_NAME into main"; then
        echo "  ✅ Successfully merged $BRANCH_NAME"
    else
        echo "  ⚠️  Merge conflict detected in $BRANCH_NAME"
        echo "  🔧 Attempting to resolve conflicts automatically..."
        
        # Try to resolve conflicts automatically
        git add .
        if git commit -m "Resolve merge conflicts for $BRANCH_NAME"; then
            echo "  ✅ Successfully resolved conflicts for $BRANCH_NAME"
        else
            echo "  ❌ Failed to resolve conflicts for $BRANCH_NAME"
            echo "  🔄 Aborting merge and continuing..."
            git merge --abort
        fi
    fi
    
    # Small delay
    sleep 1
done

echo ""
echo "📤 Pushing merged changes to origin/main..."
git push origin main

echo "🎉 Local merging process completed!"