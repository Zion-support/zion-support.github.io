#!/bin/bash

# Script to fix missing imports in App.tsx
echo "Fixing missing imports..."

# Read App.tsx and find all import statements
grep "import.*from" App.tsx | while read line; do
    # Extract the import path
    import_path=$(echo "$line" | sed -n "s/.*from '\([^']*\)'.*/\1/p")
    
    if [[ -n "$import_path" ]]; then
        # Remove the leading './' if present
        clean_path=${import_path#./}
        
        # Check if the file exists
        if [[ ! -f "$clean_path" ]]; then
            echo "Missing file: $clean_path"
            
            # Try to find the file in different locations
            found_file=$(find . -name "$(basename "$clean_path")" -type f 2>/dev/null | head -1)
            
            if [[ -n "$found_file" ]]; then
                echo "Found alternative: $found_file"
                # Update the import in App.tsx
                sed -i "s|from '$import_path'|from '$found_file'|g" App.tsx
                echo "Updated import for $(basename "$clean_path")"
            else
                echo "No alternative found for $(basename "$clean_path")"
                # Comment out the import and usage
                component_name=$(basename "$clean_path" | sed 's/\.[^.]*$//')
                sed -i "s|^import $component_name|// import $component_name|g" App.tsx
                sed -i "s|<$component_name />|{/* <$component_name /> */}|g" App.tsx
                echo "Commented out $component_name"
            fi
        fi
    fi
done

echo "Import fixing completed!"