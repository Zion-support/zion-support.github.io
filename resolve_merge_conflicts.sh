#!/bin/bash

# Resolve merge conflicts by accepting the remote version (theirs) for most files
# This will keep the latest changes from the remote main branch

echo "Resolving merge conflicts..."

# Accept remote version for most files
git checkout --theirs index.html
git checkout --theirs package.json
git checkout --theirs package-lock.json
git checkout --theirs src/App.tsx
git checkout --theirs src/Footer.tsx
git checkout --theirs src/Header.tsx
git checkout --theirs src/components/EnhancedContentShowcase.tsx
git checkout --theirs src/pages/UltimateTechShowcase2026.tsx

# Remove the deleted file
git rm src/components/NewContentPromotionBanner.tsx

# Add all resolved files
git add .

echo "Merge conflicts resolved!"