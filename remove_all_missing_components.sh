#!/bin/bash

echo "Removing all missing components from App.tsx..."

# Get all import statements that reference missing files
missing_imports=$(grep -o "import.*from.*pages.*" App.tsx | grep -v "//" | sed "s/import.*from '\.\/src\/pages\/\([^']*\)'.*/\1/" | sort -u)

echo "Found missing components:"
echo "$missing_imports"

# Remove each missing import and its corresponding route
for component in $missing_imports; do
  echo "Removing $component"
  
  # Check if the file actually exists
  if [ ! -f "src/pages/$component.tsx" ] && [ ! -f "src/pages/$component.jsx" ]; then
    echo "  - File does not exist, removing import and route"
    
    # Remove import statement
    sed -i "/import.*$component.*from/d" App.tsx
    
    # Remove route statement
    sed -i "/<Route.*$component.*element/d" App.tsx
    
    # Remove any links to the component
    sed -i "/href.*$component/d" App.tsx
  else
    echo "  - File exists, keeping"
  fi
done

echo "Cleanup complete!"