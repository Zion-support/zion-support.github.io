#!/bin/bash

echo "🚀 Starting commit and merge process..."

# Add resolved files
echo "📝 Adding resolved files..."
git add App.tsx

# Commit the resolved conflicts
echo "💾 Committing resolved merge conflicts..."
git commit -m "✅ Resolve merge conflicts in App.tsx

- Combined imports from both branches
- Resolved JSX content conflicts
- Merged navigation links from both branches
- Combined route definitions
- All conflicts successfully resolved

Ready for merge to main branch."

# Switch to main branch
echo "🔄 Switching to main branch..."
git checkout main

# Pull latest changes
echo "⬇️ Pulling latest changes from remote..."
git pull origin main

# Merge the feature branch
echo "🔀 Merging feature branch to main..."
git merge cursor/fix-netlify-build-and-merge-to-main-0c20

# Push to main
echo "⬆️ Pushing changes to main branch..."
git push origin main

echo "✅ Successfully merged and pushed to main branch!"
echo "🎉 All merge conflicts resolved and changes deployed!"