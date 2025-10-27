#!/usr/bin/env node

import fs from 'fs';
import { glob } from 'glob';

// Find all page.tsx files
const files = await glob('app/**/page.tsx', { ignore: ['node_modules/**', '.next/**'] });

files.forEach(file => {
  try {
    let content = fs.readFileSync(file, 'utf8');
    let modified = false;
    
    // Check if file needs React import
    if (!content.includes('import React') && (content.includes('function ') || content.includes('const ') || content.includes('export default'))) {
      // Add React import after 'use client' if present
      if (content.startsWith("'use client'\n")) {
        content = content.replace("'use client'\n", "'use client'\n\nimport React from 'react'\n");
      } else if (content.startsWith('"use client"\n')) {
        content = content.replace('"use client"\n', '"use client"\n\nimport React from \'react\'\n');
      } else {
        // Add at the beginning
        content = "import React from 'react'\n" + content;
      }
      modified = true;
    }
    
    // Fix empty displayName
    if (content.includes('.displayName = \'\';')) {
      content = content.replace(/\.displayName = '';/, '');
      modified = true;
    }
    
    // Fix empty h1 tags
    if (content.includes('<h1 className="text-4xl font-bold text-gray-900 mb-8">\n            \n          </h1>')) {
      content = content.replace('<h1 className="text-4xl font-bold text-gray-900 mb-8">\n            \n          </h1>', '<h1 className="text-4xl font-bold text-gray-900 mb-8">\n            Service Page\n          </h1>');
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

console.log('All pages fixes completed!');