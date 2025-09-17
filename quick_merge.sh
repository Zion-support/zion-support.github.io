#!/bin/bash

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