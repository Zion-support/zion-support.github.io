#!/bin/bash

# Script to resolve remaining merge conflicts
# This will use the incoming changes (from the branch being merged) for most files

echo "Resolving remaining merge conflicts..."

# List of files with conflicts
files=(
    "components/layout/Header.tsx"
    "components/layout/Layout.tsx"
    "components/layout/MainLayout.tsx"
    "components/performance/LazyComponent.tsx"
    "components/performance/OptimizedImage.tsx"
    "components/ui/EnhancedMarketplaceCard.tsx"
    "components/ui/InteractiveNavigation.tsx"
    "components/ui/NotificationSystem.tsx"
)

# For each file, use the incoming version (from the branch being merged)
for file in "${files[@]}"; do
    echo "Resolving conflicts in $file..."
    git checkout --theirs "$file"
    git add "$file"
done

echo "All conflicts resolved!"