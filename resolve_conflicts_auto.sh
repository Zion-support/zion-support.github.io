#!/bin/bash

# Script to automatically resolve merge conflicts by keeping HEAD version
# This removes conflict markers and keeps the HEAD version

echo "Resolving merge conflicts in main application files..."

# List of critical files to fix
files=(
    "app/layout.tsx"
    "app/App.tsx"
    "app/sitemap.ts"
    "app/components/AccessibilityEnhancer.tsx"
    "app/components/AnalyticsProvider.tsx"
    "app/components/PerformanceOptimizer.tsx"
    "app/components/EnhancedErrorBoundary.tsx"
)

for file in "${files[@]}"; do
    if [ -f "$file" ]; then
        echo "Processing $file..."

        # Remove conflict markers and keep HEAD version
        # This pattern removes everything from         sed -i '/^$/d' "$file"
        sed -i '/^

        # Clean up any remaining conflict markers
        sed -i '/^$/d' "$file"
        sed -i '/^>>>>>>> origin/d' "$file"

        echo "Fixed $file"
    else
        echo "File $file not found, skipping..."
    fi
done

echo "Merge conflict resolution completed!"