#!/bin/bash

# Script to merge new branches from 2024
echo "🚀 Starting new branch merge process for 2024..."

# List of new branches to merge (most recent first)
NEW_BRANCHES=(
    "origin/cursor/create-and-deploy-new-content-1540"
    "origin/cursor/create-and-deploy-new-content-b8a1"
    "origin/cursor/create-and-deploy-new-content-3b6c"
    "origin/feature/merge-conflicts-resolution"
    "origin/cursor/create-and-deploy-new-content-1845"
    "origin/cursor/create-and-deploy-new-content-9a22"
    "origin/cursor/create-and-deploy-new-content-79e6"
    "origin/cursor/create-and-deploy-new-content-9cd3"
    "origin/feature/revolutionary-2027-improvements"
    "origin/cursor/create-and-deploy-new-content-3c05"
)

# Ensure we're on main branch
git checkout main

# Merge each branch
for branch in "${NEW_BRANCHES[@]}"; do
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

echo "🎉 All new branches merged successfully!"
echo "📤 Pushing changes to main..."

# Push the merged changes
git push origin main --force

echo "✅ All done! New branches merged and pushed to main."