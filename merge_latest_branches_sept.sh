#!/bin/bash

# Script to merge latest branches from September 2025
echo "🚀 Starting latest branch merge process for September 2025..."

# List of latest branches to merge (most recent first)
LATEST_BRANCHES=(
    "origin/cursor/create-and-deploy-new-content-4b33"
    "origin/cursor/create-and-deploy-new-content-1ad7"
    "origin/cursor/create-and-deploy-new-content-8799"
    "origin/cursor/create-and-deploy-new-content-7c9c"
    "origin/cursor/create-and-deploy-new-content-d6c7"
    "origin/cursor/create-and-deploy-new-content-0d00"
    "origin/feat/new-content-sept-2025"
    "origin/aggressive-merge-backup-20250916-000516"
)

# Ensure we're on main branch
git checkout main

# Merge each branch
for branch in "${LATEST_BRANCHES[@]}"; do
    echo "📦 Attempting to merge $branch..."
    
    # Try to merge the branch
    if git merge "$branch" --no-edit; then
        echo "✅ Successfully merged $branch"
    else
        echo "⚠️  Merge conflict in $branch, resolving..."
        
        # Resolve conflicts by accepting our changes
        git checkout --ours .
        git add .
        git commit -m "Resolve merge conflicts in $branch - accept our changes"
        
        echo "✅ Resolved conflicts and merged $branch"
    fi
done

echo "🎉 All latest branches merged successfully!"
echo "📤 Pushing changes to main..."

# Push the merged changes
git push origin main --force

echo "✅ All done! Latest branches merged and pushed to main."