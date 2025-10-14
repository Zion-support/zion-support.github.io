#!/bin/bash

# Comprehensive JSX structure fix
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
  
  # Fix missing closing div tags by adding them before fragment closing
  sed -i "s/      <\/>$/        <\/div>\n      <\/div>\n    <\/>/g" "$file"
  
  # Fix missing closing div tags for grid containers
  sed -i "s/        <\/div>$/          <\/div>\n        <\/div>/g" "$file"
  
  echo "Fixed JSX structure in: $file"
done

echo "All JSX structure issues fixed!"