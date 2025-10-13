#!/bin/bash

# Script to resolve merge conflicts by keeping the newer version (after )

echo "Resolving merge conflicts in all files..."

# Find all files with merge conflicts
files=$(find . -name "*.tsx" -o -name "*.ts" -o -name "*.js" -o -name "*.jsx" | xargs grep -l "/ {
        if (in_conflict) {
            in_conflict = 2
            next
        }
    }
    /
        if (in_conflict == 2) {
            in_conflict = 0
            next
        }
    }
    {
        if (in_conflict == 0) {
            print
        } else if (in_conflict == 2) {
            print
        }
    }
    ' "$file" > "$temp_file"
    
    # Replace original file with processed version
    mv "$temp_file" "$file"
done

echo "Merge conflicts resolved in all files."