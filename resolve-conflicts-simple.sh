#!/bin/bash

echo "Resolving merge conflicts by keeping HEAD version..."

# Find and resolve conflicts in key files
find /workspace -name "*.tsx" -o -name "*.ts" -o -name "*.js" -o -name "*.jsx" -o -name "*.json" | while read file; do
    if grep -q "
        # Clean up any remaining markers
        sed -i '/^<<<<<<< /d; /^
        echo "✓ Resolved: $file"
    fi
done

echo "Conflict resolution completed!"