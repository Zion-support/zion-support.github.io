#!/bin/bash

echo "=== Cleaning All Merge Conflicts ==="

# Clean up conflict markers from all script files
for file in *.sh *.py *.cjs; do
    if [ -f "$file" ]; then
        echo "Cleaning conflicts in: $file"
        sed -i '/^<<<<<<< HEAD$/d' "$file"
        sed -i '/^=======$/d' "$file"
        sed -i '/^>>>>>>> [a-f0-9]*$/d' "$file"
    fi
done

echo "=== Merge Conflict Cleanup Complete ==="