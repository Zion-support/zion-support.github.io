#!/bin/bash

echo "Starting automated merge conflict resolution..."

# Remove build artifacts that shouldn't be committed
echo "Removing build artifacts..."
git rm -f dist/index.html 2>/dev/null || true
git rm -f src/pages/AIContentGenerator.jsx 2>/dev/null || true
git rm -f src/pages/PricingPage.jsx 2>/dev/null || true
git rm -f src/pages/Services.jsx 2>/dev/null || true
git rm -f src/pages/TalentsPage.jsx 2>/dev/null || true

# Function to resolve common import conflicts
resolve_import_conflicts() {
    local file="$1"
    if [ -f "$file" ] && grep -q "<<<<<<< HEAD" "$file"; then
        echo "Resolving import conflicts in $file"
        # Use the incoming version (from PR) for import statements
        sed -i '/<<<<<<< HEAD/,/=======/d' "$file"
        sed -i 's/^>>>>>>>.*$//' "$file"
    fi
}

# Function to resolve component conflicts by keeping the newer version
resolve_component_conflicts() {
    local file="$1"
    if [ -f "$file" ] && grep -q "<<<<<<< HEAD" "$file"; then
        echo "Resolving component conflicts in $file"
        # Keep the incoming version (from PR) which has the fixes
        sed -i '/<<<<<<< HEAD/,/=======/d' "$file"
        sed -i 's/^>>>>>>>.*$//' "$file"
    fi
}

# Resolve conflicts in key configuration files
echo "Resolving netlify.toml conflicts..."
if [ -f "netlify.toml" ] && grep -q "<<<<<<< HEAD" "netlify.toml"; then
    # Keep the incoming version which has the fixes
    sed -i '/<<<<<<< HEAD/,/=======/d' "netlify.toml"
    sed -i 's/^>>>>>>>.*$//' "netlify.toml"
fi

echo "Resolving vite.config.ts conflicts..."
if [ -f "vite.config.ts" ] && grep -q "<<<<<<< HEAD" "vite.config.ts"; then
    # Keep the incoming version which has the fixes
    sed -i '/<<<<<<< HEAD/,/=======/d' "vite.config.ts"
    sed -i 's/^>>>>>>>.*$//' "vite.config.ts"
fi

echo "Resolving utils.ts conflicts..."
if [ -f "src/lib/utils.ts" ] && grep -q "<<<<<<< HEAD" "src/lib/utils.ts"; then
    # Keep the incoming version which has the cn function
    sed -i '/<<<<<<< HEAD/,/=======/d' "src/lib/utils.ts"
    sed -i 's/^>>>>>>>.*$//' "src/lib/utils.ts"
fi

# Resolve conflicts in all page files
echo "Resolving conflicts in page files..."
find src/pages -name "*.tsx" -type f | while read file; do
    resolve_component_conflicts "$file"
done

# Resolve conflicts in component files
echo "Resolving conflicts in component files..."
find src/components -name "*.tsx" -type f | while read file; do
    resolve_component_conflicts "$file"
done

echo "Merge conflict resolution completed!"