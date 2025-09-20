#!/bin/bash

echo "Starting simple merge process..."

# Add files
git add src/pages/RevolutionaryTechShowcase2026.tsx
git add src/pages/NextGenInnovationHub2026.tsx  
git add src/pages/InterdimensionalTechRevolution2026.tsx

# Commit
git commit -m "Fix merge conflicts in showcase pages"

# Switch to main
git checkout main

# Merge
git merge merge-cursor-fix-netlify-build-and-merge-to-main-3445

# Push
git push origin main

echo "Merge completed!"