#!/bin/bash

# Comprehensive script to resolve all merge conflicts
echo "Resolving all merge conflicts..."

# Find all files with merge conflicts
conflict_files=$(find . -name "*.tsx" -type f -exec grep -l "<<<<<<< HEAD" {} \;)

for file in $conflict_files; do
    echo "Processing: $file"
    
    # Check if this is a main app file (not in disabled directories)
    if [[ "$file" == "./app/"* ]] || [[ "$file" == "./components/"* ]] || [[ "$file" == "./pages/"* ]]; then
        # Remove all conflict markers and keep the corrected version
        # First, remove all conflict markers
        sed -i '/<<<<<<< HEAD/,/=======/d' "$file"
        sed -i '/=======/,/>>>>>>> cursor\/install-project-dependencies-and-build-c39f/d' "$file"
        
        # Remove any remaining conflict markers
        sed -i '/<<<<<<< HEAD/d' "$file"
        sed -i '/=======/d' "$file"
        sed -i '/>>>>>>> cursor\/install-project-dependencies-and-build-c39f/d' "$file"
        
        # Fix duplicate SEO imports
        sed -i '/import SEO from "\.\.\/\.\.\/components\/SEO";/N;s/import SEO from "\.\.\/\.\.\/components\/SEO";\nimport SEO from "\.\.\/\.\.\/components\/SEO";/import SEO from "..\/..\/components\/SEO";/' "$file"
        
        # Remove duplicate SEO imports
        awk '!seen[$0]++' "$file" > "$file.tmp" && mv "$file.tmp" "$file"
    fi
done

# Also handle other file types
conflict_files_other=$(find . -name "*.json" -o -name "*.js" -o -name "*.ts" | xargs grep -l "<<<<<<< HEAD" 2>/dev/null)

for file in $conflict_files_other; do
    echo "Processing other file: $file"
    
    # Remove all conflict markers
    sed -i '/<<<<<<< HEAD/,/=======/d' "$file"
    sed -i '/=======/,/>>>>>>> cursor\/install-project-dependencies-and-build-c39f/d' "$file"
    sed -i '/<<<<<<< HEAD/d' "$file"
    sed -i '/=======/d' "$file"
    sed -i '/>>>>>>> cursor\/install-project-dependencies-and-build-c39f/d' "$file"
done

echo "All conflicts resolved!"