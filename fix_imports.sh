#!/bin/bash

# Fix import paths in all app files
echo "🔧 Fixing import paths in app files..."

# Fix SEO imports
find /workspace/app -name "*.tsx" -exec sed -i 's|../../../components/SEO|../../components/SEO|g' {} \;

# Fix ErrorBoundary imports
find /workspace/app -name "*.tsx" -exec sed -i 's|../../../components/ErrorBoundary|../../components/ErrorBoundary|g' {} \;

# Fix LoadingSpinner imports
find /workspace/app -name "*.tsx" -exec sed -i 's|../../../components/LoadingSpinner|../../components/LoadingSpinner|g' {} \;

# Fix other common component imports
find /workspace/app -name "*.tsx" -exec sed -i 's|../../../components/|../../components/|g' {} \;

echo "✅ Import paths fixed!"