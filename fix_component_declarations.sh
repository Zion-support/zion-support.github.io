#!/bin/bash

# Script to fix missing component declarations in blog pages

echo "Fixing component declarations in blog pages..."

# Find all blog page files
files=$(find /workspace/app/blog -name "page.tsx" -type f)

for file in $files; do
    echo "Processing: $file"
    
    # Check if the file starts with imports but no component declaration
    if grep -q "^import React" "$file" && ! grep -q "^const.*React.FC" "$file" && ! grep -q "^export default function" "$file"; then
        # Extract the filename to create component name
        filename=$(basename "$(dirname "$file")")
        component_name=$(echo "$filename" | sed 's/-\([a-z]\)/\U\1/g' | sed 's/^\([a-z]\)/\U\1/')
        
        # Add component declaration after imports
        sed -i "/^import.*react-helmet-async/a\\
\\
const ${component_name}: React.FC = () => {" "$file"
        
        echo "  Added component declaration: ${component_name}"
    fi
done

echo "Component declarations fixed!"