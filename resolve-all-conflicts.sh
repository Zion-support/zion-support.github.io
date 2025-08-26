#!/bin/bash
echo "Resolving all merge conflicts across the repository..."
# Function to resolve conflicts in a file
resolve_conflicts() {
    local file="$1"
        # Clean up any remaining empty lines or broken syntax
        sed -i '/^[[:space:]]*$/d' "$file"
        echo "  ✓ Resolved conflicts in $file"
    fi
}
# Find all files with merge conflicts
echo "Scanning for files with merge conflicts..."
