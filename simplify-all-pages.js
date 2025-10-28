import fs from 'fs';
// import _path from 'path'; // Removed unused import
import { glob } from 'glob';

async function simplifyAllPages() {
  console.log('Simplifying all page files...');
  
  // Find all page.tsx files
  const files = await glob('app/**/page.tsx');
  
  const simpleTemplate = `import React from 'react'

export default function Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-white mb-8">
            Service Page
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
            Advanced AI & IT Solutions for Modern Businesses
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-semibold text-white mb-4">AI Solutions</h3>
              <p className="text-gray-300">Cutting-edge artificial intelligence services</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-semibold text-white mb-4">IT Services</h3>
              <p className="text-gray-300">Comprehensive technology solutions</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}`;

  let modified = 0;
  
  for (const file of files) {
    try {
      // Skip the main page
      if (file === 'app/page.tsx') {
        continue;
      }
      
      fs.writeFileSync(file, simpleTemplate);
      console.log(`Simplified: ${file}`);
      modified++;
      
    } catch (error) {
      console.error(`Error processing ${file}:`, error.message);
    }
  }
  
  console.log(`Simplified ${modified} page files`);
}

simplifyAllPages().catch(console.error);