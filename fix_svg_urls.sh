#!/bin/bash

# Find all files with the problematic SVG URL pattern and fix them
find src -name "*.tsx" -o -name "*.jsx" | while read file; do
  if grep -q "bg-\[url('data:image/svg" "$file"; then
    echo "Fixing SVG URL in $file"
    
    # Create a temporary file
    temp_file=$(mktemp)
    
    # Replace the problematic pattern with the fixed version
    sed 's/bg-\[url('\''data:image\/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http:\/\/www\.w3\.org\/2000\/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0\.1"%3E%3Ccircle cx="30" cy="30" r="2"\/%3E%3C\/g%3E%3C\/g%3E%3C\/svg%3E'\'')\]/opacity-20" style={{\n          backgroundImage: `url("data:image\/svg+xml,%3Csvg width='\''60'\'' height='\''60'\'' viewBox='\''0 0 60 60'\'' xmlns='\''http:\/\/www.w3.org\/2000\/svg'\''%3E%3Cg fill='\''none'\'' fill-rule='\''evenodd'\''%3E%3Cg fill='\''%239C92AC'\'' fill-opacity='\''0.1'\''%3E%3Ccircle cx='\''30'\'' cy='\''30'\'' r='\''2'\''\/%3E%3C\/g%3E%3C\/g%3E%3C\/svg%3E")`\n        }}/g' "$file" > "$temp_file"
    
    # Move the temporary file back to the original
    mv "$temp_file" "$file"
  fi
done

echo "Fixed SVG URLs in all files"