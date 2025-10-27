#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

// Find all TSX files that need React import fixes
const files = await glob('app/**/*.tsx', { ignore: ['node_modules/**', '.next/**'] });

(async () => {
  files.forEach(file => {
    try {
      let content = fs.readFileSync(file, 'utf8');
      
      // Check if file uses React but doesn't import it
      if (content.includes('React.FC') || content.includes('React.Component') || content.includes('React.') && !content.includes("import React")) {
        // Add React import after 'use client' directive if present
        if (content.startsWith("'use client'\n")) {
          content = content.replace("'use client'\n", "'use client'\n\nimport React from 'react'\n");
        } else if (content.startsWith('"use client"\n')) {
          content = content.replace('"use client"\n', '"use client"\n\nimport React from \'react\'\n');
        } else {
          // Add at the beginning
          content = "import React from 'react'\n" + content;
        }
        
        fs.writeFileSync(file, content);
        console.log(`Fixed React import in: ${file}`);
      }
    } catch (error) {
      console.error(`Error processing ${file}:`, error.message);
    }
  });

  console.log('React import fixes completed!');
})();