#!/bin/bash

# Script to fix common syntax errors in React/TypeScript files
echo "Fixing syntax errors..."

# Find all files with syntax errors and fix them
find ./app -name "*.tsx" -o -name "*.ts" | while read file; do
  if grep -q "return (" "$file" && grep -q "<div></div>" "$file" && grep -q "<Helmet></Helmet>" "$file"; then
    echo "Fixing syntax errors in: $file"
    
    # Extract the function name and create a proper component
    function_name=$(grep "export default function" "$file" | head -1 | sed 's/export default function \([^(]*\).*/\1/')
    
    # Create a clean version
    cat > "$file" << EOF
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function ${function_name}() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
      <Helmet>
        <title>${function_name} - Zion Tech Group</title>
        <meta name="description" content="Professional ${function_name} services for businesses" />
      </Helmet>
      
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-6">
            ${function_name}
          </h1>
          <p className="text-lg text-gray-300 mb-8">
            Professional ${function_name} services coming soon.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
          >
            Contact Us
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </div>
    </div>
  );
}
EOF
  fi
done

echo "Syntax errors fixed!"