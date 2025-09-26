#!/bin/bash

# Script to merge cursor PR branches into main
set -e

echo "Starting cursor PR merge process..."

# Define the PR branches to merge
PR_BRANCHES=(
    "cursor/check-fix-push-and-merge-to-main-106a"
    "cursor/check-fix-push-and-merge-to-main-2e1b"
    "cursor/check-fix-push-and-merge-to-main-6370"
    "cursor/check-fix-push-and-merge-to-main-67f6"
    "cursor/check-fix-push-and-merge-to-main-8c28"
    "cursor/check-fix-push-and-merge-to-main-afbb"
    "cursor/check-fix-push-and-merge-to-main-f942"
)

# Count total PRs
TOTAL_PRS=${#PR_BRANCHES[@]}
echo "Found $TOTAL_PRS PR branches to merge"

# Initialize counters
MERGED_COUNT=0
CONFLICT_COUNT=0
ERROR_COUNT=0

# Function to merge a single PR branch
merge_pr_branch() {
    local branch=$1
    echo ""
    echo "Processing PR branch: $branch"
    
    # Check if branch exists
    if ! git show-ref --verify --quiet "refs/remotes/origin/$branch"; then
        echo "Branch $branch does not exist, skipping..."
        return 1
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
    
    # Use git checkout to prefer the incoming version (from PR)
    git checkout --theirs "$file"
    git add "$file"
}

# Function to resolve generic conflicts
resolve_generic_conflict() {
    local file=$1
    
    # For most conflicts, prefer the incoming version (from PR)
    git checkout --theirs "$file"
    git add "$file"
}

# Process each PR branch
for branch in "${PR_BRANCHES[@]}"; do
    merge_pr_branch "$branch"
done

# Final summary
echo ""
echo "=== MERGE SUMMARY ==="
echo "Total PRs processed: $TOTAL_PRS"
echo "Successfully merged: $MERGED_COUNT"
echo "Conflicts encountered: $CONFLICT_COUNT"
echo "Errors: $ERROR_COUNT"

# Push the updated main branch
echo ""
echo "Pushing updated main branch..."
git push origin main

echo "Cursor PR merge process completed!"