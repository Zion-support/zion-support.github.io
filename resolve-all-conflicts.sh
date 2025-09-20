#!/bin/bash

echo "🔧 Resolving all merge conflicts..."

# Function to resolve conflicts in a file
resolve_conflicts() {
    local file="$1"
    
    if [ ! -f "$file" ]; then
        return
    fi
    
    if grep -q "<<<<<<< HEAD" "$file"; then
        echo "🔧 Resolving conflicts in: $file"
        
        # Create backup
        cp "$file" "${file}.backup.$(date +%s)"
        
        # Remove merge conflict markers and keep HEAD version
        sed -i '/<<<<<<< HEAD/,/=======/d' "$file"
        sed -i '/>>>>>>> /d' "$file"
        
        # Clean up any remaining markers
        sed -i '/<<<<<<< HEAD/d' "$file"
        sed -i '/=======/d' "$file"
        sed -i '/>>>>>>> /d' "$file"
        
        echo "✅ Resolved conflicts in: $file"
    fi
}

# Find all files with merge conflicts
echo "🔍 Scanning for merge conflicts..."
files_with_conflicts=$(grep -l "<<<<<<< HEAD" . 2>/dev/null | grep -v node_modules | grep -v .git || true)

if [ -n "$files_with_conflicts" ]; then
    echo "Found files with merge conflicts:"
    echo "$files_with_conflicts"
    echo ""
    
    # Resolve conflicts in each file
    while IFS= read -r file; do
        if [ -n "$file" ]; then
            resolve_conflicts "$file"
        fi
    done <<< "$files_with_conflicts"
    
    echo "✅ All conflicts resolved"
else
    echo "✅ No merge conflicts found"
fi

# Add all resolved files
echo "📁 Adding resolved files..."
git add .

echo "✅ Conflict resolution completed!"