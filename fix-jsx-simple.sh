#!/bin/bash

echo "Starting JSX error fixes..."

# Find all page.tsx files and fix common JSX issues
find app -name "page.tsx" -type f | while read file; do
  echo "Processing: $file"
  
  # Fix unescaped apostrophes
  sed -i "s/'/\&apos;/g" "$file"
  
  # Fix malformed paragraph tags with stray characters
  sed -i 's/<p className="\([^"]*\)">\([^<]*\)\n\s*">\$/<p className="\1">\2/g' "$file"
  
  # Fix malformed content patterns
  sed -i 's/Professional \([^"]*\)\n\s*">\$2<\/p>/Professional \1<\/p>/g' "$file"
  
  # Fix unclosed h3 tags
  sed -i 's/<h3 className="\([^"]*\)"[^>]*>\s*\([^<]*\)\s*$/<\h3 className="\1">\2<\/h3>/g' "$file"
  
  # Fix excessive closing divs
  sed -i 's/<\/div>\s*<\/div>\s*<\/div>\s*<\/div>\s*<\/div>\s*<\/div>/<\/div>/g' "$file"
  
  # Fix malformed JSX fragments - add closing tag if missing
  if grep -q "<>" "$file" && ! grep -q "</>" "$file"; then
    # Add closing fragment tag before the last closing brace
    sed -i 's/^}$/  <\/>\n}/' "$file"
  fi
done

echo "JSX error fixes completed!"