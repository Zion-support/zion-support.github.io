#!/bin/bash

# Script to merge all open PRs into main branch
# This script will attempt to merge branches systematically

echo "Starting comprehensive PR merge process..."

# Get list of all remote branches
echo "Fetching all remote branches..."
git fetch --all

# Get list of cursor branches that need to be merged
CURSOR_BRANCHES=$(git branch -r | grep "origin/cursor/" | grep -v "HEAD" | head -50)

echo "Found cursor branches to process:"
echo "$CURSOR_BRANCHES"

# Counter for tracking progress
COUNT=0
SUCCESS_COUNT=0
FAILED_COUNT=0

# Process each branch
for branch in $CURSOR_BRANCHES; do
    COUNT=$((COUNT + 1))
    echo ""
    echo "Processing branch $COUNT: $branch"
    
    # Extract branch name without origin/
    branch_name=${branch#origin/}
    
    # Try to merge the branch
    echo "Attempting to merge $branch_name into main..."
    
    # Checkout the branch first
    git checkout -b "$branch_name" "$branch" 2>/dev/null || {
        echo "Failed to checkout $branch_name, skipping..."
        FAILED_COUNT=$((FAILED_COUNT + 1))
        continue
    }
    
    # Try to merge into main
    git checkout main
    if git merge "$branch_name" --no-edit 2>/dev/null; then
        echo "✅ Successfully merged $branch_name"
        SUCCESS_COUNT=$((SUCCESS_COUNT + 1))
        
        # Delete the local branch
        git branch -D "$branch_name" 2>/dev/null
        
        # Push changes to main
        git push origin main 2>/dev/null || echo "Warning: Failed to push changes for $branch_name"
    else
        echo "❌ Failed to merge $branch_name (conflicts or errors)"
        FAILED_COUNT=$((FAILED_COUNT + 1))
        
        # Abort the merge
        git merge --abort 2>/dev/null
        
        # Delete the local branch
        git branch -D "$branch_name" 2>/dev/null
        
        # Reset to clean state
        git reset --hard HEAD 2>/dev/null
    fi
    
    # Limit to prevent infinite loops
    if [ $COUNT -ge 50 ]; then
        echo "Reached limit of 20 branches processed. Stopping."
        break
    fi
done

echo ""
echo "Merge process completed!"
echo "Successfully merged: $SUCCESS_COUNT branches"
echo "Failed to merge: $FAILED_COUNT branches"
echo "Total processed: $COUNT branches"

# Final push to ensure all changes are synced
echo "Pushing final changes to main..."
git push origin main

echo "Script completed successfully!"