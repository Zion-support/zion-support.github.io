#!/bin/bash

echo "Resolving merge conflicts..."

# Find all files with merge conflicts
find /workspace -name "*.tsx" -o -name "*.ts" -o -name "*.js" -o -name "*.jsx" | while read file; do
    if grep -q "<<<<<<< HEAD" "$file"; then
        echo "Resolving conflicts in: $file"
        
        # Create a temporary file
        temp_file=$(mktemp)
        
        # Process the file line by line
        in_conflict=false
        keep_head=false
        
        while IFS= read -r line; do
            if [[ "$line" == "<<<<<<< HEAD" ]]; then
                in_conflict=true
                keep_head=true
                continue
            elif [[ "$line" == "=======" ]]; then
                keep_head=false
                continue
            elif [[ "$line" == ">>>>>>>"* ]]; then
                in_conflict=false
                keep_head=false
                continue
            fi
            
            if [[ "$in_conflict" == true && "$keep_head" == true ]]; then
                echo "$line" >> "$temp_file"
            elif [[ "$in_conflict" == false ]]; then
                echo "$line" >> "$temp_file"
            fi
        done < "$file"
        
        # Replace the original file
        mv "$temp_file" "$file"
        echo "Resolved conflicts in: $file"
    fi
done

echo "All merge conflicts resolved!"