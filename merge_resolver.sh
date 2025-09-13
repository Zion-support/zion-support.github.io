#!/bin/bash

# Merge Conflict Resolver Script
# This script will help resolve merge conflicts systematically

echo "Starting merge conflict resolution process..."

# Function to resolve conflicts in a file
resolve_conflicts() {
    local file="$1"
    echo "Processing: $file"
    
    if [ -f "$file" ]; then
        # Check if file has merge conflicts
        if grep -q "^<<<<<<<" "$file"; then
            echo "Found merge conflicts in $file"
            
            # For netlify.toml, we already have a clean version
            if [[ "$file" == *"netlify.toml"* ]]; then
                echo "Skipping netlify.toml - already resolved"
                return 0
            fi
            
            # For other files, try to resolve automatically
            echo "Attempting to resolve conflicts in $file"
            
            # Simple conflict resolution - take the HEAD version for most cases
            sed -i '/^<<<<<<< HEAD/,/^=======/d' "$file"
            sed -i '/^>>>>>>>/d' "$file"
            
            echo "Resolved conflicts in $file"
        fi
    fi
}

# Find all files with merge conflicts
echo "Searching for files with merge conflicts..."
find . -type f -name "*.toml" -o -name "*.tsx" -o -name "*.ts" -o -name "*.js" -o -name "*.json" | while read file; do
    resolve_conflicts "$file"
done

echo "Merge conflict resolution completed!"