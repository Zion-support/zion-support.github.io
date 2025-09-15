#!/bin/bash

# Script to fix SVG data URLs by properly encoding quotes
find src -name "*.tsx" -o -name "*.jsx" | while read file; do
  if grep -q "data:image/svg+xml" "$file"; then
    echo "Fixing SVG data URLs in: $file"
    
    # Fix the SVG data URLs by replacing unencoded quotes with encoded ones
    sed -i "s/width=\"60\"/width%3D%2260%22/g" "$file"
    sed -i "s/height=\"60\"/height%3D%2260%22/g" "$file"
    sed -i "s/viewBox=\"0 0 60 60\"/viewBox%3D%220%200%2060%2060%22/g" "$file"
    sed -i "s/xmlns=\"http:\/\/www.w3.org\/2000\/svg\"/xmlns%3D%22http%3A\/\/www.w3.org\/2000\/svg%22/g" "$file"
    sed -i "s/fill=\"none\"/fill%3D%22none%22/g" "$file"
    sed -i "s/fill-rule=\"evenodd\"/fill-rule%3D%22evenodd%22/g" "$file"
    sed -i "s/fill=\"%239C92AC\"/fill%3D%22%239C92AC%22/g" "$file"
    sed -i "s/fill-opacity=\"0.1\"/fill-opacity%3D%220.1%22/g" "$file"
    sed -i "s/cx=\"30\"/cx%3D%2230%22/g" "$file"
    sed -i "s/cy=\"30\"/cy%3D%2230%22/g" "$file"
    sed -i "s/r=\"2\"/r%3D%222%22/g" "$file"
  fi
done

echo "SVG data URLs fixed!"