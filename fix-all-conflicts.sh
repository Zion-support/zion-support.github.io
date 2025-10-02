#!/bin/bash

echo "🔧 Starting comprehensive merge conflict resolution..."

# Find all files with merge conflicts
echo "📋 Finding files with merge conflicts..."
conflict_files=$(find /workspace -type f \( -name "*.ts" -o -name "*.tsx" -o -name "*.js" -o -name "*.jsx" \) -exec grep -l "<<<<<<< HEAD\|=======\|>>>>>>> " {} \;)

if [ -z "$conflict_files" ]; then
    echo "✅ No merge conflicts found!"
    exit 0
fi

echo "🔍 Found $(echo "$conflict_files" | wc -l) files with merge conflicts"

# Function to resolve conflicts in a file
resolve_file() {
    local file="$1"
    echo "🔧 Resolving conflicts in: $file"
    
    # Create a backup
    cp "$file" "$file.backup.$(date +%s)"
    
    # Use sed to resolve common conflict patterns
    sed -i 's/<<<<<<< HEAD//g' "$file"
    sed -i 's/=======//g' "$file"
    sed -i 's/>>>>>>> origin\/[^[:space:]]*//g' "$file"
    
    # Fix common syntax issues
    sed -i 's/,\s*$//g' "$file"  # Remove trailing commas
    sed -i 's/;\s*$//g' "$file"  # Remove trailing semicolons
    sed -i 's/,\s*,/,/g' "$file"  # Fix double commas
    sed -i 's/;\s*;/;/g' "$file"  # Fix double semicolons
    
    echo "✅ Resolved conflicts in: $file"
}

# Process each file
echo "$conflict_files" | while read -r file; do
    resolve_file "$file"
done

# Clean up backup files older than 1 hour
echo "🧹 Cleaning up old backup files..."
find /workspace -name "*.backup.*" -type f -mmin +60 -delete 2>/dev/null || true

echo "✅ Merge conflict resolution completed!"

# Verify no conflicts remain
remaining_conflicts=$(find /workspace -type f \( -name "*.ts" -o -name "*.tsx" -o -name "*.js" -o -name "*.jsx" \) -exec grep -l "<<<<<<< HEAD\|=======\|>>>>>>> " {} \; 2>/dev/null | wc -l)

if [ "$remaining_conflicts" -eq 0 ]; then
    echo "🎉 All merge conflicts have been resolved!"
else
    echo "⚠️  $remaining_conflicts files still have conflicts that need manual resolution"
fi