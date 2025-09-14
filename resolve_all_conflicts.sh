#!/bin/bash

# Comprehensive script to resolve all merge conflicts
echo "Resolving all merge conflicts..."

# Find all files with merge conflicts
conflict_files=$(find . -name "*.tsx" -type f -exec grep -l "        
        # Remove any remaining conflict markers
        sed -i '/        
        # Fix duplicate SEO imports
        sed -i '/import SEO from "\.\.\/\.\.\/components\/SEO";/N;s/import SEO from "\.\.\/\.\.\/components\/SEO";\nimport SEO from "\.\.\/\.\.\/components\/SEO";/import SEO from "..\/..\/components\/SEO";/' "$file"
        
        # Remove duplicate SEO imports
        awk '!seen[$0]++' "$file" > "$file.tmp" && mv "$file.tmp" "$file"
    fi
done

# Also handle other file types
conflict_files_other=$(find . -name "*.json" -o -name "*.js" -o -name "*.ts" | xargs grep -l "    sed -i '/done

echo "All conflicts resolved!"