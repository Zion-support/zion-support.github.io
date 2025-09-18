#!/bin/bash

# Fix all @/ imports to relative imports
echo "Fixing all @/ imports..."

# Find all files with @/ imports and fix them
find /workspace/src -name "*.jsx" -o -name "*.tsx" | while read file; do
    # Get the directory depth to determine the relative path
    dir=$(dirname "$file")
    depth=$(echo "$dir" | grep -o "/" | wc -l)
    
    # Calculate the relative path back to src
    relative_path=""
    for ((i=3; i<=depth; i++)); do
        relative_path="../$relative_path"
    done
    
    # Replace various @/ imports with the relative path
    if grep -q 'from "@/' "$file"; then
        echo "Fixing imports in: $file"
        # Fix @/components, @/pages, @/utils, @/hooks, @/types, @/assets, @/styles, @/data, @/services, @/context, @/constants
        sed -i "s|from \"@/components|from \"${relative_path}components|g" "$file"
        sed -i "s|from \"@/pages|from \"${relative_path}pages|g" "$file"
        sed -i "s|from \"@/utils|from \"${relative_path}utils|g" "$file"
        sed -i "s|from \"@/hooks|from \"${relative_path}hooks|g" "$file"
        sed -i "s|from \"@/types|from \"${relative_path}types|g" "$file"
        sed -i "s|from \"@/assets|from \"${relative_path}assets|g" "$file"
        sed -i "s|from \"@/styles|from \"${relative_path}styles|g" "$file"
        sed -i "s|from \"@/data|from \"${relative_path}data|g" "$file"
        sed -i "s|from \"@/services|from \"${relative_path}services|g" "$file"
        sed -i "s|from \"@/context|from \"${relative_path}context|g" "$file"
        sed -i "s|from \"@/constants|from \"${relative_path}constants|g" "$file"
        sed -i "s|from \"@/layout|from \"${relative_path}layout|g" "$file"
        
        # Also fix single quotes
        sed -i "s|from '@/components|from \"${relative_path}components|g" "$file"
        sed -i "s|from '@/pages|from \"${relative_path}pages|g" "$file"
        sed -i "s|from '@/utils|from \"${relative_path}utils|g" "$file"
        sed -i "s|from '@/hooks|from \"${relative_path}hooks|g" "$file"
        sed -i "s|from '@/types|from \"${relative_path}types|g" "$file"
        sed -i "s|from '@/assets|from \"${relative_path}assets|g" "$file"
        sed -i "s|from '@/styles|from \"${relative_path}styles|g" "$file"
        sed -i "s|from '@/data|from \"${relative_path}data|g" "$file"
        sed -i "s|from '@/services|from \"${relative_path}services|g" "$file"
        sed -i "s|from '@/context|from \"${relative_path}context|g" "$file"
        sed -i "s|from '@/constants|from \"${relative_path}constants|g" "$file"
        sed -i "s|from '@/layout|from \"${relative_path}layout|g" "$file"
    fi
done

echo "All import fixes completed!"