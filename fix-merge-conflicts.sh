#!/bin/bash

# List of files with conflicts
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

for file in "${files[@]}"; do
  if [ -f "$file" ]; then
    echo "Fixing conflicts in $file..."
    # Use git merge-file with ours strategy or manually remove conflict markers
    # Remove conflict markers and keep the incoming version (after =======)
    perl -i -0777 -pe 's/<<<<<<< HEAD\n.*?\n=======\n(.*?)\n>>>>>>> origin\/cursor\/fix-errors-and-merge-to-main-[a-z0-9]+/\1/gs' "$file"
    # Also handle nested conflicts
    perl -i -0777 -pe 's/<<<<<<< HEAD\n(.*?)\n=======\n.*?\n>>>>>>> origin\/cursor\/fix-errors-and-merge-to-main-[a-z0-9]+/\1/gs' "$file"
  fi
done

echo "Done fixing conflicts!"
