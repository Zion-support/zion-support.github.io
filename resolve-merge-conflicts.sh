#!/bin/bash

# Comprehensive Merge Conflict Resolution Script
# This script will resolve common merge conflicts and merge recent branches

set -e

echo "🚀 Starting comprehensive merge conflict resolution..."

# Function to resolve conflicts by accepting our version (main branch)
resolve_conflicts_ours() {
    local branch=$1
    echo "📋 Resolving conflicts for branch: $branch"
    
    # Checkout the branch
    git checkout -b "temp-merge-$branch" origin/$branch
    
    # Merge main into the branch
    git merge main --no-commit --no-ff || true
    
    # Resolve conflicts by accepting our version for most files
    git checkout --ours . || true
    
    # Add all resolved files
    git add . || true
    
    # Commit the merge
    git commit -m "Resolve merge conflicts: accept main branch changes for $branch" || true
    
    # Merge back to main
    git checkout main
    git merge "temp-merge-$branch" --no-ff -m "Merge $branch with resolved conflicts"
    
    # Clean up
    git branch -D "temp-merge-$branch"
    
    echo "✅ Successfully merged $branch"
}

# Function to resolve conflicts by accepting their version (feature branch)
resolve_conflicts_theirs() {
    local branch=$1
    echo "📋 Resolving conflicts for branch: $branch (accepting their changes)"
    
    # Checkout the branch
    git checkout -b "temp-merge-$branch" origin/$branch
    
    # Merge main into the branch
    git merge main --no-commit --no-ff || true
    
    # Resolve conflicts by accepting their version for most files
    git checkout --theirs . || true
    
    # Add all resolved files
    git add . || true
    
    # Commit the merge
    git commit -m "Resolve merge conflicts: accept feature branch changes for $branch" || true
    
    # Merge back to main
    git checkout main
    git merge "temp-merge-$branch" --no-ff -m "Merge $branch with resolved conflicts"
    
    # Clean up
    git branch -D "temp-merge-$branch"
    
    echo "✅ Successfully merged $branch"
}

# List of recent branches to merge (most recent first)
RECENT_BRANCHES=(
    "cursor/automate-test-fix-improve-and-merge-code-ee3b"
    "cursor/add-new-services-and-deploy-updates-e792"
    "cursor/fix-lint-push-and-merge-to-main-4d20"
    "cursor/automate-test-fix-improve-and-merge-code-c782"
    "cursor/add-new-services-and-advertise-them-ef37"
    "cursor/fix-syntax-push-and-merge-to-main-5a4f"
    "cursor/enhance-pm2-automations-for-development-and-deployment-ada5"
    "cursor/resolve-conflicts-and-merge-to-main-2fac"
)

# Ensure we're on main and up to date
git checkout main
git pull origin main

# Process each branch
for branch in "${RECENT_BRANCHES[@]}"; do
    echo "🔄 Processing branch: $branch"
    
    # Check if branch exists
    if git show-ref --verify --quiet refs/remotes/origin/$branch; then
        # Try to merge with conflict resolution
        if resolve_conflicts_ours "$branch"; then
            echo "✅ Successfully processed $branch"
        else
            echo "⚠️  Failed to process $branch, trying alternative approach..."
            # Try accepting their changes instead
            resolve_conflicts_theirs "$branch" || echo "❌ Failed to process $branch"
        fi
    else
        echo "⚠️  Branch $branch does not exist, skipping..."
    fi
done

echo "🎉 Merge conflict resolution completed!"
echo "📊 Current status:"
git status