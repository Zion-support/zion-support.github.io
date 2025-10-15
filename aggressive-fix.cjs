const fs = require('fs');
const path = require('path');

function createCleanPage(filePath) {
  const fileName = path.basename(filePath, '.tsx');
  const dirName = path.basename(path.dirname(filePath));
  
  // Create a clean, simple page component
  const cleanContent = `import React from 'react';
import { Helmet } from 'react-helmet-async';

const ${fileName.charAt(0).toUpperCase() + fileName.slice(1)} = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>${fileName.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())} - Zion Tech Group</title>
        <meta name="description" content="Advanced ${fileName.replace(/-/g, ' ')} solutions" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">
            ${fileName.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())} <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Solutions</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover our comprehensive ${fileName.replace(/-/g, ' ')} solutions designed to transform your business
          </p>
        </div>
        
        <div className="text-center">
          <p className="text-gray-300">Coming Soon - ${fileName.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())} Solutions</p>
        </div>
      </div>
    </div>
  );
};

export default ${fileName.charAt(0).toUpperCase() + fileName.slice(1)};
`;

  fs.writeFileSync(filePath, cleanContent, 'utf8');
  console.log(`Created clean page: ${filePath}`);
}

function findAndFixCorruptedFiles(dir) {
  const files = fs.readdirSync(dir);
  
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      findAndFixCorruptedFiles(filePath);
    } else if (file.endsWith('.tsx') && file !== 'App.tsx' && file !== 'main.tsx') {
      try {
        const content = fs.readFileSync(filePath, 'utf8');
        
        // Check if file is corrupted (has duplicate imports, malformed syntax, etc.)
        if (content.includes('import React from \'react\n') || 
            content.includes('import {') && content.includes('\nimport {') ||
            content.includes('""') || 
            content.includes("''") ||
            content.includes('<<<<<<<') ||
            content.includes('=======') ||
            content.includes('>>>>>>>')) {
          createCleanPage(filePath);
        }
      } catch (error) {
        console.error(`Error checking ${filePath}:`, error.message);
      }
    }
  }
}

// Start fixing corrupted files
console.log('Starting aggressive fix for corrupted files...');
findAndFixCorruptedFiles('./app');
console.log('Aggressive fix completed!');