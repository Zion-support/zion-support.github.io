#!/bin/bash

# List of recent branches to merge
branches=(
    "origin/cursor/create-and-deploy-new-content-683c"
    "origin/cursor/create-and-deploy-new-content-af1a"
    "origin/cursor/create-and-deploy-new-content-1675"
    "origin/cursor/create-and-deploy-new-content-fcb2"
    "origin/cursor/create-and-deploy-new-content-0baa"
    "origin/feature/new-content-and-advertising"
)

for branch in "${branches[@]}"; do
    echo "Attempting to merge $branch..."
    
    # Try to merge the branch
    if git merge "$branch" --no-edit; then
        echo "Successfully merged $branch"
    else
        echo "Merge conflict in $branch, resolving by accepting incoming changes..."
        
        # Resolve conflicts by accepting incoming changes
        git status --porcelain | grep "^UU\|^AA\|^DD" | cut -c4- | xargs -I {} git checkout --theirs {} 2>/dev/null || true
        
        # Add all resolved files
        git add .
        
        # Commit the merge
        git commit -m "Merge $branch - resolved conflicts by accepting incoming changes"
        
        echo "Resolved conflicts and merged $branch"
    fi
done

echo "Completed merging recent branches"