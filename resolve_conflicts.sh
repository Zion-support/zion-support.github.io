#!/bin/bash

# Script to resolve merge conflicts by keeping the newer content (after =======)

echo "Resolving merge conflicts in main files..."

# Function to resolve conflicts in a file
resolve_conflicts() {
    local file="$1"
    echo "Processing $file..."
    
    # Create a temporary file
    local temp_file="${file}.tmp"
    
    # Process the file line by line
    local in_conflict=false
    local keep_content=false
    
    while IFS= read -r line; do
        if [[ "$line" =~ ^"<<<<<<<" ]]; then
            in_conflict=true
            keep_content=false
        elif [[ "$line" =~ "^=======" ]]; then
            keep_content=true
        elif [[ "$line" =~ "^>>>>>>>" ]]; then
            in_conflict=false
            keep_content=false
        elif [[ "$in_conflict" == true && "$keep_content" == true ]]; then
            echo "$line" >> "$temp_file"
        elif [[ "$in_conflict" == false ]]; then
            echo "$line" >> "$temp_file"
        fi
    done < "$file"
    
    # Replace original file with resolved version
    mv "$temp_file" "$file"
    echo "Resolved conflicts in $file"
}

# Resolve conflicts in main files
resolve_conflicts "pages/it-services.tsx"
resolve_conflicts "pages/ai-services.tsx"
resolve_conflicts "pages/micro-saas.tsx"

echo "All merge conflicts resolved!"