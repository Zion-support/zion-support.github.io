#!/bin/bash

# Script to find and remove missing imports from App.tsx
echo "Finding and removing missing imports from App.tsx..."

# Get all imports from App.tsx
grep "import.*from" App.tsx | grep -v "react" | grep -v "react-router" | grep -v "lucide-react" | while read line; do
    # Extract the import path
    import_path=$(echo "$line" | sed -n "s/.*from '\([^']*\)'.*/\1/p")
    
    if [ -n "$import_path" ]; then
        # Convert relative path to actual file path
        actual_path="./${import_path}"
        
        # Check if file exists
        if [ ! -f "$actual_path" ] && [ ! -f "${actual_path}.tsx" ] && [ ! -f "${actual_path}.jsx" ] && [ ! -f "${actual_path}.ts" ] && [ ! -f "${actual_path}.js" ]; then
            echo "Missing: $import_path"
            # Remove the import line
            sed -i "/$line/d" App.tsx
            
            # Extract component name
            component_name=$(echo "$line" | sed -n "s/import \([^ ]*\).*/\1/p")
            echo "Removing component: $component_name"
            
            # Remove component usage from JSX
            sed -i "/<$component_name/d" App.tsx
            sed -i "/<\/$component_name/d" App.tsx
            sed -i "/<$component_name \/>/d" App.tsx
        fi
    fi
done

echo "Missing imports fixed!"