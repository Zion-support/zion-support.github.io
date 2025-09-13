#!/bin/bash

<<<<<<< HEAD
cd /workspace

echo "Resolving merge conflicts..."

# Add all resolved files
git add .

# Commit the merge
git commit -m "Resolve merge conflicts in tailwind.config.ts, Header.tsx, Footer.tsx, and EnhancedLayout.tsx"

echo "Merge conflicts resolved and committed successfully!"
=======
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
>>>>>>> 4deb4077f3a1485ea1fb5dfd5993e906c62afdfa
