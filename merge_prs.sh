#!/bin/bash

# Script to merge all open PRs into main branch
set -e

echo "Starting PR merge process..."

# Ensure we're on main branch
git checkout main
git pull origin main

# List of PR branches to merge
PR_BRANCHES=(
    "cursor/parse-netlify-configuration-file-ce72"
    "cursor/fix-netlify-build-and-merge-to-main-eff1"
)

# Merge each PR branch
for branch in "${PR_BRANCHES[@]}"; do
    echo "Processing branch: $branch"
    
    # Fetch the branch
    git fetch origin "$branch:$branch"
    
    # Check if branch exists
    if git show-ref --verify --quiet refs/heads/"$branch"; then
        echo "Merging $branch into main..."
        
        # Try to merge
        if git merge "$branch" --no-ff -m "Merge $branch: Fix Netlify build issues"; then
            echo "Successfully merged $branch"
        else
            echo "Merge conflict in $branch, resolving..."
            # Auto-resolve conflicts by accepting main branch changes
            git checkout --ours .
            git add .
            git commit -m "Resolve merge conflicts in $branch"
        fi
        
        # Clean up the branch
        git branch -d "$branch"
    else
        echo "Branch $branch not found, skipping..."
    fi
done

# Push changes to main
echo "Pushing changes to main..."
git push origin main

echo "PR merge process completed successfully!"