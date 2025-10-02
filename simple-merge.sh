#!/bin/bash
set -e

echo "Starting simple merge process..."

# Ensure we're in the right directory
cd /workspace

# Show current status
echo "Current directory: $(pwd)"
echo "Git status:"
git status --porcelain

# Check if we're on main branch
CURRENT_BRANCH=$(git rev-parse --abbrev-ref HEAD)
echo "Current branch: $CURRENT_BRANCH"

# If not on main, switch to main
if [ "$CURRENT_BRANCH" != "main" ]; then
    echo "Switching to main branch..."
    git checkout main
fi

# Fetch latest changes
echo "Fetching latest changes..."
git fetch origin

# Merge the feature branch
echo "Merging feature branch..."
git merge origin/cursor/create-and-deploy-new-content-9875 --no-ff -m "Merge: Add revolutionary new content and enhanced advertising

- Created 6 new blog posts on AI Autonomous Infrastructure, Quantum-AI Hybrid Computing, Zero Trust Security, Content AI, Customer Experience, and Supply Chain Optimization
- Added 5 new case studies showcasing breakthrough results
- Developed 6 new services with enhanced features
- Enhanced promotional banners with dynamic animations
- Created NewContentShowcase component
- Updated homepage with breakthrough messaging"

# Push the changes
echo "Pushing merged changes..."
git push origin main

echo "Merge completed successfully!"