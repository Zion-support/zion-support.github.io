#!/bin/bash

# Resolve merge conflicts by accepting main branch changes
echo "Resolving merge conflicts..."

# Checkout main branch
git checkout main

# Pull latest changes
git pull origin main

# Try to merge with strategy to prefer main branch
git merge cursor/integrate-build-improve-and-re-verify-1638 -X ours

# If there are still conflicts, resolve them by keeping main branch version
if [ $? -ne 0 ]; then
    echo "Resolving remaining conflicts..."
    git status --porcelain | grep "^UU" | cut -c4- | xargs -I {} git checkout --ours {}
    git add .
    git commit -m "Resolve merge conflicts by keeping main branch changes"
fi

# Push to main
git push origin main

echo "Merge completed successfully!"