#!/bin/bash

# Minimal merge script
cd /workspace

echo "Starting minimal merge..."

# Check status
git status --short

# Switch to main
git checkout main

# Pull latest
git pull origin main

# Fetch all
git fetch --all

# Get cursor branches
BRANCHES=$(git branch -r | grep "origin/cursor/" | sed 's/origin\///' | head -5)

echo "Found branches: $BRANCHES"

# Process first branch
for branch in $BRANCHES; do
    echo "Processing: $branch"
    
    # Try merge
    if git merge --no-commit --no-ff "origin/$branch" 2>/dev/null; then
        echo "Merged: $branch"
        git commit -m "Merge $branch"
    else
        echo "Conflicts in: $branch"
        # Resolve conflicts
        git diff --name-only --diff-filter=U | while read file; do
            if [ -f "$file" ]; then
                echo "Resolving: $file"
                # Remove conflict markers
