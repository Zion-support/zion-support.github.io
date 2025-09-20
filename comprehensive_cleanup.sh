#!/bin/bash

# Comprehensive cleanup script for all merge conflicts
echo "Starting comprehensive cleanup of all merge conflicts..."

# Function to clean a file completely
clean_file_completely() {
    local file="$1"
    echo "Cleaning file: $file"
    
    if [[ -f "$file" ]]; then
        # Create a backup
        cp "$file" "$file.backup"
        
        # Remove all merge conflict markers and content between them
        sed -i '/^<<<<<<< HEAD/,/^=======/d' "$file" 2>/dev/null || true
        sed -i '/^>>>>>>> /d' "$file" 2>/dev/null || true
        sed -i '/^<<<<<<< HEAD/d' "$file" 2>/dev/null || true
        sed -i '/^=======/d' "$file" 2>/dev/null || true
        
        # Fix common syntax issues
        sed -i 's/;,/,/g' "$file" 2>/dev/null || true
        sed -i 's/{,/{\n/g' "$file" 2>/dev/null || true
        sed -i 's/,}/}\n/g' "$file" 2>/dev/null || true
        sed -i 's/},/},\n/g' "$file" 2>/dev/null || true
        sed -i 's/,;/;/g' "$file" 2>/dev/null || true
        sed -i 's/;;/;/g' "$file" 2>/dev/null || true
        sed -i 's/(,/(\n/g' "$file" 2>/dev/null || true
        sed -i 's/,)/)\n/g' "$file" 2>/dev/null || true
        sed -i 's/),/),\n/g' "$file" 2>/dev/null || true
        
        # Remove empty lines and fix formatting
        sed -i '/^$/N;/^\n$/d' "$file" 2>/dev/null || true
    fi
}

# Find all files with merge conflicts
echo "Finding files with merge conflicts..."
conflicted_files=$(grep -r "<<<<<<< HEAD" src/ --include="*.tsx" --include="*.ts" --include="*.js" --include="*.jsx" -l 2>/dev/null || true)

if [[ -n "$conflicted_files" ]]; then
    echo "Found conflicted files:"
    echo "$conflicted_files"
    
    # Clean each conflicted file
    while IFS= read -r file; do
        if [[ -n "$file" ]]; then
            clean_file_completely "$file"
        fi
    done <<< "$conflicted_files"
else
    echo "No merge conflicts found in source files."
fi

# Also clean specific known problematic files
known_files=(
    "src/components/SEO.tsx"
    "src/components/ui/card.tsx"
    "src/components/ui/input.tsx"
    "src/components/ui/label.tsx"
    "src/components/jobs/applications.tsx"
)

for file in "${known_files[@]}"; do
    if [[ -f "$file" ]]; then
        clean_file_completely "$file"
    fi
done

# Add all cleaned files
git add .

echo "Comprehensive cleanup completed!"