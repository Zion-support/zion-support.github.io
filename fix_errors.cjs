const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Find all TypeScript/JSX files in the app directory
const files = glob.sync('app/**/*.{ts,tsx}', { cwd: __dirname });

console.log(`Found ${files.length} files to process`);

let fixedCount = 0;

files.forEach(file => {
  try {
    let content = fs.readFileSync(file, 'utf8');
    let modified = false;

    // Fix 1: Remove unused React imports
    if (content.includes("import React from 'react';") && !content.includes('React.')) {
      content = content.replace(/import React from 'react';\n?/g, '');
      modified = true;
    }

    // Fix 2: Remove unused CheckCircle imports
    if (content.includes("import { CheckCircle } from 'lucide-react';") && !content.includes('CheckCircle')) {
      content = content.replace(/import { CheckCircle } from 'lucide-react';\n?/g, '');
      modified = true;
    }

    // Fix 3: Fix duplicate imports and 'use client' in JSX
    const lines = content.split('\n');
    let inJSX = false;
    let newLines = [];
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      
      if (line.includes('return (') || line.includes('<div')) {
        inJSX = true;
      }
      
      if (inJSX && (line.includes("'use client'") || line.includes('import '))) {
        // Skip this line as it's in JSX
        continue;
      }
      
      if (line.includes('</div>') && inJSX) {
        inJSX = false;
      }
      
      newLines.push(line);
    }
    
    if (newLines.length !== lines.length) {
      content = newLines.join('\n');
      modified = true;
    }

    // Fix 4: Fix incomplete function definitions
    if (content.includes('export default PagePage;') && !content.includes('function PagePage')) {
      const pageName = path.basename(file, '.tsx').replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase()).replace(/\s/g, '');
      content = content.replace(
        'export default PagePage;',
        `export default function ${pageName}Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="pt-20 px-4 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              ${pageName}
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Professional ${pageName.toLowerCase()} services and solutions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}`
      );
      modified = true;
    }

    // Fix 5: Fix JSX syntax errors with > characters
    content = content.replace(/>\s*>/g, '>');
    content = content.replace(/<\s*</g, '<');

    if (modified) {
      fs.writeFileSync(file, content);
      console.log(`Fixed: ${file}`);
      fixedCount++;
    }
  } catch (error) {
    console.error(`Error processing ${file}:`, error.message);
  }
});

console.log(`Fixed ${fixedCount} files`);