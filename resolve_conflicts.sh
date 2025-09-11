#!/bin/bash

cd /workspace

echo "Resolving merge conflicts..."

# Add all resolved files
git add .

# Commit the merge
git commit -m "Resolve merge conflicts in tailwind.config.ts, Header.tsx, Footer.tsx, and EnhancedLayout.tsx"

echo "Merge conflicts resolved and committed successfully!"