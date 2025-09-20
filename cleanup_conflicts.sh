#!/bin/bash

echo "Starting cleanup of merge conflict markers and syntax errors..."

# Function to clean merge conflicts in a file
clean_file() {
    local file="$1"
    echo "Cleaning: $file"
    
    if [ -f "$file" ]; then
        # Remove merge conflict markers
        sed -i '/^<<<<<<< /d' "$file"
        sed -i '/^=======/d' "$file"
        
        # Remove any remaining conflict markers
