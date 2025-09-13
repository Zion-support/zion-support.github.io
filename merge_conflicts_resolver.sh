#!/bin/bash

# Merge Conflicts Resolver Script
# This script will help resolve merge conflicts and merge PRs

echo "Starting merge conflicts resolution process..."

# Check current branch
echo "Current branch:"
git branch --show-current

# Check git status
echo "Git status:"
git status

# Check for merge conflicts
echo "Checking for merge conflicts..."
if git diff --name-only --diff-filter=U | grep -q .; then
    echo "Found merge conflicts in the following files:"
    git diff --name-only --diff-filter=U
else
    echo "No merge conflicts found."
fi

# Get list of remote branches
echo "Remote branches:"
git branch -r | head -20

# Try to merge main into current branch
echo "Attempting to merge main into current branch..."
git fetch origin main
git merge origin/main

echo "Merge process completed."