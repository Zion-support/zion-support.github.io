#!/bin/bash

# Script to merge current branch into main
echo "Starting merge process..."

# Checkout main branch
git checkout main

# Pull latest changes from origin
git pull origin main

# Merge the feature branch
git merge cursor/fix-errors-and-merge-to-main-258e

# Push the merged changes
git push origin main

echo "Merge completed successfully!"