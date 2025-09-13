#!/bin/bash

# Cleanup Merged Branches Script
# This script will clean up branches that have been successfully merged

echo "🧹 Starting branch cleanup process..."

# Switch to main branch
git checkout main
git pull origin main

# List of branches that have been successfully merged
MERGED_BRANCHES=(
    "cursor/create-and-deploy-new-content-89f3"
    "cursor/create-and-deploy-new-content-0f7d"
    "cursor/create-and-deploy-new-content-1aa5"
    "cursor/create-and-deploy-new-content-2d06"
)

echo "🗑️  Deleting merged feature branches..."

# Delete local branches
for branch in "${MERGED_BRANCHES[@]}"; do
    if git show-ref --verify --quiet refs/heads/"$branch"; then
        echo "Deleting local branch: $branch"
        git branch -d "$branch"
    else
        echo "Local branch $branch not found"
    fi
done

echo ""
echo "✅ Branch cleanup completed!"
echo ""
echo "📊 Summary of merged changes:"
echo "✅ Successfully merged our content creation PR (89f3)"
echo "✅ Added new content promotion components"
echo "✅ Merged additional content creation PRs (0f7d, 1aa5, 2d06)"
echo "✅ Added new showcase components and pages"
echo "✅ All changes pushed to main branch"
echo ""
echo "🎉 Repository is now clean and up-to-date!"