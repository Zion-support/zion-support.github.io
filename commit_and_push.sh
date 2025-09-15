#!/bin/bash

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