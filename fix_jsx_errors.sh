#!/bin/bash

# Script to fix malformed JSX patterns in blog files
echo "Fixing malformed JSX patterns in blog files..."

# Find all .tsx files in app/blog directory
find /workspace/app/blog -name "*.tsx" -type f | while read file; do
    echo "Processing: $file"
    
    # Fix the malformed JSX patterns
    sed -i 's/{/\* content \*\/}//g' "$file"
    sed -i 's/{\/\* content \*\/}//g' "$file"
    
    # Fix common JSX syntax issues
    sed -i 's/() => {/\* content \*\/}/() => {/g' "$file"
    sed -i 's/() => {/\* content \*\/}/() => {/g' "$file"
    sed -i 's/return (/\* content \*\/}/return (/g' "$file"
    sed -i 's/return (/\* content \*\/}/return (/g' "$file"
    
    # Fix interface and type definitions
    sed -i 's/interface [^{]* {/\* content \*\/}/interface [^{]* {/g' "$file"
    sed -i 's/interface [^{]* {/\* content \*\/}/interface [^{]* {/g' "$file"
    
    # Fix function definitions
    sed -i 's/function [^{]* {/\* content \*\/}/function [^{]* {/g' "$file"
    sed -i 's/function [^{]* {/\* content \*\/}/function [^{]* {/g' "$file"
    
    # Fix class definitions
    sed -i 's/class [^{]* {/\* content \*\/}/class [^{]* {/g' "$file"
    sed -i 's/class [^{]* {/\* content \*\/}/class [^{]* {/g' "$file"
    
    # Fix object literals
    sed -i 's/const [^=]* = {/\* content \*\/}/const [^=]* = {/g' "$file"
    sed -i 's/const [^=]* = {/\* content \*\/}/const [^=]* = {/g' "$file"
    
    # Fix JSX elements that are missing opening tags
    sed -i 's/<div><\/div>/<div>/g' "$file"
    sed -i 's/<span><\/span>/<span>/g' "$file"
    sed -i 's/<p><\/p>/<p>/g' "$file"
    
    # Fix malformed JSX closing tags
    sed -i 's/<\/div><\/div>/<\/div>/g' "$file"
    sed -i 's/<\/span><\/span>/<\/span>/g' "$file"
    sed -i 's/<\/p><\/p>/<\/p>/g' "$file"
    
done

echo "JSX fixes completed!"