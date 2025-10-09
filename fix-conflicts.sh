#!/bin/bash

# Fix merge conflicts in TypeScript files
echo "Fixing merge conflicts..."

# Function to fix merge conflicts in a file
fix_conflicts() {
    local file="$1"
    echo "Fixing conflicts in $file"

    # Remove merge conflict markers and keep the HEAD version
    sed -i '//!d' "$file"
    sed -i '//d' "$file"
    sed -i '/>>>>>>> /d' "$file"
}

# Fix the problematic files
fix_conflicts "app/utils/performanceOptimizer.ts"
fix_conflicts "src/data/bannerConfigurations.ts"

echo "Merge conflicts fixed!"
