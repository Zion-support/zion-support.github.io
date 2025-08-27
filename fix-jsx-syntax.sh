#!/bin/bash

echo "Fixing JSX syntax issues across all components..."

# Function to fix common JSX syntax issues
fix_jsx_file() {
    local file="$1"
    
    # Fix malformed JSX closing tags
    sed -i 's/<\/>//g' "$file"
    sed -i 's/<\/div>//g' "$file"
    sed -i 's/<\/section>//g' "$file"
    sed -i 's/<\/motion\.div>//g' "$file"
    
    # Fix malformed JSX syntax
    sed -i 's/section >//g' "$file"
    sed -i 's/;$/}/g' "$file"
    sed -i 's/};$/}/g' "$file"
    
    # Fix malformed JSX expressions
    sed -i 's/\)\)}/\)}/g' "$file"
    sed -i 's/\)\)$/\)/g' "$file"
    
    # Fix malformed JSX attributes
    sed -i 's/onHoverStart={() => setHoveredIndex(index)}/onHoverStart={() => setHoveredIndex(index)}/g' "$file"
    
    # Remove duplicate imports
    sed -i '/^import React/d' "$file"
    sed -i '/^import {/d' "$file"
    
    # Remove duplicate exports
    sed -i '/^export const/d' "$file"
    sed -i '/^export function/d' "$file"
    
    echo "Fixed: $file"
}

# Find all JSX files and fix them
find src -name "*.jsx" -type f | while read -r file; do
    if [[ -f "$file" ]]; then
        fix_jsx_file "$file"
    fi
done

echo "JSX syntax fixes completed!"