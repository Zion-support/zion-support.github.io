#!/bin/bash

echo "Resolving merge conflicts..."

# Accept our version for content conflicts
git checkout --ours App.tsx
git checkout --ours App_minimal.tsx
git checkout --ours App_test.tsx
git checkout --ours EnhancedFooter.tsx
git checkout --ours SidebarNavigation.tsx

# Remove files that were deleted in our branch (accept deletion)
git rm api/create-payment-intent.js
git rm -rf app-broken/
git rm -rf app-disabled/

# Add resolved files
git add App.tsx App_minimal.tsx App_test.tsx EnhancedFooter.tsx SidebarNavigation.tsx

echo "Merge conflicts resolved. Ready to commit."