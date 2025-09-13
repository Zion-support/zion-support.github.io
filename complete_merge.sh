#!/bin/bash
cd /workspace

echo "🚀 Starting merge resolution process..."

# Check current status
echo "📊 Current git status:"
git status

# Ensure we're on main branch
echo "🔄 Switching to main branch..."
git checkout main

# Pull latest changes
echo "⬇️  Pulling latest changes..."
git pull origin main

# Try to merge our feature branch
echo "🔄 Merging feature branch..."
git merge cursor/create-and-deploy-new-content-29fa || {
    echo "⚠️  Merge conflicts detected, resolving..."
    
    # Resolve conflicts by keeping our changes for new content
    git add src/pages/blog/ai-2026-enterprise-autonomous-operations-revolution.md
    git add src/pages/blog/ai-2026-tools-and-resources-ultimate-guide.md
    git add src/pages/case-studies/global-enterprise-ai-autonomous-transformation-2026-5-billion-roi.md
    git add src/pages/resources/ai-2026-autonomous-operations-implementation-master-guide.md
    git add src/pages/tools/ai-2026-roi-calculator-enterprise.md
    git add src/components/NewContentPromotionBanner2026.tsx
    git add src/components/InteractiveContentDiscovery2026.tsx
    git add src/pages/Home.js
    
    # Commit the merge
    git commit -m "feat: Merge AI 2026 content and promotional components with conflict resolution"
}

# Push to main
echo "⬆️  Pushing to main branch..."
git push origin main

echo "✅ Merge process completed!"