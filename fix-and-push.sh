#!/bin/bash

echo "Fixing Netlify build and pushing changes..."

# Add all changes
git add .

# Commit changes
git commit -m "Fix Netlify build issues: add missing dependencies and fix config syntax

- Added missing vite-plugin-compression dependency
- Added missing tailwindcss-animate dependency  
- Fixed tailwind.config.ts syntax errors
- Fixed vite.config.ts path resolution

These changes should resolve the Netlify build failures."

# Push to main branch
git push origin main

echo "Changes pushed successfully!"