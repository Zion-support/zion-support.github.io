#!/bin/bash

# Script to merge all open PR branches into main
# This script will handle merge conflicts and merge branches systematically

set -e

echo "Starting systematic merge of all open PR branches..."

# Get list of recent branches
RECENT_BRANCHES=(
    "cursor/create-and-deploy-new-content-ca2d"
    "cursor/create-and-deploy-new-content-c1cb"
    "cursor/create-and-deploy-new-content-ac49"
    "cursor/create-and-deploy-new-content-a43d"
    "cursor/create-and-deploy-new-content-a3da"
    "cursor/create-and-deploy-new-content-7f6f"
    "cursor/create-and-deploy-new-content-7879"
    "cursor/create-and-deploy-new-content-63da"
    "cursor/create-and-deploy-new-content-6007"
    "cursor/create-and-deploy-new-content-5f74"
    "cursor/create-and-deploy-new-content-46b5"
    "cursor/create-and-deploy-new-content-4348"
    "cursor/create-and-deploy-new-content-40ce"
    "cursor/create-and-deploy-new-content-18d3"
    "cursor/create-and-deploy-new-content-0c61"
)

# Function to merge a branch
merge_branch() {
    local branch_name=$1
    echo "Processing branch: $branch_name"
    
    # Check if branch exists
    if ! git show-ref --verify --quiet refs/remotes/origin/$branch_name; then
        echo "Branch $branch_name does not exist, skipping..."
        return 0
    fi
    
    # Create local branch
    git checkout -b $branch_name origin/$branch_name 2>/dev/null || git checkout $branch_name
    
    # Try to merge with main
    if git merge main --no-edit; then
        echo "Successfully merged $branch_name with main"
        # Merge back to main
        git checkout main
        if git merge $branch_name --no-edit; then
            echo "Successfully merged $branch_name into main"
            # Clean up local branch
            git branch -d $branch_name
        else
            echo "Failed to merge $branch_name into main"
            git merge --abort
        fi
    else
        echo "Merge conflict in $branch_name, resolving..."
        # Check for conflicts
        if git status --porcelain | grep -q "^UU\|^AA\|^DD"; then
            echo "Resolving conflicts in $branch_name..."
            # Auto-resolve simple conflicts
            git status --porcelain | grep "^UU\|^AA\|^DD" | while read status file; do
                echo "Resolving conflict in $file"
                # Use main version for conflicts (keep the latest)
                git checkout --theirs "$file"
                git add "$file"
            done
            
            # Commit the resolution
            if git commit --no-edit; then
                echo "Successfully resolved conflicts in $branch_name"
                # Merge back to main
                git checkout main
                if git merge $branch_name --no-edit; then
                    echo "Successfully merged resolved $branch_name into main"
                    git branch -d $branch_name
                else
                    echo "Failed to merge resolved $branch_name into main"
                    git merge --abort
                fi
            else
                echo "Failed to resolve conflicts in $branch_name"
                git merge --abort
                git checkout main
                git branch -d $branch_name
            fi
        else
            echo "No conflicts found, but merge failed for $branch_name"
            git merge --abort
            git checkout main
            git branch -d $branch_name
        fi
    fi
}

# Process each branch
for branch in "${RECENT_BRANCHES[@]}"; do
    merge_branch "$branch"
    echo "---"
done

echo "Merge process completed!"
echo "Current status:"
git status