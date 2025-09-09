#!/bin/bash

echo "🚀 Starting basic merge process..."

cd /workspace

# Basic git operations
echo "📋 Current status:"
git status --short

echo "📋 Current branch:"
git branch --show-current

echo "📋 Switching to main:"
git checkout main

echo "📋 Pulling latest:"
git pull origin main

echo "📋 Available branches:"
git branch -a | head -10

echo "📋 Pushing to main:"
git push origin main

echo "🎉 Basic merge process completed!"