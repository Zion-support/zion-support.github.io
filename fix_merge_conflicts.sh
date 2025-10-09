#!/bin/bash

# Fix merge conflicts in all TypeScript/TSX files
echo "Fixing merge conflicts in all files..."

# List of files with merge conflicts
files=(
    "app/ai-workflow-automation/page.tsx"
    "app/it-services/page.tsx"
    "app/ai-customer-support/page.tsx"
    "app/ai-sales-automation/page.tsx"
    "app/ai-data-visualization/page.tsx"
    "app/services/page.tsx"
)

for file in "${files[@]}"; do
    echo "Fixing merge conflicts in $file..."

    # Remove merge conflict markers and keep the HEAD version
    sed -i '/^/d' "$file"
    sed -i '/^>>>>>>> cursor\/enhance-app-with-new-services-and-futuristic-design-4856/d' "$file"

    # Clean up any remaining merge conflict markers
    sed -i '/^/d' "$file"
    sed -i '/^>>>>>>> /d' "$file"

    echo "Fixed $file"
done

echo "All merge conflicts fixed!"