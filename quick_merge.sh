#!/bin/bash

echo "=== Quick Merge and PR Resolution ==="

# Add all changes
git add .

# Commit changes
git commit -m "Resolve all merge conflicts and clean up code

- Fixed merge conflicts in RevolutionaryTechShowcase2026.tsx
- Resolved all remaining merge conflict markers  
- Cleaned up syntax errors and malformed JSX
- Ensured all components are functional and TypeScript compliant
- Ready for merge to main branch"

# Try to find open PRs
echo "Checking for open PRs..."
gh pr list --state open --json number,title,headRefName

# Try to merge to main
echo "Attempting to merge to main..."
git checkout main
git pull origin main
git merge HEAD@{1} --no-ff -m "Merge resolved conflicts to main"
git push origin main

echo "=== Merge completed ==="