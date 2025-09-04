#!/bin/bash

echo "Adding all changes..."
git add .

echo "Committing changes..."
git commit -m "Fix syntax errors: Add missing semicolon in main.tsx and complete App.tsx structure"

echo "Pushing to current branch..."
git push origin HEAD

echo "Checking out main branch..."
git checkout main

echo "Merging current branch into main..."
git merge cursor/fix-syntax-push-and-merge-to-main-ba8a

echo "Pushing main branch..."
git push origin main

echo "Operations completed successfully!"