#!/bin/bash
cd /workspace

# Remove rebase state if it exists
rm -rf .git/rebase-merge 2>/dev/null

# Set HEAD to point to the branch
echo "ref: refs/heads/cursor/check-fix-push-and-merge-to-main-b340" > .git/HEAD

# Check status
git status --porcelain

# Add any changes
git add .

# Commit changes
git commit -m "fix: resolve rebase conflicts and clean up repository state"

# Push to origin
git push origin cursor/check-fix-push-and-merge-to-main-b340

# Switch to main branch
git checkout main

# Merge the feature branch
git merge cursor/check-fix-push-and-merge-to-main-b340

# Push to main
git push origin main

echo "Git operations completed successfully"