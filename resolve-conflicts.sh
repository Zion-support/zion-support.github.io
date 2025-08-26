#!/bin/bash

# Script to resolve merge conflicts in specific branches

set -e

echo "Starting conflict resolution for failed merge branches..."

# Function to resolve conflicts in a specific branch
resolve_branch_conflicts() {
    local branch_name="$1"
    echo "Resolving conflicts in branch: $branch_name"
    
    # Checkout the branch
    git checkout -b "$branch_name" "origin/$branch_name"
    
    # Try to merge with main
    if git merge main --no-edit; then
        echo "Successfully resolved conflicts in $branch_name"
        
        # Push the resolved branch
        if git push origin "$branch_name"; then
            echo "Successfully pushed resolved $branch_name"
            return 0
        else
            echo "Failed to push $branch_name"
            return 1
        fi
    else
        echo "Still have conflicts in $branch_name, attempting manual resolution..."
        
        # List all conflicted files
        git status --porcelain | grep "^UU" | while read -r line; do
            file_path=$(echo "$line" | cut -c4-)
            echo "Conflict in: $file_path"
        done
        
        # For now, abort the merge and return to main
        git merge --abort
        echo "Aborted merge for $branch_name - manual resolution needed"
        return 1
    fi
}

# Ensure we're on main and up to date
git checkout main
git pull origin main

# List of branches with known conflicts
CONFLICT_BRANCHES=(
    "cursor/enhance-app-with-new-services-and-futuristic-design-7466"
    "cursor/enhance-app-with-new-services-and-futuristic-design-757c"
)

# Process each conflicted branch
for branch in "${CONFLICT_BRANCHES[@]}"; do
    echo "Processing conflicted branch: $branch"
    
    if resolve_branch_conflicts "$branch"; then
        echo "Successfully resolved conflicts in $branch"
    else
        echo "Failed to resolve conflicts in $branch"
    fi
    
    # Go back to main for next iteration
    git checkout main
    
    # Clean up local branch
    git branch -D "$branch" 2>/dev/null || true
    
    echo "----------------------------------------"
done

echo "Completed conflict resolution attempts!"
echo "Note: Some branches may still need manual conflict resolution."