#!/bin/bash
set -e

<<<<<<< HEAD
<<<<<<< HEAD
# Script to resolve merge conflicts by choosing HEAD version
<<<<<<< HEAD
=======
    sed -i '/^>>>>>>>/d' "$file"
    
    echo "Resolved: $file"
done

echo "All merge conflicts resolved!"
=======
>>>>>>> 9de841a86934bc4a418b22e98c02b56496dc2aa9
# This will remove all merge conflict markers and keep only the HEAD version

echo "Resolving merge conflicts..."

# Find all files with merge conflicts (excluding node_modules)
find . -name "*.js" -o -name "*.jsx" -o -name "*.ts" -o -name "*.tsx" -o -name "*.json" | \
grep -v node_modules | \
while read file; do
        /^>>>>>>>/ { in_other = 0; next }
        in_head { print; next }
        !in_other { print }
        ' "$file" > "$temp_file"
        
        # Replace the original file
        mv "$temp_file" "$file"
    fi
done

echo "Merge conflicts resolved!"
=======
<<<<<<< HEAD
echo "Resolving merge conflicts..."
=======
echo "Resolving merge conflicts automatically..."
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-d955

# Function to resolve conflicts by choosing HEAD version
resolve_conflicts() {
    local file="$1"
    if [ -f "$file" ]; then
        echo "Resolving conflicts in $file"
        # Use git checkout to choose HEAD version for conflicted files
        git checkout --ours "$file" 2>/dev/null || true
        git add "$file" 2>/dev/null || true
    fi
}

# Get list of conflicted files
conflicted_files=$(git diff --name-only --diff-filter=U 2>/dev/null || echo "")

if [ -n "$conflicted_files" ]; then
    echo "Found conflicted files:"
    echo "$conflicted_files"
    
    # Resolve each conflicted file
    while IFS= read -r file; do
        if [ -n "$file" ]; then
            resolve_conflicts "$file"
        fi
    done <<< "$conflicted_files"
    
<<<<<<< HEAD
    # Use sed to resolve conflicts by choosing HEAD version
    # Remove conflict markers and keep only HEAD content
    sed -i '/^<<<<<<< HEAD/,/^=======/!d' "$file"
    sed -i '/^=======/,/^>>>>>>>/d' "$file"
    sed -i '/^<<<<<<< HEAD/d' "$file"
    sed -i '/^=======/d' "$file"
    sed -i '/^>>>>>>>/d' "$file"
    
    echo "Resolved: $file"
done

echo "All merge conflicts resolved!"
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2eee
=======
    echo "All conflicts resolved automatically"
else
    echo "No conflicts found"
fi
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-d955
=======
echo "Starting merge conflict resolution..."

# Find all files with merge conflicts
echo "Finding files with merge conflicts..."
>>>>>>> 9de841a86934bc4a418b22e98c02b56496dc2aa9
