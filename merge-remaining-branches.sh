#!/bin/bash

# Script to merge all remaining cursor branches into main
set -e

echo "Starting comprehensive merge of remaining cursor branches..."

# Get all cursor branches that haven't been merged yet
CURSOR_BRANCHES=($(git branch -r | grep "cursor/fix-errors-and-merge-to-main-" | sed 's/origin\///' | head -50))

echo "Found ${#CURSOR_BRANCHES[@]} cursor branches to process"

# Ensure we're on main and it's up to date
git checkout main
git pull origin main

SUCCESSFUL_MERGES=()
FAILED_MERGES=()

for branch in "${CURSOR_BRANCHES[@]}"; do
    echo "Processing branch: $branch"
    
    # Check if branch exists locally
    if ! git show-ref --verify --quiet refs/remotes/origin/$branch; then
        echo "Branch $branch does not exist, skipping..."
        continue
    fi
    
    # Check if branch is already merged
    if git merge-base --is-ancestor origin/$branch main 2>/dev/null; then
        echo "Branch $branch is already merged, skipping..."
        continue
    fi
    
    # Checkout the branch
    git checkout $branch 2>/dev/null || {
        echo "Failed to checkout $branch, skipping..."
        FAILED_MERGES+=("$branch")
        continue
    }
    
    # Try to merge main into the branch
    if git merge main --no-commit; then
        echo "Successfully merged main into $branch"
        git commit -m "Merge main into $branch" || true
        git push origin $branch || echo "Failed to push $branch"
        
        # Now merge the branch into main
        git checkout main
        if git merge $branch --no-commit; then
            echo "Successfully merged $branch into main"
            git commit -m "Merge $branch into main" || true
            git push origin main || echo "Failed to push main"
            SUCCESSFUL_MERGES+=("$branch")
        else
            echo "Failed to merge $branch into main"
            git merge --abort || true
            FAILED_MERGES+=("$branch")
        fi
    else
        echo "Failed to merge main into $branch, skipping..."
        git merge --abort || true
        FAILED_MERGES+=("$branch")
    fi
    
    echo "Completed processing $branch"
    echo "---"
done

echo "Merge Summary:"
echo "Successful merges: ${#SUCCESSFUL_MERGES[@]}"
for branch in "${SUCCESSFUL_MERGES[@]}"; do
    echo "  ✓ $branch"
done

echo "Failed merges: ${#FAILED_MERGES[@]}"
for branch in "${FAILED_MERGES[@]}"; do
    echo "  ✗ $branch"
done

echo "Merge process completed!"