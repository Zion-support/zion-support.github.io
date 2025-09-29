#!/bin/bash

# Simple Merge Solution
echo "Starting merge process..."

# Make the script executable
chmod +x "$0"

# Check git status
git status

# Fetch latest
git fetch origin

# Merge origin/main
git merge origin/main || {
    echo "Conflicts found, resolving..."
    python3 resolve_conflicts.py
    git add .
    git commit -m "Resolved merge conflicts"
}

# Test build
pnpm run build:no-check

# Push to main
git push origin main

echo "Merge complete!"