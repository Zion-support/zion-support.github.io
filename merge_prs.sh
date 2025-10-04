#!/bin/bash

# Script to merge open PRs into main branch
# This script will attempt to merge the open PRs we identified

echo "Starting PR merge process..."

# List of PR branches to merge (from the open PRs we found)
PR_BRANCHES=(
    "origin/cursor/build-and-deploy-with-vite-and-netlify-8b37"
    "origin/cursor/fix-errors-and-merge-to-main-fcbd"
    "origin/cursor/fix-errors-and-merge-to-main-e6e1"
    "origin/cursor/enhance-and-expand-ziontechgroup-com-services-and-site-44c4"
    "origin/cursor/enhance-and-expand-ziontechgroup-com-services-and-site-f3e7"
    "origin/cursor/enhance-and-expand-ziontechgroup-com-services-and-site-d21e"
    "origin/cursor/fix-web-application-console-errors-0bf5"
)

# Function to merge a branch
merge_branch() {
    local branch=$1
    echo "Attempting to merge branch: $branch"
    
    # Check if branch exists
    if git show-ref --verify --quiet refs/remotes/$branch; then
        echo "Branch $branch exists, attempting merge..."
        
        # Try to merge
        if git merge $branch --no-ff -m "Merge $branch into main"; then
            echo "Successfully merged $branch"
            return 0
        else
            echo "Merge conflict or error with $branch"
            # Check if there are conflicts
            if git status --porcelain | grep -q "^UU"; then
                echo "Merge conflicts detected in $branch"
                git merge --abort
            fi
            return 1
        fi
    else
        echo "Branch $branch does not exist"
        return 1
    fi
}

# Main merge process
echo "Starting merge process for ${#PR_BRANCHES[@]} branches..."

successful_merges=0
failed_merges=0

for branch in "${PR_BRANCHES[@]}"; do
    if merge_branch "$branch"; then
        ((successful_merges++))
    else
        ((failed_merges++))
    fi
    echo "---"
done

echo "Merge process completed!"
echo "Successful merges: $successful_merges"
echo "Failed merges: $failed_merges"

# Push changes if any merges were successful
if [ $successful_merges -gt 0 ]; then
    echo "Pushing changes to remote..."
    git push origin main
    echo "Changes pushed successfully!"
else
    echo "No successful merges to push"
fi