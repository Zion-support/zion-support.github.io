#!/bin/bash

echo "Starting comprehensive fix..."

# Fix all files with duplicate function declarations
find app -name "*.tsx" -type f | while read file; do
  echo "Processing $file"
  
  # Fix missing closing braces before export
  if grep -q "^  export default" "$file"; then
    sed -i 's/^  export default/};\n\nexport default/' "$file"
  fi
  
  # Fix import issues
  sed -i '/^import { Helmet } from "react-helmet-async";$/N;/\nimport { Helmet } from "react-helmet-async";$/d' "$file"
  sed -i '/^import { Helmet } from "react-helmet-async";$/N;/\nimport { Helmet } from "react-helmet-async";$/d' "$file"
  
  # Fix function declarations on same line as imports
  sed -i 's/;const \([^:]*\): React.FC = () => {/;\n\nconst \1: React.FC = () => {/' "$file"
done

echo "Comprehensive fix completed"
