import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

async function main() {
  // Find all page.tsx files in the app directory
  const pageFiles = await glob('app/**/page.tsx', { cwd: '/workspace' });

  console.log(`Found ${pageFiles.length} page files to process`);

  let fixedCount = 0;
  let errorCount = 0;

  for (const filePath of pageFiles) {
    try {
      const fullPath = path.join('/workspace', filePath);
      let content = fs.readFileSync(fullPath, 'utf8');
      
      // Check if the file has missing imports
      if (content.includes('export const metadata: Metadata') && !content.includes('import { Metadata }')) {
        content = content.replace(/export const metadata: Metadata = {/, 'import { Metadata } from \'next\';\n\nexport const metadata: Metadata = {');
        fixedCount++;
        console.log(`Added Metadata import: ${filePath}`);
      }
      
      if (content.includes('export const metadata = {') && !content.includes('import React')) {
        content = 'import React from "react";\n\n' + content;
        fixedCount++;
        console.log(`Added React import: ${filePath}`);
      }
      
      if (content.includes('<Link') && !content.includes('import Link')) {
        content = content.replace(/import React from "react";/, 'import React from "react";\nimport Link from \'next/link\';');
        fixedCount++;
        console.log(`Added Link import: ${filePath}`);
      }
      
      if (content.includes('ArrowRight') && !content.includes('import { ArrowRight')) {
        content = content.replace(/import Link from 'next\/link';/, 'import Link from \'next/link\';\nimport { ArrowRight, Star, Users, Zap } from \'lucide-react\';');
        fixedCount++;
        console.log(`Added lucide-react imports: ${filePath}`);
      }
      
      if (content.includes('<Navigation') && !content.includes('import Navigation')) {
        // Determine the correct import path based on file location
        const pathParts = filePath.split('/');
        const depth = pathParts.length - 2; // -2 because we have app/.../page.tsx
        const relativePath = '../'.repeat(depth) + 'components/Navigation';
        content = content.replace(/import React from "react";/, `import React from "react";\nimport Navigation from '${relativePath}';`);
        fixedCount++;
        console.log(`Added Navigation import: ${filePath}`);
      }
      
      if (content.includes('<Footer') && !content.includes('import Footer')) {
        // Determine the correct import path based on file location
        const pathParts = filePath.split('/');
        const depth = pathParts.length - 2; // -2 because we have app/.../page.tsx
        const relativePath = '../'.repeat(depth) + 'components/Footer';
        content = content.replace(/import Navigation from/, `import Navigation from`);
        if (content.includes('import Navigation from')) {
          content = content.replace(/import Navigation from[^;]+;/, `import Navigation from '${relativePath}';\nimport Footer from '${relativePath.replace('Navigation', 'Footer')}';`);
        } else {
          content = content.replace(/import React from "react";/, `import React from "react";\nimport Footer from '${relativePath.replace('Navigation', 'Footer')}';`);
        }
        fixedCount++;
        console.log(`Added Footer import: ${filePath}`);
      }
      
      fs.writeFileSync(fullPath, content);
      
    } catch (error) {
      console.error(`Error processing ${filePath}:`, error.message);
      errorCount++;
    }
  }

  console.log(`\nProcessing complete:`);
  console.log(`- Fixed: ${fixedCount} files`);
  console.log(`- Errors: ${errorCount} files`);
}

main().catch(console.error);