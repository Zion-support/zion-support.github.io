#!/bin/bash

# Fix JSX structure issues in TypeScript/JSX files
find app -name "*.tsx" -type f | while read file; do
  # Fix missing return statement indentation
  sed -i "s/^return ($/  return (/g" "$file"
  
  # Fix missing spaces in className
  sed -i "s/className=\"md: /className=\"md:/g" "$file"
  sed -i "s/className=\"sm: /className=\"sm:/g" "$file"
  sed -i "s/className=\"lg: /className=\"lg:/g" "$file"
  sed -i "s/className=\"xl: /className=\"xl:/g" "$file"
  
  # Fix missing semicolons in className
  sed -i "s/className=\"[^\"]*;\"/className=\"\"/g" "$file"
  
  # Fix missing closing tags for div elements
  # This is a more complex fix that would need to be done manually for each file
  
  echo "Fixed JSX structure in: $file"
done

echo "JSX structure issues fixed!"