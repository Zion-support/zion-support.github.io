#!/bin/bash

<<<<<<< HEAD
# Quick merge script
cd /workspace

echo "Current directory: $(pwd)"
echo "Current branch: $(git branch --show-current)"

# Reset to clean state
git reset --hard HEAD

# Fetch all branches
git fetch origin

# Switch to main
git checkout main

# Merge the feature branch
git merge cursor/create-and-deploy-new-content-96e6 --no-commit

# Check for conflicts
if git status --porcelain | grep -q "^UU\|^AA\|^DD"; then
    echo "Conflicts found, resolving automatically..."
    git checkout --theirs .
    git add .
    git commit -m "Merge: Resolve conflicts automatically"
else
    echo "No conflicts found"
    git commit -m "Merge: Add revolutionary new content and enhanced frontend advertising"
fi

# Push to main
git push origin main

echo "Merge completed!"
=======
# Quick merge script for resolving conflicts and merging PRs
echo "🚀 Quick Merge Script - Resolving Conflicts and Merging PRs"

# Step 1: Check status
echo "📍 Checking current status..."
git status --short

# Step 2: Switch to main and pull latest
echo "🔄 Switching to main branch and pulling latest changes..."
git checkout main
git pull origin main

# Step 3: Attempt merge
echo "🔀 Attempting to merge feature branch..."
if git merge cursor/create-and-deploy-new-content-ee85 --no-edit; then
    echo "✅ Merge successful!"
    
    # Step 4: Push changes
    echo "🚀 Pushing changes to remote..."
    git push origin main
    
    # Step 5: Clean up
    echo "🧹 Cleaning up feature branch..."
    git branch -d cursor/create-and-deploy-new-content-ee85
    git push origin --delete cursor/create-and-deploy-new-content-ee85
    
    echo "🎉 Merge completed successfully!"
    echo "✅ All changes have been merged into main branch"
else
    echo "⚠️  Merge conflicts detected. Please resolve manually:"
    echo "1. Check conflicted files: git status"
    echo "2. Edit files to resolve conflicts"
    echo "3. Add resolved files: git add ."
    echo "4. Complete merge: git commit"
    echo "5. Push changes: git push origin main"
fi

echo "📋 To check for other open PRs, visit: https://github.com/Zion-Holdings/zion.app/pulls"
<<<<<<< HEAD
>>>>>>> da2eb06a15a0119517a5cf6f65fb46cca69fd217
=======
>>>>>>> origin/backup-main-20250918-004015
