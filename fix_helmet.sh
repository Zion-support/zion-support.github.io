#!/bin/bash

# Find all files with react-helmet imports and fix them
find /workspace/app -name "*.tsx" -exec grep -l "react-helmet" {} \; | while read file; do
  echo "Fixing $file"
  
  # Remove react-helmet imports
  sed -i '/import.*react-helmet/d' "$file"
  
  # Add 'use client' directive if not present
  if ! grep -q "'use client'" "$file"; then
    sed -i '1i'\''use client'\'';' "$file"
  fi
  
  # Remove Helmet usage
  sed -i '/<Helmet>/,/<\/Helmet>/d' "$file"
  
  # Remove any remaining Helmet references
  sed -i '/Helmet/d' "$file"
done

echo "Fixed all react-helmet issues"
