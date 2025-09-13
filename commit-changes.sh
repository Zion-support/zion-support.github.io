#!/bin/bash

echo "🚀 Committing resolved changes..."

cd /workspace

# Add all changes
git add .

# Check if there are changes to commit
if ! git diff --cached --quiet; then
    git commit -m "resolve: Fix merge conflicts and add new content

- Resolved merge conflicts in Services.tsx and Sitemap.tsx
- Added new blog post: AI 2025 Enterprise Automation Mastery
- Added new case study: Global Enterprise AI Transformation 2025
- Added new resource: AI Automation Implementation Checklist 2025
- Added FreshContent2025PromotionBanner component
- Added NewResourcePromotionBanner component
- Updated homepage with new promotional banners
- All critical conflicts resolved and new content deployed"

    echo "✅ Changes committed successfully!"
else
    echo "ℹ️  No changes to commit"
fi

echo "🎉 Process completed!"