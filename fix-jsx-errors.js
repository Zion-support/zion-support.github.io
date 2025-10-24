const fs = require('fs');
const path = require('path');

// Function to fix JSX syntax errors in a file
function fixJSXErrors(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Fix 1: Add missing React import if not present
    if (!content.includes("import React from 'react'") && !content.includes("import { React")) {
      if (content.includes("'use client'")) {
        content = content.replace("'use client'", "'use client';\nimport React from 'react';");
      } else {
        content = "import React from 'react';\n" + content;
      }
      modified = true;
    }

    // Fix 2: Fix malformed LinkContact tags
    content = content.replace(/<LinkContact([^>]*)>\s*([^<]*)\s*<ArrowRight\$3\s*\/>\s*<\/Link>/g, 
      '<Link href="/contact" className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center mx-auto w-fit">\n            $2\n            <ArrowRight className="w-5 h-5 ml-2" />\n          </Link>');

    // Fix 3: Fix malformed Link tags with missing href
    content = content.replace(/<Link([^>]*?)\s*>\s*([^<]*)\s*<ArrowRight\$3\s*\/>\s*<\/Link>/g, 
      '<Link href="/contact" className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center mx-auto w-fit">\n            $2\n            <ArrowRight className="w-5 h-5 ml-2" />\n          </Link>');

    // Fix 4: Fix missing closing tags for h1
    content = content.replace(/<h1([^>]*)>\s*([^<]*)\s*\n\s*<\/h1>/g, '<h1$1>$2</h1>');

    // Fix 5: Fix extra closing div tags
    content = content.replace(/\n\s*<\/div>\s*\n\s*<\/div>\s*\);\s*}/g, '\n    </div>\n  );\n}');

    // Fix 6: Fix malformed import statements
    content = content.replace(/import\s*{\s*React\s*Suspense\s*lazy\s*from\s*'react'/g, 
      "import React, { Suspense, lazy } from 'react'");
    
    content = content.replace(/import\s*{\s*BrowserRouter\s*Routes\s*Route\s*from\s*'react-router-dom'/g, 
      "import { BrowserRouter, Routes, Route } from 'react-router-dom'");
    
    content = content.replace(/import\s*HelmetProvider\s*from\s*'react-helmet-async'/g, 
      "import { HelmetProvider } from 'react-helmet-async'");

    // Fix 7: Fix malformed lazy imports
    content = content.replace(/const\s+(\w+)\s*=\s*lazy\s*=>\s*import'([^']+)'/g, 
      "const $1 = lazy(() => import('$2'))");

    // Fix 8: Fix malformed JSX structure in App.tsx
    if (filePath.includes('App.tsx')) {
      content = content.replace(/<HelmetProvider><\/HelmetProvider>\s*<ErrorBoundary><\/ErrorBoundary>\s*<BrowserRouter><\/BrowserRouter>/g, 
        '<HelmetProvider>\n      <ErrorBoundary>\n        <BrowserRouter>');
      
      content = content.replace(/<\/Routes>\s*<\/Suspense>\s*<\/BrowserRouter>\s*<\/ErrorBoundary>\s*<\/HelmetProvider>/g, 
        '            </Routes>\n          </Suspense>\n        </BrowserRouter>\n      </ErrorBoundary>\n    </HelmetProvider>');

      // Fix malformed Route tags
      content = content.replace(/<Route\s+path="([^"]+)"\s+element=\{<(\w+)\s*\/>\s*\}\s*\/><\/Route>/g, 
        '<Route path="$1" element={<$2 />} />');
    }

    // Fix 9: Fix missing semicolons
    content = content.replace(/(import[^;]+)(\n)/g, '$1;$2');
    content = content.replace(/(const[^;]+)(\n)/g, '$1;$2');

    // Fix 10: Fix malformed function declarations
    content = content.replace(/export\s+default\s+function\s+(\w+)\(\)\s*{\s*return\s*\(\s*<div>\s*<Head>/g, 
      'export default function $1() {\n  return (\n    <div>\n      <Head>');

    if (modified || content !== fs.readFileSync(filePath, 'utf8')) {
      fs.writeFileSync(filePath, content);
      console.log(`Fixed: ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Function to recursively find all .tsx files
function findTSXFiles(dir) {
  const files = [];
  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
      files.push(...findTSXFiles(fullPath));
    } else if (item.endsWith('.tsx')) {
      files.push(fullPath);
    }
  }
  
  return files;
}

// Main execution
console.log('Starting JSX error fixes...');
const appDir = '/workspace/app';
const tsxFiles = findTSXFiles(appDir);

let fixedCount = 0;
for (const file of tsxFiles) {
  if (fixJSXErrors(file)) {
    fixedCount++;
  }
}

console.log(`Fixed ${fixedCount} files out of ${tsxFiles.length} total TSX files.`);