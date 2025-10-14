#!/bin/bash

echo "Starting refined JSX error fixes..."

# Find all page.tsx files and fix common JSX issues
find app -name "page.tsx" -type f | while read file; do
  echo "Processing: $file"
  
  # Fix unescaped apostrophes only in JSX content, not in import statements
  # First, protect import statements
  sed -i 's/import \([^&]*\)&apos;\([^&]*\)&apos;/import \1'\''\2'\''/g' "$file"
  
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
  
  # Fix specific parsing errors in JSX
  sed -i 's/16:4  error  Parsing error: '\'')'\'' expected//g' "$file"
  sed -i 's/53:10  error  Parsing error: Expected corresponding closing tag for JSX fragment//g' "$file"
  
  # Fix malformed JSX structure
  sed -i 's/<div className="[^"]*">\s*<h1[^>]*>\([^<]*\)<\/h1>\s*<p[^>]*>\([^<]*\)\n\s*">\$2<\/p>/<div className="container mx-auto px-4 py-16">\n        <div className="text-center">\n          <h1 className="text-4xl font-bold text-white mb-8">\1<\/h1>\n          <p className="text-xl text-gray-300 mb-8">\2<\/p>/g' "$file"
done

echo "Refined JSX error fixes completed!"