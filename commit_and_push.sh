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

<<<<<<< HEAD
echo "Changes committed and pushed to main branch successfully!"
=======
echo "Changes committed and pushed to main branch successfully!"
>>>>>>> origin/backup-main-20250918-004015
