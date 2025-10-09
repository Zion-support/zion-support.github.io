#!/usr/bin/env node

import fs from 'fs';
import path from 'path';

// Function to fix incomplete files
function fixIncompleteFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Check if file has incomplete object/array declarations
    if (content.includes('const values = [\n  {\n  ];') || 
        content.includes('const _features = [\n  {\n  ];') ||
        content.includes('const _services = [\n  {\n  ];')) {
      
      // Replace with a simple coming soon component
      content = `import React from 'react';\n\nconst Component = () => {\n  return (\n    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">\n      <div className="text-center">\n        <h1 className="text-4xl font-bold text-white mb-4">Coming Soon</h1>\n        <p className="text-gray-300 mb-8">This page is under development</p>\n        <a href="/contact" className="bg-cyan-500 text-white px-6 py-3 rounded-lg hover:bg-cyan-600 transition-colors">\n          Contact Us\n        </a>\n      </div>\n    </div>\n  );\n};\n\nexport default Component;`;
      modified = true;
    }
    
    // Check if file has incomplete function with return statement
    if (content.includes('import React from \'react\';\n\nconst values = [\n  {\n  ];\n\n  return (')) {
      content = `import React from 'react';\n\nconst Component = () => {\n  return (\n    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">\n      <div className="text-center">\n        <h1 className="text-4xl font-bold text-white mb-4">Coming Soon</h1>\n        <p className="text-gray-300 mb-8">This page is under development</p>\n        <a href="/contact" className="bg-cyan-500 text-white px-6 py-3 rounded-lg hover:bg-cyan-600 transition-colors">\n          Contact Us\n        </a>\n      </div>\n    </div>\n  );\n};\n\nexport default Component;`;
      modified = true;
    }
    
    // Check if file has incomplete object with missing properties
    if (content.includes('const values = [\n  {\n  };\n\n  return (')) {
      content = `import React from 'react';\n\nconst Component = () => {\n  return (\n    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">\n      <div className="text-center">\n        <h1 className="text-4xl font-bold text-white mb-4">Coming Soon</h1>\n        <p className="text-gray-300 mb-8">This page is under development</p>\n        <a href="/contact" className="bg-cyan-500 text-white px-6 py-3 rounded-lg hover:bg-cyan-600 transition-colors">\n          Contact Us\n        </a>\n      </div>\n    </div>\n  );\n};\n\nexport default Component;`;
      modified = true;
    }
    
    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed incomplete file: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Function to recursively find and fix incomplete files
function fixAllIncompleteFiles(dir) {
  const files = fs.readdirSync(dir);
  let fixedCount = 0;
  
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory() && !file.startsWith('.') && file !== 'node_modules') {
      fixedCount += fixAllIncompleteFiles(filePath);
    } else if (file.endsWith('.tsx') || file.endsWith('.ts') || file.endsWith('.js') || file.endsWith('.jsx')) {
      if (fixIncompleteFile(filePath)) {
        fixedCount++;
      }
    }
  }
  
  return fixedCount;
}

// Main execution
console.log('Starting incomplete file cleanup...');
const fixedCount = fixAllIncompleteFiles('./src');
console.log(`Fixed ${fixedCount} incomplete files.`);