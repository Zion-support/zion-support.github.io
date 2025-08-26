#!/bin/bash

# Fifth batch of branches to merge
# This will attempt to merge more branches into main

set -e

echo "Starting fifth batch of branch merges..."

# List of branches to attempt to merge (fifth batch)
BRANCHES=(
    "origin/cursor/update-content-and-fix-links-6657"
    "origin/cursor/update-content-and-fix-links-6677"
    "origin/cursor/update-content-and-fix-links-66cf"
    "origin/cursor/update-content-and-fix-links-6ccb"
    "origin/cursor/update-content-and-fix-links-6e1b"
    "origin/cursor/update-content-and-fix-links-7079"
    "origin/cursor/update-content-and-fix-links-70b7"
    "origin/cursor/update-content-and-fix-links-7222"
    "origin/cursor/update-content-and-fix-links-76d1"
    "origin/cursor/update-content-and-fix-links-79fc"
)

SUCCESSFUL_MERGES=()
FAILED_MERGES=()

for branch in "${BRANCHES[@]}"; do
    echo "Attempting to merge $branch..."
    
    # Check if branch exists and has commits
    if ! git rev-parse --verify "$branch" >/dev/null 2>&1; then
        echo "Branch $branch does not exist, skipping..."
        continue
    fi
    
    # Check if branch is already merged
    if git branch --merged main | grep -q "$(basename "$branch")"; then
        echo "Branch $branch is already merged, skipping..."
        continue
    fi
    
    # Attempt to merge
    if git merge "$branch" --no-commit --no-ff; then
        echo "Successfully merged $branch"
        git commit -m "Merge $branch into main"
        SUCCESSFUL_MERGES+=("$branch")
    else
        echo "Merge conflict in $branch, attempting to resolve..."
        
        # Check for conflicts
        if git status --porcelain | grep -q "^UU"; then
            echo "Resolving conflicts in $branch..."
            
            # Try to resolve conflicts automatically by accepting incoming changes
            git checkout --theirs .
            git add .
            
            if git commit -m "Merge $branch into main (resolved conflicts)"; then
                echo "Successfully resolved conflicts and merged $branch"
                SUCCESSFUL_MERGES+=("$branch")
            else
                echo "Failed to resolve conflicts in $branch, aborting..."
                git merge --abort
                FAILED_MERGES+=("$branch")
            fi
        else
            echo "No conflicts found, committing merge..."
            git add .
            if git commit -m "Merge $branch into main"; then
                echo "Successfully merged $branch"
                SUCCESSFUL_MERGES+=("$branch")
            else
                echo "Failed to commit merge for $branch"
                git merge --abort
                FAILED_MERGES+=("$branch")
            fi
        fi
    fi
    
    echo "Current status:"
    git status --short
    echo "---"
done

echo "Fifth batch merge process completed!"
echo "Successful merges: ${#SUCCESSFUL_MERGES[@]}"
echo "Failed merges: ${#FAILED_MERGES[@]}"

if [ ${#SUCCESSFUL_MERGES[@]} -gt 0 ]; then
    echo "Successfully merged branches:"
    for branch in "${SUCCESSFUL_MERGES[@]}"; do
        echo "  - $branch"
    done
fi

if [ ${#FAILED_MERGES[@]} -gt 0 ]; then
    echo "Failed to merge branches:"
    for branch in "${FAILED_MERGES[@]}"; do
        echo "  - $branch"
    done
fi

# Push changes if any merges were successful
if [ ${#SUCCESSFUL_MERGES[@]} -gt 0 ]; then
    echo "Pushing merged changes to origin/main..."
    git push origin main
fi