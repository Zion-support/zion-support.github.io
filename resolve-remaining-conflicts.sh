#!/bin/bash

echo "Resolving remaining merge conflicts..."

# Find remaining files with conflicts
conflict_files=$(find . -name "*.toml" -o -name "*.json" -o -name "*.js" -o -name "*.ts" -o -name "*.tsx" -o -name "*.jsx" | xargs grep -l "\|

total_files=$(echo "$conflict_files" | wc -l)
echo "Found $total_files files with remaining conflicts"

# Process each file with a more aggressive approach
echo "$conflict_files" | while read -r file; do
    if [ -f "$file" ]; then
        echo "Processing: $file"
        
        # Create backup
        cp "$file" "$file.backup2"
        
        # More aggressive conflict resolution - keep HEAD version and remove all conflict markers
        sed -i '/
        sed -i '/
        
        # If file is empty or very small, restore from backup
        if [ ! -s "$file" ] || [ $(wc -c < "$file") -lt 10 ]; then
            echo "Restoring $file from backup"
            mv "$file.backup2" "$file"
        fi
    fi
done

echo "Checking remaining conflicts..."
remaining=$(find . -name "*.toml" -o -name "*.json" -o -name "*.js" -o -name "*.ts" -o -name "*.tsx" -o -name "*.jsx" | xargs grep -l "
echo "Remaining conflicts: $remaining"

if [ "$remaining" -eq 0 ]; then
    echo "All conflicts resolved!"
else
    echo "Some conflicts still remain - these may need manual review"
fi