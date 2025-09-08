#!/bin/bash

echo "Resolving all merge conflicts by keeping HEAD version..."

# Find all files with merge conflicts
find . -type f \( -name "*.tsx" -o -name "*.ts" -o -name "*.js" -o -name "*.jsx" -o -name "*.json" -o -name "*.css" \) -exec grep -l '  echo "Resolving conflicts in: $file"
  
  # Use git checkout --ours to keep HEAD version
  git checkout --ours "$file" 2>/dev/null || true
  
  # Remove any remaining conflict markers as a safety measure
  sed -i '/  
  echo "Fixed: $file"
done

echo "All merge conflicts resolved!"
