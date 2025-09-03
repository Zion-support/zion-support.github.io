#!/bin/bash

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
