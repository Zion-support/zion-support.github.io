#!/bin/bash

echo "Fixing duplicate function declarations..."

# Find files with duplicate function declarations
find app -name "*.tsx" -type f | while read file; do
  if [ $(grep -c "const.*: React.FC = () => {" "$file") -gt 1 ]; then
    echo "Fixing $file"
    
    # Get the component name
    component_name=$(grep "const.*: React.FC = () => {" "$file" | head -1 | sed 's/const \([^:]*\): React.FC = () => {/\1/')
    
    # Remove all but the first function declaration
    sed -i '/const '"$component_name"': React.FC = () => {/,/^  return (<>/{
      /^const '"$component_name"': React.FC = () => {/!d
    }' "$file"
    
    # Fix the structure
    sed -i 's/^  return (<>/  return (\n    <>/' "$file"
  fi
done

echo "Fixed duplicate function declarations"
