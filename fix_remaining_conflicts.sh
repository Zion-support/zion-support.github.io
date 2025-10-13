#!/bin/bash

# Fix remaining merge conflicts in app files
files=(
  "./app/components/AccessibilityEnhancer.tsx"
  "./app/components/PerformanceMonitor.tsx"
  "./app/components/EnhancedSEO.tsx"
  "./app/components/EnhancedErrorFeedback.tsx"
  "./app/components/EnhancedErrorBoundary.tsx"
  "./app/ai-services/page.tsx"
  "./app/micro-saas/page.tsx"
  "./app/blog/page.tsx"
)

for file in "${files[@]}"; do
  if [ -f "$file" ]; then
    echo "Fixing merge conflicts in: $file"
    
    # Create backup
    cp "$file" "$file.backup"
    
    # Remove merge conflict markers and keep the first version
    sed -i '/^<<<<<<< HEAD/,/^=======/d' "$file"
    sed -i '/^>>>>>>> /d' "$file"
    
    echo "Fixed: $file"
  fi
done

echo "All remaining merge conflicts resolved!"
