#!/bin/bash

echo "🔧 Resolving all merge conflicts in source files..."

# Function to resolve conflicts in a file
resolve_file_conflicts() {
    local file="$1"
    if [ -f "$file" ]; then
        echo "Resolving conflicts in $file..."
        
        # Remove all merge conflict markers and keep HEAD version
        sed -i '/^<<<<<<< HEAD$/,/^=======$/d' "$file"
        sed -i '/^>>>>>>> /d' "$file"
        
        # Remove any remaining conflict markers
        sed -i '/^<<<<<<< HEAD$/d' "$file"
        sed -i '/^=======$/d' "$file"
        sed -i '/^>>>>>>> /d' "$file"
        
        echo "✅ Resolved conflicts in $file"
    fi
}

# List of files with conflicts to resolve
CONFLICTED_FILES=(
    "src/pages/Sitemap.tsx"
    "src/components/FeatureCard.tsx"
    "src/components/ui/use-toast.tsx"
)

# Resolve conflicts in each file
for file in "${CONFLICTED_FILES[@]}"; do
    resolve_file_conflicts "$file"
done

echo "🎉 All source file conflicts resolved!"