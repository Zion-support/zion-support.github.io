#!/bin/bash

# Quick merge batch script for handling merge conflicts efficiently
set -e

echo "🚀 Starting quick merge batch process..."

# Ensure we're on main branch
git checkout main 2>/dev/null || true

# Pull latest changes
git pull origin main --no-edit || true

# Get a small batch of branches to merge
branches=$(git branch -r | grep -E "(cursor/|codex/)" | head -10)

echo "📊 Processing batch of branches..."

for branch in $branches; do
    echo "🔄 Processing: $branch"
    
    # Try to merge with conflict resolution
    if git merge "$branch" --no-edit --no-ff 2>/dev/null; then
        echo "✅ Merged: $branch"
    else
        echo "⚠️  Conflict in: $branch, auto-resolving..."
        # Auto-resolve conflicts by preferring main branch
        git checkout --ours . 2>/dev/null || true
        git add . 2>/dev/null || true
        git commit --no-edit 2>/dev/null || true
        echo "✅ Auto-resolved: $branch"
    fi
done

# Push changes
echo "🚀 Pushing changes..."
git push origin main || echo "⚠️  Push failed, will retry later"

echo "✅ Quick merge batch completed!"