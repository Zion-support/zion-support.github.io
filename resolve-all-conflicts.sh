#!/bin/bash

echo "🚀 Starting comprehensive merge conflict resolution..."

# Find all files with merge conflicts
conflict_files=$(find . -name "*.tsx" -o -name "*.ts" -o -name "*.jsx" -o -name "*.js" | xargs grep -l "\|

total_files=$(echo "$conflict_files" | wc -l)
echo "Found $total_files files with merge conflicts"

# Counter for progress
count=0

# Process each file
echo "$conflict_files" | while read -r file; do
    if [ -f "$file" ]; then
        count=$((count + 1))
        echo "Processing file $count/$total_files: $file"
        
        # Create a backup
        cp "$file" "$file.backup"
        
        # Use sed to resolve conflicts by keeping HEAD version
        # Remove conflict markers and keep content between 
        sed -i '/
        
        # Remove any remaining conflict markers
        sed -i '/
        
        # Check if file is empty or corrupted
        if [ ! -s "$file" ] || grep -q "
            echo "Restoring from backup for $file"
            cp "$file.backup" "$file"
        fi
    fi
done

echo "✅ Merge conflict resolution completed!"

# Check remaining conflicts
remaining=$(find . -name "*.tsx" -o -name "*.ts" -o -name "*.jsx" -o -name "*.js" | xargs grep -l "
echo "Remaining conflicts: $remaining"

if [ "$remaining" -gt 0 ]; then
    echo "Running second pass for remaining conflicts..."
    find . -name "*.tsx" -o -name "*.ts" -o -name "*.jsx" -o -name "*.js" | xargs grep -l "
        echo "Second pass: $file"
        # More aggressive approach - keep everything before  and remove conflict markers
        sed -i '//,/
    done
fi

final_remaining=$(find . -name "*.tsx" -o -name "*.ts" -o -name "*.jsx" -o -name "*.js" | xargs grep -l "
echo "Final remaining conflicts: $final_remaining"

echo "🎉 Conflict resolution process completed!"