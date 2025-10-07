#!/bin/bash

echo "=== Cleaning All Merge Conflicts ==="

# Clean up conflict markers from all script files
for file in *.sh *.py *.cjs; do
    if [ -f "$file" ]; then
        echo "Cleaning conflicts in: $file"
        sed -i '/^$/d' "$file"
        sed -i '/^$/d' "$file"
        sed -i '/^    fi
done

echo "=== Merge Conflict Cleanup Complete ==="