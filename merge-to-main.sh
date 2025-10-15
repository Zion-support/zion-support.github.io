#!/bin/bash

# Script to merge current branch to main
# This script handles merge conflicts and creates a clean merge

echo "🚀 Starting merge process to main branch..."

# Check current branch
CURRENT_BRANCH=$(git branch --show-current)
echo "Current branch: $CURRENT_BRANCH"

# Fetch latest changes
echo "📥 Fetching latest changes from origin..."
git fetch origin

# Switch to main branch
echo "🔄 Switching to main branch..."
git checkout main

# Pull latest changes
echo "📥 Pulling latest changes from origin/main..."
git pull origin main

# Merge the feature branch
echo "🔀 Merging $CURRENT_BRANCH into main..."
git merge $CURRENT_BRANCH --no-ff -m "Merge: Add comprehensive AI and IT services with futuristic design

- Add Navigation and Footer components with futuristic design
- Create AI Services page with detailed service offerings
- Create IT Services page with comprehensive IT solutions
- Create Contact page with proper contact information
- Create About page with company information
- Add missing components: PerformanceOptimizer, SEOOptimizer, AccessibilityEnhancer
- Add ContentPromotionBanner and ContentCarousel components
- Implement futuristic design with neon effects and animations
- Add real micro SAAS services with pricing and features
- Improve responsiveness and mobile experience"

# Check for merge conflicts
if [ $? -eq 0 ]; then
    echo "✅ Merge successful! No conflicts found."
    
    # Push to origin
    echo "📤 Pushing changes to origin/main..."
    git push origin main
    
    echo "🎉 Successfully merged and pushed to main branch!"
    echo "📋 Summary of changes:"
    echo "   - Added comprehensive AI and IT services"
    echo "   - Implemented futuristic design with neon effects"
    echo "   - Created detailed service pages with pricing"
    echo "   - Added proper contact information and company details"
    echo "   - Improved responsiveness and mobile experience"
    
else
    echo "❌ Merge conflicts detected. Please resolve them manually:"
    echo "1. Check git status for conflicted files"
    echo "2. Resolve conflicts in each file"
    echo "3. Add resolved files with: git add <file>"
    echo "4. Complete merge with: git commit"
    echo "5. Push with: git push origin main"
fi

echo "🏁 Merge process completed."