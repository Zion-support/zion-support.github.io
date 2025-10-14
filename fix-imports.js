import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

// Find all page.tsx files
const pageFiles = await glob('app/**/page.tsx');

console.log(`Found ${pageFiles.length} page files to fix`);

let fixedCount = 0;

for (const filePath of pageFiles) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Fix malformed import statements
    const malformedImportRegex = /import React from 'react'\s*\n\s*import { Helmet } from 'react-helmet-async'use client'/g;
    if (malformedImportRegex.test(content)) {
      content = content.replace(malformedImportRegex, "'use client'\nimport React from 'react'\nimport { Helmet } from 'react-helmet-async'");
      modified = true;
    }

    // Fix other malformed patterns
    const otherMalformedRegex = /import { Helmet } from 'react-helmet-async'use client'/g;
    if (otherMalformedRegex.test(content)) {
      content = content.replace(otherMalformedRegex, "import { Helmet } from 'react-helmet-async'");
      // Add 'use client' at the top if not present
      if (!content.startsWith("'use client'")) {
        content = "'use client'\n" + content;
      }
      modified = true;
    }

    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed: ${filePath}`);
      fixedCount++;
    }
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
  }
}

console.log(`Fixed ${fixedCount} files`);