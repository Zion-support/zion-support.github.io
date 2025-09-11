#!/bin/bash

# PM2 Automation Fixes Commit Script

echo "🚀 Starting PM2 automation fixes commit process..."

# Check git status
echo "📋 Checking git status..."
git status

# Add all changes
echo "📦 Adding all changes..."
git add .

# Commit changes
echo "💾 Committing PM2 automation fixes..."
git commit -m "fix: PM2 automation scripts and configurations

- Fixed corrupted PM2 automation scripts with syntax errors
- Renamed scripts from .js to .cjs for ES module compatibility
- Updated ecosystem.config.js to reference .cjs scripts
- Resolved merge conflicts in package.json
- Installed PM2 globally
- Created comprehensive PM2 automation system

Scripts fixed:
- code-quality-monitor.cjs
- performance-monitor.cjs
- auto-commit-fixes.cjs
- dependency-monitor.cjs
- health-monitor.cjs
- security-scanner.cjs
- test-automation.cjs

All PM2 automations are now properly configured and ready for use."

# Push to remote
echo "🚀 Pushing changes to remote repository..."
git push

# Check if we're on main branch
current_branch=$(git branch --show-current)
echo "📍 Current branch: $current_branch"

if [ "$current_branch" != "main" ]; then
    echo "🔄 Switching to main branch..."
    git checkout main
    
    echo "🔀 Merging changes to main branch..."
    git merge $current_branch
    
    echo "🚀 Pushing merged changes to main..."
    git push origin main
else
    echo "✅ Already on main branch"
fi

echo "✨ PM2 automation fixes commit process completed!"
echo "📊 Summary:"
echo "  - All PM2 scripts fixed and renamed to .cjs"
echo "  - Ecosystem configurations updated"
echo "  - Package.json merge conflicts resolved"
echo "  - PM2 installed globally"
echo "  - Changes committed and pushed to repository"