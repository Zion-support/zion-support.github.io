#!/usr/bin/env node

const fs = require('fs');

const filePath = '/workspace/src/ai-invoice-generator/page.tsx';

// Read the file
let content = fs.readFileSync(filePath, 'utf8');

// Get the current import line
const importMatch = content.match(/import { ([^}]+) } from 'lucide-react';/);
if (importMatch) {
  const currentImports = importMatch[1].split(',').map(imp => imp.trim());
  
  // Only keep the imports that are actually used in the file
  const usedImports = [];
  
  currentImports.forEach(imp => {
    // Check if this import is used in the file
    const importName = imp.split(' as ')[0].trim();
    const alias = imp.includes(' as ') ? imp.split(' as ')[1].trim() : importName;
    
    // Search for usage of both the original name and alias
    if (content.includes(alias) || content.includes(importName)) {
      usedImports.push(imp);
    }
  });
  
  // Update the import statement
  const newImportLine = `import { ${usedImports.join(', ')} } from 'lucide-react';`;
  content = content.replace(/import { [^}]+ } from 'lucide-react';/, newImportLine);
  
  // Also remove unused component imports
  content = content.replace(/import Navigation from '\.\.\/\.\.\/components\/Navigation';\n/, '');
  content = content.replace(/import Footer from '\.\.\/\.\.\/components\/Footer';\n/, '');
  content = content.replace(/import SEOOptimizer from '\.\.\/\.\.\/components\/SEOOptimizer';\n/, '');
  
  // Write the file back
  fs.writeFileSync(filePath, content);
  
  console.log(`Fixed imports in ${filePath}`);
  console.log(`Kept ${usedImports.length} out of ${currentImports.length} imports`);
} else {
  console.log('Could not find import statement');
}