#!/bin/bash

# Find all AI pages and fix missing closing tags
find app -name "page.tsx" -path "*/ai-*" | while read file; do
  echo "Fixing $file"
  
  # Create a temporary file
  temp_file=$(mktemp)
  
  # Fix missing closing tags
  sed 's/  <\//<\/h1>/g' "$file" | \
  sed 's/  <\//<\/h2>/g' | \
  sed 's/  <\//<\/p>/g' | \
  sed 's/  <\//<\/button>/g' | \
  sed 's/  <\//<\/div>/g' | \
  sed 's/  <\//<\/section>/g' | \
  sed 's/  <\//<\/main>/g' | \
  sed 's/  <\//<\/ul>/g' | \
  sed 's/  <\//<\/li>/g' | \
  sed 's/  <\//<\/span>/g' | \
  sed 's/  <\//<\/a>/g' | \
  sed 's/  <\//<\/h3>/g' | \
  sed 's/  <\//<\/h4>/g' | \
  sed 's/  <\//<\/h5>/g' | \
  sed 's/  <\//<\/h6>/g' > "$temp_file"
  
  # Replace the original file
  mv "$temp_file" "$file"
done

echo "Fixed all missing closing tags"
