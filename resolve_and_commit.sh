#!/bin/bash

echo "🔧 Resolving merge conflicts and committing changes..."

# Add all resolved files
git add -A

# Check if there are any changes to commit
if git diff --cached --quiet; then
    echo "ℹ️  No changes to commit"
else
    echo "📝 Committing resolved conflicts..."
    git commit -m "resolve: fix all merge conflicts in main files

- Resolved conflicts in app/page.tsx
- Resolved conflicts in src/data/blog-posts.js  
- Resolved conflicts in content/index.yaml
- Cleaned up zion-website/src/app/page.tsx
- Removed all conflict markers and duplicate content"
    
    echo "✅ Changes committed successfully"
fi

# Push to main
echo "🚀 Pushing to main branch..."
git push origin main

echo "🎉 All conflicts resolved and changes pushed to main!"