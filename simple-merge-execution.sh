#!/bin/bash

echo "🚀 Simple merge execution for AI 2027 content..."

# Check if we're on main branch
CURRENT_BRANCH=$(git branch --show-current)
echo "Current branch: $CURRENT_BRANCH"

if [ "$CURRENT_BRANCH" != "main" ]; then
    echo "Switching to main branch..."
    git checkout main
fi

echo "Attempting to merge feature branch..."
git merge cursor/create-and-deploy-new-content-568b --no-edit

echo "Pushing to main..."
git push origin main

echo "✅ Merge completed!"