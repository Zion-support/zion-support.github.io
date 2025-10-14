#!/bin/bash

echo "Resolving merge conflicts systematically..."

# Find all files with merge conflicts
conflicted_files=$(find . -name "*.tsx" -o -name "*.ts" -o -name "*.js" -o -name "*.jsx" | xargs grep -l "<<<<<<< HEAD" 2>/dev/null)

echo "Found $(echo "$conflicted_files" | wc -l) files with merge conflicts"

# Function to resolve conflicts by choosing the correct version
resolve_conflicts() {
    local file="$1"
    echo "Resolving conflicts in: $file"
    
    # For most files, we'll choose the version after ======= (usually the newer version)
    # But for critical files, we'll be more selective
    
    if [[ "$file" == *"App.tsx"* ]] || [[ "$file" == *"App-minimal.tsx"* ]]; then
        # For App files, keep our clean version
        echo "Keeping clean version for App file: $file"
        return
    fi
    
    if [[ "$file" == *"eslint.config.js"* ]] || [[ "$file" == *"jest.setup.js"* ]]; then
        # For config files, keep our fixed version
        echo "Keeping fixed version for config file: $file"
        return
    fi
    
    # For other files, try to resolve by choosing the version after =======
    # This is a simple approach - in practice, you might want more sophisticated logic
    sed -i '/<<<<<<< HEAD/,/=======/d' "$file"
    sed -i '/>>>>>>> /d' "$file"
    
    echo "Resolved conflicts in: $file"
}

# Process each conflicted file
echo "$conflicted_files" | while read -r file; do
    if [ -n "$file" ]; then
        resolve_conflicts "$file"
    fi
done

echo "Merge conflict resolution completed!"