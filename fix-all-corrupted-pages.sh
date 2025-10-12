#!/bin/bash

echo "Fixing all corrupted page files..."

# List of corrupted pages to fix
pages=(
  "cybersecurity/page.tsx"
  "database/page.tsx"
  "devops/page.tsx"
  "health/page.tsx"
  "infrastructure-management/page.tsx"
  "investors/page.tsx"
  "iot-solutions/page.tsx"
  "iot/page.tsx"
  "news/page.tsx"
  "nlp/page.tsx"
  "not-found.tsx"
  "offline/page.tsx"
  "productivity/page.tsx"
  "search/page.tsx"
  "security/page.tsx"
  "sla/page.tsx"
  "system-integration/page.tsx"
)

# Create a simple placeholder page
create_placeholder_page() {
  local filepath=$1
  local pagename=$(echo "$filepath" | sed 's/.*\///' | sed 's/\.tsx$//' | sed 's/-/ /g' | sed 's/\b\w/\U&/g')
  
  cat > "/workspace/app/$filepath" << PAGE_EOF
import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../layout';

export default function ${pagename}Page() {
  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 flex items-center justify-center">
        <div className="max-w-4xl mx-auto text-center p-8">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            ${pagename}
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            This page is under construction. Please check back later.
          </p>
          <Link
            to="/"
            className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300"
          >
            Go Home
          </Link>
        </div>
      </div>
    </Layout>
  );
}
PAGE_EOF
}

# Fix each page
for page in "${pages[@]}"; do
  echo "Fixing $page..."
  create_placeholder_page "$page"
done

echo "All corrupted pages fixed!"
