#!/bin/bash

# Script to rename JSX files from .js to .jsx extensions

echo "Renaming JSX files from .js to .jsx..."

# Find all .js files that contain JSX syntax and rename them
find src -name "*.js" -exec grep -l "JSX\|React\|<.*>" {} \; | while read file; do
    if [[ "$file" != "src/main.js" ]]; then  # Skip main.js as it's not JSX
        newfile="${file%.js}.jsx"
        echo "Renaming: $file -> $newfile"
        mv "$file" "$newfile"
    fi
done

echo "JSX file renaming completed!"