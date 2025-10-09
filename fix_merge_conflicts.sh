#!/bin/bash

# Fix merge conflicts by keeping HEAD version and removing conflict markers
files=(
    "/workspace/app/ai-workflow-automation/page.tsx"
    "/workspace/app/it-services/page.tsx"
    "/workspace/app/ai-customer-support/page.tsx"
    "/workspace/app/ai-sales-automation/page.tsx"
    "/workspace/app/ai-data-visualization/page.tsx"
    "/workspace/app/services/page.tsx"
)

for file in "${files[@]}"; do
    echo "Fixing merge conflicts in $file"
    
    # Remove merge conflict markers and keep HEAD version
    sed -i '/^<<<<<<< HEAD$/d' "$file"
    sed -i '/^=======$/d' "$file"
    sed -i '/^>>>>>>> cursor\/enhance-app-with-new-services-and-futuristic-design-4856$/d' "$file"
    
    # Remove any remaining conflict markers
    sed -i '/^<<<<<<< /d' "$file"
    sed -i '/^=======$/d' "$file"
    sed -i '/^>>>>>>> /d' "$file"
done

echo "Merge conflicts fixed!"