#!/bin/bash

# Find all page.tsx files that have "return (" without a function declaration
find /workspace/app -name "page.tsx" -exec grep -l "return (" {} \; | while read file; do
  # Check if the file starts with imports and then has "return (" (missing function declaration)
  if head -10 "$file" | grep -q "return (" && ! head -10 "$file" | grep -q "export default function"; then
    echo "Fixing $file"
    
    # Get the directory name for the function name
    dir_name=$(basename $(dirname "$file"))
    function_name=$(echo "$dir_name" | sed 's/-\([a-z]\)/\U\1/g' | sed 's/^\([a-z]\)/\U\1/')Page
    
    # Add the function declaration after the imports
    sed -i "s/import.*from 'lucide-react'$/&\n\nexport default function $function_name() {/" "$file"
  fi
done

echo "Fixed all pages with missing function declarations"