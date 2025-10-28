const fs = require('fs');
const path = require('path');
const glob = require('glob');

// List of files that still have duplicate imports
const problemFiles = [
  'app/legal-document-manager/page.tsx',
  'app/medical-records-manager/page.tsx',
  'app/micro-saas-services/page.tsx',
  'app/online-learning-platform/page.tsx',
  'app/property-management-ai/page.tsx',
  'app/supply-chain-optimizer/page.tsx',
  'app/test/page.tsx',
  'app/zion-ai-api-tester/page.tsx',
  'app/zion-ai-database-optimizer/page.tsx'
];

problemFiles.forEach(file => {
  const filePath = path.join(__dirname, file);
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Remove all import lines
  const lines = content.split('\n');
  const nonImportLines = lines.filter(line => !line.trim().startsWith('import '));
  
  // Find the first non-empty, non-comment line to insert imports before
  let insertIndex = 0;
  for (let i = 0; i < nonImportLines.length; i++) {
    const line = nonImportLines[i].trim();
    if (line && !line.startsWith('//') && !line.startsWith('/*') && !line.startsWith('*')) {
      insertIndex = i;
      break;
    }
  }
  
  // Add the correct imports at the beginning
  const imports = [
    "import React from 'react';",
    "import Navigation from '../components/Navigation';",
    "import Footer from '../components/Footer';"
  ];
  
  // Adjust import paths for nested directories
  if (file.includes('/it-services/') || file.includes('/micro-saas-services/')) {
    imports[1] = "import Navigation from '../../components/Navigation';";
    imports[2] = "import Footer from '../../components/Footer';";
  }
  
  // Insert imports
  nonImportLines.splice(insertIndex, 0, ...imports, '');
  
  fs.writeFileSync(filePath, nonImportLines.join('\n'));
  console.log(`Fixed duplicates in: ${file}`);
});

console.log('Remaining duplicate import fixes completed!');