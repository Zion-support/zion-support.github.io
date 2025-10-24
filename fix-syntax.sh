#!/bin/bash

# Fix common syntax errors in TypeScript/JSX files
find ./app -name "*.tsx" -o -name "*.ts" | while read file; do
  echo "Fixing $file"
  
  # Fix import statements
  sed -i 's/import, React/import React/g' "$file"
  sed -i 's/import { Link from "next\/link" } from;/import Link from "next\/link";/g' "$file"
  sed -i 's/import, React\s\+} from "react"/import React from "react"/g' "$file"
  sed -i 's/import { { { /import /g' "$file"
  sed -i 's/import { { /import { /g' "$file"
  
  # Fix JSX syntax
  sed -i 's/<div className="[^"]*" \/>/<div className="[^"]*">/g' "$file"
  sed -i 's/<h1 className="[^"]*" \/>/<h1 className="[^"]*">/g' "$file"
  sed -i 's/<p className="[^"]*" \/>/<p className="[^"]*">/g' "$file"
  
  # Fix function declarations
  sed -i 's/const Breadcrumb: "React\.FC = () => {/const Breadcrumb: React.FC = () => {/g' "$file"
  
  # Fix export statements
  sed -i 's/export default Breadcrumb}\s*}}/export default Breadcrumb;/g' "$file"
  
done

echo "Syntax fixes completed!"
