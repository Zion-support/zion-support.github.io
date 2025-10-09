#!/bin/bash

# Script to resolve merge conflicts by keeping the main branch version
# and removing conflict markers

echo "Resolving all merge conflicts..."

# Find all files with conflict markers
conflict_files=$(git status --porcelain | grep "^UU" | cut -c4-)

for file in $conflict_files; do
    echo "Processing $file..."

    # Check if file exists
    if [ -f "$file" ]; then
        # Create a backup
        cp "$file" "${file}.backup"

        # Use sed to resolve conflicts by keeping the main branch version (after

        echo "Resolved conflicts in $file"
    else
        echo "File $file not found, skipping..."
    fi
done

echo "All conflicts resolved!"