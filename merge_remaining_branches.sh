#!/bin/bash

# Script to merge all remaining unmerged branches
echo "Starting merge of remaining unmerged branches..."

# Get list of unmerged branches
branches=($(git branch -r --no-merged main | grep -E "(cursor|feature|bugfix|hotfix)" | head -20))

for branch in "${branches[@]}"; do
    echo "Attempting to merge $branch..."
    
    # Try to merge the branch
    if git merge "$branch" --no-commit --no-ff 2>/dev/null; then
        echo "Successfully merged $branch (no conflicts)"
        git commit -m "Merge $branch: Auto-merge successful"
    else
        echo "Conflicts detected in $branch, resolving..."
        
        # Check if there are conflicts
        if git status --porcelain | grep -q "^UU\|^AA\|^DD"; then
            echo "Resolving conflicts by accepting our version..."
            git checkout --ours .
            git add .
            git commit -m "Merge $branch: Resolved conflicts by accepting our version"
        else
            echo "No conflicts, committing merge..."
            git add .
            git commit -m "Merge $branch: Auto-merge successful"
        fi
    fi
    
    echo "Completed merge of $branch"
    echo "---"
done

echo "All branches processed!"