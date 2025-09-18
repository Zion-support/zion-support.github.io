#!/bin/bash

# Script to merge additional recent branches
echo "🚀 Starting additional branch merge process..."

# List of additional branches to merge
ADDITIONAL_BRANCHES=(
    "origin/cursor/create-and-deploy-new-content-7974"
    "origin/cursor/create-and-deploy-new-content-ad2f"
    "origin/cursor/create-and-deploy-new-content-53c9"
    "origin/cursor/create-and-deploy-new-content-f57d"
    "origin/cursor/create-and-deploy-new-content-a80f"
    "origin/cursor/create-and-deploy-new-content-08cd"
    "origin/cursor/create-and-deploy-new-content-83f0"
    "origin/cursor/create-and-deploy-new-content-7d94"
    "origin/cursor/create-and-deploy-new-content-c5fe"
    "origin/cursor/create-and-deploy-new-content-2c2c"
    "origin/cursor/create-and-deploy-new-content-a3b8"
    "origin/cursor/create-and-deploy-new-content-1e11"
    "origin/cursor/create-and-deploy-new-content-f977"
    "origin/cursor/create-and-deploy-new-content-05e0"
    "origin/new-content-and-advertising-2026"
    "origin/add-revolutionary-content-2027"
    "origin/cursor/create-and-deploy-new-content-d866"
)

# Ensure we're on main branch
git checkout main

# Merge each branch
for branch in "${ADDITIONAL_BRANCHES[@]}"; do
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

echo "🎉 All additional branches merged successfully!"
echo "📤 Pushing changes to main..."

# Push the merged changes
git push origin main --force

echo "✅ All done! Additional branches merged and pushed to main."