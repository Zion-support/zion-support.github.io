#!/bin/bash

echo "Fixing missing icon imports in all page files..."

# Find all page files that might have missing icon imports
page_files=$(find pages -name "*.tsx" -type f)

for file in $page_files; do
    echo "Checking $file..."
    
    # Check if file uses lucide-react icons but doesn't import them
    if grep -q "icon:" "$file" && ! grep -q "from 'lucide-react'" "$file"; then
        echo "Fixing imports in $file..."
        
        # Extract all icon names used in the file
        icons=$(grep -o "icon: [A-Za-z][A-Za-z0-9]*" "$file" | sed 's/icon: //' | sort -u | tr '\n' ',' | sed 's/,$//')
        
        if [ ! -z "$icons" ]; then
            # Add the import statement after the existing imports
            sed -i "/import MainLayout/a\\
import { $icons } from 'lucide-react';" "$file"
        fi
    fi
done

echo "Icon imports fixed!"