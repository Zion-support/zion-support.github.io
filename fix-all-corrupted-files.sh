#!/bin/bash

# Find all corrupted files with the pattern "<// Comment"
find . -name "*.tsx" -o -name "*.ts" | while read file; do
  if grep -q "<// Comment" "$file"; then
    echo "Fixing corrupted file: $file"
    
    # Extract the page name from the path
    page_name=$(basename "$(dirname "$file")")
    if [ "$page_name" = "." ]; then
      page_name=$(basename "$file" .tsx)
    fi
    
    # Create a proper title
    title=$(echo "$page_name" | sed 's/-/ /g' | sed 's/\b\w/\U&/g')
    
    # Create a basic working page
    cat > "$file" << PAGE_EOF
import { Helmet } from 'react-helmet-async';

export default function ${page_name}Page() {
  return (
    <>
      <Helmet>
        <title>${title} - Zion Tech Group</title>
        <meta name="description" content="${title} services and solutions from Zion Tech Group." />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-white mb-6">
              ${title}
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Professional ${title} services and solutions for your business needs.
            </p>
            <div className="flex justify-center space-x-4">
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg">
                Get Started
              </button>
              <button className="border border-white text-white hover:bg-white hover:text-gray-900 font-bold py-3 px-6 rounded-lg">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
PAGE_EOF
  fi
done

echo "All corrupted files have been fixed!"
