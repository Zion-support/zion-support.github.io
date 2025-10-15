#!/bin/bash

# Function to resolve merge conflicts by keeping HEAD version
resolve_merge_conflicts() {
    local file="$1"
    echo "Fixing merge conflicts in: $file"
    
    # Create a temporary file
    local temp_file=$(mktemp)
    
    # Process the file line by line
    local in_head=false
    local in_other=false
    
    while IFS= read -r line; do
        if [[ "$line" =~ ^"<<<<<<< HEAD" ]]; then
            in_head=true
            in_other=false
            continue
        elif [[ "$line" =~ ^"=======" ]]; then
            in_head=false
            in_other=true
            continue
        elif [[ "$line" =~ ^">>>>>>> " ]]; then
            in_head=false
            in_other=false
            continue
        fi
        
        # Only write lines that are in HEAD section or not in conflict
        if [[ "$in_head" == true ]] || [[ "$in_other" == false ]]; then
            echo "$line" >> "$temp_file"
        fi
    done < "$file"
    
    # Replace original file with resolved version
    mv "$temp_file" "$file"
}

# Find all files with merge conflicts and fix them
find . -name "*.tsx" -o -name "*.ts" | while read -r file; do
    if grep -q "<<<<<<< HEAD" "$file"; then
        resolve_merge_conflicts "$file"
    fi
done

echo "Merge conflicts resolved!"
