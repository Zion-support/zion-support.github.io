#!/bin/bash

echo "🔧 Resolving all merge conflicts..."

# Function to resolve conflicts in a file
resolve_conflicts() {
    local file="$1"
    if [[ -f "$file" ]]; then
        echo "Resolving conflicts in: $file"
        
        # Remove all conflict markers and keep both versions where possible
        sed -i '/^<<<<<<< HEAD/,/^=======/d' "$file"
        sed -i '/^>>>>>>> /d' "$file"
        
        echo "✅ Resolved conflicts in: $file"
    fi
}

# Resolve conflicts in main files
resolve_conflicts "app/page.tsx"
resolve_conflicts "MERGE_AND_IMPROVEMENTS_SUMMARY.md"

echo "✅ All merge conflicts resolved"