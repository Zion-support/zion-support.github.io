#!/bin/bash

# Bulk merge script for all cursor/create-and-deploy-new-content branches
set -e

echo "Starting bulk merge process..."

# Get all the branches
branches=(
    "origin/cursor/create-and-deploy-new-content-1cf6"
    "origin/cursor/create-and-deploy-new-content-481e"
    "origin/cursor/create-and-deploy-new-content-484f"
    "origin/cursor/create-and-deploy-new-content-502e"
    "origin/cursor/create-and-deploy-new-content-5fbd"
    "origin/cursor/create-and-deploy-new-content-666b"
    "origin/cursor/create-and-deploy-new-content-6774"
    "origin/cursor/create-and-deploy-new-content-7a80"
    "origin/cursor/create-and-deploy-new-content-8092"
    "origin/cursor/create-and-deploy-new-content-86e7"
    "origin/cursor/create-and-deploy-new-content-8c61"
    "origin/cursor/create-and-deploy-new-content-95ef"
    "origin/cursor/create-and-deploy-new-content-97a6"
    "origin/cursor/create-and-deploy-new-content-9e5a"
    "origin/cursor/create-and-deploy-new-content-a3a8"
    "origin/cursor/create-and-deploy-new-content-bc04"
    "origin/cursor/create-and-deploy-new-content-c647"
    "origin/cursor/create-and-deploy-new-content-cde3"
    "origin/cursor/create-and-deploy-new-content-da36"
    "origin/cursor/create-and-deploy-new-content-e33c"
    "origin/cursor/create-and-deploy-new-content-e745"
    "origin/cursor/create-and-deploy-new-content-f420"
    "origin/cursor/create-and-deploy-new-content-fdcc"
    "origin/cursor/create-and-deploy-new-content-ffcc"
)

# Function to merge a branch
merge_branch() {
    local branch=$1
    local branch_name=$(echo "$branch" | sed 's/origin\///')
    
    echo "Processing branch: $branch_name"
    
    # Try to merge
    if git merge "$branch" --no-ff -m "Merge $branch_name" 2>/dev/null; then
        echo "✅ Successfully merged $branch_name"
        return 0
    else
        echo "⚠️  Merge conflict in $branch_name, resolving..."
        
        # Resolve conflicts by accepting our version
        git checkout --ours . 2>/dev/null || true
        git add . 2>/dev/null || true
        
        # Complete the merge
        if git commit -m "Merge $branch_name (resolved conflicts)" 2>/dev/null; then
            echo "✅ Resolved conflicts and merged $branch_name"
            return 0
        else
            echo "❌ Failed to merge $branch_name"
            return 1
        fi
    fi
}

# Process each branch
success_count=0
total_count=${#branches[@]}

for branch in "${branches[@]}"; do
    echo "=========================================="
    if merge_branch "$branch"; then
        ((success_count++))
    fi
    echo ""
done

echo "=========================================="
echo "Bulk merge completed: $success_count/$total_count branches merged successfully"
echo "=========================================="

# Push all changes
echo "Pushing changes to main branch..."
git push origin main

echo "All changes have been pushed to main branch!"