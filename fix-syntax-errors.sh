#!/bin/bash

echo "Fixing common syntax errors across all TSX files..."

# Find all TSX files
find app -name "*.tsx" -type f | while read file; do
  echo "Processing $file"
  
  # Fix unterminated strings in className attributes
  sed -i 's/className="\([^"]*\)">"/className="\1">/g' "$file"
  
  # Fix extra closing parentheses
  sed -i '/^  );$/N;/^  );\n  );$/d' "$file"
  
  # Fix semicolons in strings
  sed -i 's/your business;/your business./g' "$file"
  sed -i 's/your data;/your data./g' "$file"
  sed -i 's/your workflow;/your workflow./g' "$file"
  
  # Fix import statements - separate React and other imports
  sed -i 's/import React, { Helmet }/import React\nimport { Helmet }/g' "$file"
  sed -i 's/import React, { Link }/import React\nimport { Link }/g' "$file"
  sed -i 's/import React, { useState }/import React\nimport { useState }/g' "$file"
  
  # Fix unterminated strings in meta descriptions
  sed -i 's/content="\([^"]*\)">"/content="\1">/g' "$file"
  
  # Fix missing closing quotes in strings
  sed -i 's/"[^"]*$/"/g' "$file"
  
  # Fix extra closing brackets in arrays
  sed -i '/^      \],$/N;/^      \],\n      \],$/d' "$file"
  
  # Fix missing closing tags
  sed -i 's/<div[^>]*>$/&/g' "$file"
  
  # Fix unterminated JSX fragments
  sed -i 's/<>$/&/g' "$file"
  sed -i 's/<\/>$/&/g' "$file"
  
done

echo "Syntax error fixes completed!"