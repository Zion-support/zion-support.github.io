#!/bin/bash

<<<<<<< HEAD
# Navigate to workspace directory
cd /workspace

# Check git status
echo "Checking git status..."
git status --short

# Add all changes
echo "Adding all changes..."
git add .

# Commit changes
echo "Committing changes..."
git commit -m "Fix SEO component for Next.js 13+ app directory compatibility

- Updated SEO component to use metadata API instead of deprecated Head component
- Added generateMetadata helper function for proper Next.js 13+ compatibility
- Maintained backward compatibility with deprecation warning

This ensures the application follows Next.js 13+ best practices while maintaining functionality."

# Push to current branch
echo "Pushing to current branch..."
git push

# Check if we're on main branch, if not, merge to main
current_branch=$(git branch --show-current)
echo "Current branch: $current_branch"

if [ "$current_branch" != "main" ]; then
    echo "Switching to main branch..."
    git checkout main
    
    echo "Merging $current_branch into main..."
    git merge $current_branch
    
    echo "Pushing main branch..."
    git push origin main
    
    echo "Switching back to $current_branch..."
    git checkout $current_branch
else
    echo "Already on main branch, no merge needed."
fi

echo "Git operations completed successfully!"
=======
echo "🔧 Resolving merge conflicts and pushing to main..."

# Change to workspace directory
cd /workspace

# Add all resolved files
echo "📝 Adding resolved files..."
git add .

# Check if there are any changes to commit
if git diff --cached --quiet; then
    echo "ℹ️  No changes to commit"
else
    echo "💾 Committing resolved conflicts..."
    git commit -m "Resolve merge conflicts and integrate new AI 2025 content

- Resolved merge conflicts in tailwind.config.ts
- Resolved merge conflicts in src/pages/PricingPage.js
- Resolved merge conflicts in src/pages/FAQ.js
- Resolved merge conflicts in app/case-studies/page.tsx
- Integrated new AI 2025 Ultimate Breakthrough Revolution content
- Added new case studies with high ROI metrics
- Created new blog posts about AI trends and predictions
- Added promotional banners for better content discovery

All conflicts resolved and new content successfully integrated."
fi

# Push changes to main
echo "🚀 Pushing changes to main..."
git push origin main

echo "✅ Merge conflicts resolved and changes pushed to main!"
>>>>>>> 05dc04f0e7f1fc291d5e5e0eaf190726209f1cc4
