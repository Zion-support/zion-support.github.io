#!/bin/bash

# Script to rename all .js files containing JSX to .jsx files
echo "Finding all .js files containing JSX..."

# Find all .js files that contain JSX syntax
jsx_files=$(find src -name "*.js" -exec grep -l "className\|<div\|<span\|<React\|import React" {} \;)

# Count total files
total_files=$(echo "$jsx_files" | wc -l)
echo "Found $total_files .js files containing JSX"

# Counter for renamed files
renamed_count=0

# Process each file
for file in $jsx_files; do
    if [ -f "$file" ]; then
        # Create new filename with .jsx extension
        new_file="${file%.js}.jsx"
        
        # Rename the file
        mv "$file" "$new_file"
        
        # Update counter
        ((renamed_count++))
        
        # Show progress every 50 files
        if [ $((renamed_count % 50)) -eq 0 ]; then
            echo "Renamed $renamed_count files..."
        fi
    fi
done

echo "Completed! Renamed $renamed_count .js files to .jsx files"
echo "Note: You may need to update import statements in other files to reference .jsx extensions"