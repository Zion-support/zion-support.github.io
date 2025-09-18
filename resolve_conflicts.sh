#!/bin/bash

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