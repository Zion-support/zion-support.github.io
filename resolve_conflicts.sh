#!/bin/bash

<<<<<<< HEAD
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
=======
# Script to resolve merge conflicts by keeping the newer version (after =======)

echo "Resolving merge conflicts in all files..."

# Find all files with merge conflicts
files=$(find . -name "*.tsx" -o -name "*.ts" -o -name "*.js" -o -name "*.jsx" | xargs grep -l "<<<<<<< HEAD" 2>/dev/null)

for file in $files; do
    echo "Processing: $file"
    
    # Create a temporary file
    temp_file="${file}.tmp"
    
    # Process the file to resolve conflicts
    awk '
    /<<<<<<< HEAD/ {
        in_conflict = 1
        next
    }
    /=======/ {
        if (in_conflict) {
            in_conflict = 2
            next
        }
    }
    />>>>>>> / {
        if (in_conflict == 2) {
            in_conflict = 0
            next
        }
    }
    {
        if (in_conflict == 0) {
            print
        } else if (in_conflict == 2) {
            print
        }
    }
    ' "$file" > "$temp_file"
    
    # Replace original file with processed version
    mv "$temp_file" "$file"
done

echo "Merge conflicts resolved in all files."
>>>>>>> cursor/comprehensive-app-audit-and-update-8a56
