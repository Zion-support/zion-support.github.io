#!/bin/bash

# Script to resolve merge conflicts by choosing the HEAD version for all conflicts

files=(
  "./EnhancedFooter.tsx"
  "./app/App.tsx"
  "./app/components/AccessibilityEnhancer.tsx"
  "./app/components/ErrorBoundary.tsx"
  "./app/setupTests.tsx"
  "./app/utils/performanceOptimizer.ts"
)

for file in "${files[@]}"; do
  if [ -f "$file" ]; then
    echo "Resolving conflicts in $file..."
    # Use sed to remove conflict markers and keep HEAD version
    sed -i '/^<<<<<<< HEAD$/,/^=======$/{ /^<<<<<<< HEAD$/d; /^=======$/d; }; /^=======/,/^>>>>>>> /d' "$file"
    echo "✓ Resolved $file"
  else
    echo "⚠ File not found: $file"
  fi
done

echo "✓ All conflicts resolved!"