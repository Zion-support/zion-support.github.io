#!/bin/bash

# Script to fix common syntax errors after merge conflict resolution

echo "Starting syntax error fixes..."

# Fix common JSX syntax errors
find . -name "*.tsx" -o -name "*.ts" -o -name "*.js" -o -name "*.jsx" | while read file; do
    if [ -f "$file" ]; then
        echo "Processing: $file"
        
        # Fix incomplete JSX closing tags like "  </" -> "  </button>"
        sed -i 's/  <\/$/  <\/button>/g' "$file"
        sed -i 's/  <\/$/  <\/div>/g' "$file"
        sed -i 's/  <\/$/  <\/section>/g' "$file"
        sed -i 's/  <\/$/  <\/h2>/g' "$file"
        sed -i 's/  <\/$/  <\/p>/g' "$file"
        sed -i 's/  <\/$/  <\/span>/g' "$file"
        
        # Fix semicolons in JSX
        sed -i 's/;$/}/g' "$file"
        
        # Fix incomplete closing tags
        sed -i 's/<\/$/<\/div>/g' "$file"
        
        # Remove stray semicolons at end of lines in JSX
        sed -i 's/;$/}/g' "$file"
        
        # Fix incomplete button tags
        sed -i 's/Get Started;$/Get Started/g' "$file"
        sed -i 's/Schedule Demo;$/Schedule Demo/g' "$file"
        sed -i 's/Advanced 5G Features;$/Advanced 5G Features/g' "$file"
        
        # Fix incomplete closing tags with proper structure
        sed -i 's/  <\/$/  <\/button>/g' "$file"
        
        echo "Fixed: $file"
    fi
done

echo "Syntax error fixes completed."