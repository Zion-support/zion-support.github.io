#!/bin/bash

# Second batch of branches to merge
# This will attempt to merge more branches into main

set -e

echo "Starting second batch of branch merges..."

# List of branches to attempt to merge (second batch)
BRANCHES=(
    "origin/cursor/update-content-and-fix-links-1730"
    "origin/cursor/update-content-and-fix-links-19a4"
    "origin/cursor/update-content-and-fix-links-1a1c"
    "origin/cursor/update-content-and-fix-links-1a90"
    "origin/cursor/update-content-and-fix-links-1aa1"
    "origin/cursor/update-content-and-fix-links-203e"
    "origin/cursor/update-content-and-fix-links-21e4"
    "origin/cursor/update-content-and-fix-links-22a3"
    "origin/cursor/update-content-and-fix-links-258b"
    "origin/cursor/update-content-and-fix-links-26db"
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

echo "Second batch merge process completed!"
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