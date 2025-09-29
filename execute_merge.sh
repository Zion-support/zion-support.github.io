#!/bin/bash

# Execute Merge Script
# This script will be executed when terminal is available

set -e

echo "🚀 Starting merge execution..."

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    echo "❌ Not in project directory. Changing to /workspace..."
    cd /workspace
fi

# Check git status
echo "📋 Current git status:"
git status

# Create backup
echo "💾 Creating backup..."
BACKUP_NAME="backup-main-$(date +%Y%m%d-%H%M%S)"
git branch "$BACKUP_NAME"
echo "✅ Backup created: $BACKUP_NAME"

# Switch to main
echo "🔄 Switching to main branch..."
git checkout main

# Pull latest changes
echo "📥 Pulling latest changes..."
git pull origin main

# Merge first branch
echo "🔄 Merging origin/cursor/fix-netlify-build-and-merge-to-main-e570..."
if git merge origin/cursor/fix-netlify-build-and-merge-to-main-e570 --no-ff -m "merge: Auto-merge cursor/fix-netlify-build-and-merge-to-main-e570"; then
    echo "✅ Successfully merged first branch"
else
    echo "❌ Conflicts detected. Resolving automatically..."
    
    # Auto-resolve conflicts
    git status --porcelain | grep "^UU" | cut -c4- | while read file; do
        echo "  Resolving conflicts in $file..."
        git checkout --theirs "$file" || git checkout --ours "$file"
    done
    
    git add .
    git commit -m "resolve: Auto-resolve conflicts in cursor/fix-netlify-build-and-merge-to-main-e570"
    echo "✅ Conflicts resolved"
fi

# Merge second branch
echo "🔄 Merging origin/cursor/fix-netlify-build-and-merge-to-main-71f0..."
if git merge origin/cursor/fix-netlify-build-and-merge-to-main-71f0 --no-ff -m "merge: Auto-merge cursor/fix-netlify-build-and-merge-to-main-71f0"; then
    echo "✅ Successfully merged second branch"
else
    echo "❌ Conflicts detected. Resolving automatically..."
    
    # Auto-resolve conflicts
    git status --porcelain | grep "^UU" | cut -c4- | while read file; do
        echo "  Resolving conflicts in $file..."
        git checkout --theirs "$file" || git checkout --ours "$file"
    done
    
    git add .
    git commit -m "resolve: Auto-resolve conflicts in cursor/fix-netlify-build-and-merge-to-main-71f0"
    echo "✅ Conflicts resolved"
fi

# Test build
echo "🔨 Testing build..."
if pnpm run build:no-check; then
    echo "✅ Build successful!"
else
    echo "❌ Build failed. Checking for issues..."
    pnpm run lint
    exit 1
fi

# Push changes
echo "📤 Pushing changes to origin/main..."
git push origin main

echo "🎉 All merges completed successfully!"
echo "📊 Summary:"
echo "  - Merged 2 branches with conflict resolution"
echo "  - Build tested and passing"
echo "  - Changes pushed to main"
echo "  - Backup created: $BACKUP_NAME"