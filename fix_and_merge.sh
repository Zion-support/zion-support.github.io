#!/bin/bash

# Fix and merge script for Netlify build
set -e

echo "Starting fix and merge process..."

# Check current branch
echo "Current branch:"
git branch --show-current

# Add the fixed main.tsx file
echo "Adding fixed main.tsx..."
git add src/main.tsx

# Commit the changes
echo "Committing changes..."
git commit -m "Fix: Complete main.tsx with ReactDOM.render for proper app initialization

- Added missing ReactDOM.createRoot and render calls
- Added proper error handling for root element
- Wrapped App in React.StrictMode for better development experience
- This fixes the critical issue preventing the app from rendering"

# Switch to main branch
echo "Switching to main branch..."
git checkout main

# Merge the fix branch
echo "Merging fix branch..."
git merge cursor/fix-netlify-build-and-merge-to-main-78dd --no-ff -m "Merge: Fix Netlify build issues

- Fixed main.tsx to properly initialize React app
- Ensured proper ReactDOM rendering
- Build should now work correctly on Netlify"

# Push to main
echo "Pushing to main..."
git push origin main

echo "Fix and merge completed successfully!"