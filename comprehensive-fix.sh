#!/bin/bash

echo "🚀 Starting comprehensive fix process..."

# Set git configuration
echo "🔧 Setting git configuration..."
git config pull.rebase false
git config pull.ff false

# Check current status
echo "📊 Checking git status..."
git status

# Add any untracked files
echo "📝 Adding untracked files..."
git add .

# Commit changes if there are any
if [ -n "$(git status --porcelain)" ]; then
    echo "💾 Committing changes..."
    git commit -m "Fix: Resolve configuration issues and clean up code"
fi

# Pull latest changes
echo "🔄 Pulling latest changes from main..."
git pull origin main

# Push changes
echo "📤 Pushing changes to main..."
git push origin main

echo "✅ Comprehensive fix completed!"