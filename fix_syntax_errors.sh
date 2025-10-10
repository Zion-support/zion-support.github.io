#!/bin/bash

echo "Fixing common syntax errors..."

# Find all TypeScript/TSX files
find app/ -name "*.tsx" -o -name "*.ts" | while read file; do
  echo "Processing: $file"
  
  # Create a temporary file
  temp_file=$(mktemp)
  
  # Fix common syntax errors
  sed -E '
    # Fix malformed JSX fragments
    s/<>([^<]*)$/<>$1<\/>/
    
    # Fix malformed Helmet tags
    s/<Helmet \/>/<Helmet>/
    s/<\/Helmet>/<\/Helmet>/
    
    # Fix malformed className attributes with spaces
    s/className="([^"]*): ([^"]*)"/className="$1:$2"/g
    
    # Fix malformed closing tags
    s/<\/div>;$/<\/div>/g
    s/<\/section>;$/<\/section>/g
    s/<\/h1>;$/<\/h1>/g
    s/<\/h2>;$/<\/h2>/g
    s/<\/h3>;$/<\/h3>/g
    s/<\/p>;$/<\/p>/g
    
    # Fix malformed function calls
    s/\);};$/);/g
    s/\);};$/);/g
    
    # Fix malformed array syntax
    s/,\s*\]/]/g
    s/,\s*}/}/g
    
    # Fix malformed object syntax
    s/,\s*}/}/g
    
    # Fix malformed JSX attributes
    s/className="([^"]*),\s*([^"]*)"/className="$1 $2"/g
    
    # Fix malformed closing tags with semicolons
    s/<\/[^>]+>;$/&/g
  ' "$file" > "$temp_file"
  
  # Replace the original file
  mv "$temp_file" "$file"
done

echo "Syntax errors fixed!"
