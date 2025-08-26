#!/bin/bash

# Find all .js files that contain JSX syntax and rename them to .jsx
echo "Finding and fixing JSX files with incorrect extensions..."

# Find all .js files in src directory
find src -name "*.js" -type f | while read file; do
    # Check if file contains JSX syntax (looks for < or > characters)
    if grep -q "[<>]" "$file"; then
        # Check if it's not already a backup file
        if [[ ! "$file" =~ \.backup\. ]]; then
            new_name="${file%.js}.jsx"
            echo "Renaming $file to $new_name"
            mv "$file" "$new_name"
        fi
    fi
done

echo "JSX extension fixes completed!"