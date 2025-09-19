#!/bin/bash

# Fix merge conflicts by keeping our version (HEAD)
echo "Fixing merge conflicts..."

# Find all files with merge conflicts
files_with_conflicts=$(find src -name "*.tsx" -o -name "*.jsx" | xargs grep -l "<<<<<<< HEAD" 2>/dev/null)

for file in $files_with_conflicts; do
    echo "Fixing conflicts in: $file"
    
    # Use git checkout --ours to keep our version
    git checkout --ours "$file"
    
    # Clean up any remaining conflict markers
    sed -i '/^<<<<<<< HEAD$/d' "$file"
    sed -i '/^=======$/d' "$file"
    sed -i '/^>>>>>>> .*$/d' "$file"
    
    # Fix common import path issues
    sed -i 's|from '\''../components/|from '\''@/components/|g' "$file"
    sed -i 's|from '\''../data/|from '\''@/data/|g' "$file"
    sed -i 's|from '\''../utils/|from '\''@/utils/|g' "$file"
    sed -i 's|from '\''../hooks/|from '\''@/hooks/|g' "$file"
    sed -i 's|from '\''../context/|from '\''@/context/|g' "$file"
    
    # Fix SEO imports
    sed -i 's|import { SEO } from|import SEO from|g' "$file"
    sed -i 's|import SEO from '\''../components/SEO'\''|import SEO from '\''@/components/SEO'\''|g' "$file"
    sed -i 's|import SEO from '\''@/components/SEO'\''|import { SEO } from '\''@/components/SEO'\''|g' "$file"
done

echo "Merge conflicts fixed!"