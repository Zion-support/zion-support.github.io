#!/bin/bash

# Switch to main branch
git checkout main

# Merge the fix branch
git merge --no-ff cursor/fix-errors-and-merge-to-main-31a1 -m "Merge: Fix merge conflicts and syntax errors across the codebase

- Resolved all merge conflict markers in React components
- Fixed import statement syntax errors  
- Cleaned up duplicate imports and unused variables
- Fixed JSX syntax issues and unterminated strings
- Updated ESLint configuration
- Applied comprehensive code cleanup across all files"

# Push to main
git push origin main

echo "Successfully merged and pushed to main branch"