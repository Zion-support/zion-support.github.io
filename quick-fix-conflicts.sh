#!/bin/bash

echo "🔧 Quick conflict resolution starting..."

# Function to fix conflicts in a file
fix_file() {
    local file="$1"
    if [ -f "$file" ] && grep -q "<<<<<<< HEAD" "$file"; then
        echo "Fixing: $file"
        
        # Create backup
        cp "$file" "$file.backup"
        
        # Remove conflict markers and keep HEAD version
        sed -i '/^<<<<<<< HEAD/,/^=======/!d; /^=======/d; /^>>>>>>> /d' "$file"
        
        # Clean up any remaining markers
        sed -i '/^<<<<<<< /d; /^=======/d; /^>>>>>>> /d' "$file"
        
        # Remove duplicate lines (common after merge conflicts)
        awk '!seen[$0]++' "$file" > "$file.tmp" && mv "$file.tmp" "$file"
        
        echo "✅ Fixed: $file"
    fi
}

# Fix key files first
echo "Fixing key configuration files..."
fix_file "package.json"
fix_file "yarn.lock"
fix_file "tsconfig.json"
fix_file "vite.config.ts"
fix_file "tailwind.config.js"

# Fix main source files
echo "Fixing main source files..."
find src -name "*.tsx" -o -name "*.ts" -o -name "*.js" -o -name "*.jsx" | while read file; do
    fix_file "$file"
done

# Fix components
echo "Fixing component files..."
find src/components -name "*.tsx" -o -name "*.ts" | while read file; do
    fix_file "$file"
done

# Fix pages
echo "Fixing page files..."
find src/pages -name "*.tsx" -o -name "*.ts" | while read file; do
    fix_file "$file"
done

echo "🎉 Quick conflict resolution completed!"