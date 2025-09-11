#!/bin/bash

echo "Fixing all @/ imports to use relative paths..."

# Find all TypeScript/JavaScript files
find /workspace/src -name "*.tsx" -o -name "*.ts" -o -name "*.jsx" -o -name "*.js" | while read file; do
    # Get the directory of the file
    dir=$(dirname "$file")
    
    # Calculate relative path from file to src
    rel_path=$(realpath --relative-to="$dir" /workspace/src)
    
    # Fix @/ imports
    sed -i "s|@/components/|${rel_path}/components/|g" "$file"
    sed -i "s|@/pages/|${rel_path}/pages/|g" "$file"
    sed -i "s|@/utils/|${rel_path}/utils/|g" "$file"
    sed -i "s|@/hooks/|${rel_path}/hooks/|g" "$file"
    sed -i "s|@/types/|${rel_path}/types/|g" "$file"
    sed -i "s|@/assets/|${rel_path}/assets/|g" "$file"
    sed -i "s|@/styles/|${rel_path}/styles/|g" "$file"
    sed -i "s|@/data/|${rel_path}/data/|g" "$file"
    sed -i "s|@/services/|${rel_path}/services/|g" "$file"
    sed -i "s|@/context/|${rel_path}/context/|g" "$file"
    sed -i "s|@/constants/|${rel_path}/constants/|g" "$file"
    sed -i "s|@/layout/|${rel_path}/layout/|g" "$file"
    sed -i "s|@/|${rel_path}/|g" "$file"
done

echo "Import fixes completed!"