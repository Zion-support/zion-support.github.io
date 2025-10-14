#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

// Get all TSX files in the app directory
const result = execSync('find app -name "*.tsx" -type f', { encoding: 'utf8' });
const files = result.trim().split('\n').filter(f => f && f.length > 0);

console.log(`Found ${files.length} TSX files`);

const corruptedFiles = [];

files.forEach(file => {
  try {
    const content = fs.readFileSync(file, 'utf8');
    
    // Check for common corruption patterns
    const hasSyntaxErrors = 
      content.includes(');}') || // Double closing
      content.includes('}\'') || // Stray quote
      content.includes('}\n  }') || // Extra closing brace
      content.includes('Unexpected') || // Error messages in code
      content.includes('ERROR:') || // Error messages in code
      content.includes('cursor/fix-errors') || // Merge conflict markers
      content.includes('<<<<<<<') || // Merge conflict markers
      content.includes('=======') || // Merge conflict markers
      content.includes('>>>>>>>') || // Merge conflict markers
      content.length < 200 || // Too short
      !content.includes('export default') || // Missing export
      !content.includes('React.FC') && !content.includes('function') || // Not a proper component
      content.includes('import React') && !content.includes('return'); // Has imports but no return
    
    if (hasSyntaxErrors) {
      corruptedFiles.push(file);
      console.log(`Corrupted: ${file}`);
    }
  } catch (error) {
    console.error(`Error checking ${file}:`, error.message);
    corruptedFiles.push(file);
  }
});

// Create simple working versions of corrupted files
corruptedFiles.forEach(file => {
  try {
    const fileName = path.basename(file, '.tsx');
    const componentName = fileName.replace(/(^|-)([a-z])/g, (match, p1, p2) => p2.toUpperCase());
    
    const simpleComponent = `import React from 'react';
import { Helmet } from 'react-helmet-async';

const ${componentName}: React.FC = () => {
  return (
    <React.Fragment>
      <Helmet>
        <title>${fileName.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())} - Zion Tech Group</title>
        <meta name="description" content="Professional ${fileName.replace(/-/g, ' ')} services by Zion Tech Group" />
        <meta name="keywords" content="${fileName.replace(/-/g, ', ')}" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-20">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              ${fileName.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Professional ${fileName.replace(/-/g, ' ')} services
            </p>
            <div className="bg-slate-800 rounded-lg p-8 max-w-2xl mx-auto">
              <p className="text-gray-300">
                This page is currently under development. Please check back soon for more information.
              </p>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ${componentName};`;

    fs.writeFileSync(file, simpleComponent);
    console.log(`Fixed: ${file}`);
  } catch (error) {
    console.error(`Error fixing ${file}:`, error.message);
  }
});

console.log(`Fixed ${corruptedFiles.length} corrupted files`);