#!/bin/bash

echo "🚀 Starting simple merge process..."

# Change to workspace directory
cd /workspace

# Check if we're in a git repository
if ! git rev-parse --git-dir > /dev/null 2>&1; then
    echo "❌ Not in a git repository"
    exit 1
fi

echo "📋 Current directory: $(pwd)"
echo "📋 Current branch: $(git branch --show-current)"

# Switch to main branch
echo "📋 Switching to main branch..."
git checkout main 2>/dev/null || git checkout -b main

# Pull latest changes
echo "⬇️ Pulling latest changes..."
git pull origin main 2>/dev/null || echo "No remote main branch"

# Fetch all branches
echo "🔍 Fetching all remote branches..."
git fetch --all

# Get list of remote branches
echo "📊 Available remote branches:"
git branch -r | head -10

# Get current status
echo "📋 Current git status:"
git status --short

echo "🎉 Simple merge check completed!"