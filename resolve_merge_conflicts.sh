#!/bin/bash

echo "Resolving merge conflicts by accepting our improvements branch version..."

# Function to resolve conflicts in a file
resolve_file() {
    local file="$1"
    echo "Resolving conflicts in: $file"
    
    if grep -q "<<<<<<< HEAD" "$file"; then
        # Remove all conflict markers and keep only our version
        sed -i '/<<<<<<< HEAD/,/=======/d' "$file"
        sed -i '/>>>>>>> cursor\/analyze-improve-and-deploy-application-663e/d' "$file"
        echo "  ✓ Resolved conflicts in $file"
    else
        echo "  ✓ No conflicts in $file"
    fi
}

# Resolve conflicts in all TypeScript/TSX files
find src -name "*.tsx" -o -name "*.ts" | while read -r file; do
    resolve_file "$file"
done

echo "All merge conflicts resolved!"