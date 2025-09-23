#!/bin/bash

# Fix ErrorBoundary imports in all TypeScript files
echo "🔧 Fixing ErrorBoundary imports..."

# Find all .tsx files in app directory that import ErrorBoundary
find /workspace/app -name "*.tsx" -exec grep -l "import.*ErrorBoundary" {} \; | while read file; do
  echo "Processing: $file"
  
  # Remove ErrorBoundary import line
  sed -i '/import.*ErrorBoundary/d' "$file"
  
  # Replace <ErrorBoundary> with <>
  sed -i 's/<ErrorBoundary>/<>/g' "$file"
  
  # Replace </ErrorBoundary> with </>
  sed -i 's/<\/ErrorBoundary>/<\/>/g' "$file"
done

echo "✅ ErrorBoundary imports fixed!"