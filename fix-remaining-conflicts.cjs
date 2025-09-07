const fs = require('fs');
const path = require('path');

function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Fix common issues after merge conflict resolution
    content = content.replace(/import React from 'react';\s*import/g, 'import React from \'react\';\nimport');
    content = content.replace(/import type { Metadata } from 'next';\s*import/g, 'import type { Metadata } from \'next\';\nimport');
    content = content.replace(/export const metadata = \{\s*title: 'Ai/g, '\nexport const metadata = {\n  title: \'Ai');
    content = content.replace(/export const metadata = \{\s*title: "Ai/g, '\nexport const metadata = {\n  title: "Ai');
    
    // Fix duplicate metadata exports
    const metadataRegex = /export const metadata = \{[\s\S]*?\};/g;
    const matches = content.match(metadataRegex);
    if (matches && matches.length > 1) {
      // Keep only the first metadata export
      content = content.replace(metadataRegex, (match, index) => {
        return index === 0 ? match : '';
      });
    }
    
    // Fix JSX syntax issues
    content = content.replace(/import React from 'react';\s*import/g, 'import React from \'react\';\nimport');
    content = content.replace(/import type { Metadata } from 'next';\s*import/g, 'import type { Metadata } from \'next\';\nimport');
    
    // Clean up extra whitespace
    content = content.replace(/\n\s*\n\s*\n/g, '\n\n');
    
    fs.writeFileSync(filePath, content);
    console.log(`Fixed: ${filePath}`);
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

function walkDirectory(dir) {
  const files = fs.readdirSync(dir);
  
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      walkDirectory(filePath);
    } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
      fixFile(filePath);
    }
  }
}

// Fix specific problematic files
const problematicFiles = [
  './app/contact/page.tsx',
  './app/layout.tsx',
  './app/services/ai-code-reviewer/page.tsx',
  './app/services/ai-customer-support/page.tsx',
  './app/services/ai-data-analytics/page.tsx'
];

problematicFiles.forEach(file => {
  if (fs.existsSync(file)) {
    fixFile(file);
  }
});

// Also walk through all directories
walkDirectory('./app');

console.log('Remaining conflicts fixed!');