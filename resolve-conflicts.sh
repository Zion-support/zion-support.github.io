#!/bin/bash

# Resolve merge conflicts automatically
echo "Resolving merge conflicts..."

# Accept our version for page.tsx (keep the version with our new banners)
git checkout --ours app/page.tsx

# Accept our version for layout.tsx  
git checkout --ours app/layout.tsx 2>/dev/null || true

# Stage the resolved files
git add app/page.tsx
git add app/layout.tsx 2>/dev/null || true

# Complete the merge
git commit -m "Resolve merge conflicts - keep new 2026 AI breakthrough content and banners" --no-edit 2>/dev/null || true

echo "Merge conflicts resolved!"
