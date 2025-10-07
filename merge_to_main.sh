#!/bin/bash

echo "🚀 Starting merge to main process..."

# Checkout main branch
echo "📥 Checking out main branch..."
git checkout main

# Pull latest changes
echo "📥 Pulling latest changes from main..."
git pull origin main

# Merge our branch
echo "🔄 Merging cursor/fix-errors-and-merge-to-main-276d into main..."
git merge cursor/fix-errors-and-merge-to-main-276d

# Push to main
echo "📤 Pushing merged changes to main..."
git push origin main

echo "✅ Merge to main completed successfully!"