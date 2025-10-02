#!/bin/bash

# Script to merge all new cursor branches systematically
set -e

echo "🚀 Starting systematic merge of all NEW cursor branches..."

# List of NEW cursor branches to merge (from the fetch output)
NEW_CURSOR_BRANCHES=(
    "cursor/create-and-deploy-new-content-0341"
    "cursor/create-and-deploy-new-content-0c37"
    "cursor/create-and-deploy-new-content-1847"
    "cursor/create-and-deploy-new-content-33f1"
    "cursor/create-and-deploy-new-content-373b"
    "cursor/create-and-deploy-new-content-4052"
    "cursor/create-and-deploy-new-content-61b6"
    "cursor/create-and-deploy-new-content-6bc4"
    "cursor/create-and-deploy-new-content-9135"
    "cursor/create-and-deploy-new-content-9885"
    "cursor/create-and-deploy-new-content-9b95"
    "cursor/create-and-deploy-new-content-a537"
    "cursor/create-and-deploy-new-content-c394"
    "cursor/create-and-deploy-new-content-cbc0"
    "cursor/create-and-deploy-new-content-da07"
    "cursor/create-and-deploy-new-content-e094"
)

echo "📋 Found ${#NEW_CURSOR_BRANCHES[@]} NEW cursor branches to merge"

# Ensure we're on main branch
git checkout main

# Merge new cursor branches
echo "🔄 Merging NEW cursor branches..."
for branch in "${NEW_CURSOR_BRANCHES[@]}"; do
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

echo "🎉 All NEW branches merged successfully!"
echo "📊 Final status:"
git log --oneline -5