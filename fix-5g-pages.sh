#!/bin/bash

echo "Fixing all 5G pages..."

for file in app/5g-*/page.tsx; do
  echo "Fixing $file"
  
  # Create a temporary file with the corrected content
  cat > "${file}.tmp" << 'EOF'
import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function FiveGPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>5G Solutions - Zion Tech Group</title>
        <meta name="description" content="Advanced 5G solutions for modern businesses" />
      </Helmet>
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">
            5G Solutions <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Coming Soon</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover our comprehensive 5G solutions designed to transform your business.
          </p>
        </div>
        <div className="text-center">
          <p className="text-gray-300">Coming Soon - 5G Solutions</p>
        </div>
      </div>
    </div>
  );
}
EOF
  
  # Replace the original file
  mv "${file}.tmp" "$file"
done

echo "5G pages fixes completed!"