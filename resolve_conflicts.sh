#!/bin/bash
set -e

echo "Resolving merge conflicts automatically..."

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
    
    echo "All conflicts resolved automatically"
else
    echo "No conflicts found"
fi