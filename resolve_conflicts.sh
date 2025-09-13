#!/bin/bash

# Resolve merge conflicts and merge PRs
echo "Starting conflict resolution..."

# Add all resolved files
git add -A

# Check if we're in a merge state
if git status | grep -q "All conflicts fixed"; then
    echo "All conflicts resolved, committing..."
    git commit -m "Resolve merge conflicts and integrate Q4 content"
else
    echo "Still have conflicts, checking status..."
    git status
fi

# Push changes
git push origin main

echo "Conflict resolution complete!"