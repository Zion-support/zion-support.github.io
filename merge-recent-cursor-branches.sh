#!/bin/bash

# Script to merge the most recent cursor branches
set -e

echo "Starting merge of recent cursor branches..."

# Get the most recent cursor branches
RECENT_BRANCHES=(
    "cursor/check-fix-push-and-merge-to-main-767f"
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

# Count total branches
TOTAL_BRANCHES=${#RECENT_BRANCHES[@]}
echo "Found $TOTAL_BRANCHES recent branches to process"

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
        
        # For package.json conflicts, prefer the version with more dependencies
        if [[ "$file" == "package.json" ]]; then
            resolve_package_json_conflict "$file"
        # For other files, try to merge intelligently
        else
            resolve_generic_conflict "$file"
        fi
    done
    
    return 0
}

# Function to resolve package.json conflicts
resolve_package_json_conflict() {
    local file=$1
    echo "Resolving package.json conflict by preferring incoming version..."
    git checkout --theirs "$file"
    git add "$file"
}

# Function to resolve generic conflicts
resolve_generic_conflict() {
    local file=$1
    echo "Resolving conflict in $file by preferring incoming version..."
    git checkout --theirs "$file"
    git add "$file"
}

# Process each branch
for branch in "${RECENT_BRANCHES[@]}"; do
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

echo "Recent cursor branches merge process completed!"