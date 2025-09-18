#!/bin/bash

# Final merge script
cd /workspace

echo "=== Final Merge Process ==="

# Clean up any remaining backup files
echo "Cleaning up backup files..."
find . -name "*.backup.*" -type f -delete 2>/dev/null || true

# Add all changes
echo "Adding all changes..."
git add -A

# Check if we have any changes to commit
if git diff --cached --quiet; then
    echo "No changes to commit"
else
    echo "Committing changes..."
    git commit -m "Resolve merge conflicts and integrate Q4 content updates

- Fixed merge conflicts in src/main.tsx
- Fixed merge conflicts in src/App.css  
- Fixed merge conflicts in src/components/ErrorBoundary.tsx
- Fixed merge conflicts in src/components/PerformanceMonitor.tsx
- Fixed merge conflicts in src/components/LoadingSpinner.tsx
- Integrated Q4 services content and homepage promotional section
- Cleaned up backup files and conflict markers"
fi

# Check current branch
echo "Current branch: $(git branch --show-current)"

# Try to push to main
echo "Pushing to main..."
git push origin main || echo "Push failed, trying to pull first..."

# If push failed, try to pull and merge
git pull origin main || echo "Pull failed"

# Try to push again
git push origin main || echo "Final push failed"

echo "=== Merge Process Complete ==="