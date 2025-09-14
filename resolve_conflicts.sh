#!/bin/bash

echo "Resolving merge conflicts systematically..."

# Keep our version for important content and navigation files
echo "Keeping our version for content and navigation files..."
git checkout --ours app/ai-innovation-showcase-2025/page.tsx
git checkout --ours app/ai-innovation-showcase-2026/page.tsx
git checkout --ours app/content-showcase/page.tsx
git checkout --ours app/case-studies/page.tsx
git checkout --ours app/sitemap.ts
git checkout --ours app/sitemap.xml

# Keep our version for enhanced components
echo "Keeping our version for enhanced components..."
git checkout --ours components/*.tsx
git checkout --ours src/components/*.tsx

# Keep our version for blog and case study content
echo "Keeping our version for blog and case study content..."
git checkout --ours src/pages/blog/*.md
git checkout --ours src/pages/case-studies/*.md
git checkout --ours src/pages/resources/*.md

# Keep remote version for generated files and reports
echo "Keeping remote version for generated files..."
git checkout --theirs auto-heal-report.md
git checkout --theirs data/marketing/*.json
git checkout --theirs public/search/index.json
git checkout --theirs public/reports/metadata/*.html
git checkout --theirs public/reports/metadata/*.json

# Handle add/add conflicts by removing one version
echo "Handling add/add conflicts..."
git rm -f components/AdvancedPerformanceOptimizer.tsx 2>/dev/null || true
git rm -f public/reports/metadata/index.html 2>/dev/null || true
git rm -f public/reports/metadata/latest.json 2>/dev/null || true

# Handle rename conflicts by keeping the newer version
echo "Handling rename conflicts..."
git rm -f "components/NewContent2026UltimateShowcase.tsx" 2>/dev/null || true

echo "Conflict resolution completed!"