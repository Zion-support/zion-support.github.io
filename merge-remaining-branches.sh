#!/bin/bash

# Script to merge remaining cursor branches
set -e

echo "Starting merge of remaining cursor branches..."

# Get the remaining branches
REMAINING_BRANCHES=(
    "cursor/check-fix-push-and-merge-to-main-1872"
    "cursor/check-fix-push-and-merge-to-main-0c70"
    "cursor/check-fix-push-and-merge-to-main-bd4c"
    "cursor/check-fix-push-and-merge-to-main-3216"
    "cursor/check-fix-push-and-merge-to-main-47a3"
    "cursor/check-fix-push-and-merge-to-main-78f2"
    "cursor/check-fix-push-and-merge-to-main-d6f5"
    "cursor/check-fix-push-and-merge-to-main-d80d"
    "cursor/check-fix-push-and-merge-to-main-0efc"
)

# Initialize counters
MERGED_COUNT=0
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
        echo "⚠ Merge conflict in $branch, resolving automatically..."
        
        # Resolve conflicts automatically by preferring incoming version
        local conflicted_files=$(git status --porcelain | grep "^UU\|^AA\|^DD" | cut -c4-)
        
        for file in $conflicted_files; do
            echo "Resolving conflicts in $file"
            git checkout --theirs "$file" 2>/dev/null || true
            git add "$file" 2>/dev/null || true
        done
        
        # Add all files and commit
        git add -A
        git commit -m "resolve: merge conflicts in $branch" 2>/dev/null
        
        if [ $? -eq 0 ]; then
            echo "✓ Resolved conflicts and merged $branch"
            MERGED_COUNT=$((MERGED_COUNT + 1))
        else
            echo "✗ Failed to resolve conflicts in $branch"
            git merge --abort 2>/dev/null || true
            ERROR_COUNT=$((ERROR_COUNT + 1))
        fi
        return 1
    fi
}

# Process each branch
for branch in "${REMAINING_BRANCHES[@]}"; do
    merge_branch "$branch"
done

# Final summary
echo ""
echo "=== MERGE SUMMARY ==="
echo "Successfully merged: $MERGED_COUNT"
echo "Errors: $ERROR_COUNT"
echo "Skipped: $SKIPPED_COUNT"

# Push the updated main branch
echo ""
echo "Pushing updated main branch..."
git push origin main

echo "Remaining cursor branches merge process completed!"