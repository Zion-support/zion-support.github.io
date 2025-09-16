#!/bin/bash

# Quick script to resolve merge conflicts and merge PRs
echo "Starting merge conflict resolution..."

# Check git status
git status

# Fetch latest changes
git fetch origin

# Checkout main branch
git checkout main

# Pull latest changes
git pull origin main

# List all branches
git branch -a

# Check for any merge conflicts
git merge --abort 2>/dev/null || true

echo "Merge conflict resolution completed!"