#!/bin/bash

echo "Committing and pushing Netlify build fixes..."

# Add all changes
git add .

# Commit with descriptive message
git commit -m "Fix Netlify build issues

- Added missing vite-plugin-compression dependency
- Simplified Vite configuration for better Netlify compatibility
- Disabled compression and visualizer plugins that may cause build issues
- Updated Next.js config for Vite project compatibility
- Simplified build configuration to use esbuild instead of terser

These changes should resolve the Netlify build timeout issues."

# Push to main branch
git push origin main

echo "Changes committed and pushed successfully!"
