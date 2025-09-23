#!/bin/bash

echo "Consolidating duplicate components..."

# Function to check if TypeScript version is more complete
check_ts_better() {
    local jsx_file="$1"
    local tsx_file="$2"
    
    if [ -f "$tsx_file" ]; then
        local jsx_size=$(wc -c < "$jsx_file")
        local tsx_size=$(wc -c < "$tsx_file")
        
        # If TypeScript version is larger (more complete), remove JSX version
        if [ $tsx_size -gt $jsx_size ]; then
            echo "Removing $jsx_file (keeping $tsx_file)"
            rm "$jsx_file"
            return 0
        fi
    fi
    return 1
}

# Find and consolidate duplicate components
find src/components/ui -name "*.jsx" | while read -r jsx_file; do
    base_name="${jsx_file%.jsx}"
    tsx_file="${base_name}.tsx"
    
    if [ -f "$tsx_file" ]; then
        check_ts_better "$jsx_file" "$tsx_file"
    fi
done

# Remove old .js files that should be .jsx or .tsx
find src/components/ui -name "*.js" | while read -r js_file; do
    base_name="${js_file%.js}"
    jsx_file="${base_name}.jsx"
    tsx_file="${base_name}.tsx"
    
    if [ -f "$jsx_file" ] || [ -f "$tsx_file" ]; then
        echo "Removing $js_file (duplicate of .jsx/.tsx)"
        rm "$js_file"
    fi
done

echo "Component consolidation completed!"
echo "Remaining files in src/components/ui/:"
ls -la src/components/ui/ | wc -l