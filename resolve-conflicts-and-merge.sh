#!/bin/bash

echo "🔧 Resolving merge conflicts and merging PRs..."

# Check current branch
echo "Current branch: $(git branch --show-current)"

# Add resolved files
git add pages/services/index.tsx
git add pages/404.tsx
git add data/real-market-services.ts

# Commit the resolved conflicts
git commit -m "Resolve merge conflicts in pages and data files

- Fixed complex merge conflicts in pages/services/index.tsx
- Resolved 404.tsx page conflicts
- Cleaned up corrupted data/real-market-services.ts
- Maintained comprehensive service listings with proper categorization"

# Check if we're on a feature branch and merge to main
CURRENT_BRANCH=$(git branch --show-current)
if [ "$CURRENT_BRANCH" != "main" ]; then
    echo "Switching to main branch..."
    git checkout main
    
    echo "Merging $CURRENT_BRANCH into main..."
    git merge $CURRENT_BRANCH --no-ff -m "Merge $CURRENT_BRANCH into main - resolved conflicts"
    
    echo "Pushing changes to remote..."
    git push origin main
fi

echo "✅ Merge conflicts resolved and changes merged to main!"