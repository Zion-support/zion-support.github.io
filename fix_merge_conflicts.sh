#!/bin/bash

# Script to fix merge conflicts by choosing HEAD version
echo "Fixing merge conflicts in TypeScript/TSX files..."

# List of files with merge conflicts
files=(
  "/workspace/app/components/Footer.tsx"
  "/workspace/app/ai-customer-support/page.tsx"
  "/workspace/app/ai-data-visualization/page.tsx"
  "/workspace/app/ai-sales-automation/page.tsx"
  "/workspace/app/ai-workflow-automation/page.tsx"
  "/workspace/app/it-services/page.tsx"
  "/workspace/app/services/page.tsx"
)

for file in "${files[@]}"; do
  if [ -f "$file" ]; then
    echo "Processing $file..."
    
    # Create a temporary file
    temp_file=$(mktemp)
    
    # Process the file to resolve merge conflicts
    awk '
    /^<<<<<<< HEAD/ { in_head = 1; next }
    /^=======/ { in_head = 0; in_other = 1; next }
    /^>>>>>>> / { in_other = 0; next }
    in_head { print; next }
    in_other { next }
    { print }
    ' "$file" > "$temp_file"
    
    # Replace the original file
    mv "$temp_file" "$file"
    echo "Fixed $file"
  else
    echo "File $file not found, skipping..."
  fi
done

echo "Merge conflict resolution complete!"