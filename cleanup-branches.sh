#!/bin/bash

# Script to clean up duplicate branches
echo "Starting branch cleanup..."

# Get all remote branches
git fetch --prune

# Count branches before cleanup
echo "Branches before cleanup:"
git branch -r | wc -l

# Delete duplicate cursor branches (keeping only the latest few)
echo "Cleaning up duplicate cursor branches..."

# Get all cursor branches and sort by date, keep only the latest 10
git for-each-ref --format='%(refname:short) %(committerdate)' refs/remotes/origin/cursor/ | \
sort -k2 -r | \
tail -n +11 | \
cut -d' ' -f1 | \
while read branch; do
    if [[ $branch == origin/cursor/* ]]; then
        echo "Deleting branch: $branch"
        git push origin --delete "${branch#origin/}" 2>/dev/null || true
    fi
done

echo "Branch cleanup completed!"
echo "Branches after cleanup:"
git branch -r | wc -l