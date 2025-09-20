#!/bin/bash

echo "🚀 Starting automatic merge conflict resolution..."

# Find all files with merge conflicts
        in_head = 0
        in_other = 1
        next
    }
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
