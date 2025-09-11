#!/bin/bash

# Script to merge recent branches that might have conflicts
set -e

echo "Starting recent branch merge process..."

# Get recent branches (last 100)
branches=$(git branch -r | grep -v "origin/main" | grep -v "origin/HEAD" | sed 's/origin\///' | head -100)

conflict_branches=()
successful_merges=()

for branch in $branches; do
    echo "Checking branch: $branch"
    
    # Check if branch exists
    if ! git show-ref --verify --quiet refs/remotes/origin/$branch; then
        echo "Branch $branch does not exist, skipping..."
        continue
    fi
    
    # Check if branch is already merged
    if git merge-base --is-ancestor origin/$branch main; then
        echo "Branch $branch is already merged, skipping..."
        continue
    fi
    
    # Check for conflicts
    echo "Checking for conflicts in $branch..."
    conflict_output=$(git merge-tree $(git merge-base main origin/$branch) main origin/$branch 2>&1 || true)
    
    if [ -n "$conflict_output" ]; then
        echo "Conflicts found in $branch"
        conflict_branches+=("$branch")
    else
        echo "No conflicts in $branch, attempting merge..."
        
        # Try to merge the branch
        if git merge origin/$branch --no-edit; then
            echo "Successfully merged $branch"
            successful_merges+=("$branch")
        else
            echo "Failed to merge $branch"
            conflict_branches+=("$branch")
            # Reset the merge
            git merge --abort 2>/dev/null || true
        fi
    fi
done

echo "Merge process completed!"
echo "Successfully merged branches: ${successful_merges[*]}"
echo "Branches with conflicts: ${conflict_branches[*]}"

# Push the changes
echo "Pushing changes to main..."
git push origin main

echo "All done!"