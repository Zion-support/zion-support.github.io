#!/bin/bash

# Resolve merge conflicts by accepting the main branch version for most files
# and keeping the current branch version for specific files

echo "Resolving merge conflicts..."

# List of files with conflicts
conflict_files=(
  "app/components/EnhancedErrorBoundary.tsx"
  "app/components/LazyWrapper.tsx"
  "app/components/StructuredData.tsx"
  "app/docs/page.tsx"
  "app/hooks/useAdvancedPerformanceMonitoring.ts"
  "app/pages/AISolutionsPage.tsx"
  "components/AccessibilityComponents.tsx"
  "components/utils/accessibilityUtils.ts"
  "fix-syntax-errors.js"
  "jest.setup.ts"
  "pages/AboutPage.tsx"
  "pages/ITServicesPage.tsx"
  "pages/MicroSAASPage.tsx"
  "pages/ServiceDetailPage.tsx"
  "pages/ServicesPage.tsx"
)

# For most files, accept the main branch version (theirs)
for file in "${conflict_files[@]}"; do
  if [ -f "$file" ]; then
    echo "Resolving conflicts in $file..."
    # Accept the main branch version
    git checkout --theirs "$file"
    git add "$file"
  fi
done

echo "All conflicts resolved!"