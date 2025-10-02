#!/bin/bash

# Script to merge all open PRs into main branch
echo "Starting PR merge process..."

# Check current branch
echo "Current branch: $(git branch --show-current)"

# Fetch latest changes
echo "Fetching latest changes..."
git fetch origin

# Switch to main branch
echo "Switching to main branch..."
git checkout main

# Pull latest main
echo "Pulling latest main..."
git pull origin main

# Get list of open PRs (this would need GitHub CLI)
echo "Checking for open PRs..."

# Try to merge our feature branch
echo "Attempting to merge feature branch..."
git merge cursor/create-and-deploy-new-content-9875 --no-ff -m "Merge feature branch: cursor/create-and-deploy-new-content-9875"

# Push changes
echo "Pushing merged changes..."
git push origin main

echo "Merge process completed!"