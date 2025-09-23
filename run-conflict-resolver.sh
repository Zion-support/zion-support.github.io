#!/bin/bash

echo "Starting conflict resolution..."

# Run the conflict resolver
node /workspace/final-conflict-resolver.js

# Try to add and commit changes
echo "Adding resolved files to git..."
git add . 2>/dev/null || echo "Git add failed"

echo "Committing resolved conflicts..."
git commit -m "Resolve all merge conflicts automatically" 2>/dev/null || echo "Git commit failed"

echo "Process completed!"