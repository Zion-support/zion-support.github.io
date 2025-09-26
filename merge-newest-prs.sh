#!/bin/bash

# Script to merge the newest cursor PR branches
set -e

echo "Starting merge of newest PR branches..."

# Define the newest PR branches
NEWEST_BRANCHES=(
    "cursor/check-fix-push-and-merge-to-main-033e"
    "cursor/check-fix-push-and-merge-to-main-4d08"
    "cursor/check-fix-push-and-merge-to-main-7882"
    "cursor/check-fix-push-and-merge-to-main-796d"
    "cursor/check-fix-push-and-merge-to-main-8192"
    "cursor/check-fix-push-and-merge-to-main-bc34"
)

# Count total branches
TOTAL_BRANCHES=${#NEWEST_BRANCHES[@]}
echo "Found $TOTAL_BRANCHES newest branches to process"

# Initialize counters
MERGED_COUNT=0
CONFLICT_COUNT=0
ERROR_COUNT=0
SKIPPED_COUNT=0

# Function to merge a single branch
merge_branch() {
    local branch=$1
    echo ""
    echo "Processing branch: $branch"
    
    # Check if branch exists
    if ! git show-ref --verify --quiet "refs/remotes/origin/$branch"; then
        echo "Branch $branch does not exist, skipping..."
        SKIPPED_COUNT=$((SKIPPED_COUNT + 1))
        return 1
    fi
    
    # Check if branch is already merged
    if git merge-base --is-ancestor "origin/$branch" HEAD 2>/dev/null; then
        echo "Branch $branch is already merged, skipping..."
        SKIPPED_COUNT=$((SKIPPED_COUNT + 1))
        return 0
    fi
    
    # Try to merge into main
    if git merge "origin/$branch" --no-edit 2>/dev/null; then
        echo "✓ Successfully merged $branch"
        MERGED_COUNT=$((MERGED_COUNT + 1))
        return 0
    else
        echo "⚠ Merge conflict in $branch"
        CONFLICT_COUNT=$((CONFLICT_COUNT + 1))
        
        # Check for conflicts
        if git status --porcelain | grep -q "^UU\|^AA\|^DD"; then
            echo "Resolving conflicts in $branch..."
            
            # Try to resolve conflicts automatically
            if resolve_conflicts; then
                git add -A
                git commit -m "resolve: merge conflicts in $branch"
                echo "✓ Resolved conflicts and merged $branch"
                MERGED_COUNT=$((MERGED_COUNT + 1))
                CONFLICT_COUNT=$((CONFLICT_COUNT - 1))
            else
                echo "✗ Failed to resolve conflicts in $branch"
                git merge --abort
                ERROR_COUNT=$((ERROR_COUNT + 1))
            fi
        else
            git merge --abort
            ERROR_COUNT=$((ERROR_COUNT + 1))
        fi
        return 1
    fi
}

# Function to resolve conflicts automatically
resolve_conflicts() {
    # Get conflicted files
    local conflicted_files=$(git status --porcelain | grep "^UU\|^AA\|^DD" | cut -c4-)
    
    for file in $conflicted_files; do
        echo "Resolving conflicts in $file"
        
        # For most conflicts, prefer the incoming version (from PR)
        git checkout --theirs "$file"
        git add "$file"
    done
    
    return 0
}

# Process each branch
for branch in "${NEWEST_BRANCHES[@]}"; do
    merge_branch "$branch"
done

# Final summary
echo ""
echo "=== MERGE SUMMARY ==="
echo "Total branches processed: $TOTAL_BRANCHES"
echo "Successfully merged: $MERGED_COUNT"
echo "Conflicts encountered: $CONFLICT_COUNT"
echo "Errors: $ERROR_COUNT"
echo "Skipped: $SKIPPED_COUNT"

# Push the updated main branch
echo ""
echo "Pushing updated main branch..."
git push origin main

echo "Newest PR merge process completed!"