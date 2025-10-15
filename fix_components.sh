#!/bin/bash

# Find all files with the pattern and fix them
find app -name "*.tsx" -type f | while read file; do
  if grep -q "^  return (<>" "$file"; then
    echo "Fixing $file"
    
    # Get the component name from the file path
    component_name=$(basename "$file" .tsx | sed 's/^./\U&/')
    
    # Add the missing imports and function declaration
    sed -i '1i import { Helmet } from "react-helmet-async";' "$file"
    sed -i '/^import React from /a import { Helmet } from "react-helmet-async";' "$file"
    sed -i 's/^  return (<>/const '"$component_name"': React.FC = () => {\n  return (\n    <>/' "$file"
  fi
done

echo "Fixed all component files"
