#!/bin/bash

echo "🚀 Starting automatic merge conflict resolution..."

# Find all files with merge conflicts
conflict_files=$(find ./src -name "*.tsx" -o -name "*.ts" -o -name "*.jsx" -o -name "*.js" | xargs grep -l "<<<<<<< HEAD" 2>/dev/null)

echo "Found $(echo "$conflict_files" | wc -l) files with conflicts"

# For each file, try to resolve conflicts automatically by keeping HEAD version
for file in $conflict_files; do
    echo "🔧 Resolving conflicts in: $file"
    
    # Create a backup
    cp "$file" "$file.backup"
    
    # Use a more sophisticated approach - try to resolve conflicts by keeping HEAD
    # This is a simple approach that works for many cases
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

echo "🎉 Automatic conflict resolution complete!"