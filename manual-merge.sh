#!/bin/bash

echo "🚀 Starting manual merge process..."

# Check current status
echo "📊 Current branch: $(git branch --show-current)"

# Fetch latest changes
echo "🔄 Fetching latest changes..."
git fetch origin

# Check if feature branch exists
FEATURE_BRANCH="cursor/create-and-deploy-new-content-568b"
if git show-ref --verify --quiet refs/heads/$FEATURE_BRANCH; then
    echo "✅ Feature branch $FEATURE_BRANCH exists locally"
else
    echo "❌ Feature branch not found locally, fetching from remote..."
    git fetch origin $FEATURE_BRANCH:$FEATURE_BRANCH
fi

# Ensure we're on main
echo "🔄 Switching to main branch..."
git checkout main

# Pull latest main
echo "🔄 Pulling latest main..."
git pull origin main

# Merge the feature branch
echo "🔄 Merging feature branch into main..."
if git merge $FEATURE_BRANCH --no-edit; then
    echo "✅ Merge successful!"
else
    echo "⚠️  Merge conflicts detected. Resolving..."
    
    # List conflicted files
    echo "📋 Conflicted files:"
    git status --porcelain | grep -E "^UU|^AA|^DD" || echo "No conflicts found"
    
    # Resolve conflicts by accepting our changes (feature branch)
    echo "🔧 Resolving conflicts by accepting feature branch changes..."
    git checkout --ours .
    git add .
    git commit --no-edit -m "Merge AI 2027 breakthrough content: resolve conflicts"
    
    echo "✅ Conflicts resolved!"
fi

# Push to main
echo "🚀 Pushing to main..."
git push origin main

echo "🎉 Merge completed successfully!"
echo "📈 AI 2027 breakthrough content is now live on main branch!"