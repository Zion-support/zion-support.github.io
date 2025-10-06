#!/bin/bash

<<<<<<< HEAD
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
=======
# Script to fix JSX syntax errors
echo "Starting JSX error fixes..."

# List of files with known issues
problem_files=(
    "/workspace/app/components/NewestContent2025Banner.tsx"
    "/workspace/app/components/September30NewContent2025Banner.tsx"
    "/workspace/app/components/UltimateBusinessIntelligence2025Banner.tsx"
    "/workspace/app/components/UltimateBusinessIntelligenceShowcase2025.tsx"
    "/workspace/app/contact/page.tsx"
    "/workspace/app/enterprise/page.tsx"
    "/workspace/app/guides/ai-2026-implementation-roadmap/page.tsx"
    "/workspace/app/guides/ai-2027-implementation-roadmap/page.tsx"
    "/workspace/app/guides/autonomous-business-processes-implementation-guide-2026/page.tsx"
    "/workspace/app/not-found.tsx"
    "/workspace/app/page-minimal.tsx"
    "/workspace/app/page-optimized.tsx"
    "/workspace/app/services-advertising/page.tsx"
)

for file in "${problem_files[@]}"; do
    if [ -f "$file" ]; then
        echo "Processing: $file"
        
        # Create backup
        cp "$file" "$file.jsx-backup"
        
        # Fix common JSX issues
        # 1. Remove extra closing tags like /span>/span>/span>
        sed -i 's|/span>/span>/span>||g' "$file"
        sed -i 's|/span>/span>||g' "$file"
        
        # 2. Fix unterminated strings
        sed -i 's|type="text$|type="text"|g' "$file"
        sed -i 's|type="email$|type="email"|g' "$file"
        sed -i 's|className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500$|className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"|g' "$file"
        
        # 3. Fix malformed JSX structure
        sed -i 's|></div>|>|g' "$file"
        sed -i 's|></div>|>|g' "$file"
        
        # 4. Remove stray quotes
        sed -i 's|"></div>"||g' "$file"
        
        echo "Fixed: $file"
    fi
done

echo "JSX error fixes completed."
>>>>>>> origin/fix-errors-and-merge-final
