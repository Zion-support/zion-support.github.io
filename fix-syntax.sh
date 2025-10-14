#!/bin/bash

# Fix common syntax errors in TypeScript/JSX files
find app -name "*.tsx" -type f | while read file; do
  # Fix missing semicolons in import statements
  sed -i "s/from 'lucide-react'$/from 'lucide-react';/g" "$file"
  sed -i "s/from 'react-router-dom'$/from 'react-router-dom';/g" "$file"
  sed -i "s/from '\.\.\/components\/EnhancedSEO'$/from '..\/components\/EnhancedSEO';/g" "$file"
  
  # Fix semicolons in object properties
  sed -i "s/';,/',/g" "$file"
  sed -i "s/";,/",/g" "$file"
  
  # Fix extra semicolons in JSX
  sed -i "s/className=\"[^\"]*;\"/className=\"\"/g" "$file"
  
  echo "Fixed syntax in: $file"
done

echo "Syntax errors fixed!"