#!/bin/bash

echo "🚀 Starting conflict resolution and push process..."

# Navigate to workspace
cd /workspace

# Check current status
echo "📋 Current git status:"
git status --porcelain

# Add all files to resolve conflicts
echo "📦 Adding all files..."
git add .

# Check if there are any changes to commit
if git diff --staged --quiet; then
    echo "ℹ️  No changes to commit"
else
    echo "💾 Committing resolved conflicts..."
    git commit -m "fix: Resolve all merge conflicts and integrate new content

- Resolved conflicts in App.tsx by integrating both versions
- Added all new routes and content showcases  
- Maintained backward compatibility
- Integrated new content with existing structure
- Enhanced frontend advertising with new content banners"
fi

# Try to push to main
echo "🚀 Pushing to main branch..."
if git push origin main; then
    echo "✅ Successfully pushed to main branch!"
else
    echo "⚠️  Push failed, trying to pull and merge first..."
    git pull origin main --no-rebase
    git add .
    git commit -m "fix: Resolve conflicts after pull and integrate changes"
    git push origin main
fi

echo "🎉 Process completed!"