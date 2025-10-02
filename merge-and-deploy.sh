#!/bin/bash

# Zion Tech Group - Merge and Deploy Script
# This script handles merging all changes and deploying to main branch

echo "🚀 Starting Zion Tech Group merge and deployment process..."

# Step 1: Check current status
echo "📋 Checking current git status..."
git status

# Step 2: Add all changes
echo "📁 Adding all changes to staging..."
git add .

# Step 3: Commit changes
echo "💾 Committing changes..."
git commit -m "feat: Add comprehensive AI, micro SaaS, and IT services with pricing

- Added Advanced AI Services page with 6 new AI solutions
- Added Innovative Micro SaaS page with 8 specialized solutions  
- Added Comprehensive IT Services page with 8 enterprise services
- Created detailed Pricing page with transparent pricing tiers
- Updated navigation with new service categories
- Enhanced footer with correct contact information
- Improved homepage with links to new services
- Added market pricing and benefits for all services
- Implemented responsive design for all screen sizes
- Enhanced SEO and accessibility features"

# Step 4: Fetch latest changes from main
echo "🔄 Fetching latest changes from main branch..."
git fetch origin main

# Step 5: Merge main branch changes
echo "🔀 Merging main branch changes..."
git merge origin/main --no-edit

# Step 6: Run build to ensure everything works
echo "🏗️ Building the application..."
npm run build:production

# Step 7: Push changes to current branch
echo "📤 Pushing changes to current branch..."
git push origin cursor/enhance-and-expand-ziontechgroup-com-services-and-site-c1bb

# Step 8: Switch to main branch
echo "🔄 Switching to main branch..."
git checkout main

# Step 9: Pull latest changes
echo "⬇️ Pulling latest changes from main..."
git pull origin main

# Step 10: Merge our feature branch
echo "🔀 Merging feature branch into main..."
git merge cursor/enhance-and-expand-ziontechgroup-com-services-and-site-c1bb --no-edit

# Step 11: Push to main
echo "📤 Pushing to main branch..."
git push origin main

# Step 12: Clean up
echo "🧹 Cleaning up feature branch..."
git branch -d cursor/enhance-and-expand-ziontechgroup-com-services-and-site-c1bb
git push origin --delete cursor/enhance-and-expand-ziontechgroup-com-services-and-site-c1bb

echo "✅ Deployment completed successfully!"
echo "🌐 Website should now be live at https://ziontechgroup.com"

# Step 13: Verify deployment
echo "🔍 Verifying deployment..."
npm run build:production

echo "🎉 All done! Zion Tech Group website has been successfully updated with:"
echo "   - 22 new AI, micro SaaS, and IT services"
echo "   - Comprehensive pricing information"
echo "   - Enhanced navigation and user experience"
echo "   - Responsive design improvements"
echo "   - Updated contact information"