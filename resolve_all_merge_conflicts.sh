#!/bin/bash

# Comprehensive script to resolve all merge conflicts and merge PRs to main

echo "=== Starting comprehensive merge conflict resolution ==="

# Configure git for merge strategy
git config pull.rebase false

# Check current status
echo "Current branch: $(git rev-parse --abbrev-ref HEAD)"
echo "Current status:"
git status --short

# Pull latest changes with merge strategy
echo "Pulling latest changes from origin..."
git pull origin main --no-rebase

# Check for any remaining conflicts
if git status --porcelain | grep -q "^UU\|^AA\|^DD"; then
    echo "Found merge conflicts. Resolving..."
    
    # Find all conflicted files
    CONFLICTED_FILES=$(git status --porcelain | grep "^UU\|^AA\|^DD" | cut -c4-)
    
    for file in $CONFLICTED_FILES; do
        echo "Resolving conflict in: $file"
        
        # For build artifacts, remove them
        if [[ "$file" == *"tsconfig.tsbuildinfo"* ]] || [[ "$file" == *".next/"* ]] || [[ "$file" == *"dist/"* ]]; then
            echo "Removing build artifact: $file"
            git rm "$file" 2>/dev/null || rm -f "$file"
            continue
        fi
        
        # For script files, prefer the more complete version
        if [[ "$file" == *".sh"* ]]; then
            echo "Resolving script conflict in: $file"
            # Remove conflict markers and keep the better version
