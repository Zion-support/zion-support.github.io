#!/bin/bash

# Find all .tsx files in the app directory (excluding components) that use ErrorBoundary
find /workspace/app -name "*.tsx" -not -path "*/components/*" -exec grep -l "ErrorBoundary" {} \; | while read file; do
  echo "Fixing $file"
  
  # Replace ErrorBoundary opening tag with div
  sed -i 's/<ErrorBoundary>/<div>/g' "$file"
  
  # Replace ErrorBoundary closing tag with div
  sed -i 's/<\/ErrorBoundary>/<\/div>/g' "$file"
  
  # Comment out ErrorBoundary import
  sed -i 's/import ErrorBoundary from/\/\/ import ErrorBoundary from/g' "$file"
done

echo "Fixed all ErrorBoundary issues"