#!/bin/bash

# Script to find and remove missing imports from App.tsx
echo "Fixing missing imports in App.tsx..."

# Read App.tsx and check each import
while IFS= read -r line; do
    if [[ $line =~ ^import.*from.*\.tsx?.*\;$ ]]; then
        # Extract the import path
        import_path=$(echo "$line" | sed -n "s/.*from '\([^']*\)'.*/\1/p")
        
        # Check if the file exists
        if [[ -n "$import_path" ]]; then
            full_path="/workspace/$import_path"
            if [[ ! -f "$full_path" ]]; then
                echo "Missing file: $full_path"
                # Remove the import line
                sed -i "/^import.*from '$import_path';$/d" /workspace/App.tsx
            fi
        fi
    fi
done < /workspace/App.tsx

echo "Missing imports fixed!"