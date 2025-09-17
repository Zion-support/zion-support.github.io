#!/bin/bash

# Merge Conflicts Resolver Script
# This script will resolve merge conflicts and merge all open PRs into main

set -e

echo "Starting merge conflicts resolution process..."

# Function to check if a branch exists
branch_exists() {
    git show-ref --verify --quiet refs/remotes/origin/$1
}

# Function to merge a branch into main
merge_branch() {
    local branch_name=$1
    echo "Processing branch: $branch_name"
    
    if branch_exists "$branch_name"; then
        echo "Branch $branch_name exists, attempting merge..."
        
        # Checkout the branch
        git checkout -b "local-$branch_name" "origin/$branch_name" 2>/dev/null || {
            echo "Branch $branch_name already exists locally, switching to it..."
            git checkout "local-$branch_name" 2>/dev/null || git checkout -b "local-$branch_name" "origin/$branch_name"
        }
        
        # Try to merge with main
        if git merge main --no-edit; then
            echo "Successfully merged $branch_name with main"
            git checkout main
            git merge "local-$branch_name" --no-edit
            echo "Successfully merged $branch_name into main"
            git branch -d "local-$branch_name"
        else
            echo "Merge conflicts detected in $branch_name, attempting to resolve..."
            
            # Check for common conflict files
            if [ -f "package.json" ] && grep -q "<<<<<<< HEAD" package.json; then
                echo "Resolving package.json conflicts..."
                # Keep the main branch version for package.json
                git checkout --ours package.json
                git add package.json
            fi
            
            if [ -f "package-lock.json" ] && grep -q "<<<<<<< HEAD" package-lock.json; then
                echo "Resolving package-lock.json conflicts..."
                git checkout --ours package-lock.json
                git add package-lock.json
            fi
            
            # Try to commit the resolved conflicts
            if git commit -m "Resolve merge conflicts in $branch_name"; then
                echo "Successfully resolved conflicts in $branch_name"
                git checkout main
                git merge "local-$branch_name" --no-edit
                echo "Successfully merged resolved $branch_name into main"
                git branch -d "local-$branch_name"
            else
                echo "Failed to resolve conflicts in $branch_name, skipping..."
                git merge --abort 2>/dev/null || true
                git checkout main
                git branch -D "local-$branch_name" 2>/dev/null || true
            fi
        fi
    else
        echo "Branch $branch_name does not exist, skipping..."
    fi
}

# Ensure we're on main branch
git checkout main

# List of branches to merge
branches=(
    "cursor/fix-netlify-build-and-merge-to-main-3149"
    "cursor/fix-netlify-build-and-merge-to-main-84b6"
    "cursor/fix-netlify-build-and-merge-to-main-84cc"
)

# Process each branch
for branch in "${branches[@]}"; do
    echo "Processing branch: $branch"
    merge_branch "$branch"
done

echo "Merge conflicts resolution process completed!"

# Show final status
echo "Final git status:"
git status

echo "Recent commits:"
git log --oneline -5