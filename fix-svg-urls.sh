#!/bin/bash

echo "Fixing SVG data URL issues..."

# Find all files with SVG data URLs and replace them with simple gradients
find app/components -name "*.tsx" -exec grep -l "bg-\[url('data:image/svg" {} \; | while read file; do
    echo "Fixing SVG data URL in: $file"
    
    # Replace complex SVG data URLs with simple gradients
    sed -i 's/bg-\[url('\''data:image\/svg[^'\'']*'\'')\]/bg-gradient-to-r from-white\/5 to-white\/10/g' "$file"
done

echo "SVG data URL issues fixed!"