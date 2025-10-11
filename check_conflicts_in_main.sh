#!/bin/bash

echo "Checking for merge conflict markers in main branch..."
echo "======================================================="
echo ""

files=(
  "app/components/ImprovedErrorBoundary.tsx"
  "app/components/NewestContent2025Banner.tsx"
  "app/enterprise/page.tsx"
  "app/hooks/useEnhancedPerformance.ts"
  "app/not-found.tsx"
  "app/page-optimized.tsx"
  "app/utils/enhancedErrorHandler.ts"
  "app/utils/performanceMonitor.ts"
  "src/components/PerformanceMonitor.tsx"
  "src/data/bannerConfigurations.ts"
  "src/hooks/useBannerRotation.tsx"
  "src/hooks/usePerformance.ts"
  "src/utils/analytics.ts"
  "src/utils/codeSplitting.ts"
  "src/utils/errorHandler.ts"
)

conflict_count=0
for file in "${files[@]}"; do
  if git show origin/main:"$file" 2>/dev/null | grep -q "^<<<<<<<"; then
    echo "✗ $file - HAS CONFLICTS"
    ((conflict_count++))
  else
    echo "✓ $file - No conflicts"
  fi
done

echo ""
echo "======================================================="
echo "Total files with conflicts: $conflict_count / ${#files[@]}"