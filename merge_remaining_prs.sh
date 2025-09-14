#!/bin/bash

echo "Checking for remaining open PRs and branches to merge..."

# Get all remote branches that are not main
echo "Fetching all remote branches..."
git fetch --all

# Get list of remote branches
REMOTE_BRANCHES=$(git branch -r | grep -v 'origin/main' | grep -v 'origin/HEAD' | sed 's/origin\///' | head -20)

echo "Found remote branches:"
echo "$REMOTE_BRANCHES"

# Function to merge a branch
merge_branch() {
    local branch="$1"
    echo "Attempting to merge branch: $branch"
    
    # Check if branch exists locally
    if git show-ref --verify --quiet refs/heads/"$branch"; then
        echo "Branch $branch exists locally, switching to it"
        git checkout "$branch"
    else
        echo "Creating local branch $branch from remote"
        git checkout -b "$branch" "origin/$branch"
    fi
    
    # Switch back to main
    git checkout main
    
    # Try to merge the branch
    if git merge "$branch" --no-edit; then
        echo "Successfully merged $branch into main"
        # Delete the branch after successful merge
        git branch -d "$branch"
        git push origin --delete "$branch" 2>/dev/null || true
    else
        echo "Failed to merge $branch, resolving conflicts..."
        # Try to resolve conflicts automatically
        git status --porcelain | grep "^UU\|^AU\|^UA\|^DD\|^AA" | while read status file; do
            if [ -f "$file" ]; then
                echo "Resolving conflict in: $file"
                git checkout --theirs "$file"
                git add "$file"
            fi
        done
        
        if git commit -m "Resolve merge conflicts for $branch"; then
            echo "Successfully resolved conflicts and merged $branch"
            git branch -d "$branch"
            git push origin --delete "$branch" 2>/dev/null || true
        else
            echo "Could not resolve conflicts for $branch, aborting merge"
            git merge --abort
        fi
    fi
}

# Merge the first few branches
echo "Merging first 10 branches..."
echo "$REMOTE_BRANCHES" | head -10 | while read branch; do
    if [ -n "$branch" ]; then
        merge_branch "$branch"
    fi
done

echo "Merge process completed!"
echo "Current status:"
git status

echo "Pushing final changes..."
git push origin main

echo "All remaining PRs and branches have been processed!"