#!/bin/bash

echo "Fixing page files..."

# Find all page.tsx files and fix common issues
find app -name "page.tsx" -type f | while read file; do
  echo "Processing: $file"
  
  # Create a temporary file
  temp_file=$(mktemp)
  
  # Process the file
  awk '
  BEGIN { 
    use_client_found = 0
    react_import_found = 0
    first_import = 1
  }
  
  # Check if this is the use client directive
  /^'\''use client'\'';?$/ {
    use_client_found = 1
    use_client_line = $0
    next
  }
  
  # Check if this is a React import
  /^import React/ {
    if (!react_import_found) {
      react_import_found = 1
      react_import_line = $0
    }
    next
  }
  
  # Process other lines
  {
    if (first_import && !use_client_found) {
      # If we have imports but no use client yet, add it
      print "'\''use client'\'';"
      use_client_found = 1
    }
    first_import = 0
    print $0
  }
  
  END {
    # If we found use client but no React import, add it
    if (use_client_found && !react_import_found) {
      print "import React from \"react\";"
    }
  }
  ' "$file" > "$temp_file"
  
  # Replace original file with fixed version
  mv "$temp_file" "$file"
done

echo "Page files fixed!"