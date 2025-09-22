#!/bin/bash

# Git operations script
cd /workspace

echo "Checking git status..."
git status

echo "Adding all changes..."
git add .

echo "Committing changes..."
git commit -m "Fix errors and improve codebase - comprehensive error checking and code quality improvements"

echo "Pushing changes..."
git push

echo "Checking current branch..."
git branch

echo "Switching to main branch if not already on it..."
git checkout main

echo "Merging changes..."
git merge

echo "Pushing to main..."
git push origin main

echo "Git operations completed successfully!"