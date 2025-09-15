#!/bin/bash

# Script to add missing default exports to components
find src/components -name "*.tsx" -o -name "*.jsx" | while read file; do
  if ! grep -q "export default" "$file"; then
    echo "Adding missing export to: $file"
    
    # Get the component name from the file
    component_name=$(grep -o "const [A-Za-z][A-Za-z0-9]*.*React.FC" "$file" | head -1 | sed 's/const \([A-Za-z][A-Za-z0-9]*\).*/\1/')
    
    if [ ! -z "$component_name" ]; then
      echo "" >> "$file"
      echo "export default $component_name;" >> "$file"
    fi
  fi
done

echo "Missing exports added!"