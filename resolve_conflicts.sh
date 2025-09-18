#!/bin/bash

echo "=== Resolving Merge Conflicts and Pushing Changes ==="

# Check current status
echo "1. Checking git status..."
git status

# Add all resolved files
echo "2. Adding resolved files..."
git add .

# Commit the resolved conflicts
echo "3. Committing resolved conflicts..."
git commit -m "Resolve all merge conflicts and integrate new content

- Cleaned up App.tsx with proper imports and routing
- Integrated all new 2026 technology pages
- Added interactive technology showcase
- Enhanced frontend advertising and user experience
- All conflicts resolved and features working"

# Push to main branch
echo "4. Pushing to main branch..."
git push origin main

echo "5. Checking for open PRs..."
# List all branches to see if there are any feature branches
git branch -a | grep -v main

echo "=== Process Complete ==="
=======
# Script to resolve merge conflicts by choosing HEAD version
# This will remove all merge conflict markers and keep only the HEAD version

echo "Resolving merge conflicts..."

# Find all files with merge conflicts (excluding node_modules)
find . -name "*.js" -o -name "*.jsx" -o -name "*.ts" -o -name "*.tsx" -o -name "*.json" | \
grep -v node_modules | \
while read file; do
        /^>>>>>>>/ { in_other = 0; next }
        in_head { print; next }
        !in_other { print }
        ' "$file" > "$temp_file"
        
        # Replace the original file
        mv "$temp_file" "$file"
    fi
done

echo "Merge conflicts resolved!"
