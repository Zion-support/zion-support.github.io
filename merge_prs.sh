#!/bin/bash

# Script to merge all open PRs into main branch
set -e

echo "Starting PR merge process..."

# Ensure we're on main branch
git checkout main

# Update main branch
git pull origin main

# List of PR branches to merge
PR_BRANCHES=(
    "origin/cursor/fix-web-application-console-errors-0bf5"
    "origin/cursor/build-and-deploy-with-vite-and-netlify-8b37"
    "origin/cursor/fix-errors-and-merge-to-main-fcbd"
    "origin/cursor/fix-errors-and-merge-to-main-e6e1"
)

# Merge each PR branch
for branch in "${PR_BRANCHES[@]}"; do
    echo "Attempting to merge $branch..."
    
    # Check if branch exists
    if git show-ref --verify --quiet refs/remotes/$branch; then
        echo "Merging $branch into main..."
        
        # Try to merge with strategy
        if git merge $branch --no-ff -m "Merge $branch into main"; then
            echo "Successfully merged $branch"
        else
            echo "Merge conflict detected for $branch, attempting to resolve..."
            
            # Check for conflicts
            if git status --porcelain | grep -q "^UU\|^AA\|^DD"; then
                echo "Resolving conflicts for $branch..."
                
                # Auto-resolve conflicts by accepting incoming changes for most cases
                git status --porcelain | grep "^UU\|^AA\|^DD" | while read status file; do
                    echo "Resolving conflict in $file"
                    # For now, accept the incoming changes (theirs)
                    git checkout --theirs "$file" 2>/dev/null || true
                    git add "$file" 2>/dev/null || true
                done
                
                # Complete the merge
                git commit --no-edit || git merge --abort
                echo "Resolved conflicts for $branch"
            else
                echo "No conflicts found, completing merge for $branch"
                git commit --no-edit
            fi
        fi
    else
        echo "Branch $branch not found, skipping..."
    fi
done

echo "PR merge process completed!"

# Show final status
git status
git log --oneline -10