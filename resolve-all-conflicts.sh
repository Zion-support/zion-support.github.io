#!/bin/bash

echo "🔧 Resolving all merge conflicts..."

# Function to resolve conflicts in a file
resolve_conflicts() {
    local file="$1"
    
    if [ ! -f "$file" ]; then
        return
    fi
    
        
        # Clean up any remaining markers
        
        echo "✅ Resolved conflicts in: $file"
    fi
}

# Find all files with merge conflicts
echo "🔍 Scanning for merge conflicts..."
