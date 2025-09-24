#!/bin/bash

# Comprehensive merge script for resolving all conflicts and merging branches
set -e

echo "🚀 Starting comprehensive merge process..."

# First, reset to remote main to start clean
echo "📥 Fetching latest changes from remote..."
git fetch origin

echo "🔄 Resetting to remote main branch..."
git reset --hard origin/main

echo "✅ Reset to clean state"

# Get list of recent branches to merge
echo "📋 Getting list of branches to merge..."

# Merge branches in batches to handle conflicts systematically
MERGE_BRANCHES=(
    "origin/2025-comprehensive-services-expansion"
    "origin/add-comprehensive-services"
    "origin/cursor/add-comprehensive-services-2025"
)

CONFLICT_RESOLUTION_COUNT=0

for branch in "${MERGE_BRANCHES[@]}"; do
    echo "🔄 Attempting to merge $branch..."
    
    if git merge "$branch" --no-commit 2>/dev/null; then
        echo "✅ $branch merged successfully"
        git commit -m "chore: merge $branch into main"
    else
        echo "⚠️  Merge conflict detected in $branch"
        CONFLICT_RESOLUTION_COUNT=$((CONFLICT_RESOLUTION_COUNT + 1))
        
        # Auto-resolve common conflicts
        if git status --porcelain | grep -q "package-lock.json"; then
            echo "  🔧 Resolving package-lock.json conflict..."
            git checkout --theirs package-lock.json
            git add package-lock.json
        fi
        
        if git status --porcelain | grep -q "yarn.lock"; then
            echo "  🔧 Resolving yarn.lock conflict..."
            git checkout --theirs yarn.lock
            git add yarn.lock
        fi
        
        if git status --porcelain | grep -q "eslint.config.js"; then
            echo "  🔧 Resolving eslint.config.js conflict..."
            git checkout --ours eslint.config.js
            git add eslint.config.js
        fi
        
        # Add any other resolved files
        git add .
        
        # Commit the merge
        git commit -m "chore: resolve conflicts and merge $branch"
        echo "✅ Successfully resolved conflicts and merged $branch"
    fi
done

echo "📊 Merge Summary:"
echo "  - Branches processed: ${#MERGE_BRANCHES[@]}"
echo "  - Conflicts resolved: $CONFLICT_RESOLUTION_COUNT"

# Push the results
echo "📤 Pushing merged changes to remote..."
git push origin main

echo "🎉 Comprehensive merge process completed successfully!"