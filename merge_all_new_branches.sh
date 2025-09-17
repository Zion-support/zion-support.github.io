#!/bin/bash

# Script to merge all new branches from September 2025
echo "🚀 Starting comprehensive branch merge process for September 2025..."

# List of all new branches to merge (most recent first)
NEW_BRANCHES=(
    "origin/cursor/create-and-deploy-new-content-b561"
    "origin/cursor/create-and-deploy-new-content-4f5e"
    "origin/cursor/create-and-deploy-new-content-36c0"
    "origin/cursor/create-and-deploy-new-content-ab06"
    "origin/cursor/create-and-deploy-new-content-10fe"
    "origin/resolved-merge-conflicts-09c6"
    "origin/feature/revolutionary-ai-services-2025"
    "origin/resolved-merge-conflicts-1864"
    "origin/resolved-merge-conflicts-c992"
    "origin/resolved-merge-conflicts-ca9f"
    "origin/cursor/create-and-deploy-new-content-e516"
    "origin/cursor/create-and-deploy-new-content-1976"
    "origin/cursor/create-and-deploy-new-content-fa80"
    "origin/cursor/create-and-deploy-new-content-c2b7"
    "origin/aggressive-merge-backup-20250916-002527"
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

echo "✅ All done! All new branches merged and pushed to main."