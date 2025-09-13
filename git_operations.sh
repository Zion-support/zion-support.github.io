#!/bin/bash

# Simple git operations script
cd /workspace

echo "Adding all changes..."
git add -A

echo "Checking git status..."
git status --porcelain

echo "Committing changes..."
git commit -m "Resolve merge conflicts and integrate Q4 content updates" || echo "No changes to commit"

echo "Checking current branch..."
git branch --show-current

echo "Pushing to origin..."
git push origin main || echo "Push failed"

echo "Done!"