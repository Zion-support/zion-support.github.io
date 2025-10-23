#!/bin/bash

# Find all AI pages and fix JSX tags properly
find app -name "page.tsx" -path "*/ai-*" | while read file; do
  echo "Fixing $file"
  
  # Create a temporary file
  temp_file=$(mktemp)
  
  # Fix the malformed closing tags
  sed 's/<\/p>h2>h1>Helmet>/<\/Helmet>/g' "$file" | \
  sed 's/<\/button>p>h2>h1>title>/<\/title>/g' | \
  sed 's/<\/p>h2>h1>Head>/<\/Head>/g' | \
  sed 's/<\/p>h2>h1>/<\/h1>/g' | \
  sed 's/<\/p>h2>/<\/h2>/g' | \
  sed 's/<\/p>/<\/p>/g' | \
  sed 's/<\/button>/<\/button>/g' | \
  sed 's/<\/div>/<\/div>/g' | \
  sed 's/<\/section>/<\/section>/g' | \
  sed 's/<\/main>/<\/main>/g' | \
  sed 's/<\/ul>/<\/ul>/g' | \
  sed 's/<\/li>/<\/li>/g' | \
  sed 's/<\/span>/<\/span>/g' | \
  sed 's/<\/a>/<\/a>/g' | \
  sed 's/<\/h3>/<\/h3>/g' | \
  sed 's/<\/h4>/<\/h4>/g' | \
  sed 's/<\/h5>/<\/h5>/g' | \
  sed 's/<\/h6>/<\/h6>/g' > "$temp_file"
  
  # Replace the original file
  mv "$temp_file" "$file"
done

echo "Fixed all JSX tags"
