#!/bin/bash

echo "Starting comprehensive fix of merge conflicts and syntax errors..."

# Function to fix merge conflicts by keeping HEAD version
fix_merge_conflicts() {
    local file="$1"
    echo "Fixing merge conflicts in $file"
    
    # Remove all merge conflict markers and keep HEAD version
    sed -i '/^<<<<<<< HEAD/,/^=======/!d' "$file"
    sed -i '/^=======/d' "$file"
    sed -i '/^>>>>>>>/d' "$file"
    
    # Remove any remaining merge conflict markers
    sed -i '/^<<<<<<< /d' "$file"
    sed -i '/^=======/d' "$file"
    sed -i '/^>>>>>>>/d' "$file"
}

# Fix the main files
fix_merge_conflicts "/workspace/app/ai-services/page.tsx"
fix_merge_conflicts "/workspace/app/it-consulting/page.tsx"
fix_merge_conflicts "/workspace/app/micro-saas/page.tsx"

echo "Merge conflicts fixed!"

# Now let's run the linter to see what other errors remain
echo "Running linter to check for remaining errors..."
cd /workspace
pnpm run lint 2>&1 | head -20

echo "Comprehensive fix completed!"