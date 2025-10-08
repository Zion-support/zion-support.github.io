#!/bin/bash

# Auto-merge script for cursor branches
# This script will merge branches and resolve conflicts automatically

echo "Starting auto-merge of cursor branches..."

# Get list of unmerged cursor branches
branches=$(git branch -r --no-merged main | grep "cursor/fix-errors-and-merge-to-main" | head -10)

success_count=0
conflict_count=0
total_count=0

for branch in $branches; do
    total_count=$((total_count + 1))
    echo "Processing $branch ($total_count/10)..."
    
    # Try to merge the branch
    if git merge "$branch" --no-commit 2>/dev/null; then
        # If merge succeeds without conflicts, commit it
        git commit -m "Auto-merge $branch" --no-edit
        success_count=$((success_count + 1))
        echo "✓ Successfully merged $branch"
    else
        # If there are conflicts, try to resolve them automatically
        echo "Conflicts detected in $branch, attempting auto-resolution..."
        
        # Check if there are unmerged files
        if git status --porcelain | grep -q "^UU"; then
            # Try to resolve conflicts by accepting the incoming changes
            git checkout --theirs $(git status --porcelain | grep "^UU" | cut -c4-)
            git add .
            
            if git commit -m "Auto-resolve conflicts in $branch" --no-edit 2>/dev/null; then
                success_count=$((success_count + 1))
                echo "✓ Successfully resolved conflicts and merged $branch"
            else
                # If we still can't commit, abort the merge
                git merge --abort
                conflict_count=$((conflict_count + 1))
                echo "✗ Failed to resolve conflicts in $branch"
            fi
        else
            # No conflicts, commit the merge
            git commit -m "Auto-merge $branch" --no-edit
            success_count=$((success_count + 1))
            echo "✓ Successfully merged $branch"
        fi
    fi
done

echo ""
echo "Auto-merge completed!"
echo "Successfully merged: $success_count"
echo "Failed due to conflicts: $conflict_count"
echo "Total processed: $total_count"