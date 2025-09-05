#!/bin/bash

# Git operations script
cd /workspace

echo "Adding all changes..."
git add .

echo "Committing changes..."
git commit -m "Fix lint errors: Add eslint-disable comments for console statements and fix unused variables"

echo "Pushing changes..."
git push

echo "Checking current branch..."
git branch --show-current

echo "Switching to main branch..."
git checkout main

echo "Merging changes..."
git merge $(git branch --show-current)

echo "Pushing merged changes to main..."
git push origin main

echo "Git operations completed!"