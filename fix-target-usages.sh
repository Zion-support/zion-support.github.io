#!/bin/bash

echo "Fixing Target usages..."

# Find all files that use Target and replace with Award
find app -name "*.tsx" -exec grep -l "Target" {} \; | while read file; do
    echo "Fixing Target usage in: $file"
    
    # Replace Target with Award
    sed -i 's/<Target/<Award/g' "$file"
    sed -i 's/<\/Target/<\/Award/g' "$file"
done

echo "Target usages fixed!"