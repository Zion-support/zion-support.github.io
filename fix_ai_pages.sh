#!/bin/bash

# Find all AI pages and fix them
find app -name "page.tsx" -path "*/ai-*" | while read file; do
  echo "Fixing $file"
  
  # Create a temporary file
  temp_file=$(mktemp)
  
  # Fix the return statement and other issues
  sed 's/^  return ($/  return (/' "$file" | \
  sed 's/^return (/  return (/' | \
  sed 's/^  return ($/  return (/' > "$temp_file"
  
  # Replace the original file
  mv "$temp_file" "$file"
done

echo "Fixed all AI pages"
