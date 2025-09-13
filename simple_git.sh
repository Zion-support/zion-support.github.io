#!/bin/bash

cd /workspace

echo "=== Git Status Check ==="
git status --short

echo "=== Current Branch ==="
git branch --show-current

echo "=== Adding Changes ==="
git add .

echo "=== Committing Changes ==="
git commit -m "Resolve merge conflicts and clean up repository

- Resolved conflicts in tailwind.config.ts
- Resolved conflicts in components/layout/Header.tsx  
- Resolved conflicts in components/layout/Footer.tsx
- Resolved conflicts in components/layout/EnhancedLayout.tsx
- Removed conflicted backup files
- Cleaned up repository structure"

echo "=== Git Operations Complete ==="