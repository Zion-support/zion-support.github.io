const fs = require('fs');
const path = require('path');

const filesToFix = [
  'app/zion-ai-inventory-manager/page.tsx',
  'app/zion-ai-performance-optimizer/page.tsx',
  'app/zion-ai-social-media-manager/page.tsx',
  'app/zion-ai-voice-assistant-pro/page.tsx',
  'app/zion-smart-expense-categorizer/page.tsx',
  'app/zion-smart-inventory-optimizer/page.tsx'
];

filesToFix.forEach(filePath => {
  const fullPath = path.join(__dirname, filePath);
  
  if (fs.existsSync(fullPath)) {
    let content = fs.readFileSync(fullPath, 'utf8');
    
    // Fix the broken structure
    if (content.includes("'use client';\nimport React from 'react';\n\n      <Helmet>")) {
      const pageName = filePath.split('/').pop().replace('.tsx', '').replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
      
      content = `'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function ${pageName.replace(/\s+/g, '')}Page() {
  return (
    <>
      <Helmet>
        <title>${pageName} - Zion Tech Group</title>
        <meta name="description" content="Professional ${pageName.toLowerCase()} services by Zion Tech Group." />
      </Helmet>
      
      <div className="min-h-screen bg-white">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-8">
              ${pageName}
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Professional ${pageName.toLowerCase()} solutions tailored to your business needs.
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-blue-900 mb-2">
                  Expert Solutions
                </h3>
                <p className="text-blue-700">
                  Our team of experts delivers cutting-edge ${pageName.toLowerCase()} solutions.
                </p>
              </div>
              
              <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-green-900 mb-2">
                  Custom Implementation
                </h3>
                <p className="text-green-700">
                  Tailored ${pageName.toLowerCase()} implementations for your specific requirements.
                </p>
              </div>
              
              <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-purple-900 mb-2">
                  24/7 Support
                </h3>
                <p className="text-purple-700">
                  Round-the-clock support for all your ${pageName.toLowerCase()} needs.
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
    </>
  );
}`;
      
      fs.writeFileSync(fullPath, content);
      console.log(`Fixed ${filePath}`);
    }
  }
});

console.log('Page fixing completed!');