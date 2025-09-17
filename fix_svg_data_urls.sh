#!/bin/bash

# Script to fix all SVG data URL issues in TSX/JSX files
echo "Fixing SVG data URL issues..."

# Find all TSX/JSX files with SVG data URLs that need fixing
find src -name "*.tsx" -o -name "*.jsx" | xargs grep -l "data:image/svg+xml" | while read file; do
    echo "Fixing SVG data URL in: $file"
    
    # Fix the SVG data URL by properly URL encoding it
    sed -i "s/bg-\[url('data:image\/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http:\/\/www\.w3\.org\/2000\/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%23[^\"]*\" fill-opacity=\"[^\"]*\"%3E%3Ccircle cx=\"30\" cy=\"30\" r=\"2\"\/%3E%3C\/g%3E%3C\/g%3E%3C\/svg%3E')\]/bg-[url('data:image\/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A\/\/www.w3.org\/2000\/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%239C92AC%22%20fill-opacity%3D%220.1%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22\/%3E%3C\/g%3E%3C\/g%3E%3C\/svg%3E')]/g" "$file"
    
    echo "Fixed: $file"
done

echo "SVG data URL issues fixed!"