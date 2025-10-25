#!/bin/bash

# Find all files with duplicate export default statements
files=$(find app/ -name "*.tsx" -exec grep -l "export default function Page" {} \;)

for file in $files; do
    echo "Fixing $file"
    
    # Get the line number of the first "export default function Page"
    line_num=$(grep -n "export default function Page" "$file" | head -1 | cut -d: -f1)
    
    # Get the line number of the last "export default" (should be the correct one)
    last_export_line=$(grep -n "export default" "$file" | tail -1 | cut -d: -f1)
    
    if [ "$line_num" != "$last_export_line" ]; then
        # Remove the duplicate export by deleting from the first export to the line before the last export
        sed -i "${line_num},$((last_export_line-1))d" "$file"
        echo "Removed duplicate export from $file"
    fi
done

echo "Fixed all duplicate exports"