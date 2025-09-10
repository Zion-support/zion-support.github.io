#!/bin/bash
set -euo pipefail

echo "=== Committing changes and preparing for merge ==="

# Add all changes
echo "Adding all changes..."
git add -A

# Commit the changes
echo "Committing changes..."
git commit -m "Resolve merge conflicts: comprehensive cleanup

- Fixed all major merge conflicts in source files
- Cleaned up corrupted files and restored functionality
- Removed duplicate and disabled files
- Restored critical components and utilities
- All essential functionality working

Ready for merge to main branch."

# Push the branch
echo "Pushing branch..."
git push origin cursor/fix-netlify-build-and-merge-to-main-c211

echo "=== Changes committed and pushed ==="
echo "Branch: cursor/fix-netlify-build-and-merge-to-main-c211"
echo "Ready for PR creation and merge to main"