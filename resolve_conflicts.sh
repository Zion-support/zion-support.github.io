#!/bin/bash

# Script to resolve merge conflicts in app/page.tsx
echo "Resolving conflicts in app/page.tsx..."

# Remove all conflict markers and keep both sections
sed -i '/<<<<<<< HEAD/,/=======/d' app/page.tsx
sed -i '/=======/,/>>>>>>> /d' app/page.tsx

echo "Conflicts resolved in app/page.tsx"

# Resolve conflicts in other files
echo "Resolving conflicts in other files..."

# Remove conflict markers from all files
find . -name "*.tsx" -type f -exec sed -i '/<<<<<<< HEAD/,/=======/d' {} \;
find . -name "*.tsx" -type f -exec sed -i '/=======/,/>>>>>>> /d' {} \;

echo "All conflicts resolved"