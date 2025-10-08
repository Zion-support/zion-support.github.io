#!/bin/bash

# Script to merge all open PRs and resolve conflicts
set -e

echo "Starting PR merge process..."

# List of PR branches to process
PR_BRANCHES=(
    "cursor/fix-errors-and-merge-to-main-abd2"
    "cursor/fix-errors-and-merge-to-main-2185"
    "cursor/fix-errors-and-merge-to-main-ba52"
    "cursor/fix-errors-and-merge-to-main-b197"
    "cursor/fix-errors-and-merge-to-main-8be1"
    "cursor/fix-errors-and-merge-to-main-dece"
    "cursor/fix-errors-and-merge-to-main-0cb9"
    "cursor/fix-errors-and-merge-to-main-5a34"
    "cursor/fix-errors-and-merge-to-main-1dab"
    "cursor/fix-errors-and-merge-to-main-5381"
    "cursor/fix-errors-and-merge-to-main-fa9f"
    "cursor/fix-errors-and-merge-to-main-c540"
    "cursor/fix-errors-and-merge-to-main-b96d"
    "cursor/fix-errors-and-merge-to-main-c83a"
    "cursor/fix-errors-and-merge-to-main-9ecf"
    "cursor/fix-errors-and-merge-to-main-9f6c"
    "cursor/fix-errors-and-merge-to-main-bd75"
    "cursor/fix-errors-and-merge-to-main-6e2c"
    "cursor/fix-errors-and-merge-to-main-a2af"
    "cursor/fix-errors-and-merge-to-main-6e85"
)

# Ensure we're on main branch
git checkout main
git pull origin main

# Process each PR branch
for branch in "${PR_BRANCHES[@]}"; do
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
                # This is a strategy to handle the "Fix errors and merge to main" PRs
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

echo "All PRs processed. Pushing changes to main..."
git push origin main

echo "PR merge process completed!"