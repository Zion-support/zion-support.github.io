#!/bin/bash

# Script to resolve merge conflicts by choosing the correct version
echo "Resolving merge conflicts..."

# Function to resolve conflicts by keeping the correct version
resolve_file() {
    local file="$1"
    echo "Resolving conflicts in: $file"
    
    # Remove conflict markers and keep the appropriate version
    # For React Router projects, we want the version without Next.js dependencies
    sed -i '/<<<<<<< HEAD/,/=======/d' "$file"
    sed -i '/>>>>>>> /d' "$file"
    
    # Clean up any remaining conflict markers
    sed -i '/^<<<<<<< /d' "$file"
    sed -i '/^=======/d' "$file"
    sed -i '/^>>>>>>> /d' "$file"
}

# Find all files with merge conflicts
conflicted_files=$(grep -l "<<<<<<< HEAD" -r /workspace --include="*.tsx" --include="*.ts" --include="*.js" --include="*.jsx" 2>/dev/null)

for file in $conflicted_files; do
    resolve_file "$file"
done

echo "Merge conflicts resolved!"