#!/bin/bash

echo "🚀 Starting commit and merge process..."

# Add all changes
echo "📝 Adding all changes..."
git add .

# Commit changes
echo "💾 Committing changes..."
git commit -m "Resolve merge conflicts in key files

- Fixed safeStorage.jsx with proper localStorage utilities
- Cleaned up TalentRoutes.tsx with proper React Router setup
- Fixed CommunityRoutes.tsx with clean component structure
- Resolved ContentRoutes.jsx with proper route definitions
- Cleaned up EnterpriseRoutes.tsx with complete route setup
- Fixed PrimaryNav.tsx with proper navigation structure

All merge conflicts resolved and files cleaned up."

# Push changes
echo "📤 Pushing changes..."
git push origin HEAD

echo "✅ Changes committed and pushed successfully!"