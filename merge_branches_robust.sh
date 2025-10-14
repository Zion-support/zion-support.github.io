#!/bin/bash

# Robust script to merge all unmerged branches into main
# This script will resolve conflicts by accepting main branch versions

set -e

echo "Starting to merge all unmerged branches..."

# Get list of unmerged branches (excluding backup and aggressive-merge branches)
UNMERGED_BRANCHES=$(git branch -r --no-merged main | grep -v aggressive-merge | grep -v backup)

# Counter for tracking progress
TOTAL=$(echo "$UNMERGED_BRANCHES" | wc -l)
CURRENT=0
SUCCESS=0
FAILED=0

echo "Found $TOTAL unmerged branches to process"

# Process each branch
for branch in $UNMERGED_BRANCHES; do
    CURRENT=$((CURRENT + 1))
    echo "[$CURRENT/$TOTAL] Processing branch: $branch"
    
    # Reset to clean state
    git reset --hard HEAD
    git clean -fd
    
    # Try to merge the branch
    if git merge "$branch" --no-commit 2>/dev/null; then
        # If merge succeeds without conflicts, commit it
        git commit -m "Merge $branch into main" --no-edit
        SUCCESS=$((SUCCESS + 1))
        echo "✅ Successfully merged $branch"
    else
        # If there are conflicts, resolve them by accepting main branch versions
        echo "⚠️  Conflicts detected in $branch, resolving..."
        
        # Check if we're in a merge state
        if git status --porcelain | grep -q "^UU\|^AA\|^DD\|^AU\|^UA\|^DU\|^UD"; then
            # Resolve conflicts by accepting main branch versions (ours)
            git checkout --ours . 2>/dev/null || true
            git add . 2>/dev/null || true
            
            # Remove any files that were deleted in main but modified in the branch
            git status --porcelain | grep "^DU\|^UD" | cut -c4- | xargs -r git rm 2>/dev/null || true
            
            # Add all changes
            git add . 2>/dev/null || true
            
            # Commit the merge
            git commit -m "Merge $branch into main - resolved conflicts by accepting main branch versions" --no-edit
            SUCCESS=$((SUCCESS + 1))
            echo "✅ Successfully merged $branch (conflicts resolved)"
        else
            # If not in merge state, abort and continue
            git merge --abort 2>/dev/null || true
            FAILED=$((FAILED + 1))
            echo "❌ Failed to merge $branch"
        fi
    fi
    
    # Show progress every 50 branches
    if [ $((CURRENT % 50)) -eq 0 ]; then
        echo "Progress: $CURRENT/$TOTAL (Success: $SUCCESS, Failed: $FAILED)"
    fi
    
    # Push every 100 successful merges
    if [ $((SUCCESS % 100)) -eq 0 ] && [ $SUCCESS -gt 0 ]; then
        echo "Pushing changes to remote..."
        git push origin main
    fi
done

echo "Merge process completed!"
echo "Total branches processed: $TOTAL"
echo "Successfully merged: $SUCCESS"
echo "Failed to merge: $FAILED"

# Push all changes to remote
echo "Pushing final changes to remote..."
git push origin main

echo "All done!"