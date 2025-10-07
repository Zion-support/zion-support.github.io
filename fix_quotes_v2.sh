#!/bin/bash

# Get list of files with TypeScript errors
files=$(npx tsc --noEmit --maxNodeModuleJsDepth 0 2>&1 | grep -o "app/[^:]*\.tsx" | sort | uniq)

echo "Fixing trailing quotes in ${files}..."

for file in $files; do
    if [ -f "$file" ]; then
        echo "Processing: $file"
        
        # Fix trailing quotes after attributes - more specific patterns
        sed -i 's/className="\([^"]*\)",$/className="\1"/g' "$file"
        sed -i 's/href="\([^"]*\)",$/href="\1"/g' "$file"
        sed -i 's/src="\([^"]*\)",$/src="\1"/g' "$file"
        sed -i 's/alt="\([^"]*\)",$/alt="\1"/g' "$file"
        sed -i 's/title="\([^"]*\)",$/title="\1"/g' "$file"
        sed -i 's/id="\([^"]*\)",$/id="\1"/g' "$file"
        sed -i 's/name="\([^"]*\)",$/name="\1"/g' "$file"
        sed -i 's/type="\([^"]*\)",$/type="\1"/g' "$file"
        sed -i 's/rel="\([^"]*\)",$/rel="\1"/g' "$file"
        sed -i 's/method="\([^"]*\)",$/method="\1"/g' "$file"
        sed -i 's/action="\([^"]*\)",$/action="\1"/g' "$file"
        sed -i 's/target="\([^"]*\)",$/target="\1"/g' "$file"
        sed -i 's/placeholder="\([^"]*\)",$/placeholder="\1"/g' "$file"
        sed -i 's/value="\([^"]*\)",$/value="\1"/g' "$file"
        sed -i 's/role="\([^"]*\)",$/role="\1"/g' "$file"
        sed -i 's/aria-label="\([^"]*\)",$/aria-label="\1"/g' "$file"
        sed -i 's/data-testid="\([^"]*\)",$/data-testid="\1"/g' "$file"
        
        # Fix JSX elements with trailing quotes
        sed -i 's/\(<[^>]*\)",$/\1/g' "$file"
        sed -i 's/\(<[^>]*\)",/\1/g' "$file"
        
        # Fix specific problematic patterns
        sed -i 's/\([a-zA-Z-]*\)="\([^"]*\)",$/\1="\2"/g' "$file"
        sed -i 's/\([a-zA-Z-]*\)="\([^"]*\)",/\1="\2"/g' "$file"
        
        # Fix quotes at end of lines
        sed -i 's/",$//g' "$file"
        sed -i 's/",/>/g' "$file"
        
        # Fix quotes before closing tags
        sed -i 's/",>/">/g' "$file"
    fi
done

echo "Done fixing quotes!"