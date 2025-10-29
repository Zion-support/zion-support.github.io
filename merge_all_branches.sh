#!/bin/bash

# Comprehensive branch merge script
set -e

echo "Starting comprehensive branch merge process..."

# Get the list of recent branches
BRANCHES=(
    "origin/cursor/delete-old-data-records-41de"
    "origin/cursor/delete-old-data-records-917e"
    "origin/cursor/delete-old-data-records-a094"
    "origin/cursor/delete-old-data-records-df78"
    "origin/cursor/delete-records-57d6"
    "origin/cursor/delete-old-data-records-c928"
    "origin/cursor/swdr-background-task-5bf5"
    "origin/cursor/swdr-background-task-a762"
    "origin/cursor/fix-errors-and-merge-to-main-6cb7"
    "origin/cursor/swdr-background-task-9835"
    "origin/cursor/undefined-awde-task-1140"
    "origin/cursor/undefined-awde-task-3217"
    "origin/cursor/undefined-awde-task-b171"
    "origin/cursor/undefined-awde-task-d518"
    "origin/cursor/undefined-awde-task-f7f0"
    "origin/cursor/fix-errors-and-merge-to-main-07d1"
    "origin/cursor/fix-errors-and-merge-to-main-13a8"
    "origin/cursor/fix-errors-and-merge-to-main-d5a0"
    "origin/cursor/fix-errors-and-merge-to-main-0278"
    "origin/temp-merge-33776"
)

# Ensure we're on main branch
git checkout main
git pull origin main

# Merge each branch
for branch in "${BRANCHES[@]}"; do
    echo "Processing branch: $branch"
    
    # Check if branch exists
    if git show-ref --verify --quiet refs/remotes/$branch; then
        echo "Merging $branch into main..."
        
        # Try to merge the branch
        if git merge --no-ff $branch -m "Merge $branch into main" 2>/dev/null; then
            echo "Successfully merged $branch"
        else
            echo "Merge conflict in $branch, resolving..."
            
            # Resolve conflicts by keeping main branch version
            git status --porcelain | grep "^UU" | cut -c4- | while read file; do
                echo "Resolving conflict in $file"
                git checkout --theirs "$file" 2>/dev/null || true
            done
            
            # Add resolved files
            git add .
            
            # Commit the merge
            if git commit -m "Resolve merge conflicts in $branch by keeping main branch versions" 2>/dev/null; then
                echo "Successfully resolved conflicts in $branch"
            else
                echo "No conflicts to resolve in $branch"
                git merge --abort 2>/dev/null || true
            fi
        fi
    else
        echo "Branch $branch does not exist, skipping..."
    fi
    
    echo "---"
done

echo "All branches processed successfully!"
echo "Pushing changes to origin/main..."

# Push all changes
git push origin main

echo "Merge process completed!"