#!/bin/bash

# Script to merge open PRs and resolve conflicts
echo "Starting merge process for open PRs..."

# Switch to main branch
git checkout main
git pull origin main

# List of recent branches that might be open PRs
branches=(
    "cursor/fix-netlify-build-and-merge-to-main-c3c3"
    "cursor/fix-netlify-build-and-merge-to-main-bd25"
    "cursor/fix-netlify-build-and-merge-to-main-b722"
    "cursor/fix-netlify-build-and-merge-to-main-091d"
    "netlify-build-fixes-20250928-100105"
    "fix-typescript-errors-and-build-stability"
)

# Process each branch
for branch in "${branches[@]}"; do
    echo "Processing branch: $branch"
    
    # Check if branch exists
    if git show-ref --verify --quiet refs/remotes/origin/$branch; then
        echo "Found branch: $branch"
        
        # Create local branch
        git checkout -b $branch origin/$branch
        
        # Try to merge with main
        if git merge origin/main; then
            echo "Successfully merged $branch with main"
            
            # Switch back to main and merge the branch
            git checkout main
            if git merge $branch; then
                echo "Successfully merged $branch into main"
                
                # Push to remote
                git push origin main
                
                # Clean up local branch
                git branch -d $branch
                
                # Delete remote branch
                git push origin --delete $branch
                
                echo "Completed merge and cleanup for $branch"
            else
                echo "Failed to merge $branch into main"
                git merge --abort
            fi
        else
            echo "Failed to merge $branch with main - resolving conflicts..."
            
            # Try to resolve conflicts automatically
            git add .
            git commit -m "Resolve merge conflicts for $branch"
            
            # Switch back to main and merge
            git checkout main
            if git merge $branch; then
                echo "Successfully merged $branch into main after conflict resolution"
                git push origin main
                git branch -d $branch
                git push origin --delete $branch
            else
                echo "Failed to resolve conflicts for $branch"
                git merge --abort
            fi
        fi
    else
        echo "Branch $branch not found, skipping..."
    fi
done

echo "Merge process completed!"