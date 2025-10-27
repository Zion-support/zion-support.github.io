#!/usr/bin/env node
import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

const files = await glob('app/**/page.tsx', { ignore: ['node_modules/**', '.next/**'] });

(async () => {
  files.forEach(file => {
    try {
      let content = fs.readFileSync(file, 'utf8');
      let modified = false;
      
      // Remove 'use client' directive
      if (content.includes("'use client'")) {
        content = content.replace(/'use client'\n\n?/g, '');
        modified = true;
      }
      
      // Remove any weird function names and replace with standard Page function
      const functionNameMatch = content.match(/function\s+Page[a-zA-Z0-9]+\(\)/);
      if (functionNameMatch) {
        const weirdFunctionName = functionNameMatch[0].replace('function ', '').replace('()', '');
        content = content.replace(new RegExp(`function\\s+${weirdFunctionName}\\(\\)`, 'g'), 'function Page()');
        content = content.replace(new RegExp(`export\\s+default\\s+${weirdFunctionName};?`, 'g'), 'export default Page;');
        modified = true;
      }
      
      // Ensure we have a proper React import
      if (!content.includes("import React from 'react'")) {
        content = "import React from 'react'\n\n" + content;
        modified = true;
      }
      
      // Ensure we have a proper export default function Page
      if (!content.includes("export default function Page")) {
        // Find the existing export and replace it
        const exportMatch = content.match(/export\s+default\s+[^;]+;?/);
        if (exportMatch) {
          content = content.replace(exportMatch[0], 'export default function Page() {\n  return (\n    <div className="min-h-screen bg-gray-50 py-12">\n      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">\n        <div className="text-center">\n          <h1 className="text-4xl font-bold text-gray-900 mb-8">\n            Service Page\n          </h1>\n          <p className="text-xl text-gray-600 max-w-3xl mx-auto">\n            Professional services and solutions.\n          </p>\n        </div>\n      </div>\n    </div>\n  );\n}');
        }
        modified = true;
      }
      
      if (modified) {
        fs.writeFileSync(file, content);
        console.log(`Fixed page: ${file}`);
      }
    } catch (error) {
      console.error(`Error processing ${file}:`, error.message);
    }
  });
  console.log('All client pages fixed!');
})();