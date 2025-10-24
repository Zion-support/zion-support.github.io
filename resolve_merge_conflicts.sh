#!/bin/bash

# Script to resolve merge conflicts by accepting incoming changes
# This will merge all cursor/fix-errors-and-merge-to-main branches

echo "Starting merge conflict resolution process..."

# Function to resolve conflicts in a single branch
resolve_branch() {
    local branch=$1
    echo "Processing branch: $branch"
    
    # Try to merge the branch
    if git merge "$branch" --no-commit --no-ff 2>/dev/null; then
        echo "Successfully merged $branch"
        git commit -m "Merge $branch - resolved conflicts by accepting incoming changes"
        return 0
    else
        echo "Merge conflicts detected in $branch, resolving..."
        
        # Check if we're in a merge state
        if git status --porcelain | grep -q "^UU\|^AA\|^DD"; then
            echo "Resolving conflicts by accepting incoming changes..."
            
            # For content conflicts, accept incoming changes
            git status --porcelain | grep "^UU\|^AA" | cut -c4- | xargs -I {} git checkout --theirs "{}"
            
            # For deleted files conflicts, keep the file (don't delete)
            git status --porcelain | grep "^DD" | cut -c4- | xargs -I {} git add "{}"
            
            # Add all resolved files
            git add .
            
            # Commit the merge
            git commit -m "Merge $branch - resolved conflicts by accepting incoming changes"
            echo "Successfully resolved conflicts for $branch"
            return 0
        else
            echo "No conflicts to resolve for $branch"
            return 1
        fi
    fi
}

# Get list of branches to merge
branches=($(git branch -r | grep -E "cursor/fix-errors-and-merge-to-main" | head -20))

echo "Found ${#branches[@]} branches to process"

# Process each branch
for branch in "${branches[@]}"; do
    echo "----------------------------------------"
    echo "Processing: $branch"
    
    # Check if branch has commits not in main
    if git log --oneline main.."$branch" | head -1 > /dev/null 2>&1; then
        echo "Branch $branch has new commits, attempting merge..."
        resolve_branch "$branch"
    else
        echo "Branch $branch is already up to date with main, skipping..."
    fi
    
    echo "Completed processing: $branch"
    echo "----------------------------------------"
done

echo "Merge conflict resolution process completed!"
echo "Current status:"
git status