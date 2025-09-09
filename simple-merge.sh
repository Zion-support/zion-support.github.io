#!/bin/bash

# Simple merge script
cd /workspace

echo "Current directory: $(pwd)"
echo "Git status:"
git status

echo "Current branch:"
git branch

echo "Available branches:"
git branch -r | head -10

# Merge specific branch if provided
if [ $# -eq 1 ]; then
    echo "Merging branch: $1"
    git checkout main
    git pull origin main
    git merge "$1"
    git push origin main
fi
