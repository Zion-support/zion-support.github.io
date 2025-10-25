#!/bin/bash

# Fix merge conflicts in all files
echo "Fixing merge conflicts..."

# Find all files with merge conflict markers
files_with_conflicts=$(grep -r "<<<<<<< HEAD" . --include="*.tsx" --include="*.ts" --include="*.js" --include="*.jsx" | cut -d: -f1 | sort -u)

for file in $files_with_conflicts; do
    echo "Fixing conflicts in: $file"
    
    # Remove empty conflict blocks
    sed -i '/^<<<<<<< HEAD$/,/^>>>>>>> origin\/main$/c\
' "$file"
    
    # Remove conflict markers and keep the main branch version
    sed -i '/^<<<<<<< HEAD$/,/^=======$/d' "$file"
    sed -i '/^=======$/,/^>>>>>>> origin\/main$/d' "$file"
    
    # Clean up any remaining conflict markers
    sed -i '/^<<<<<<< HEAD$/d' "$file"
    sed -i '/^=======$/d' "$file"
    sed -i '/^>>>>>>> origin\/main$/d' "$file"
    
    # Fix common syntax issues
    sed -i 's/;;/;/g' "$file"
    sed -i 's/, }/}/g' "$file"
    sed -i 's/import { Metadata} from/import { Metadata } from/g' "$file"
done

echo "Merge conflicts fixed!"
