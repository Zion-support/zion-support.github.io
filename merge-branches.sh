#!/bin/bash

# Script to systematically merge branches and resolve conflicts
# This will attempt to merge multiple branches into main

set -e

echo "Starting systematic branch merge process..."

# List of branches to attempt to merge (in order of priority)
BRANCHES=(
    "origin/cursor/update-content-and-fix-links-06ca"
    "origin/cursor/update-content-and-fix-links-095b"
    "origin/cursor/update-content-and-fix-links-0fc7"
    "origin/cursor/update-content-and-fix-links-12a5"
    "origin/cursor/update-content-and-fix-links-1466"
    "origin/cursor/website-audit-and-enhancement-0581"
    "origin/cursor/website-audit-and-enhancement-0b85"
    "origin/cursor/website-audit-and-enhancement-1d57"
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

echo "Merge process completed!"
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