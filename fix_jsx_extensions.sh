#!/bin/bash

# Script to rename JSX files with .js extensions to .jsx
echo "Fixing JSX file extensions..."

# Find all .js files that contain JSX syntax and rename them to .jsx
find src -name "*.js" -exec grep -l "JSX\|<.*>" {} \; | while read file; do
    if [[ "$file" != "src/main.js" && "$file" != "src/App.js" ]]; then
        newfile="${file%.js}.jsx"
        echo "Renaming $file to $newfile"
        mv "$file" "$newfile"
    fi
done

echo "JSX file extensions fixed!"