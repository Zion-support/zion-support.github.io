#!/bin/bash

echo "Fixing merge conflicts by keeping HEAD version..."

# Find all files with merge conflicts
find /workspace -type f \( -name "*.tsx" -o -name "*.ts" -o -name "*.js" -o -name "*.jsx" -o -name "*.cjs" \) -exec grep -l "\|    echo "Processing: $file"
    
    # Remove merge conflict markers and keep the HEAD version (first version)
    sed -i '/^<<<<<<< HEAD/,/^=======/d' "$file"
    sed -i '/^>>>>>>> /d' "$file"
    
    # Use sed to remove merge conflict markers and keep HEAD version
    sed -i '/^/,/^    
    # Remove any remaining conflict markers
    sed -i '/^/d; /^    
    echo "Fixed: $file"
done

echo "Merge conflicts fixed!"