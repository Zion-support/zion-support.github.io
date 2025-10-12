import fs from 'fs';
import path from 'path';

const fiveGPages = [
  'app/5g-data-analytics/page.tsx',
  'app/5g-edge-computing/page.tsx',
  'app/5g-implementation/page.tsx',
  'app/5g-iot-solutions/page.tsx',
  'app/5g-mobile-applications/page.tsx',
  'app/5g-network-infrastructure/page.tsx',
  'app/5g-private-networks/page.tsx',
  'app/5g-smart-city-solutions/page.tsx',
  'app/5g-solutions/page.tsx'
];

function createFiveGPage(filePath) {
  const pageName = path.basename(path.dirname(filePath));
  const componentName = pageName.split('-').map(word => 
    word.charAt(0).toUpperCase() + word.slice(1)
  ).join('') + 'Page';
  
  const displayName = pageName.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
  
  const content = `import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function ${componentName}() {
  return (
    <>
      <Helmet>
        <title>${displayName} - Zion Tech Group</title>
        <meta name="description" content="Professional ${displayName.toLowerCase()} services by Zion Tech Group. Transform your business with our expert solutions." />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-6">${displayName}</h1>
          <p className="text-lg text-gray-300 mb-8">Advanced ${displayName.toLowerCase()} solutions coming soon.</p>
          <Link 
            to="/contact" 
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
          >
            Contact Us
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </>
  );
}`;
  
  fs.writeFileSync(filePath, content);
}

// Fix all 5G pages
for (const file of fiveGPages) {
  const fullPath = path.join('/workspace', file);
  console.log(`Fixing: ${file}`);
  createFiveGPage(fullPath);
}

console.log('All 5G pages fixed!');