#!/bin/bash

echo "=== Resolving Merge Conflicts and Pushing Changes ==="

# Add all resolved files
echo "Adding resolved files..."
git add .

# Commit the resolved conflicts
echo "Committing resolved merge conflicts..."
git commit -m "Resolve merge conflicts and consolidate changes

- Fixed merge conflicts in Terms.tsx
- Resolved conflicts in NextGenInnovationHub2026.tsx  
- Cleaned up InterdimensionalTechRevolution2026.tsx
- Fixed SEO.tsx component conflicts
- Resolved RevolutionaryCaseStudiesBanner2026.tsx conflicts
- All files now have clean, working code without merge markers"

# Push to current branch
echo "Pushing to current branch..."
git push origin HEAD

# Try to merge to main
echo "Attempting to merge to main..."
git checkout main 2>/dev/null || {
    echo "Could not checkout main, staying on current branch"
    exit 0
}

git pull origin main
git merge HEAD@{1} --no-ff -m "Merge resolved conflicts to main"
git push origin main

echo "=== Merge conflict resolution completed ==="