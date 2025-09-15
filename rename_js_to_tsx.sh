#!/bin/bash

# Find all .js files containing JSX and rename them to .tsx
find src -name "*.js" -exec grep -l "JSX\|<.*>" {} \; | while read file; do
    if [[ "$file" != *.js ]]; then
        continue
    fi
    
    # Get the directory and filename
    dir=$(dirname "$file")
    filename=$(basename "$file" .js)
    
    # Rename the file
    mv "$file" "$dir/$filename.tsx"
    echo "Renamed: $file -> $dir/$filename.tsx"
done

echo "JS to TSX conversion complete!"