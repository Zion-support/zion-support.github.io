#!/bin/bash

# Script to merge our fix branch into main
echo "Starting merge process..."

# Switch to main branch
git checkout main

# Pull latest changes
git pull origin main

# Merge our fix branch
git merge cursor/fix-errors-and-merge-to-main-4198

# Push the merged changes
git push origin main

echo "Merge completed successfully!"