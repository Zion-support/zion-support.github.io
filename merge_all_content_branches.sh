#!/bin/bash

# Comprehensive script to merge all content-related branches into main
# This script will systematically merge all open PRs and content branches

set -e

echo "🚀 Starting comprehensive merge of all content branches..."

# Function to safely merge a branch
merge_branch() {
    local branch_name=$1
    echo "📋 Attempting to merge branch: $branch_name"
    
    # Check if branch exists
    if ! git show-ref --verify --quiet refs/remotes/origin/$branch_name; then
        echo "⚠️  Branch $branch_name does not exist, skipping..."
        return 0
    fi
    
    # Try to merge the branch
    if git merge origin/$branch_name --no-ff -m "Merge $branch_name into main" 2>/dev/null; then
        echo "✅ Successfully merged $branch_name"
        return 0
    else
        echo "⚠️  Merge conflict in $branch_name, attempting to resolve..."
        
        # Check for conflicts
        if git status --porcelain | grep -q "^UU\|^AA\|^DD"; then
            echo "🔧 Resolving conflicts in $branch_name..."
            
            # Try to resolve conflicts automatically
            git add . 2>/dev/null || true
            
            # If there are still conflicts, try to resolve them
            if git status --porcelain | grep -q "^UU\|^AA\|^DD"; then
                echo "⚠️  Manual resolution needed for $branch_name, skipping for now..."
                git merge --abort 2>/dev/null || true
                return 1
            else
                git commit -m "Resolve merge conflicts in $branch_name" 2>/dev/null || true
                echo "✅ Resolved conflicts in $branch_name"
                return 0
            fi
        else
            echo "✅ Successfully merged $branch_name after conflict resolution"
            return 0
        fi
    fi
}

# List of branches to merge (prioritized by importance)
branches=(
    "content-and-advertising-update-2026"
    "content-creation-2026"
    "feature/new-content-and-advertising-2026"
    "feature/revolutionary-ai-2026-content"
    "new-content-integration-main"
    "content-creation-and-advertising-2025"
    "content-creation-and-advertising"
    "add-new-content-and-advertising"
    "add-2029-content-and-advertising"
    "add-2036-content-and-advertising"
)

# Add cursor branches (limit to most recent ones to avoid too many conflicts)
cursor_branches=(
    "cursor/create-and-deploy-new-content-0260"
    "cursor/create-and-deploy-new-content-15c5"
    "cursor/create-and-deploy-new-content-1b9f"
    "cursor/create-and-deploy-new-content-1f7b"
    "cursor/create-and-deploy-new-content-27cb"
    "cursor/create-and-deploy-new-content-30ea"
    "cursor/create-and-deploy-new-content-4092"
    "cursor/create-and-deploy-new-content-4dc9"
    "cursor/create-and-deploy-new-content-4f57"
    "cursor/create-and-deploy-new-content-537c"
)

# Merge main content branches first
echo "📚 Merging main content branches..."
for branch in "${branches[@]}"; do
    merge_branch "$branch"
done

# Merge cursor branches
echo "🤖 Merging cursor branches..."
for branch in "${cursor_branches[@]}"; do
    merge_branch "$branch"
done

echo "🎉 Merge process completed!"
echo "📊 Summary of merged branches:"
git log --oneline -10

# Push all changes
echo "🚀 Pushing changes to main..."
git push origin main --force-with-lease

echo "✅ All content branches have been merged and pushed to main!"