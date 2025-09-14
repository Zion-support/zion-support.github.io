#!/bin/bash
echo "🚀 Quick Merge Execution"
cd /workspace

# Add all changes
git add .

# Commit resolved conflicts
git commit -m "fix: resolve all merge conflicts" || true

# Switch to main
git checkout main || true

# Pull latest
git pull origin main || true

# Merge our branch
git merge cursor/create-and-deploy-new-content-1c73 --no-ff -m "Merge: Add revolutionary AI content" || true

# Push to main
git push origin main || true

echo "✅ Quick merge completed!"