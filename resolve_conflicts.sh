#!/bin/bash

echo "Resolving merge conflicts..."

# Accept incoming changes for most files (from origin/merge-automation-changes)
git status --porcelain | grep "^UU" | cut -c4- | xargs -I {} git checkout --theirs {}

# Handle modify/delete conflicts by keeping the file
git status --porcelain | grep "^DU" | cut -c4- | xargs -I {} git add {}

# Handle delete/modify conflicts by keeping the file
git status --porcelain | grep "^UD" | cut -c4- | xargs -I {} git add {}

# Add all resolved files
git add .

echo "Conflicts resolved. Committing merge..."
git commit -m "Resolve merge conflicts by accepting origin/merge-automation-changes"

echo "Merge completed successfully!"