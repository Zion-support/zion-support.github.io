#!/bin/bash

# Find all files with merge conflicts
    # Use git to resolve conflicts by choosing HEAD version
    git checkout --ours "$file" 2>/dev/null || {
        # If git checkout fails, manually resolve by keeping HEAD content
        awk '
        /^/ { in_head = 1; next }
        /^/ { in_head = 0; in_other = 1; next }
        /^        in_head || (!in_head && !in_other) { print }
        ' "$file" > "$file.tmp" && mv "$file.tmp" "$file"
    }
done

echo "Merge conflicts resolved!"
