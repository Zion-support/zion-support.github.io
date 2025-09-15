#!/bin/bash
set -e

cd /workspace

# Check if we're in a merge state
if [ -f .git/MERGE_HEAD ]; then
    echo "Completing merge..."
    git add .
    git commit -m "resolve: Complete merge with automation workflow fixes"
fi

# Push to main
git push origin main

echo "Merge completed and pushed to main"