#!/bin/bash

echo "Fixing ErrorBoundary issues across the codebase..."

# Find all files that import ErrorBoundary
find app -name "*.tsx" -exec grep -l "ErrorBoundary" {} \; | while read file; do
    echo "Fixing ErrorBoundary in: $file"
    
    # Comment out ErrorBoundary import
    sed -i 's/^import ErrorBoundary/# import ErrorBoundary/' "$file"
    
    # Replace <ErrorBoundary> with <>
    sed -i 's/<ErrorBoundary>/<>/g' "$file"
    
    # Replace </ErrorBoundary> with </>
    sed -i 's/<\/ErrorBoundary>/<\/>/g' "$file"
done

echo "ErrorBoundary issues fixed!"