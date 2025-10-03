#!/bin/bash

# Fix common syntax errors in TypeScript/React files
find /workspace/src -name "*.tsx" -type f | while read file; do
    echo "Fixing $file"
    
    # Fix double quotes in imports
    sed -i "s/from 'react''/from 'react'/g" "$file"
    sed -i "s/from 'react-helmet-async''/from 'react-helmet-async'/g" "$file"
    sed -i "s/from 'lucide-react''/from 'lucide-react'/g" "$file"
    
    # Fix malformed function declarations
    sed -i "s/: React.FC: ()  => {,,,/: React.FC = () => {/g" "$file"
    sed -i "s/: React.FC: ()  => {/: React.FC = () => {/g" "$file"
    
    # Fix malformed arrays
    sed -i "s/: \[,,/: [/g" "$file"
    sed -i "s/: \[,/: [/g" "$file"
    
    # Fix malformed object properties
    sed -i "s/icon: \([^,]*\),,,/icon: \1,/g" "$file"
    sed -i "s/title: '\([^']*\)',';,';,/title: '\1',/g" "$file"
    sed -i "s/description: '\([^']*\)',';,';,/description: '\1',/g" "$file"
    sed -i "s/features: \[\([^]]*\)\]';,';,/features: [\1],/g" "$file"
    
    # Fix semicolons in wrong places
    sed -i "s/}';';/}/g" "$file"
    sed -i "s/}';/}/g" "$file"
    
    # Fix extra commas
    sed -i "s/,,,/,/g" "$file"
    sed -i "s/,,/,/g" "$file"
done

echo "Syntax fixes completed"