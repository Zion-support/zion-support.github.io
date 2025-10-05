#!/bin/bash

# Function to remove unused lucide-react imports
fix_unused_imports() {
    local file="$1"
    local temp_file=$(mktemp)
    
    # Check if file has lucide-react imports
    if ! grep -q "from 'lucide-react'" "$file"; then
        return
    fi
    
    # Extract the import line
    local import_line=$(grep "from 'lucide-react'" "$file")
    
    # Extract the imported icons
    local icons=$(echo "$import_line" | sed 's/.*{\([^}]*\)}.*/\1/' | tr ',' '\n' | sed 's/^ *//;s/ *$//')
    
    # Check which icons are actually used in the file
    local used_icons=""
    for icon in $icons; do
        if grep -q "\\b$icon\\b" "$file"; then
            used_icons="$used_icons$icon, "
        fi
    done
    
    # Remove trailing comma and space
    used_icons=$(echo "$used_icons" | sed 's/, $//')
    
    if [ -n "$used_icons" ]; then
        # Replace the import line with only used icons
        sed "s/import {[^}]*} from 'lucide-react';/import { $used_icons } from 'lucide-react';/" "$file" > "$temp_file"
        mv "$temp_file" "$file"
        echo "Fixed unused imports in $file"
    else
        # Remove the import line entirely if no icons are used
        sed "/import {[^}]*} from 'lucide-react';/d" "$file" > "$temp_file"
        mv "$temp_file" "$file"
        echo "Removed unused import from $file"
    fi
}

# Find and fix all TypeScript files in app directory
find app -name "*.tsx" -type f | while read -r file; do
    fix_unused_imports "$file"
done

echo "Done fixing unused imports"
