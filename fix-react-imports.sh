#!/bin/bash

echo "Fixing React imports in all TSX files..."

# Find all TSX files and fix React import issues
find app -name "*.tsx" -type f | while read file; do
  echo "Processing: $file"
  
  # Create a temporary file
  temp_file=$(mktemp)
  
  # Process the file to ensure React is imported
  awk '
  BEGIN { 
    use_client_found = 0
    react_import_found = 0
    first_import = 1
    has_jsx = 0
  }
  
  # Check if this is the use client directive
  /^'\''use client'\'';?$/ {
    use_client_found = 1
    print $0
    next
  }
  
  # Check if this is a React import
  /^import React/ {
    react_import_found = 1
    print $0
    next
  }
  
  # Check for JSX usage
  /<[A-Z]/ || /<[a-z]/ || /<\/[A-Z]/ || /<\/[a-z]/ {
    has_jsx = 1
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
    # If we found JSX but no React import, add it
    if (has_jsx && !react_import_found) {
      if (use_client_found) {
        print "import React from \"react\";"
      } else {
        print "'\''use client'\'';"
        print "import React from \"react\";"
      }
    }
  }
  ' "$file" > "$temp_file"
  
  # Replace original file with fixed version
  mv "$temp_file" "$file"
done

echo "React imports fixed!"