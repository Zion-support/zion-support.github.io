#!/bin/bash

# Add all changes
git add .

# Commit changes
git commit -m "Fix Netlify build configuration and dependencies

- Updated package.json with proper build scripts
- Fixed Vite configuration for production builds
- Ensured all dependencies are properly installed
- Build now passes successfully with no errors
- Ready for Netlify deployment"

# Push to main branch
git push origin main

echo "Changes committed and pushed to main branch successfully!"
