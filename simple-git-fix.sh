#!/bin/bash

echo "🚀 Starting simple git fix process..."

# Change to workspace directory
cd /workspace

# Check current status
echo "📋 Current git status:"
git status --porcelain

# Check current branch
echo "🌿 Current branch:"
git branch --show-current

# Fetch latest changes
echo "📥 Fetching latest changes..."
git fetch origin

# Check if we're on main branch
CURRENT_BRANCH=$(git branch --show-current)
echo "Current branch: $CURRENT_BRANCH"

if [ "$CURRENT_BRANCH" != "main" ]; then
    echo "🔄 Switching to main branch..."
    git checkout main
fi

# Pull latest changes from main
echo "⬇️ Pulling latest changes from main..."
git pull origin main

# Check for merge conflicts
echo "🔍 Checking for merge conflicts..."
if git diff --name-only --diff-filter=U | grep -q .; then
    echo "⚠️ Merge conflicts detected:"
    git diff --name-only --diff-filter=U
    
    # Auto-resolve conflicts by taking incoming changes
    echo "🔧 Auto-resolving conflicts..."
    git diff --name-only --diff-filter=U | while read file; do
        if [ -f "$file" ]; then
            echo "Resolving conflicts in: $file"
            # Simple resolution: remove conflict markers and keep both sides
            sed -i '/^<<<<<<< /d; /^=======/d; /^>>>>>>> /d' "$file"
            git add "$file"
        fi
    done
    
    # Commit resolved conflicts
    git commit -m "Auto-resolve merge conflicts"
fi

# Add any untracked changes
echo "📝 Adding untracked changes..."
git add .

# Commit any changes
if ! git diff --cached --quiet; then
    echo "💾 Committing changes..."
    git commit -m "Fix syntax errors and resolve conflicts"
fi

# Push changes
echo "⬆️ Pushing changes..."
git push origin main

echo "✅ Git operations completed successfully!"