#!/bin/bash

# Fix git configuration for divergent branches
echo "🔧 Fixing git configuration..."

# Set git pull strategy to merge (not rebase)
git config pull.rebase false

# Check current status
echo "📊 Current git status:"
git status

# Pull latest changes
echo "🔄 Pulling latest changes..."
git pull origin main

# Check if there are any uncommitted changes
if [ -n "$(git status --porcelain)" ]; then
    echo "📝 Found uncommitted changes, adding them..."
    git add .
    git commit -m "Fix: Resolve divergent branches and update configuration"
fi

echo "✅ Git configuration fixed!"