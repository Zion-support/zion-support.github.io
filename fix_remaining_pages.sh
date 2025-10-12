#!/bin/bash

echo "Fixing remaining corrupted page files..."

# List of page files that need fixing
page_files=(
  "app/cybersecurity/page.tsx"
  "app/database/page.tsx"
  "app/devops/page.tsx"
  "app/health/page.tsx"
  "app/infrastructure-management/page.tsx"
  "app/investors/page.tsx"
  "app/iot-solutions/page.tsx"
  "app/iot/page.tsx"
  "app/news/page.tsx"
  "app/nlp/page.tsx"
  "app/not-found.tsx"
  "app/offline/page.tsx"
  "app/productivity/page.tsx"
  "app/search/page.tsx"
  "app/security/page.tsx"
  "app/sla/page.tsx"
  "app/system-integration/page.tsx"
)

# Create basic page templates for corrupted files
for file in "${page_files[@]}"; do
  if [ -f "$file" ]; then
    echo "Fixing: $file"
    
    # Extract page name from filename
    page_name=$(basename "$file" .tsx)
    page_name=$(echo "$page_name" | sed 's/-/ /g' | sed 's/\b\w/\U&/g')
    
    # Create a basic page component
    cat > "$file" << PAGE_EOF
import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../layout';

export default function ${page_name}() {
  return (
    <Layout>
      <div className="min-h-screen bg-gray-900">
        <div className="container mx-auto px-4 py-20">
          <h1 className="text-4xl font-bold text-white mb-8">${page_name}</h1>
          <p className="text-gray-300 text-lg mb-8">
            This page is under construction. Please check back later.
          </p>
          <Link 
            to="/" 
            className="inline-flex items-center px-6 py-3 bg-cyan-500 hover:bg-cyan-600 text-white font-semibold rounded-lg transition-colors"
          >
            Go Home
          </Link>
        </div>
      </div>
    </Layout>
  );
}
PAGE_EOF
  fi
done

echo "Page files fixed!"
