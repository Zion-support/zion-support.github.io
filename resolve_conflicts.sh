#!/bin/bash

<<<<<<< HEAD
=======
<<<<<<< HEAD
# Script to resolve common merge conflicts
echo "Starting merge conflict resolution..."

# Find all files with merge conflicts
conflicted_files=$(grep -l "^<<<<<<<\|^=======\|^>>>>>>>" -r src/ 2>/dev/null | head -20)

for file in $conflicted_files; do
    echo "Processing: $file"
    
    # Create a backup
    cp "$file" "$file.backup"
    
    # Remove merge conflict markers and keep the first version (HEAD)
    sed -i '/^<<<<<<< /,/^=======/d' "$file"
    sed -i '/^>>>>>>> /d' "$file"
    
    echo "Resolved conflicts in: $file"
done

echo "Merge conflict resolution completed for first 20 files."
echo "Please review the changes and test the build."
=======
>>>>>>> origin/cursor/install-dependencies-and-fix-errors-827a
echo "Starting merge conflict resolution..."

# List of critical files that we want to keep our version for
CRITICAL_FILES=(
    "src/pages/Home.tsx"
    "src/components/layout/MainSidebar.tsx"
    "src/components/SEO.tsx"
    "src/components/PerformanceOptimizer.tsx"
    "src/components/EnhancedAccessibilityEnhancer.tsx"
)

# Function to resolve conflicts for a file
resolve_conflicts() {
    local file="$1"
    
    if [[ ! -f "$file" ]]; then
        echo "File $file does not exist, skipping..."
        return
    fi
    
    if ! grep -q "<<<<<<< HEAD" "$file"; then
        echo "No conflicts in $file, skipping..."
        return
    fi
    
    echo "Resolving conflicts in $file..."
    
    # Check if it's a critical file
    for critical in "${CRITICAL_FILES[@]}"; do
        if [[ "$file" == "$critical" ]]; then
            echo "Keeping our version for critical file: $file"
            # Use our version (HEAD) for critical files
            git checkout --ours "$file"
            git add "$file"
            return
        fi
    done
    
    # For non-critical files, use the remote version (theirs)
    echo "Using remote version for: $file"
    git checkout --theirs "$file"
    git add "$file"
}

# Get all files with merge conflicts
conflict_files=$(grep -l "<<<<<<< HEAD" -r . --include="*.tsx" --include="*.ts" --include="*.js" --include="*.jsx" --include="*.json" 2>/dev/null)

echo "Found $(echo "$conflict_files" | wc -l) files with conflicts"

# Resolve conflicts for each file
while IFS= read -r file; do
    if [[ -n "$file" ]]; then
        resolve_conflicts "$file"
    fi
done <<< "$conflict_files"

echo "Merge conflict resolution completed!"
<<<<<<< HEAD

# Do not auto-run build here to avoid CI side effects
=======
echo "Running build to check for errors..."

# Try to build the project
npm run build

if [ $? -eq 0 ]; then
    echo "✅ Build successful after conflict resolution!"
else
    echo "❌ Build failed. Please check for remaining issues."
fi
>>>>>>> d6585b798475a0a58fc2298a75192e5aeb0df69c
>>>>>>> origin/cursor/install-dependencies-and-fix-errors-827a
