#!/bin/bash

echo "Fixing syntax errors in React components..."

# Find all .tsx files and fix common syntax issues
find src -name "*.tsx" -type f | while read file; do
  echo "Processing: $file"
  
  # Remove semicolons after function declarations
  sed -i 's/const \([A-Za-z][A-Za-z0-9]*\): React\.FC = () => {;/const \1: React.FC = () => {/g' "$file"
  
  # Remove semicolons after return statements
  sed -i 's/return (;/return (/g' "$file"
  
  # Remove semicolons after closing parentheses in JSX
  sed -i 's/);/);/g' "$file"
  
  # Remove semicolons after closing braces
  sed -i 's/};/};/g' "$file"
  
  # Remove semicolons after JSX elements
  sed -i 's/<\/[^>]*>;/<\/[^>]*>/g' "$file"
  sed -i 's/<[^>]*\/>;/<[^>]*\/>/g' "$file"
  
  # Remove semicolons after JSX attributes
  sed -i 's/className="[^"]*";/className="[^"]*"/g' "$file"
  sed -i 's/style={{[^}]*}};/style={{[^}]*}}/g' "$file"
  
  # Remove semicolons after array elements
  sed -i 's/\[\.\.\.Array([^)]*)\]\.map(([^,]*), ([^)]*)) => (/\[\.\.\.Array([^)]*)\]\.map(([^,]*), ([^)]*)) => (/g' "$file"
  
  # Remove semicolons after object properties
  sed -i 's/\([a-zA-Z_][a-zA-Z0-9_]*\): \([^,;]*\),;/\1: \2,/g' "$file"
  
  # Remove semicolons after string literals
  sed -i 's/"\([^"]*\)";/"\1"/g' "$file"
  sed -i 's/'\''\([^'\'']*\)'\'';/'\''\1'\''/g' "$file"
  
  # Remove semicolons after template literals
  sed -i 's/`\([^`]*\)`;/`\1`/g' "$file"
  
  # Remove semicolons after function calls
  sed -i 's/\([a-zA-Z_][a-zA-Z0-9_]*\)(\([^)]*\));/\1(\2)/g' "$file"
  
  # Remove semicolons after array access
  sed -i 's/\[\([^]]*\)\];/\[\1\]/g' "$file"
  
  # Remove semicolons after object access
  sed -i 's/\.\([a-zA-Z_][a-zA-Z0-9_]*\);/\.\1/g' "$file"
  
  # Remove semicolons after ternary operators
  sed -i 's/? \([^:]*\) : \([^;]*\);/? \1 : \2/g' "$file"
  
  # Remove semicolons after logical operators
  sed -i 's/&& \([^;]*\);/&& \1/g' "$file"
  sed -i 's/|| \([^;]*\);/|| \1/g' "$file"
  
  # Remove semicolons after comments
  sed -i 's/\/\*[^*]*\*\/;/\/\*[^*]*\*\//g' "$file"
  sed -i 's/\/\/[^;]*;/\/\/[^;]*/g' "$file"
done

echo "Syntax fixes completed!"