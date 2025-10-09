#!/bin/bash

# Fix merge conflicts by choosing HEAD version
fix_file() {
    local file="$1"
    echo "Fixing merge conflicts in $file"
    
    # Remove merge conflict markers and keep HEAD version
    sed -i '/^<<<<<<< HEAD/,/^=======/!d' "$file"
    sed -i '/^=======/d' "$file"
    sed -i '/^>>>>>>>/d' "$file"
}

# Fix the three files with merge conflicts
fix_file "/workspace/app/ai-services/page.tsx"
fix_file "/workspace/app/it-consulting/page.tsx"
fix_file "/workspace/app/micro-saas/page.tsx"

echo "Merge conflicts fixed!"