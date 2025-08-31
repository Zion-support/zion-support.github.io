#!/bin/bash

# Script to rename JavaScript files containing JSX to .jsx extensions

echo "Finding JavaScript files with JSX syntax..."

# Find all .js files in src directory that contain JSX syntax
find src -name "*.js" -exec grep -l "JSX\|<.*>" {} \; | while read -r file; do
    # Get the directory and filename
    dir=$(dirname "$file")
    filename=$(basename "$file")
    name_without_ext="${filename%.*}"
    
    # Create new filename with .jsx extension
    new_file="$dir/${name_without_ext}.jsx"
    
    # Check if the new file already exists
    if [ -f "$new_file" ]; then
        echo "Skipping $file - $new_file already exists"
        continue
    fi
    
    # Rename the file
    echo "Renaming $file to $new_file"
    mv "$file" "$new_file"
done

echo "JSX file renaming completed!"
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
=======
