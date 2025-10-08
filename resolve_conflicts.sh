#!/bin/bash

# Function to resolve conflicts in a file
resolve_file_conflicts() {
    local file="$1"
    local temp_file="${file}.tmp"
    
    awk '
    BEGIN { in_conflict = 0; skip = 0 }
    /^<<<<<<</ { in_conflict = 1; skip = 1; next }
    /^=======/ && in_conflict { skip = 0; next }
    /^>>>>>>>/ && in_conflict { in_conflict = 0; skip = 0; next }
    !skip { print }
    ' "$file" > "$temp_file"
    
    mv "$temp_file" "$file"
    echo "Resolved conflicts in $file"
}

# Resolve conflicts in App.tsx
resolve_file_conflicts "/workspace/app/App.tsx"

echo "All conflicts resolved!"
