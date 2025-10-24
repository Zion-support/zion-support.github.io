#!/bin/bash

# Script to merge all open PRs and branches into main
set -e

echo "Starting comprehensive merge process..."

# Update main branch
echo "Updating main branch..."
git checkout main
git pull origin main

# Get list of recent cursor branches (last 20)
echo "Getting recent cursor branches..."
RECENT_BRANCHES=$(git branch -r | grep "cursor/fix-errors-and-merge-to-main" | tail -20 | sed 's/origin\///')

# Counter for successful merges
SUCCESSFUL_MERGES=0
FAILED_MERGES=0

echo "Found recent branches to merge:"
echo "$RECENT_BRANCHES"

# Function to merge a branch
merge_branch() {
    local branch=$1
    echo "Attempting to merge branch: $branch"
    
    # Check if branch exists locally
    if ! git show-ref --verify --quiet refs/remotes/origin/$branch; then
        echo "Branch $branch does not exist, skipping..."
        return 1
    fi
    
    # Try to merge
    if git merge origin/$branch --no-edit; then
        echo "✅ Successfully merged $branch"
        ((SUCCESSFUL_MERGES++))
        return 0
    else
        echo "❌ Failed to merge $branch due to conflicts"
        # Try to resolve conflicts automatically
        if git status --porcelain | grep -q "^UU\|^AA\|^DD"; then
            echo "Attempting to resolve conflicts automatically..."
            # Use ours strategy for conflicts
            git reset --hard HEAD
            git merge origin/$branch -X ours --no-edit || {
                echo "Auto-resolution failed, skipping $branch"
                git merge --abort 2>/dev/null || true
                ((FAILED_MERGES++))
                return 1
            }
            echo "✅ Auto-resolved conflicts for $branch"
            ((SUCCESSFUL_MERGES++))
            return 0
        else
            git merge --abort 2>/dev/null || true
            ((FAILED_MERGES++))
            return 1
        fi
    fi
}

# Merge each branch
for branch in $RECENT_BRANCHES; do
    merge_branch "$branch"
    echo "---"
done

# Also try to merge some other important branches
OTHER_BRANCHES=(
    "origin/comprehensive-improvements-final"
    "origin/app-improvements-final"
    "origin/comprehensive-app-enhancements-final"
)

for branch in "${OTHER_BRANCHES[@]}"; do
    branch_name=$(echo $branch | sed 's/origin\///')
    merge_branch "$branch_name"
    echo "---"
done

echo "Merge process completed!"
echo "Successful merges: $SUCCESSFUL_MERGES"
echo "Failed merges: $FAILED_MERGES"

# Push changes
echo "Pushing changes to origin..."
git push origin main

echo "All done!"