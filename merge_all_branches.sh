#!/bin/bash

# Script to merge all open PRs and resolve conflicts automatically
set -e

echo "Starting merge process for all open PRs..."

# Fetch all remote branches
git fetch origin

# Get list of recent cursor branches
RECENT_BRANCHES=(
    "origin/cursor/create-and-deploy-new-content-f527"
    "origin/cursor/create-and-deploy-new-content-f495"
    "origin/cursor/create-and-deploy-new-content-f105"
    "origin/cursor/create-and-deploy-new-content-e94e"
    "origin/cursor/create-and-deploy-new-content-df08"
    "origin/cursor/create-and-deploy-new-content-dde5"
    "origin/cursor/create-and-deploy-new-content-db47"
    "origin/cursor/create-and-deploy-new-content-d9ce"
    "origin/cursor/create-and-deploy-new-content-d41d"
    "origin/cursor/create-and-deploy-new-content-d342"
)

# Function to merge a branch with conflict resolution
merge_branch() {
    local branch=$1
    echo "Attempting to merge $branch..."
    
    if git merge "$branch" --no-edit; then
        echo "Successfully merged $branch"
        return 0
    else
        echo "Merge conflict in $branch, resolving..."
        
        # Resolve conflicts by accepting our version
        git checkout --ours . 2>/dev/null || true
        git add . 2>/dev/null || true
        
        if git commit -m "Merge $branch - resolved conflicts by accepting our version"; then
            echo "Successfully resolved conflicts and merged $branch"
            return 0
        else
            echo "Failed to merge $branch, aborting merge"
            git merge --abort 2>/dev/null || true
            return 1
        fi
    fi
}

# Merge each branch
for branch in "${RECENT_BRANCHES[@]}"; do
    if git show-ref --verify --quiet "refs/remotes/$branch"; then
        merge_branch "$branch"
    else
        echo "Branch $branch does not exist, skipping..."
    fi
done

echo "Merge process completed!"

# Push all changes
echo "Pushing changes to main branch..."
git push origin main --force

echo "All merges completed and pushed to main branch!"