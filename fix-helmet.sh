#!/bin/bash

# Find all files with react-helmet-async imports
files=$(find /workspace/app -name "*.tsx" -exec grep -l "react-helmet-async" {} \;)

for file in $files; do
  echo "Fixing $file"
  
  # Remove Helmet import
  sed -i '/import.*Helmet.*from.*react-helmet-async/d' "$file"
  
  # Remove Helmet usage
  sed -i '/<Helmet>/,/<\/Helmet>/d' "$file"
  
  # Fix any remaining HelmetProvider references
  sed -i '/HelmetProvider/d' "$file"
  
  # Fix any stray <> or </> tags that might be left
  sed -i 's/^[[:space:]]*<>[[:space:]]*$//' "$file"
  sed -i 's/^[[:space:]]*<\/>[[:space:]]*$//' "$file"
done

echo "Fixed all Helmet imports"
