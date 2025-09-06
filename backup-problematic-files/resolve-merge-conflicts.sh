#!/bin/bash

echo "Resolving merge conflicts by keeping HEAD (main) version..."

# Function to resolve conflicts in a file
resolve_conflicts() {
    local file="$1"
    echo "Processing: $file"
    
    # Use git checkout to keep the HEAD version (main branch)
    git checkout --ours "$file"
    
    # Add the resolved file
    git add "$file"
}

# Get list of conflicted files
conflicted_files=$(git diff --name-only --diff-filter=U)

if [ -z "$conflicted_files" ]; then
    echo "No merge conflicts found."
    exit 0
fi

echo "Found conflicted files:"
echo "$conflicted_files"

# Resolve each conflicted file
echo "$conflicted_files" | while read -r file; do
    if [ -n "$file" ]; then
        resolve_conflicts "$file"
    fi
done

echo "All merge conflicts resolved by keeping HEAD version."