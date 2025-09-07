#!/bin/bash

# Script to fix remaining merge conflicts by keeping HEAD version
echo "Fixing remaining merge conflicts..."

# Fix the specific files with conflicts
files=(
  "app/services/ai-customer-insights/page.tsx"
  "app/services/ai-meeting-assistant/page.tsx"
  "app/services/ai-powered-crm/page.tsx"
  "app/services/ai-project-management-suite/page.tsx"
  "fix-merge-conflicts.sh"
)

for file in "${files[@]}"; do
    if [ -f "$file" ]; then
        echo "Fixing merge conflicts in: $file"
        
        # Create a temporary file
        temp_file=$(mktemp)
        
        # Process the file to resolve conflicts by keeping HEAD version
        awk '
        /^/ { in_head = 0; in_other = 1; next }
        /^        in_other { next }
        /^/ { in_head = 1; next }
        /^/ { in_head = 0; in_other = 1; next }
        /^
        in_other { next }
        { print }
        ' "$file" > "$temp_file"
        
        # Replace the original file
        mv "$temp_file" "$file"
        
        echo "Fixed: $file"
    else
        echo "File not found: $file"
    fi
done

echo "All remaining merge conflicts have been resolved!"
