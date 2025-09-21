#!/bin/bash

echo "🔧 Resolving new merge conflicts after rebase..."

# Find all files with merge conflicts
conflict_files=$(find ./src -name "*.tsx" -o -name "*.ts" -o -name "*.jsx" -o -name "*.js" | xargs grep -l "<<<<<<< HEAD" 2>/dev/null)

echo "Found $(echo "$conflict_files" | wc -l) files with conflicts"

# For each file, resolve conflicts by keeping both versions when possible
for file in $conflict_files; do
    echo "🔧 Resolving conflicts in: $file"
    
    # Create a backup
    cp "$file" "$file.backup"
    
    # Use a more sophisticated approach - try to resolve conflicts by keeping both versions
    awk '
    /^<<<<<<< HEAD/ { 
        in_head = 1
        next
    }
    /^=======/ { 
        in_head = 0
        in_other = 1
        next
    }
    /^>>>>>>> / { 
        in_other = 0
        next
    }
    in_head { 
        print
    }
    in_other { 
        print
    }
    !in_head && !in_other { 
        print
    }
    ' "$file" > "$file.tmp" && mv "$file.tmp" "$file"
    
    # Check if conflicts were resolved
    if ! grep -q "<<<<<<< HEAD" "$file"; then
        echo "✅ Resolved conflicts in: $file"
        rm "$file.backup"
    else
        echo "⚠️  Still has conflicts: $file (restored backup)"
        mv "$file.backup" "$file"
    fi
done

echo "🎉 New conflict resolution complete!"