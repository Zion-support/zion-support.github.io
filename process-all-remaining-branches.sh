#!/bin/bash

# Comprehensive script to process all remaining branches

set -e

echo "Starting comprehensive processing of all remaining branches..."

# Get all remote branches that start with cursor/
ALL_BRANCHES=$(git branch -r | grep "origin/cursor/" | sed 's/origin\///' | head -100)

# Ensure we're on main and up to date
git checkout main
git pull origin main

# Counters
SUCCESS_COUNT=0
CONFLICT_COUNT=0
SKIP_COUNT=0
TOTAL_PROCESSED=0

echo "Found $(echo "$ALL_BRANCHES" | wc -l) branches to process"

for branch in $ALL_BRANCHES; do
    TOTAL_PROCESSED=$((TOTAL_PROCESSED + 1))
    echo "Processing branch $TOTAL_PROCESSED: $branch"
    
    # Check if branch exists remotely
    if ! git ls-remote --heads origin "$branch" | grep -q "$branch"; then
        echo "Branch $branch doesn't exist remotely, skipping..."
        SKIP_COUNT=$((SKIP_COUNT + 1))
        continue
    fi
    
    # Create local branch tracking remote
    git checkout -b "$branch" "origin/$branch"
    
    # Try to merge with main
    if git merge main --no-edit; then
        echo "Successfully merged $branch with main"
        
        # Push the merged branch
        if git push origin "$branch"; then
            echo "Successfully pushed merged $branch"
            SUCCESS_COUNT=$((SUCCESS_COUNT + 1))
        else
            echo "Failed to push $branch"
            CONFLICT_COUNT=$((CONFLICT_COUNT + 1))
        fi
    else
        echo "Merge conflict in $branch, resolving..."
        
        # Check for merge conflicts
        if git status --porcelain | grep -q "^UU"; then
            echo "Resolving conflicts in $branch..."
            
            # List conflicted files
            echo "Conflicted files:"
            git status --porcelain | grep "^UU" | while read -r line; do
                file_path=$(echo "$line" | cut -c4-)
                echo "  - $file_path"
            done
            
            # For now, just abort the merge and continue
            git merge --abort
            echo "Aborted merge for $branch due to conflicts"
            CONFLICT_COUNT=$((CONFLICT_COUNT + 1))
        fi
    fi
    
    # Go back to main for next iteration
    git checkout main
    
    # Clean up local branch
    git branch -D "$branch" 2>/dev/null || true
    
    echo "Completed processing $branch"
    echo "Progress: $TOTAL_PROCESSED processed, $SUCCESS_COUNT successful, $CONFLICT_COUNT conflicts, $SKIP_COUNT skipped"
    echo "----------------------------------------"
    
    # Optional: Add a small delay to avoid overwhelming the system
    sleep 1
done

echo "=== FINAL SUMMARY ==="
echo "Total branches processed: $TOTAL_PROCESSED"
echo "Successfully merged: $SUCCESS_COUNT"
echo "Failed due to conflicts: $CONFLICT_COUNT"
echo "Skipped: $SKIP_COUNT"
echo "Success rate: $((SUCCESS_COUNT * 100 / TOTAL_PROCESSED))%"
echo "Completed processing all branches!"