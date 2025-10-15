#!/bin/bash

# Find all page files and fix function names
find . -name "page.tsx" | while read file; do
  if [ -f "$file" ]; then
    echo "Fixing function name in: $file"
    
    # Extract the page name from the path
    page_name=$(basename "$(dirname "$file")")
    
    # Create a valid function name by replacing hyphens and numbers
    function_name=$(echo "$page_name" | sed 's/-//g' | sed 's/^[0-9]/&/' | sed 's/^\([a-z]\)/\U\1/')
    
    # If the function name is empty or just numbers, use a default
    if [ -z "$function_name" ] || [[ "$function_name" =~ ^[0-9]+$ ]]; then
      function_name="Page"
    fi
    
    # Add "Page" suffix if not already present
    if [[ ! "$function_name" =~ Page$ ]]; then
      function_name="${function_name}Page"
    fi
    
    # Replace the function name in the file
    sed -i "s/export default function [^(]*()/export default function ${function_name}()/g" "$file"
  fi
done

echo "All function names have been fixed!"
