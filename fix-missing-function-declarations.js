#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

// Files that need function declaration fixes
const filesToFix = [
  'app/ai-expense-tracker/page.tsx',
  'app/ai-financial-analytics-pro/page.tsx',
  'app/ai-smart-scheduler/page.tsx',
  'app/ai-translation-service/page.tsx',
  'app/cloud-migration-pro/page.tsx',
  'app/community/page.tsx',
  'app/compliance/page.tsx'
];

function fixMissingFunctionDeclaration(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Check if file has missing function declaration
    if (content.includes('return (<>') && !content.includes('function ') && !content.includes('const ') && !content.includes('export default')) {
      // Extract the component name from the file path
      const componentName = path.basename(filePath, '.tsx').split('-').map(word => 
        word.charAt(0).toUpperCase() + word.slice(1)
      ).join('');

      // Fix imports
      content = content.replace(
        /import React from 'react';\nimport SEOHead from '\.\.\/components\/SEOHead';\n\n/,
        `import React from 'react';\nimport { Helmet } from 'react-helmet-async';\nimport { Link } from 'react-router-dom';\n\n`
      );

      // Add function declaration
      content = content.replace(
        /  return \(<>/,
        `export default function ${componentName}Page() {\n  return (\n    <>`
      );

      // Fix the end of the file
      content = content.replace(
        /    <\/>\n  \);\n\};\n\nexport default \w+Page;/,
        '    </>\n  );\n}'
      );

      modified = true;
    }

    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed function declaration in: ${filePath}`);
    }
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

console.log('Fixing missing function declarations...');
filesToFix.forEach(file => {
  const fullPath = path.join(process.cwd(), file);
  if (fs.existsSync(fullPath)) {
    fixMissingFunctionDeclaration(fullPath);
  }
});

console.log('Function declaration fixes completed!');