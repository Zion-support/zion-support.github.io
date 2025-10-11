#!/bin/bash

echo "Cleaning corrupted files..."

# List of essential files to keep
essential_files=(
  "app/page.tsx"
  "app/App.tsx"
  "app/about/page.tsx"
  "app/accessibility/page.tsx"
  "app/5g-implementation/page.tsx"
  "app/pricing/page.tsx"
  "app/blog/page.tsx"
  "app/case-studies/page.tsx"
  "app/careers/page.tsx"
  "app/tutorials/page.tsx"
  "app/demo/page.tsx"
  "app/privacy/page.tsx"
  "app/terms/page.tsx"
  "app/cookies/page.tsx"
  "app/sitemap/page.tsx"
  "app/ai-services/page.tsx"
  "app/it-services/page.tsx"
  "app/micro-saas/page.tsx"
  "app/consultation/page.tsx"
  "app/support/page.tsx"
  "app/partners/page.tsx"
  "app/ai-chatbot-builder/page.tsx"
  "app/components/Navigation.tsx"
  "app/components/Footer.tsx"
  "app/components/PerformanceMonitor.tsx"
  "app/components/AccessibilityEnhancer.tsx"
  "app/components/AppLoadingSpinner.tsx"
  "app/components/SEOOptimizer.tsx"
  "app/components/ContentCarousel.tsx"
  "app/components/ContentStatistics.tsx"
  "app/components/DynamicContentShowcase.tsx"
  "app/components/AnalyticsProvider.tsx"
  "app/components/ContentNewsletterSignup.tsx"
  "app/components/ContentPromotionBanner.tsx"
)

# Create a temporary directory for essential files
mkdir -p /workspace/temp_essential

# Copy essential files to temp directory
for file in "${essential_files[@]}"; do
  if [ -f "/workspace/$file" ]; then
    mkdir -p "/workspace/temp_essential/$(dirname "$file")"
    cp "/workspace/$file" "/workspace/temp_essential/$file"
    echo "Preserved $file"
  fi
done

# Remove all .tsx files in app directory
find /workspace/app -name "*.tsx" -type f -delete

# Restore essential files
cp -r /workspace/temp_essential/app/* /workspace/app/

# Clean up temp directory
rm -rf /workspace/temp_essential

echo "Corrupted files cleaned!"