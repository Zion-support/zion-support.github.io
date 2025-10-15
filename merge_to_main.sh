#!/bin/bash

# Merge error fixes to main branch
echo "Merging error fixes to main branch..."

# Switch to main branch
git checkout main

# Pull latest changes
git pull origin main

# Merge the fix branch
git merge cursor/fix-errors-and-merge-to-main-35c1 --no-ff -m "Merge error fixes: resolve merge conflicts, syntax errors, and unused imports"

# Push to main
git push origin main

echo "Successfully merged error fixes to main branch!"