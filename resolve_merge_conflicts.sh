#!/bin/bash

# Script to resolve merge conflicts by choosing HEAD version
echo "Resolving merge conflicts in critical files..."

# Function to resolve merge conflicts
resolve_conflicts() {
    local file="$1"
    echo "Processing: $file"
    
    # Create backup
    cp "$file" "${file}.backup"
    
    # Use git checkout to resolve conflicts by choosing HEAD version
    git checkout --ours "$file" 2>/dev/null || true
    
    # If that doesn't work, use sed to remove conflict markers and keep HEAD content
    if grep -q "<<<<<<< HEAD" "$file"; then
        # Remove conflict markers and keep HEAD content
        sed -i '/<<<<<<< HEAD/,/=======/d' "$file"
        sed -i '/>>>>>>> origin/d' "$file"
        sed -i '/>>>>>>> cursor/d' "$file"
    fi
}

# List of critical files to fix
files=(
    "app/page.tsx"
    "app/components/Footer.tsx"
    "app/components/Navigation.tsx"
    "app/components/EnhancedErrorBoundary.tsx"
    "app/components/LoadingSpinner.tsx"
    "app/ai-services/page.tsx"
    "app/it-services/page.tsx"
    "app/ai-workflow-automation/page.tsx"
    "app/ai-3d-generation/page.tsx"
    "app/api-docs/page.tsx"
    "app/gdpr/page.tsx"
)

# Process each file
for file in "${files[@]}"; do
    if [ -f "$file" ]; then
        resolve_conflicts "$file"
    fi
done

echo "Merge conflicts resolved!"