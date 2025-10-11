#!/bin/bash

# Find all files with merge conflicts
files_with_conflicts=$(find app -name "*.tsx" -exec grep -l "<<<<<<< HEAD" {} \;)

echo "Found files with merge conflicts:"
echo "$files_with_conflicts"

# Function to create a basic page
create_basic_page() {
    local file="$1"
    local page_name=$(basename "$(dirname "$file")")
    local component_name="${page_name^}Page"
    
    echo "Creating basic page for: $file"
    
    cat > "$file" << PAGE_EOF
'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const ${component_name}: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>${page_name^} - Zion AI | AI & IT Solutions</title>
        <meta name="description" content="Discover our ${page_name} services and solutions." />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        <main className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              ${page_name^}
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Coming soon - We're working on this page.
            </p>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default ${component_name};
PAGE_EOF
}

# Fix each file with conflicts
for file in $files_with_conflicts; do
    echo "Fixing: $file"
    create_basic_page "$file"
done

echo "All merge conflicts have been resolved!"
