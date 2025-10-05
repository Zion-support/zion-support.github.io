#!/bin/bash

echo "Starting merge conflict resolution..."

# Function to resolve conflicts by keeping the newer version
resolve_conflicts() {
    local file="$1"
    
    if [[ -f "$file" ]] && grep -q "<<<<<<< HEAD" "$file"; then
        echo "Resolving conflicts in: $file"
        
        # Use the incoming changes (theirs) for most conflicts
        # This keeps the newer version from the PR
        git checkout --theirs "$file"
        
        # Remove conflict markers if any remain
        sed -i '/^<<<<<<< HEAD$/d' "$file"
        sed -i '/^=======$/d' "$file"
        sed -i '/^>>>>>>> .*$/d' "$file"
        
        echo "Resolved: $file"
    fi
}

# Find all files with merge conflicts
conflicted_files=$(git diff --name-only --diff-filter=U)

echo "Found $(echo "$conflicted_files" | wc -l) conflicted files"

# Resolve each conflicted file
for file in $conflicted_files; do
    resolve_conflicts "$file"
done

echo "Merge conflict resolution complete!"

# Add all resolved files
git add .

echo "All resolved files have been staged."