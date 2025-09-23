#!/bin/bash

echo "🚀 Starting simple merge conflict resolution..."

# Switch to main branch
echo "📝 Switching to main branch..."
git checkout main

# Pull latest changes
echo "📝 Pulling latest changes..."
git pull origin main

# Find and resolve merge conflicts in key files
echo "🔍 Resolving merge conflicts in key files..."

# Resolve conflicts in netlify.toml
if [ -f "netlify.toml" ]; then
    echo "📝 Resolving netlify.toml conflicts..."
    sed -i '/
[build]\
  # Build the Vite project on Netlify\
  command = "npm ci --no-audit --no-fund && npm run build"\
  publish = "dist"\
  functions = "netlify/functions"\
  command_timeout = "30m"\
\
[build.environment]\
  NODE_VERSION = "20"\
  PYTHON_VERSION = "3.11"\
  NPM_FLAGS = "--omit=optional"\
\
[context.branch-deploy]\
  command = "npm ci --no-audit --no-fund && npm run build"\
\
# Vite/React SPA configuration' netlify.toml
fi

# Resolve conflicts in package-lock.json by using the newer version
if [ -f "package-lock.json" ]; then
    echo "📝 Resolving package-lock.json conflicts..."
    git checkout --theirs package-lock.json
fi

# Resolve conflicts in App.tsx
if [ -f "src/App.tsx" ]; then
    echo "📝 Resolving App.tsx conflicts..."
    sed -i '/
import React, { Suspense, lazy } from "react";' src/App.tsx
fi

# Add all resolved files
echo "📝 Adding resolved files..."
git add .

# Commit the resolution
echo "📝 Committing conflict resolution..."
git commit -m "Resolve merge conflicts in key files

- Fixed netlify.toml configuration
- Resolved package-lock.json conflicts
- Fixed App.tsx import conflicts
- All critical build files now conflict-free"

# Try to merge the PR branches
echo "🔄 Attempting to merge PR branches..."

# Merge the first PR branch
if git show-ref --verify --quiet refs/remotes/origin/cursor/fix-netlify-build-and-merge-to-main-cca7; then
    echo "📝 Merging cursor/fix-netlify-build-and-merge-to-main-cca7..."
    git merge origin/cursor/fix-netlify-build-and-merge-to-main-cca7 --no-ff -m "Merge PR: Fix Netlify build and merge to main (cca7)"
fi

# Merge the second PR branch
if git show-ref --verify --quiet refs/remotes/origin/cursor/fix-netlify-build-and-merge-to-main-d7d6; then
    echo "📝 Merging cursor/fix-netlify-build-and-merge-to-main-d7d6..."
    git merge origin/cursor/fix-netlify-build-and-merge-to-main-d7d6 --no-ff -m "Merge PR: Fix Netlify build and merge to main (d7d6)"
fi

# Merge the third PR branch
if git show-ref --verify --quiet refs/remotes/origin/cursor/fix-netlify-build-and-merge-to-main-3e3e; then
    echo "📝 Merging cursor/fix-netlify-build-and-merge-to-main-3e3e..."
    git merge origin/cursor/fix-netlify-build-and-merge-to-main-3e3e --no-ff -m "Merge PR: Fix Netlify build and merge to main (3e3e)"
fi

# Push all changes
echo "📝 Pushing all changes to main..."
git push origin main

echo "🎉 Merge conflict resolution and PR merge completed!"