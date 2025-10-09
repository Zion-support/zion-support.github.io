#!/bin/bash

# Fix merge conflicts by keeping the newer version (after =======)
echo "Fixing merge conflicts..."

# Process each file with merge conflicts
for file in /workspace/app/ai-customer-support/page.tsx /workspace/app/ai-data-visualization/page.tsx /workspace/app/ai-sales-automation/page.tsx /workspace/app/ai-workflow-automation/page.tsx; do
    echo "Processing $file"
    
    # Create a temporary file
    temp_file=$(mktemp)
    
    # Process the file line by line
    in_conflict=false
    keep_section=""
    
    while IFS= read -r line; do
        if [[ "$line" == "<<<<<<< HEAD" ]]; then
            in_conflict=true
            keep_section="old"
        elif [[ "$line" == "=======" ]]; then
            keep_section="new"
        elif [[ "$line" == ">>>>>>> cursor"* ]]; then
            in_conflict=false
            keep_section=""
        elif [[ "$in_conflict" == true && "$keep_section" == "new" ]]; then
            echo "$line" >> "$temp_file"
        elif [[ "$in_conflict" == false ]]; then
            echo "$line" >> "$temp_file"
        fi
    done < "$file"
    
    # Replace the original file
    mv "$temp_file" "$file"
done

echo "Merge conflicts fixed!"