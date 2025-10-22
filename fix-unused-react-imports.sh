#!/bin/bash

echo "Removing unused React imports..."

# Find all TSX files and remove unused React imports
find app -name "*.tsx" -type f | while read file; do
  echo "Processing: $file"
  
  # Create a temporary file
  temp_file=$(mktemp)
  
  # Process the file to remove unused React imports
  awk '
  BEGIN { 
    use_client_found = 0
    react_import_found = 0
    has_jsx = 0
    in_jsx = 0
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
    # Skip this line - we'\''ll add it back if needed
    next
  }
  
  # Check for JSX usage (simple heuristic)
  /<[A-Z]/ || /<[a-z]/ || /<\/[A-Z]/ || /<\/[a-z]/ || /<div/ || /<span/ || /<button/ || /<h[1-6]/ || /<p>/ || /<a>/ || /<img/ || /<ul/ || /<li/ || /<nav/ || /<header/ || /<footer/ || /<main/ || /<section/ || /<article/ || /<aside/ {
    has_jsx = 1
  }
  
  # Process other lines
  {
    print $0
  }
  
  END {
    # Only add React import if we have JSX and no React import was found
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

echo "Unused React imports removed!"