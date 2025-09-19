#!/bin/bash

echo "Fixing all remaining merge conflicts..."

# Find and fix merge conflict markers in all relevant files
find . -type f \( -name "*.js" -o -name "*.ts" -o -name "*.tsx" -o -name "*.jsx" -o -name "*.json" -o -name "*.md" \) -exec grep -l "    
    # Remove any remaining conflict markers
    sed -i '/^    sed -i '/^    sed -i '/^# Remove all merge conflict markers from all files
find . -name "*.tsx" -o -name "*.js" -o -name "*.json" | while read file; do
    if grep -q "" "$file"; then
        echo "Fixing merge conflicts in $file"
        
        # Remove all merge conflict markers and keep the content between  and         sed -i '/^/,/^/d' "$file"
        sed -i '/^>>>>>>>/d' "$file"
        
        # Clean up any remaining empty lines
        sed -i '/^$/N;/^\n$/d' "$file"
    fi
# Find and fix all merge conflict markers
find . -type f \( -name "*.tsx" -o -name "*.ts" -o -name "*.jsx" -o -name "*.js" \) \
  -not -path "./node_modules/*" \
  -not -path "./.next/*" \
  -not -path "./.git/*" \
  | while read -r file; do
  echo "Processing: $file"
  
  # Remove merge conflict markers
  sed -i '/  sed -i '/  sed -i '/  sed -i '/  
  # Remove any remaining merge conflict markers
  sed -i '/<<<<<<< /d' "$file"
  sed -i '/  sed -i '/done

echo "All merge conflicts fixed!"