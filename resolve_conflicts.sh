#!/bin/bash

# Script to resolve merge conflicts by choosing the main branch version
# This script will automatically resolve conflicts by keeping the main branch version

echo "Starting conflict resolution process..."

# Function to resolve conflicts in a file
resolve_conflicts() {
    local file="$1"
    echo "Resolving conflicts in: $file"
    
    # Check if file has conflict markers
    if grep -q "<<<<<<< HEAD" "$file"; then
        echo "  Found conflicts in $file"
        
        # Create a backup
        cp "$file" "${file}.backup"
        
        # Use git checkout to get the main branch version (ours)
        git checkout --ours "$file"
        
        echo "  Resolved conflicts in $file using main branch version"
    else
        echo "  No conflicts found in $file"
    fi
}

# Get list of conflicted files
conflicted_files=$(git diff --name-only --diff-filter=U)

if [ -z "$conflicted_files" ]; then
    echo "No conflicted files found."
    exit 0
fi

echo "Found conflicted files:"
echo "$conflicted_files"
echo ""

# Resolve conflicts in each file
for file in $conflicted_files; do
    if [ -f "$file" ]; then
        resolve_conflicts "$file"
    else
        echo "File $file not found, skipping..."
    fi
done

echo ""
echo "Conflict resolution completed!"
echo "Files resolved:"
echo "$conflicted_files"