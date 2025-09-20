#!/bin/bash

echo "🔧 Fixing metadata syntax issues..."

# Fix metadata objects by adding missing commas
fix_metadata_syntax() {
    local file="$1"
    echo "Fixing metadata in: $file"
    
    # Fix missing commas in metadata objects
    sed -i '/export const metadata = {/,/}/ {
        s/^  title: .*[^,]$/&,/g
        s/^  description: .*[^,]$/&,/g
        s/^  keywords: .*[^,]$/&,/g
        s/^  openGraph: .*[^,]$/&,/g
    }' "$file"
    
    # Remove trailing commas before closing braces
    sed -i 's/,\([[:space:]]*}\)/\1/g' "$file"
}

# Find and fix all files with metadata syntax issues
find /workspace/app -name "*.tsx" -exec grep -l "export const metadata" {} \; | while read file; do
    fix_metadata_syntax "$file"
done

echo "✅ Metadata syntax issues fixed!"