#!/bin/bash

<<<<<<< HEAD
<<<<<<< HEAD
echo "🔧 Resolving ALL remaining merge conflicts..."

# Find all files with merge conflicts
conflict_files=$(find ./src -name "*.tsx" -o -name "*.ts" -o -name "*.jsx" -o -name "*.js" | xargs grep -l "<<<<<<< HEAD" 2>/dev/null)

echo "Found $(echo "$conflict_files" | wc -l) files with conflicts"

# For each file, resolve conflicts by keeping the cleaner version
for file in $conflict_files; do
    echo "🔧 Resolving conflicts in: $file"
    
    # Create a backup
    cp "$file" "$file.backup"
    
    # Use sed to remove conflict markers and keep the first version (HEAD)
    sed -i '/^<<<<<<< HEAD/,/^=======/!d' "$file"
    sed -i '/^=======/d' "$file"
    sed -i '/^>>>>>>> /d' "$file"
    
    # Check if conflicts were resolved
    if ! grep -q "<<<<<<< HEAD" "$file"; then
        echo "✅ Resolved conflicts in: $file"
        rm "$file.backup"
    else
        echo "⚠️  Still has conflicts: $file (restored backup)"
        mv "$file.backup" "$file"
    fi
done

echo "🎉 All conflict resolution complete!"
=======
=======
>>>>>>> cursor/create-and-deploy-new-content-df8e
echo "Resolving all merge conflicts by using main branch version..."

# Find all files with merge conflicts
conflicted_files=$(grep -r -l "<<<<<<< HEAD" src/ 2>/dev/null || true)

if [ -z "$conflicted_files" ]; then
    echo "No merge conflicts found."
    exit 0
fi

echo "Found conflicted files:"
echo "$conflicted_files"

# For each conflicted file, resolve conflicts by using main branch version
for file in $conflicted_files; do
    echo "Resolving conflicts in: $file"
    
    # Use git checkout --theirs to resolve conflicts
    git checkout --theirs "$file" 2>/dev/null || {
        echo "Failed to resolve conflicts in $file, trying manual approach..."
        
        # Manual approach: remove conflict markers and keep the content after =======
        sed -i '/^<<<<<<< HEAD/,/^=======/d' "$file"
        sed -i '/^>>>>>>> /d' "$file"
    }
    
    # Add the resolved file
    git add "$file"
done

<<<<<<< HEAD
echo "All merge conflicts resolved!"
>>>>>>> cursor/create-and-deploy-new-content-87a1
=======
echo "All merge conflicts resolved!"
>>>>>>> cursor/create-and-deploy-new-content-df8e
