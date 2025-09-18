#!/bin/bash

# Fix and commit Netlify build issues
echo "Starting Netlify build fix process..."

# Check git status
echo "Checking git status..."
git status --porcelain

# Add all changes
echo "Adding all changes..."
git add .

# Commit changes
echo "Committing changes..."
git commit -m "Fix Netlify build issues: resolve merge conflicts in App.tsx, fix UI components, and update imports"

# Push to main branch
echo "Pushing to main branch..."
git push origin main

echo "Build fix process completed!"