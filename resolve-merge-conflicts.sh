#!/bin/bash

echo "🔧 Resolving merge conflicts by choosing main branch version..."

# List of conflicted files
conflicted_files=(
    "middleware.ts"
    "pages/404.tsx"
    "pages/_app.tsx"
    "pages/about.tsx"
    "pages/api/analytics.ts"
    "pages/api/error-reporting.ts"
    "pages/api/health.ts"
    "pages/api/image-optimization.ts"
    "pages/api/security-events.ts"
    "pages/dashboard.tsx"
    "pages/enhanced-home.tsx"
    "pages/faq.tsx"
    "pages/index.tsx"
    "pages/portfolio.tsx"
    "pages/privacy-policy.tsx"
    "pages/services.tsx"
    "src/components/AccessibilityAuditor.tsx"
    "src/components/PerformanceOptimizer.tsx"
    "src/components/SEO.tsx"
    "src/components/WebVitals.tsx"
    "src/hooks/useAnalytics.ts"
    "src/utils/errorHandling.ts"
)

# Resolve conflicts by choosing main branch version
for file in "${conflicted_files[@]}"; do
    if [ -f "$file" ]; then
        echo "📝 Resolving conflicts in $file..."
        git checkout --theirs "$file"
        git add "$file"
        echo "✅ Resolved $file"
    else
        echo "⚠️ File $file not found, skipping..."
    fi
done

echo "🎉 All merge conflicts resolved!"
echo "📊 Summary: Resolved ${#conflicted_files[@]} files"