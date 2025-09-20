#!/bin/bash

# Script to resolve merge conflicts by choosing HEAD version
echo "Resolving merge conflicts..."

# Find all files with merge conflicts
files_with_conflicts=$(find src/ -name "*.ts" -o -name "*.tsx" | xargs grep -l "<<<<<<< HEAD")

for file in $files_with_conflicts; do
    echo "Processing: $file"
    
    # Create a temporary file
    temp_file=$(mktemp)
    
    # Process the file to resolve conflicts
    awk '
    /^<<<<<<< HEAD/ {
        in_head = 1
        next
    }
    /^=======/ {
        in_head = 0
        in_other = 1
        next
    }
    /^>>>>>>> / {
        in_other = 0
        next
    }
    in_head == 1 {
        print
    }
    in_other == 0 && in_head == 0 {
        print
    }
    ' "$file" > "$temp_file"
    
    # Replace the original file
    mv "$temp_file" "$file"
    
    echo "Resolved conflicts in: $file"
done

echo "Merge conflict resolution complete!"