#!/bin/bash

echo "Fixing all remaining merge conflicts..."

# Find all files with merge conflicts, excluding node_modules
    
    # Check if file is now empty or has only whitespace
    if [[ ! -s "$file" ]] || [[ -z "$(cat "$file" | tr -d '[:space:]')" ]]; then
        echo "File is empty after conflict resolution, restoring from backup"
        mv "$file.backup.$(date +%s)" "$file"
        continue
    fi
    
    echo "Fixed: $file"
done

echo "All remaining merge conflicts fixed!"