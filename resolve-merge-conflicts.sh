#!/bin/bash

# Script to resolve merge conflicts by choosing the incoming changes
# This script will resolve conflicts in favor of the incoming branch

echo "Resolving merge conflicts..."

# List of conflicted files
conflicted_files=(
    "src/components/AccessibilityEnhancer.tsx"
    "src/components/EnhancedSEO.tsx"
    "src/components/EnhancedUserExperience.tsx"
    "src/components/PerformanceOptimizer.tsx"
    "src/components/SEO.tsx"
    "src/components/TestimonialCard.tsx"
    "src/components/WebVitals.tsx"
    "src/data/blogPosts.ts"
    "src/hooks/useAnalytics.ts"
    "src/utils/accessibilityUtils.ts"
    "src/utils/constants.ts"
    "src/utils/errorHandling.ts"
)

for file in "${conflicted_files[@]}"; do
    if [ -f "$file" ]; then
        echo "Resolving conflicts in $file..."
        
        # Use git checkout to accept the incoming version (theirs)
        git checkout --theirs "$file"
        git add "$file"
        
        echo "✓ Resolved conflicts in $file"
    else
        echo "⚠ File $file not found, skipping..."
    fi
done

echo "All merge conflicts resolved!"
echo "Files have been staged for commit."