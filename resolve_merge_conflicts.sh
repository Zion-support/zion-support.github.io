#!/bin/bash

echo "🔧 Resolving merge conflicts in all files..."

# Find all files with merge conflicts
conflict_files=$(grep -r "<<<<<<< HEAD" . --include="*.tsx" --include="*.ts" --include="*.js" --include="*.jsx" -l)

if [ -z "$conflict_files" ]; then
    echo "✅ No merge conflicts found!"
    exit 0
fi

echo "📋 Found merge conflicts in the following files:"
echo "$conflict_files"

# Resolve conflicts by choosing the version after the last ======= marker
for file in $conflict_files; do
    echo "🔨 Resolving conflicts in: $file"
    
    # Create backup
    cp "$file" "$file.backup.$(date +%s)"
    
    # Extract content after the last ======= marker and before >>>>>>> marker
    # This gets the version from the feature branch (usually the one we want to keep)
    awk '
    BEGIN { in_conflict = 0; content = ""; last_marker = 0 }
    /^<<<<<<< / { in_conflict = 1; next }
    /^=======/ { if (in_conflict) { last_marker = NR; content = ""; } next }
    /^>>>>>>> / { 
        if (in_conflict && content != "") {
            print content
        }
        in_conflict = 0
        next
    }
    { 
        if (in_conflict) {
            content = content $0 "\n"
        } else {
            print
        }
    }
    END {
        if (in_conflict && content != "") {
            print content
        }
    }' "$file" > "$file.tmp" && mv "$file.tmp" "$file"
    
    echo "✅ Resolved conflicts in: $file"
done

echo "🎉 All merge conflicts resolved!"
echo "📝 Backup files created with timestamp extensions"
echo "🚀 Ready to commit and merge!"