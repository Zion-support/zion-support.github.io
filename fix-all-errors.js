import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

// Get all TypeScript/TSX files with errors
const files = execSync('find app -name "*.tsx" -type f', { encoding: 'utf8' })
  .trim()
  .split('\n')
  .filter(f => f);

console.log(`Found ${files.length} TypeScript files to check`);

function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let originalContent = content;
    
    // Remove merge conflict markers
    content = content.replace(/<<<<<<< HEAD[\s\S]*?=======[\s\S]*?>>>>>>> [^\n]+/g, '');
    content = content.replace(/<<<<<<< HEAD[\s\S]*?>>>>>>> [^\n]+/g, '');
    content = content.replace(/=======[\s\S]*?>>>>>>> [^\n]+/g, '');
    
    // Fix common syntax errors
    content = content.replace(/const PagePage: React\.FC = \(\) => \{[\s\S]*?\};/g, '');
    content = content.replace(/const Page: React\.FC = \(\) => \{[\s\S]*?\};/g, '');
    
    // Remove broken JSX fragments
    content = content.replace(/<>\s*<\/>/g, '');
    content = content.replace(/<>\s*<div/g, '<div');
    content = content.replace(/<\/div>\s*<\/>/g, '</div>');
    
    // Fix broken imports
    if (!content.includes("import React from 'react'") && content.includes('React.FC')) {
      content = "import React from 'react';\n" + content;
    }
    
    // Fix missing Helmet import
    if (content.includes('<Helmet>') && !content.includes("import { Helmet }")) {
      content = content.replace(
        /import React from 'react';/,
        "import React from 'react';\nimport { Helmet } from 'react-helmet-async';"
      );
    }
    
    // Fix missing Navigation import
    if (content.includes('<Navigation') && !content.includes("import Navigation")) {
      content = content.replace(
        /import React from 'react';/,
        "import React from 'react';\nimport Navigation from '../components/Navigation';"
      );
    }
    
    // Fix missing Footer import
    if (content.includes('<Footer') && !content.includes("import Footer")) {
      content = content.replace(
        /import React from 'react';/,
        "import React from 'react';\nimport Footer from '../components/Footer';"
      );
    }
    
    // Remove empty lines
    content = content.replace(/\n\s*\n\s*\n/g, '\n\n');
    
    // Only write if content changed
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content);
      console.log(`Fixed: ${filePath}`);
    }
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

// Process all files
files.forEach(fixFile);

console.log('Error fixing completed');