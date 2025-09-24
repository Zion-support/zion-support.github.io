#!/bin/bash

# Script to resolve merge conflicts by keeping HEAD version
# This will resolve conflicts by taking the current (HEAD) version of all conflicted files

echo "Resolving merge conflicts by keeping HEAD version..."

# Get list of conflicted files
conflicted_files=$(git diff --name-only --diff-filter=U)

for file in $conflicted_files; do
    echo "Resolving conflicts in: $file"
    
    # Check if file exists
    if [ -f "$file" ]; then
        # Extract HEAD version (between <<<<<<< HEAD and =======)
        # Remove conflict markers and keep only the HEAD version
        sed -n '/^<<<<<<< HEAD$/,/^=======$/p' "$file" | sed '1d;$d' > "${file}.head"
        
        # Check if we have a HEAD section
        if [ -s "${file}.head" ]; then
            # Replace the entire file with HEAD version
            cp "${file}.head" "$file"
            echo "  ✓ Resolved by keeping HEAD version"
        else
            echo "  ⚠ No HEAD section found, keeping original"
        fi
        
        # Clean up temporary file
        rm -f "${file}.head"
        
        # Mark as resolved
        git add "$file"
    else
        echo "  ⚠ File not found: $file"
    fi
done

echo "All conflicts resolved. Files marked for commit."