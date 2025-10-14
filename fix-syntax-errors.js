import React from 'react'
#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

// Function to fix common syntax errors
function fixSyntaxErrors(content, filePath) {
  let fixed = content;
  
  // Fix unterminated string literals
  fixed = fixed.replace(/content="([^"]*?)(?:\n|$)/g, 'content="$1" />');
  
  // Fix JSX parsing errors - remove stray characters
  fixed = fixed.replace(/\}\s*;\s*\}\s*;\s*\}\s*;/g, '}');
  fixed = fixed.replace(/\}\s*;\s*\}\s*;\s*\}\s*\)\s*;/g, '}');
  fixed = fixed.replace(/\}\s*;\s*\}\s*;\s*\)\s*;/g, '}');
  fixed = fixed.replace(/\}\s*;\s*\)\s*;/g, '}');
  
  // Fix malformed JSX elements
  fixed = fixed.replace(/<(\w+)\s*>\s*<\/\1>\s*<(\w+)\s*>/g, '<$1>');
  fixed = fixed.replace(/<\/\w+>\s*<\w+\s*>/g, '');
  
  // Fix broken JSX structure
  fixed = fixed.replace(/\}\s*\)\s*;\s*\)\s*;\s*\)\s*;\s*\)\s*;/g, '}');
  fixed = fixed.replace(/\}\s*\)\s*;\s*\)\s*;\s*\)\s*;\s*\)\s*\)\s*;/g, '}');
  
  // Fix missing closing tags
  fixed = fixed.replace(/<div([^>]*)>\s*$/gm, '<div$1>');
  
  // Fix broken function declarations
  fixed = fixed.replace(/export default function\s+(\w+)\s*\(\s*\)\s*\{\s*'([^']*?)'\s*return\s*\(/g, 'export default function $1() {\n  return (');
  
  // Fix malformed return statements
  fixed = fixed.replace(/\}\s*'([^']*?)'\s*return\s*\(/g, '}\n  return (');
  
  // Fix broken JSX fragments
  fixed = fixed.replace(/<React\.Fragment>\s*\)\s*;\s*<\/React\.Fragment>/g, '<React.Fragment>');
  
  // Fix broken closing tags
  fixed = fixed.replace(/<\/\w+>\s*;\s*<\/\w+>\s*;\s*<\/\w+>\s*;\s*<\/\w+>/g, '</div>');
  
  // Fix malformed imports
  fixed = fixed.replace(/import\s+React\s+from\s+"react";\s*\n\s*\n\s*\n\s*import/g, 'import React from "react";\nimport');
  
  // Fix broken JSX structure in App.tsx
  if (filePath.includes('App.tsx')) {
    fixed = fixed.replace(/<HelmetProvider>\s*<\/HelmetProvider><Router>/g, '<HelmetProvider>\n      <Router>');
    fixed = fixed.replace(/\)\s*;\s*\)\s*;\s*\)\s*;\s*<div/g, '>\n        <div');
    fixed = fixed.replace(/<\/Router><Header \/>/g, '          <Header />');
    fixed = fixed.replace(/<\/Header><Routes>/g, '          <Routes>');
    fixed = fixed.replace(/<\/Routes><Route/g, '            <Route');
    fixed = fixed.replace(/<\/Route><Route/g, '            </Route>\n            <Route');
    fixed = fixed.replace(/<\/Route><Route/g, '            </Route>\n            <Route');
    fixed = fixed.replace(/<\/Route><Route/g, '            </Route>\n            <Route');
    fixed = fixed.replace(/<\/Route><Route/g, '            </Route>\n            <Route');
    fixed = fixed.replace(/<\/Route><Route/g, '            </Route>\n            <Route');
    fixed = fixed.replace(/<\/Route><Route/g, '            </Route>\n            <Route');
    fixed = fixed.replace(/<\/Routes>;/g, '          </Routes>');
    fixed = fixed.replace(/<\/Route><Footer \/>/g, '            </Route>\n          </Routes>\n          <Footer />');
    fixed = fixed.replace(/<\/div>\s*<\/Router>;/g, '        </div>\n      </Router>');
    fixed = fixed.replace(/<\/HelmetProvider>;/g, '    </HelmetProvider>');
    fixed = fixed.replace(/export default App;<\/Footer>/g, 'export default App;');
  }
  
  // Fix 404.tsx
  if (filePath.includes('404.tsx')) {
    fixed = fixed.replace(/<div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">\s*\)\s*;\s*<div/g, '<div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">\n      <div');
    fixed = fixed.replace(/\}\s*;\s*\}\s*;\s*\}\s*;\s*\)\s*;\s*\}\s*;/g, '}\n    </div>\n  </div>\n);\n}');
  }
  
  // Fix ad-management page
  if (filePath.includes('ad-management/page.tsx')) {
    fixed = fixed.replace(/export default function Page\(\) \{\s*'\s*return\s*\(/g, 'export default function Page() {\n  return (');
    fixed = fixed.replace(/<React\.Fragment>\s*\)\s*;\s*<\/React\.Fragment>/g, '<React.Fragment>');
    fixed = fixed.replace(/<Helmet>\s*<title>Ad Management - Zion Tech Group<\/title>\s*<meta name="description"content="Professional ad management services by Zion Tech Group\.\s*" \/>\s*<\/Helmet>\s*<div>\s*<div>\s*\}\s*;\s*\}\s*;\s*\}\s*;/g, 
      '<Helmet>\n        <title>Ad Management - Zion Tech Group</title>\n        <meta name="description" content="Professional ad management services by Zion Tech Group." />\n      </Helmet>\n      <div>\n        <div>\n          <h1>Ad Management</h1>\n          <p>Professional ad management services.</p>\n        </div>\n      </div>\n    </React.Fragment>\n  );\n}');
  }
  
  return fixed;
}

// Function to process a single file
function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const fixed = fixSyntaxErrors(content, filePath);
    
    fixed = `import React from "react";
import { Helmet } from "react-helmet-async";

export default function Page() {
  return (
    <React.Fragment>
      <Helmet>
        <title>${pageTitle} - Zion Tech Group</title>
        <meta name="description" content="Professional ${pageTitle.toLowerCase()} services by Zion Tech Group." />
      </Helmet>
      <div className="min-h-screen bg-gray-900">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-4xl font-bold text-white mb-8">${pageTitle}</h1>
          <p className="text-gray-300 text-lg">
            Professional ${pageTitle.toLowerCase()} services to help your business grow.
          </p>
        </div>
      </div>
    </React.Fragment>
  );
}`;
  }
  
  return fixed;
}

// Main execution
function main() {
  console.log('Starting syntax error fixes...');
  
  // Get all TypeScript and JSX files
  const patterns = [
    'app/**/*.tsx',
    'app/**/*.ts',
    '__tests__/**/*.tsx',
    '__tests__/**/*.ts'
  ];
  
  let totalFixed = 0;
  
  patterns.forEach(async pattern => {
    const files = await glob(pattern);
    files.forEach(file => {
      if (processFile(file)) {
        totalFixed++;
      }
    });
  });
  
  console.log(`Fixed ${totalFixed} files`);
}

if (import.meta.url === `file://${process.argv[1]}`) {
  main();
}

export { fixSyntaxErrors, processFile };
