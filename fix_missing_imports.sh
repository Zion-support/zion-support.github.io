#!/bin/bash

# Script to find and remove missing component imports from App.tsx

echo "Fixing missing component imports..."

# Read App.tsx and check each import
grep "import.*from" App.tsx | while read line; do
    # Extract the component name and path
    component_name=$(echo "$line" | sed -n 's/.*import \([^ ]*\) from.*/\1/p')
    import_path=$(echo "$line" | sed -n "s/.*from '\([^']*\)'.*/\1/p")
    
    if [ -n "$import_path" ] && [ -n "$component_name" ]; then
        # Check if the file exists
        if [ ! -f "$import_path" ]; then
            echo "Missing: $import_path (importing $component_name)"
            
            # Remove the import line
            sed -i "/import $component_name from/d" App.tsx
            
            # Remove any usage of the component in JSX
            sed -i "/<$component_name/d" App.tsx
            sed -i "/<\/$component_name/d" App.tsx
            
            # Remove route definitions
            sed -i "/path=.*$component_name/d" App.tsx
            sed -i "/element={<$component_name/d" App.tsx
        fi
    fi
done

echo "Missing imports fixed!"