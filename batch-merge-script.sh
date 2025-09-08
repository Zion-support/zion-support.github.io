#!/bin/bash

# Batch merge script for large repository
echo "Starting batch merge process..."

# Get current branch
CURRENT_BRANCH=$(git branch --show-current)
echo "Current branch: $CURRENT_BRANCH"

# Switch to main
git checkout main
if [ $? -ne 0 ]; then
    echo "Failed to switch to main branch"
    exit 1
fi

# Get list of recent branches (last 24 hours)
echo "Getting recent branches..."
RECENT_BRANCHES=$(git for-each-ref --sort=-committerdate refs/remotes/origin --format='%(committerdate:short) %(refname:short)' | head -20 | awk '{print $2}')

echo "Found recent branches:"
echo "$RECENT_BRANCHES"

# Process each branch
for branch in $RECENT_BRANCHES; do
    # Skip main and HEAD
    if [[ "$branch" == "origin/main" || "$branch" == "origin/HEAD" ]]; then
        continue
    fi
    
    echo "Processing branch: $branch"
    
    # Extract branch name without origin/
    BRANCH_NAME=${branch#origin/}
    
    # Create local branch
    git checkout -b "$BRANCH_NAME" "$branch" 2>/dev/null
    if [ $? -ne 0 ]; then
        echo "Failed to checkout $branch, skipping..."
        continue
    fi
    
    # Try to merge with main
    echo "Attempting to merge $BRANCH_NAME with main..."
    git merge main --no-edit 2>/dev/null
    if [ $? -eq 0 ]; then
        echo "✅ Successfully merged $BRANCH_NAME"
        # Push the merged branch
        git push origin "$BRANCH_NAME" 2>/dev/null
    else
        echo "❌ Merge conflict in $BRANCH_NAME, skipping..."
        # Abort merge
        git merge --abort 2>/dev/null
    fi
    
    # Switch back to main
    git checkout main
done

echo "Batch merge process completed!"