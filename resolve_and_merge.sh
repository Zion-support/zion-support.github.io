#!/bin/bash

echo "🚀 Starting merge conflict resolution and PR merging process..."

# Check current status
echo "📊 Checking current git status..."
git status --porcelain

# Check current branch
echo "🌿 Current branch:"
git branch --show-current

# Check for any uncommitted changes
if [ -n "$(git status --porcelain)" ]; then
    echo "📝 Found uncommitted changes, adding them..."
    git add .
    git commit -m "Auto-commit: Resolve conflicts and prepare for merge"
fi

# Fetch latest changes
echo "🔄 Fetching latest changes from remote..."
git fetch origin

# Check if we're on main branch
CURRENT_BRANCH=$(git branch --show-current)
if [ "$CURRENT_BRANCH" != "main" ]; then
    echo "🔄 Switching to main branch..."
    git checkout main
fi

# Pull latest changes
echo "⬇️ Pulling latest changes from main..."
git pull origin main

# Check for any merge conflicts
if [ -n "$(git status --porcelain | grep '^UU\|^AA\|^DD')" ]; then
    echo "⚠️ Found merge conflicts, resolving them..."
    
    # Resolve conflicts by using our version for source files
    git checkout --ours src/ App.tsx package.json package-lock.json tsconfig.json
    
    # Use remote version for build files
    git checkout --theirs dist/ zion-os/.next/ zion-website/
    
    # Add resolved files
    git add .
    
    # Commit the resolution
    git commit -m "Resolve merge conflicts automatically"
fi

# Check for any open PRs or branches to merge
echo "🔍 Looking for branches to merge..."

# Get list of recent branches
RECENT_BRANCHES=$(git branch -r --sort=-committerdate | head -10 | grep -v 'origin/main' | grep -v 'origin/HEAD')

if [ -n "$RECENT_BRANCHES" ]; then
    echo "📋 Found recent branches to potentially merge:"
    echo "$RECENT_BRANCHES"
    
    # Try to merge the most recent content branch
    CONTENT_BRANCH=$(echo "$RECENT_BRANCHES" | grep -E "(content|create|deploy)" | head -1)
    
    if [ -n "$CONTENT_BRANCH" ]; then
        echo "🔄 Attempting to merge: $CONTENT_BRANCH"
        git merge "$CONTENT_BRANCH" --no-edit || {
            echo "⚠️ Merge conflict detected, resolving automatically..."
            git checkout --ours src/ App.tsx package.json package-lock.json tsconfig.json
            git checkout --theirs dist/ zion-os/.next/ zion-website/
            git add .
            git commit -m "Merge $CONTENT_BRANCH with automatic conflict resolution"
        }
    fi
fi

# Push changes
echo "⬆️ Pushing changes to remote..."
git push origin main

# Test build
echo "🔨 Testing build..."
npm run build

echo "✅ Merge conflict resolution and PR merging completed!"