#!/bin/bash

echo "Fixing ErrorBoundary issues correctly..."

# Find all files that have ErrorBoundary issues and fix them
find app -name "*.tsx" -exec grep -l "ErrorBoundary" {} \; | while read file; do
    echo "Fixing ErrorBoundary in: $file"
    
    # Fix the import line - replace # import with // import
    sed -i 's/^# import ErrorBoundary/\/\/ import ErrorBoundary/' "$file"
    
    # Replace <ErrorBoundary> with <>
    sed -i 's/<ErrorBoundary>/<>/g' "$file"
    
    # Replace </ErrorBoundary> with </>
    sed -i 's/<\/ErrorBoundary>/<\/>/g' "$file"
done

echo "ErrorBoundary issues fixed correctly!"