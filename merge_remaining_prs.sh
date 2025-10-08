#!/bin/bash

# Script to merge remaining open PRs
set -e

echo "Starting remaining PR merge process..."

# Remaining PR branches to process
REMAINING_BRANCHES=(
    "cursor/fix-errors-and-merge-to-main-fa9f"
    "cursor/fix-errors-and-merge-to-main-c540"
    "cursor/fix-errors-and-merge-to-main-b96d"
    "cursor/fix-errors-and-merge-to-main-c83a"
    "cursor/fix-errors-and-merge-to-main-6e85"
)

# Process each remaining PR branch
for branch in "${REMAINING_BRANCHES[@]}"; do
    echo "Processing branch: $branch"
    
    # Check if branch exists
    if git show-ref --verify --quiet refs/remotes/origin/$branch; then
        echo "Merging $branch into main..."
        
        # Try to merge the branch
        if git merge origin/$branch --no-ff -m "Merge $branch into main"; then
            echo "Successfully merged $branch"
        else
            echo "Merge conflict detected in $branch, resolving..."
            
            # Check for conflict markers
            if git status --porcelain | grep -q "^UU\|^AA\|^DD"; then
                echo "Resolving conflicts in $branch..."
                
                # Auto-resolve conflicts by accepting incoming changes for most files
                git status --porcelain | grep "^UU\|^AA\|^DD" | while read status file; do
                    echo "Resolving conflict in $file"
                    # For most cases, accept the incoming change (theirs)
                    git checkout --theirs "$file" 2>/dev/null || true
                    git add "$file" 2>/dev/null || true
                done
                
                # Complete the merge
                git commit --no-edit || git commit -m "Resolve merge conflicts in $branch"
                echo "Resolved conflicts and merged $branch"
            else
                echo "No conflicts found, completing merge..."
                git commit --no-edit || git commit -m "Merge $branch into main"
            fi
        fi
    else
        echo "Branch $branch not found, skipping..."
    fi
done

echo "All remaining PRs processed. Pushing changes to main..."
git push origin main

echo "Remaining PR merge process completed!"