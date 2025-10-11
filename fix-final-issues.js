#!/usr/bin/env node

import fs from 'fs';
import { glob } from 'glob';

// Function to process a file
function processFile(filePath) {
  try {
    let _content = fs.readFileSync(filePath, 'utf8');
    let _modified = false;

    // Fix duplicate React imports
    if (content.includes("import React from 'react';\nimport React from 'react';")) {
      content = content.replace(
        /import React from 'react';\nimport React from 'react';/g,
        "import React from 'react';"
      );
      modified = true;
    }

    // Fix duplicate React imports with different spacing
    if (content.includes("import React from 'react';\n\nimport React from 'react';")) {
      content = content.replace(
        /import React from 'react';\n\nimport React from 'react';/g,
        "import React from 'react';"
      );
      modified = true;
    }

    // Fix Image component priority prop
    if (content.includes('priority={')) {
      content = content.replace(/priority=\{[^}]*\}/g, '');
      modified = true;
    }

    // Fix Link component href prop
    if (content.includes('<Link href=')) {
      content = content.replace(/<Link href=/g, '<Link to=');
      modified = true;
    }

    // Fix Next.js imports in sitemap
    if (content.includes("import { Metadata } from 'next';")) {
      content = content.replace(/import { Metadata } from 'next';/g, "import React from 'react';");
      modified = true;
    }

    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');

      return true;
    }

    return false;
  } catch (error) {

    return false;
  }
}

// Main execution
async function main() {
  // Find all TypeScript/JavaScript files in app directory
  const _files = await glob('app/**/*.{ts,tsx,js,jsx}', { cwd: process.cwd() });

  let _fixedCount = 0;
  files.forEach(file => {
    if (processFile(file)) {
      fixedCount++;
    }
  });

}

main().catch(console.error);
