#!/bin/bash

# Script to merge all cursor branches into main
set -e

echo "Starting comprehensive merge of all cursor branches..."

# Get all cursor branches
CURSOR_BRANCHES=(
    "cursor/fix-errors-and-merge-to-main-100d"
    "cursor/fix-errors-and-merge-to-main-156b"
    "cursor/fix-errors-and-merge-to-main-2f1b"
    "cursor/fix-errors-and-merge-to-main-366c"
    "cursor/fix-errors-and-merge-to-main-43dd"
    "cursor/fix-errors-and-merge-to-main-4800"
    "cursor/fix-errors-and-merge-to-main-494d"
    "cursor/fix-errors-and-merge-to-main-4c51"
    "cursor/fix-errors-and-merge-to-main-5696"
    "cursor/fix-errors-and-merge-to-main-6548"
    "cursor/fix-errors-and-merge-to-main-6ee3"
    "cursor/fix-errors-and-merge-to-main-7318"
    "cursor/fix-errors-and-merge-to-main-887e"
    "cursor/fix-errors-and-merge-to-main-97a6"
    "cursor/fix-errors-and-merge-to-main-9bdd"
    "cursor/fix-errors-and-merge-to-main-9caa"
    "cursor/fix-errors-and-merge-to-main-9f74"
    "cursor/fix-errors-and-merge-to-main-a0d2"
    "cursor/fix-errors-and-merge-to-main-b8f9"
    "cursor/fix-errors-and-merge-to-main-cefe"
    "cursor/fix-errors-and-merge-to-main-d0f7"
    "cursor/fix-errors-and-merge-to-main-dc65"
    "cursor/fix-errors-and-merge-to-main-f4fa"
    "cursor/fix-errors-and-merge-to-main-fbf8"
    "cursor/fix-errors-and-merge-to-main-fcbc"
)

# Ensure we're on main and it's up to date
git checkout main
git pull origin main

SUCCESSFUL_MERGES=()
FAILED_MERGES=()

for branch in "${CURSOR_BRANCHES[@]}"; do
    echo "Processing branch: $branch"
    
    # Check if branch exists
    if ! git show-ref --verify --quiet refs/remotes/origin/$branch; then
        echo "Branch $branch does not exist, skipping..."
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