#!/bin/bash

# Find all files with merge conflicts
find app -name "*.tsx" -o -name "*.ts" | while read file; do
  if grep -q "<<<<<<< HEAD" "$file"; then
    echo "Resolving conflicts in $file"
    
    # Create a temporary file
    temp_file=$(mktemp)
    
    # Process the file to resolve conflicts
    awk '
    /^<<<<<<< HEAD/ { in_conflict = 1; next }
    /^=======/ { in_conflict = 2; next }
    /^    in_conflict == 1 { next }  # Skip HEAD section
    in_conflict == 2 { print }  # Keep the section after 