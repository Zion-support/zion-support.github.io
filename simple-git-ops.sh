#!/bin/bash

echo "🚀 Simple git operations..."

cd /workspace

# Basic operations
echo "📋 Current status:"
git status --short

echo "📋 Current branch:"
git branch --show-current

echo "📋 Switching to main:"
git checkout main

echo "📋 Adding all changes:"
git add .

echo "📋 Committing changes:"
git commit -m "Resolve merge conflicts and clean up repository" || echo "Nothing to commit"

echo "📋 Pushing to main:"
git push origin main

echo "🎉 Git operations completed!"