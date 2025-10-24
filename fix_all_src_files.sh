#!/bin/bash

# Function to create a basic page component
create_page() {
    local file_path="$1"
    local title="$2"
    local description="$3"
    
    cat > "$file_path" << PAGE_EOF
'use client';

import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '$title - Zion Tech Group',
  description: '$description',
  keywords: 'AI solutions, IT services, technology services',
  openGraph: {
    title: '$title - Zion Tech Group',
    description: '$description',
    type: 'website',
    url: 'https://ziontechgroup.com/',
  },
};

const Page: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            $title
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            $description
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
              Get Started
            </a>
            <a href="/services" className="border border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3 rounded-lg font-semibold transition-colors">
              Learn More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
PAGE_EOF
}

# Function to create a basic component
create_component() {
    local file_path="$1"
    local name="$2"
    local description="$3"
    
    cat > "$file_path" << COMPONENT_EOF
import React from 'react';

interface ${name}Props {
  className?: string;
}

const ${name}: React.FC<${name}Props> = ({ className = '' }) => {
  return (
    <div className={className}>
      <h2>${name}</h2>
      <p>${description}</p>
    </div>
  );
};

export default ${name};
COMPONENT_EOF
}

# Find all tsx files in src directory
find src -name "*.tsx" -type f | while read -r file; do
    echo "Processing: $file"
    
    # Check if file has syntax errors
    if grep -q "Error: Parsing error\|Merge conflict marker\|Expression expected\|Declaration or statement expected\|Property assignment expected\|Unterminated string literal\|JSX expressions must have one parent element\|Property or signature expected\|Expression or comma expected\|; expected\|( expected\|{ or JSX element expected\|) expected" "$file" 2>/dev/null; then
        echo "Fixing: $file"
        
        # Determine if it's a page or component
        if [[ "$file" == */page.tsx ]]; then
            # Extract title from file path
            title=$(basename "$(dirname "$file")" | sed 's/-/ /g' | sed 's/\b\w/\U&/g')
            description="Professional $title solutions for modern businesses."
            create_page "$file" "$title" "$description"
        else
            # Extract component name
            name=$(basename "$file" .tsx | sed 's/-/ /g' | sed 's/\b\w/\U&/g')
            description="This component is under construction."
            create_component "$file" "$name" "$description"
        fi
        
        echo "Fixed: $file"
    fi
done

echo "Done fixing all src files"
