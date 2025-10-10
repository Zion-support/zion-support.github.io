#!/bin/bash

# Script to resolve merge conflicts by choosing the Next.js version (pr-26771)

echo "Resolving merge conflicts..."

# List of files with conflicts
files=(
  "app/App.tsx"
  "app/components/PWAInstaller.tsx"
  "app/components/AccessibilityEnhancer.tsx"
  "app/components/GlobalErrorBoundary.tsx"
  "app/components/Footer.tsx"
  "app/components/PerformanceMonitor.tsx"
  "app/components/AnalyticsProvider.tsx"
  "app/components/OptimizedImage.tsx"
  "app/components/Navigation.tsx"
  "app/components/EnhancedErrorBoundary.tsx"
  "app/autonomous-systems/page.tsx"
  "app/business-intelligence/page.tsx"
  "app/quantum-computing/page.tsx"
  "app/ai-content-generation/page.tsx"
  "app/sitemap/page.tsx"
  "app/utils/accessibilityChecker.ts"
  "app/utils/logger.ts"
  "app/globals.css"
)

for file in "${files[@]}"; do
  if [ -f "$file" ]; then
    echo "Processing $file..."
    
    # Use git checkout to get the version from pr-26771 (the Next.js version)
    git checkout --theirs "$file" 2>/dev/null || echo "Could not resolve $file automatically"
    
    # Add the resolved file
    git add "$file"
  fi
done

echo "Conflict resolution complete!"