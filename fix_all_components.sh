#!/bin/bash

# Find all files with the pattern and fix them properly
find app -name "*.tsx" -type f | while read file; do
  if grep -q "^  return (<>" "$file" || grep -q "^  export default" "$file"; then
    echo "Fixing $file"
    
    # Get the component name from the file path
    component_name=$(basename "$file" .tsx | sed 's/^./\U&/')
    
    # Remove duplicate imports
    sed -i '/^import { Helmet } from "react-helmet-async";$/N;/\nimport { Helmet } from "react-helmet-async";$/d' "$file"
    sed -i '/^import { Helmet } from "react-helmet-async";$/N;/\nimport { Helmet } from "react-helmet-async";$/d' "$file"
    
    # Fix the function declaration
    if grep -q "^  return (<>" "$file"; then
      sed -i 's/^  return (<>/const '"$component_name"': React.FC = () => {\n  return (\n    <>/' "$file"
    fi
    
    # Add missing closing brace before export
    if grep -q "^  export default" "$file"; then
      sed -i 's/^  export default/};\n\nexport default/' "$file"
    fi
  fi
done

echo "Fixed all component files"
