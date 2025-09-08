#!/bin/bash

echo "🔧 Starting merge conflict resolution and PR merging process..."

# Set the repository URL
REPO_URL="https://github.com/Zion-Holdings/zion.app.git"

# Check current status
echo "📋 Checking current git status..."
git status

# Add all changes
echo "📦 Adding all changes..."
git add .

# Commit the resolved conflicts
echo "💾 Committing resolved merge conflicts..."
git commit -m "Fix syntax errors: resolve merge conflicts and fix JavaScript parsing issues

- Fixed merge conflict markers in api-disabled files
- Fixed JavaScript syntax errors in .js files  
- Converted CommonJS to ES modules where needed
- Cleaned up duplicate function declarations
- Fixed template literal syntax errors"

# Push to current branch
echo "🚀 Pushing changes to current branch..."
git push origin cursor/fix-syntax-push-and-merge-to-main-c855

# Switch to main branch
echo "🔄 Switching to main branch..."
git checkout main

# Pull latest changes
echo "⬇️ Pulling latest changes from main..."
git pull origin main

# Merge the feature branch
echo "🔀 Merging feature branch into main..."
git merge cursor/fix-syntax-push-and-merge-to-main-c855

# Push merged changes
echo "🚀 Pushing merged changes to main..."
git push origin main

# Check for any remaining conflicts
echo "🔍 Checking for remaining conflicts..."
git status

echo "✅ Merge conflict resolution and PR merging completed!"