const fs = require('fs');
const path = require('path');

// List of files that need to be cleaned up
const corruptedFiles = [
  'app/it-services/page.tsx',
  'app/ai-services/page.tsx',
  'app/micro-saas/page.tsx',
  'app/about/page.tsx',
  'app/contact/page.tsx',
  'app/consultation/page.tsx',
  'app/pricing/page.tsx'
];

// Basic page template
const basicPageTemplate = `'use client';

import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle } from 'lucide-react';

const Page: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Page Title
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Page description goes here
            </p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Coming Soon
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              This page is under development. Please check back soon.
            </p>
            <Link
              to="/"
              className="inline-flex items-center bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-cyan-700 hover:to-blue-700 transition-all duration-200"
            >
              Back to Home
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
`;

// Create basic pages for each corrupted file
corruptedFiles.forEach(filePath => {
  const fullPath = path.join(__dirname, filePath);
  const dir = path.dirname(fullPath);
  
  // Ensure directory exists
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  
  // Write basic page
  fs.writeFileSync(fullPath, basicPageTemplate);
  console.log(`✓ Created basic page: ${filePath}`);
});

console.log('\\n✓ All corrupted files have been cleaned up with basic templates');