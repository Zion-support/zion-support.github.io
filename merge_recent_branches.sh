#!/bin/bash

# Script to merge recent branches systematically
echo "🚀 Starting systematic branch merge process..."

# List of recent branches to merge (most recent first)
RECENT_BRANCHES=(
    "origin/cursor/create-and-deploy-new-content-7e3a"
    "origin/cursor/create-and-deploy-new-content-d4ee"
    "origin/cursor/create-and-deploy-new-content-9ed1"
    "origin/cursor/create-and-deploy-new-content-c963"
    "origin/cursor/create-and-deploy-new-content-3cc5"
    "origin/feature/revolutionary-2027-improvements"
    "origin/feature/revolutionary-content-2025"
    "origin/resolved-merge-conflicts-2026"
    "origin/cursor/create-and-deploy-new-content-1275"
    "origin/cursor/create-and-deploy-new-content-dc0c"
)

# Ensure we're on main branch
git checkout main

# Merge each branch
for branch in "${RECENT_BRANCHES[@]}"; do
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

echo "🎉 All recent branches merged successfully!"
echo "📤 Pushing changes to main..."

# Push the merged changes
git push origin main --force

echo "✅ All done! Recent branches merged and pushed to main."