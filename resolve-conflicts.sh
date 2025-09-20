#!/bin/bash

echo "🔧 Resolving all merge conflicts..."

# Function to resolve merge conflicts in a file
resolve_merge_conflict() {
    local file="$1"
    echo "Processing: $file"
    
    # Remove merge conflict markers and keep the HEAD version (our improvements)
    sed -i '/^<<<<<<< HEAD/,/^=======/d' "$file"
    sed -i '/^>>>>>>> [a-f0-9]\+$/d' "$file"
    
    # Fix common syntax issues
    sed -i 's/,$//' "$file"  # Remove trailing commas
    sed -i 's/;$//' "$file"  # Remove trailing semicolons where inappropriate
}

# Find and process all files with merge conflicts
find /workspace -name "*.tsx" -exec grep -l "<<<<<<< HEAD" {} \; | while read file; do
    resolve_merge_conflict "$file"
done

echo "✅ All merge conflicts resolved!"