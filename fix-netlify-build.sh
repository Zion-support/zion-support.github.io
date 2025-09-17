#!/bin/bash

# Fix Netlify build configuration and push changes

echo "Starting Netlify build fix process..."

# Check current branch
echo "Current branch:"
git branch --show-current

# Check git status
echo "Git status:"
git status --porcelain

# Add all changes
echo "Adding changes..."
git add .

# Commit changes
echo "Committing changes..."
git commit -m "Fix Netlify build configuration

- Remove vite-plugin-compression dependency from vite.config.ts
- Update Netlify build command to use standard npm run build
- Fix path resolution issues in Vite configuration

This should resolve Netlify build failures."

# Push to main branch
echo "Pushing to main branch..."
git push origin main

echo "Netlify build fix complete!"