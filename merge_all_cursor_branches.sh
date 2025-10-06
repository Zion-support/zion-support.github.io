#!/bin/bash

# Script to merge all cursor branches into main
set -e

echo "Starting to merge all cursor branches..."

# Get all cursor branches
CURSOR_BRANCHES=$(git branch -r | grep "cursor/fix-errors-and-merge-to-main-" | sed 's/origin\///')

# Switch to main branch
git checkout main

# Counter for successful merges
SUCCESS_COUNT=0
TOTAL_COUNT=0

for branch in $CURSOR_BRANCHES; do
    TOTAL_COUNT=$((TOTAL_COUNT + 1))
    echo "Processing branch: $branch"
    
    # Checkout the branch
    git checkout "$branch" 2>/dev/null || {
        echo "Failed to checkout $branch, skipping..."
        continue
    }
    
    # Try to merge main into the branch
    if git merge main --no-edit 2>/dev/null; then
        echo "Successfully merged main into $branch"
        
        # Run health check
        if pnpm run health-check >/dev/null 2>&1; then
            echo "Health check passed for $branch"
            
            # Switch back to main and merge
            git checkout main
            if git merge "$branch" --no-edit 2>/dev/null; then
                echo "Successfully merged $branch into main"
                SUCCESS_COUNT=$((SUCCESS_COUNT + 1))
            else
                echo "Failed to merge $branch into main"
            fi
        else
            echo "Health check failed for $branch, reverting merge"
            git merge --abort 2>/dev/null || true
        fi
    else
        echo "Failed to merge main into $branch (conflicts or other issues)"
        git merge --abort 2>/dev/null || true
    fi
    
    echo "---"
done

echo "Merge process completed!"
echo "Successfully merged: $SUCCESS_COUNT out of $TOTAL_COUNT branches"

# Push changes to remote
echo "Pushing changes to remote..."
git push origin main

echo "All done!"