#!/bin/bash

# Simple merge script
echo "Starting simple merge process..."

# Check current directory
pwd

# Check git status
git status --short

# Try to merge the fix branch
echo "Attempting to merge cursor/fix-netlify-build-and-merge-to-main-96e2..."
git merge cursor/fix-netlify-build-and-merge-to-main-96e2 --no-edit

# If successful, push changes
if [ $? -eq 0 ]; then
    echo "Merge successful, pushing to origin..."
    git push origin main
else
    echo "Merge failed, checking for conflicts..."
    git status
fi

echo "Merge process completed."