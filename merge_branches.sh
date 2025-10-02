#!/bin/bash

# Script to merge recent branches systematically
set -e

echo "Starting systematic branch merging process..."

# Array of recent branches to merge (most recent first)
branches=(
    "origin/cursor/enhance-and-expand-ziontechgroup-com-services-and-site-bf6e"
    "origin/cursor/add-new-services-and-deploy-updates-1399"
    "origin/cursor/fix-errors-and-merge-to-main-0499"
    "origin/cursor/add-new-services-and-deploy-updates-0c16"
    "origin/cursor/fix-errors-and-merge-to-main-1c5e"
    "origin/cursor/fix-errors-and-merge-to-main-50bf"
    "origin/cursor/fix-errors-and-merge-to-main-e83a"
    "origin/cursor/fix-errors-and-merge-to-main-ff8e"
    "origin/cursor/fix-errors-and-merge-to-main-3092"
    "origin/cursor/fix-errors-and-merge-to-main-dde8"
)

# Ensure we're on main branch
git checkout main
git pull origin main

# Function to merge a branch
merge_branch() {
    local branch=$1
    local branch_name=$(echo $branch | sed 's/origin\///')
    
    echo "Processing branch: $branch_name"
    
    # Check if branch exists locally
    if git show-ref --verify --quiet refs/heads/$branch_name; then
        echo "Branch $branch_name exists locally, switching to it"
        git checkout $branch_name
        git pull origin $branch_name
    else
        echo "Creating local branch $branch_name from remote"
        git checkout -b $branch_name $branch
    fi
    
    # Switch back to main
    git checkout main
    
    # Attempt to merge
    echo "Attempting to merge $branch_name into main..."
    if git merge $branch_name --no-ff -m "Merge $branch_name into main"; then
        echo "Successfully merged $branch_name"
        git push origin main
    else
        echo "Merge conflict detected for $branch_name"
        echo "Resolving conflicts..."
        
        # Check for conflicts
        if git status --porcelain | grep -q "^UU\|^AA\|^DD"; then
            echo "Manual conflict resolution needed for $branch_name"
            echo "Skipping this branch for now"
            git merge --abort
        else
            echo "No conflicts found, completing merge"
            git push origin main
        fi
    fi
    
    echo "Completed processing $branch_name"
    echo "---"
}

# Process each branch
for branch in "${branches[@]}"; do
    merge_branch "$branch"
done

echo "Branch merging process completed!"