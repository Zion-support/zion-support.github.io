#!/bin/bash

echo "Resolving merge conflicts for cursor/create-and-deploy-new-content-6eae branch..."

# Handle the package-lock.json conflict - keep the current version
git add package-lock.json

# Handle the modify/delete conflicts - add the files that were deleted
git add src/components/AnalyticsDashboard.tsx
git add src/components/EnhancedFooter.tsx

# Resolve content conflicts by taking the incoming version for most files
conflict_files=(
    "src/Footer.tsx"
    "src/Header.tsx"
    "src/components/EnhancedNavigation.tsx"
    "src/components/EnhancedSearch.tsx"
    "src/components/PerformanceMonitor.tsx"
    "src/components/RevolutionaryContentCarousel.tsx"
    "src/pages/RevolutionaryTechInsights2026.tsx"
)

for file in "${conflict_files[@]}"; do
    if [ -f "$file" ]; then
        echo "Resolving conflicts in $file..."
        # Take the incoming version (theirs) for these files
        git checkout --theirs "$file"
        git add "$file"
    fi
done

echo "All conflicts resolved for cursor/create-and-deploy-new-content-6eae!"