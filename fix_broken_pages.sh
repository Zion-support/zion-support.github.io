#!/bin/bash

# List of broken files to fix
files=(
  "/workspace/app/zion-ai-performance-optimizer/page.tsx"
  "/workspace/app/zion-ai-social-media-manager/page.tsx"
  "/workspace/app/zion-ai-voice-assistant-pro/page.tsx"
  "/workspace/app/zion-smart-expense-categorizer/page.tsx"
  "/workspace/app/zion-smart-inventory-optimizer/page.tsx"
)

for file in "${files[@]}"; do
  if [ -f "$file" ]; then
    echo "Fixing $file"
    # Extract the service name from the path
    service_name=$(basename $(dirname "$file") | sed 's/zion-ai-//g' | sed 's/zion-smart-//g' | sed 's/-/ /g' | sed 's/\b\w/\U&/g')
    
    cat > "$file" << EOL
'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function Page() {
  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>$service_name - Zion Tech Group</title>
        <meta name="description" content="Professional $service_name services by Zion Tech Group." />
      </Helmet>
      
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">
            $service_name
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Professional $service_name solutions tailored to your business needs.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-blue-900 mb-2">
                Expert Solutions
              </h3>
              <p className="text-blue-700">
                Our team of experts delivers cutting-edge $service_name solutions.
              </p>
            </div>
            
            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-green-900 mb-2">
                Custom Implementation
              </h3>
              <p className="text-green-700">
                Tailored $service_name implementations for your specific requirements.
              </p>
            </div>
            
            <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-purple-900 mb-2">
                24/7 Support
              </h3>
              <p className="text-purple-700">
                Round-the-clock support for all your $service_name needs.
              </p>
            </div>
          </div>
          
          <div className="mt-12">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
              Get Started Today
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
EOL
  fi
done

echo "All broken pages fixed!"
