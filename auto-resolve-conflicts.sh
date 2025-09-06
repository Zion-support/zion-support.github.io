#!/bin/bash

echo "Auto-resolving merge conflicts..."

# Remove deleted files that are causing conflicts
echo "Removing deleted files..."
rm -f apps.backup/api/src/index.ts
rm -f apps.backup/api/src/openai.ts
rm -f apps.backup/api/src/pg.ts
rm -f apps.backup/slack-bot/src/index.ts

# Auto-resolve common merge conflicts in TypeScript/JavaScript files
echo "Resolving merge conflicts in code files..."
find . -name "*.tsx" -o -name "*.ts" -o -name "*.js" -o -name "*.jsx" | while read file; do
    if [ -f "$file" ] && grep -q "" "$file"; then
        echo "Resolving conflicts in $file"
        
        # For most conflicts, keep the main branch version (HEAD)
        # This is a simple strategy - in production you'd want more sophisticated resolution
        sed -i '/^/,/^        sed -i '/^$/d' "$file"
    fi
done

# Add all resolved files
git add .

# Commit the merge
git commit -m "Auto-resolve merge conflicts for PR #12054

- Removed deleted files causing conflicts
- Kept main branch version for most conflicts
- Automated conflict resolution for TypeScript/JavaScript files"

echo "Merge conflicts resolved and committed!"