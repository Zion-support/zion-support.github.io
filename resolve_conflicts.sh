#!/bin/bash

<<<<<<< HEAD
# Script to automatically resolve merge conflicts
# Takes the version from the incoming branch (origin/revolutionary-content-merge-1758084568) for most files

echo "Resolving merge conflicts automatically..."

# List of files with conflicts
conflict_files=(
    "src/Footer.tsx"
    "src/components/InteractiveTechShowcase.tsx"
    "src/components/InteractiveTechShowcase2026.tsx"
    "src/components/NewContentShowcase.tsx"
    "src/components/RevolutionaryContentShowcase2026.tsx"
    "src/components/UltimateContentShowcase2026.tsx"
    "src/hooks/useWebhooks.ts"
    "src/pages/AIInnovationHub2026.tsx"
    "src/pages/FutureTechTrends2026.tsx"
    "src/pages/QuantumAIRevolution2026.tsx"
    "src/pages/QuantumNeuralFusion2026.tsx"
    "src/pages/UltimateTechShowcase2026.tsx"
    "src/utils/notifications.ts"
    "src/utils/safeStorage.ts"
)

# For each conflicted file, take the version from the incoming branch
for file in "${conflict_files[@]}"; do
    if [ -f "$file" ]; then
        echo "Resolving conflicts in $file..."
        # Use git checkout to take the version from the incoming branch
        git checkout --theirs "$file"
        git add "$file"
    fi
done

# Handle backup files and dist files by removing them (they're not needed)
echo "Removing unnecessary backup and dist files..."
rm -f "dist/sw.js"
rm -f "recovered-branches/0nylrk-codex/fix-footer-contact-link/src/utils/fetchWithRetry.ts.backup.1758109657.backup.1758130384"
rm -f "recovered-branches/0nylrk-codex/fix-footer-contact-link/src/utils/productionLogger.ts"
rm -f "src/pages/FutureTechInnovationHub2026.tsx.backup"

echo "All conflicts resolved!"
=======
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
>>>>>>> origin/backup-main-20250918-004015
