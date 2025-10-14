#!/bin/bash

echo "Starting comprehensive JSX error fixes..."

# Find all page.tsx files and fix common JSX issues
find app -name "page.tsx" -type f | while read file; do
  echo "Processing: $file"
  
  # Fix malformed paragraph tags with stray characters
  sed -i 's/<p className="\([^"]*\)">\([^<]*\)\n\s*">\$2<\/p>/<p className="\1">\2<\/p>/g' "$file"
  
  # Fix malformed content patterns
  sed -i 's/Professional \([^"]*\)\n\s*">\$2<\/p>/Professional \1<\/p>/g' "$file"
  
  # Fix unclosed h3 tags - remove extra closing tags
  sed -i 's/<h3 className="\([^"]*\)"[^>]*>\s*\([^<]*\)<\/h3>\s*<\/h3>/<h3 className="\1">\2<\/h3>/g' "$file"
  
  # Fix excessive closing divs
  sed -i 's/<\/div>\s*<\/div>\s*<\/div>\s*<\/div>\s*<\/div>\s*<\/div>/<\/div>/g' "$file"
  
  # Fix malformed JSX structure - remove duplicate content
  sed -i '/<div className="bg-green-50 border border-green-200 rounded-lg p-6">/,/<\/div>/{
    /<div className="bg-green-50 border border-green-200 rounded-lg p-6">/!d
  }' "$file"
  
  # Fix malformed JSX structure - remove duplicate content
  sed -i '/<div className="bg-purple-50 border border-purple-200 rounded-lg p-6">/,/<\/div>/{
    /<div className="bg-purple-50 border border-purple-200 rounded-lg p-6">/!d
  }' "$file"
  
  # Fix malformed paragraph content
  sed -i 's/<p className="\([^"]*\)">\([^<]*\)\n\s*">\$2<\/p>/<p className="\1">\2<\/p>/g' "$file"
  
  # Fix malformed JSX fragments - add closing tag if missing
  if grep -q "<>" "$file" && ! grep -q "</>" "$file"; then
    # Add closing fragment tag before the last closing brace
    sed -i 's/^}$/  <\/>\n}/' "$file"
  fi
  
  # Clean up any remaining malformed content
  sed -i 's/Professional \([^"]*\)\n\s*">\$2<\/p>/Professional \1<\/p>/g' "$file"
  
  # Fix malformed h3 tags
  sed -i 's/<h3 className="\([^"]*\)"[^>]*>\s*\([^<]*\)\s*$/<\h3 className="\1">\2<\/h3>/g' "$file"
done

echo "Comprehensive JSX error fixes completed!"