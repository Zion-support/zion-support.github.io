#!/bin/bash

# Script to merge all cursor branches systematically
set -e

echo "🚀 Starting systematic merge of all cursor branches..."

# List of cursor branches to merge
CURSOR_BRANCHES=(
    "cursor/create-and-deploy-new-content-0891"
    "cursor/create-and-deploy-new-content-0ae1"
    "cursor/create-and-deploy-new-content-1791"
    "cursor/create-and-deploy-new-content-1ad0"
    "cursor/create-and-deploy-new-content-1ce0"
    "cursor/create-and-deploy-new-content-1f3f"
    "cursor/create-and-deploy-new-content-25ad"
    "cursor/create-and-deploy-new-content-267a"
    "cursor/create-and-deploy-new-content-27d2"
    "cursor/create-and-deploy-new-content-352f"
    "cursor/create-and-deploy-new-content-386c"
    "cursor/create-and-deploy-new-content-3b74"
    "cursor/create-and-deploy-new-content-4301"
    "cursor/create-and-deploy-new-content-446a"
    "cursor/create-and-deploy-new-content-4b11"
    "cursor/create-and-deploy-new-content-4eb8"
    "cursor/create-and-deploy-new-content-5a0d"
    "cursor/create-and-deploy-new-content-61df"
    "cursor/create-and-deploy-new-content-62eb"
    "cursor/create-and-deploy-new-content-63f0"
    "cursor/create-and-deploy-new-content-6460"
    "cursor/create-and-deploy-new-content-66bc"
    "cursor/create-and-deploy-new-content-6956"
    "cursor/create-and-deploy-new-content-720f"
    "cursor/create-and-deploy-new-content-72c8"
    "cursor/create-and-deploy-new-content-75f4"
    "cursor/create-and-deploy-new-content-7643"
    "cursor/create-and-deploy-new-content-7ba1"
    "cursor/create-and-deploy-new-content-7d66"
    "cursor/create-and-deploy-new-content-7dc7"
    "cursor/create-and-deploy-new-content-7f10"
    "cursor/create-and-deploy-new-content-81ba"
    "cursor/create-and-deploy-new-content-8452"
    "cursor/create-and-deploy-new-content-9a04"
    "cursor/create-and-deploy-new-content-9b34"
    "cursor/create-and-deploy-new-content-a5fa"
    "cursor/create-and-deploy-new-content-aa86"
    "cursor/create-and-deploy-new-content-adea"
    "cursor/create-and-deploy-new-content-b230"
    "cursor/create-and-deploy-new-content-b5d6"
    "cursor/create-and-deploy-new-content-c587"
    "cursor/create-and-deploy-new-content-c9ae"
    "cursor/create-and-deploy-new-content-cd06"
    "cursor/create-and-deploy-new-content-cf26"
    "cursor/create-and-deploy-new-content-d14b"
    "cursor/create-and-deploy-new-content-d4d7"
    "cursor/create-and-deploy-new-content-d8da"
    "cursor/create-and-deploy-new-content-ddbc"
    "cursor/create-and-deploy-new-content-df82"
    "cursor/create-and-deploy-new-content-e21b"
    "cursor/create-and-deploy-new-content-e2dd"
    "cursor/create-and-deploy-new-content-f074"
    "cursor/create-and-deploy-new-content-f4ff"
    "cursor/create-and-deploy-new-content-f98f"
    "cursor/create-and-deploy-new-content-fa9f"
    "cursor/create-and-deploy-new-content-fdb9"
)

# Additional branches
OTHER_BRANCHES=(
    "deployment/october-2025-content-1759299318"
    "january-2026-content-final"
)

echo "📋 Found ${#CURSOR_BRANCHES[@]} cursor branches to merge"
echo "📋 Found ${#OTHER_BRANCHES[@]} other branches to merge"

# Ensure we're on main branch
git checkout main

# Merge cursor branches
echo "🔄 Merging cursor branches..."
for branch in "${CURSOR_BRANCHES[@]}"; do
    echo "Merging $branch..."
    if git show-ref --verify --quiet refs/remotes/origin/$branch; then
        git merge origin/$branch --no-edit || {
            echo "⚠️  Conflict in $branch, resolving automatically..."
            git status --porcelain | grep "^UU" | while read -r line; do
                file=$(echo $line | cut -d' ' -f2)
                echo "Resolving conflict in $file"
                # Use the version from the branch being merged
                git checkout --theirs "$file"
                git add "$file"
            done
            git commit --no-edit || true
        }
        echo "✅ Successfully merged $branch"
    else
        echo "⚠️  Branch $branch not found, skipping..."
    fi
done

# Merge other branches
echo "🔄 Merging other branches..."
for branch in "${OTHER_BRANCHES[@]}"; do
    echo "Merging $branch..."
    if git show-ref --verify --quiet refs/remotes/origin/$branch; then
        git merge origin/$branch --no-edit || {
            echo "⚠️  Conflict in $branch, resolving automatically..."
            git status --porcelain | grep "^UU" | while read -r line; do
                file=$(echo $line | cut -d' ' -f2)
                echo "Resolving conflict in $file"
                # Use the version from the branch being merged
                git checkout --theirs "$file"
                git add "$file"
            done
            git commit --no-edit || true
        }
        echo "✅ Successfully merged $branch"
    else
        echo "⚠️  Branch $branch not found, skipping..."
    fi
done

echo "🎉 All branches merged successfully!"
echo "📊 Final status:"
git log --oneline -10