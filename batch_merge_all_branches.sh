#!/bin/bash

# Batch merge script for all cursor/check-fix-push-and-merge-to-main branches
set -e

echo "Starting batch merge of all cursor branches..."

# Get all the branches that need to be merged
BRANCHES=$(git branch -r | grep "cursor/check-fix-push-and-merge-to-main" | sed 's/origin\///' | sort)

# Also include the build branches
BUILD_BRANCHES=$(git branch -r | grep "cursor/build-nextjs-app-with-dependency-install" | sed 's/origin\///')

ALL_BRANCHES="$BRANCHES $BUILD_BRANCHES"

TOTAL_BRANCHES=$(echo "$ALL_BRANCHES" | wc -w)
echo "Total branches to merge: $TOTAL_BRANCHES"

SUCCESS_COUNT=0
FAILED_COUNT=0
FAILED_BRANCHES=()

# Function to resolve conflicts automatically
resolve_conflicts() {
    local branch=$1
    echo "Attempting to resolve conflicts for branch: $branch"
    
    # Try to merge with strategy
    if git merge "origin/$branch" --no-commit --strategy=recursive -X ours 2>/dev/null; then
        echo "Successfully merged $branch using 'ours' strategy"
        git commit -m "Merge $branch into main, auto-resolve by preferring main"
        return 0
    elif git merge "origin/$branch" --no-commit --strategy=recursive -X theirs 2>/dev/null; then
        echo "Successfully merged $branch using 'theirs' strategy"
        git commit -m "Merge $branch into main, auto-resolve by preferring branch"
        return 0
    else
        echo "Failed to auto-merge $branch"
        return 1
    fi
}

# Process each branch
for branch in $ALL_BRANCHES; do
    if [ -z "$branch" ]; then
        continue
    fi
    
    echo ""
    echo "Processing branch: $branch (Progress: $((SUCCESS_COUNT + FAILED_COUNT + 1))/$TOTAL_BRANCHES)"
    
    # Check if branch exists
    if ! git show-ref --verify --quiet "refs/remotes/origin/$branch"; then
        echo "Branch $branch does not exist, skipping..."
        continue
    fi
    
    # Try to merge the branch
    if git merge "origin/$branch" --no-commit 2>/dev/null; then
        echo "Successfully merged $branch (no conflicts)"
        git commit -m "Merge $branch into main"
        SUCCESS_COUNT=$((SUCCESS_COUNT + 1))
    else
        echo "Merge conflicts detected for $branch, attempting to resolve..."
        if resolve_conflicts "$branch"; then
            SUCCESS_COUNT=$((SUCCESS_COUNT + 1))
        else
            echo "Failed to merge $branch"
            FAILED_BRANCHES+=("$branch")
            FAILED_COUNT=$((FAILED_COUNT + 1))
            # Reset to clean state
            git merge --abort 2>/dev/null || git reset --hard HEAD
        fi
    fi
done

echo ""
echo "=========================================="
echo "Batch merge completed!"
echo "Successful merges: $SUCCESS_COUNT"
echo "Failed merges: $FAILED_COUNT"
echo "=========================================="

if [ $FAILED_COUNT -gt 0 ]; then
    echo "Failed branches:"
    for failed_branch in "${FAILED_BRANCHES[@]}"; do
        echo "  - $failed_branch"
    done
fi

echo "Current branch status:"
git status --short