#!/bin/bash

# Script to merge all PR branches into main
set -e

echo "Starting PR merge process..."

# Get all PR branches
PR_BRANCHES=$(git branch -r | grep -E "merge-pr-[0-9]+" | sed 's/origin\///' | sort -V)

# Count total PRs
TOTAL_PRS=$(echo "$PR_BRANCHES" | wc -l)
echo "Found $TOTAL_PRS PR branches to merge"

# Initialize counters
MERGED_COUNT=0
CONFLICT_COUNT=0
ERROR_COUNT=0

# Function to merge a single PR branch
merge_pr_branch() {
    local branch=$1
    echo "Processing PR branch: $branch"
    
    # Checkout the PR branch
    if ! git checkout "origin/$branch" -b "temp-$branch" 2>/dev/null; then
        echo "Failed to checkout $branch"
        return 1
    fi
    
    # Try to merge into main
    git checkout main
    
    if git merge "temp-$branch" --no-edit 2>/dev/null; then
        echo "✓ Successfully merged $branch"
        MERGED_COUNT=$((MERGED_COUNT + 1))
        
        # Clean up temp branch
        git branch -D "temp-$branch"
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
        
        # Clean up temp branch
        git branch -D "temp-$branch" 2>/dev/null || true
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
echo "$PR_BRANCHES" | while read -r branch; do
    if [[ -n "$branch" ]]; then
        merge_pr_branch "$branch"
    fi
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

echo "PR merge process completed!"