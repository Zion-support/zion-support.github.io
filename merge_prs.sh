#!/bin/bash

# Script to merge open PRs into main branch
set -e

echo "Starting PR merge process..."

# List of PR branches to merge (in order of priority)
PR_BRANCHES=(
    "origin/cursor/build-and-deploy-with-vite-and-netlify-8b37"
    "origin/cursor/fix-errors-and-merge-to-main-fcbd"
    "origin/cursor/fix-errors-and-merge-to-main-e6e1"
    "origin/cursor/enhance-and-expand-ziontechgroup-com-services-and-site-44c4"
    "origin/cursor/enhance-and-expand-ziontechgroup-com-services-and-site-f3e7"
    "origin/cursor/enhance-and-expand-ziontechgroup-com-services-and-site-d21e"
    "origin/cursor/fix-web-application-console-errors-0bf5"
)

# Function to check if a branch can be merged without conflicts
check_merge_conflicts() {
    local branch=$1
    echo "Checking merge conflicts for $branch..."
    
    # Create a temporary branch to test merge
    git checkout -b "temp-merge-test-$(date +%s)" main
    
    # Try to merge without committing
    if git merge "$branch" --no-commit --no-ff 2>/dev/null; then
        echo "✅ No conflicts for $branch"
        # Abort the merge
        git merge --abort
        # Delete temp branch
        git checkout main
        git branch -D "temp-merge-test-$(date +%s)" 2>/dev/null || true
        return 0
    else
        echo "❌ Conflicts found for $branch"
        # Abort the merge
        git merge --abort
        # Delete temp branch
        git checkout main
        git branch -D "temp-merge-test-$(date +%s)" 2>/dev/null || true
        return 1
    fi
}

# Function to merge a branch
merge_branch() {
    local branch=$1
    echo "Merging $branch into main..."
    
    # Merge the branch
    git merge "$branch" --no-ff -m "Merge $branch into main"
    
    echo "✅ Successfully merged $branch"
}

# Main merge process
echo "Starting merge process for ${#PR_BRANCHES[@]} branches..."

for branch in "${PR_BRANCHES[@]}"; do
    echo ""
    echo "Processing $branch..."
    
    # Check if branch exists
    if ! git show-ref --verify --quiet "refs/remotes/$branch"; then
        echo "⚠️  Branch $branch not found, skipping..."
        continue
    fi
    
    # Check for merge conflicts
    if check_merge_conflicts "$branch"; then
        # No conflicts, proceed with merge
        merge_branch "$branch"
    else
        echo "⚠️  Skipping $branch due to conflicts"
    fi
done

echo ""
echo "Merge process completed!"
echo "Pushing changes to remote..."
git push origin main

echo "✅ All merges completed and pushed to remote!"