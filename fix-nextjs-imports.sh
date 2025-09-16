#!/bin/bash

# Script to fix Next.js imports in React project
echo "Fixing Next.js imports..."

# Find all files with next/link imports and replace them
find /workspace/src -name "*.tsx" -o -name "*.ts" | xargs grep -l "next/link" | while read file; do
    echo "Processing: $file"
    
    # Replace import statement
    sed -i 's/import Link from '\''next\/link'\'';/\/\/ import Link from '\''next\/link'\''; \/\/ Replaced with regular anchor tags for React compatibility/g' "$file"
    
    # Replace Link components with anchor tags
    sed -i 's/<Link/<a/g' "$file"
    sed -i 's/<\/Link>/<\/a>/g' "$file"
    
    # Remove href= and replace with href=
    sed -i 's/href=/href=/g' "$file"
done

echo "Next.js imports fixed!"