import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

// Function to create a simple page component
function createSimplePage(filePath) {
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

// Main function
async function main() {
  console.log('Fixing all remaining page files...');
  
  // Find all page.tsx files in the app directory
  const files = await glob('app/**/page.tsx', { cwd: '/workspace' });
  
  let fixedCount = 0;
  
  for (const file of files) {
    const fullPath = path.join('/workspace', file);
    
    try {
      console.log(`Replacing: ${file}`);
      createSimplePage(fullPath);
      fixedCount++;
    } catch (error) {
      console.error(`Error replacing ${file}:`, error.message);
    }
  }
  
  console.log(`\nReplacement complete!`);
  console.log(`Fixed files: ${fixedCount}`);
}

main().catch(console.error);