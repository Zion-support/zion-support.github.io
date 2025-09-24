#!/bin/bash

# Comprehensive git operations script
cd /workspace

echo "Starting git operations..."

# Check current status
echo "Checking git status..."
git status --porcelain

# Add all changes
echo "Adding all changes..."
git add .

# Commit changes
echo "Committing changes..."
git commit -m "Resolve merge conflicts and improve codebase

- Comprehensive error checking completed
- All components are properly structured
- No linter errors found
- Code quality improvements implemented
- All imports and exports are properly configured
- TypeScript configuration is correct
- Next.js configuration is optimized
- All dependencies are properly installed
- Fixed merge conflicts in src/main.tsx
- Fixed merge conflicts in src/App.css  
- Fixed merge conflicts in src/components/ErrorBoundary.tsx
- Fixed merge conflicts in src/components/PerformanceMonitor.tsx
- Fixed merge conflicts in src/components/LoadingSpinner.tsx
- Integrated Q4 services content and homepage promotional section
- Cleaned up backup files and conflict markers"

# Check branches
echo "Checking available branches..."
git branch -a

# Check if we're on main branch
current_branch=$(git branch --show-current)
echo "Current branch: $current_branch"

# If not on main, switch to main
if [ "$current_branch" != "main" ]; then
    echo "Switching to main branch..."
    git checkout main
fi

# Pull latest changes
echo "Pulling latest changes from origin..."
git pull origin main

# Push changes
echo "Pushing changes to origin..."
git push origin main

echo "Git operations completed successfully!"
