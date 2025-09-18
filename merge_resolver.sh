#!/bin/bash

# Merge conflict resolver script
# This script handles merge conflicts by accepting incoming changes for deleted files

set -e

echo "Starting merge conflict resolution process..."

# Function to resolve conflicts by accepting incoming changes
resolve_conflicts() {
    local branch_name="$1"
    echo "Merging branch: $branch_name"
    
    # Start the merge
    git merge "origin/$branch_name" --no-ff -m "Merge $branch_name branch with conflict resolution" || {
        echo "Merge conflicts detected for $branch_name, resolving..."
        
        # For modify/delete conflicts, accept the incoming version
        git status --porcelain | grep "^UD\|^DU\|^AU\|^UA" | while read status file; do
            echo "Resolving conflict for: $file"
            if [[ "$status" == *"D"* ]]; then
                # File was deleted, restore it from the incoming branch
                git checkout "origin/$branch_name" -- "$file"
            fi
        done
        
        # For content conflicts, try to auto-resolve
        git status --porcelain | grep "^UU" | while read status file; do
            echo "Resolving content conflict for: $file"
            # Try to accept incoming changes for content conflicts
            git checkout --theirs "$file" || git checkout --ours "$file"
        done
        
        # Add resolved files
        git add .
        
        # Complete the merge
        git commit -m "Merge $branch_name branch with resolved conflicts"
        echo "Successfully merged $branch_name"
    }
}

# List of priority branches to merge (excluding dependabot and backup branches)
PRIORITY_BRANCHES=(
    "enhance-app-with-new-services-and-advertising"
    "improve-zion-tech-group-website"
    "clean-main"
    "clean-main-2"
)

# Merge each priority branch
for branch in "${PRIORITY_BRANCHES[@]}"; do
    if git show-ref --verify --quiet "refs/remotes/origin/$branch"; then
        echo "Processing branch: $branch"
        resolve_conflicts "$branch"
    else
        echo "Branch $branch does not exist, skipping..."
    fi
done

echo "Merge process completed!"
git log --oneline -10