#!/usr/bin/env node

import fs from 'fs';
import path from 'path';

const fixHelmetImports = (filePath) => {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Check if file has react-helmet-async import
    if (content.includes('react-helmet-async')) {
      console.log(`Fixing ${filePath}`);
      
      // Remove react-helmet-async import
      content = content.replace(/import\s*{\s*Helmet\s*}\s*from\s*['"]react-helmet-async['"];\s*\n?/g, '');
      
      // Add Navigation and Footer imports if not present
      if (!content.includes('import Navigation from')) {
        content = content.replace(
          /import React from 'react';\n/,
          `import React from 'react';\nimport Navigation from '../components/Navigation';\nimport Footer from '../components/Footer';\n`
        );
      }
      
      // Replace Helmet usage with proper structure
      content = content.replace(
        /<>\s*<Helmet>[\s\S]*?<\/Helmet>\s*<div className="min-h-screen bg-gradient-to-br from-slate-50[^"]*">/g,
        '<div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">\n      <Navigation />'
      );
      
      // Fix closing structure
      content = content.replace(
        /<\/div>\s*<\/>\s*\);\s*};/g,
        '</div>\n      <Footer />\n    </div>\n  );\n};'
      );
      
      // Fix any remaining Helmet blocks
      content = content.replace(
        /<Helmet>[\s\S]*?<\/Helmet>\s*/g,
        ''
      );
      
      fs.writeFileSync(filePath, content);
      console.log(`✅ Fixed ${filePath}`);
    }
  } catch (error) {
    console.error(`❌ Error fixing ${filePath}:`, error.message);
  }
};

const findTsxFiles = (dir) => {
  const files = [];
  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
      files.push(...findTsxFiles(fullPath));
    } else if (item.endsWith('.tsx') && !item.includes('node_modules')) {
      files.push(fullPath);
    }
  }
  
  return files;
};

// Find all .tsx files in the app directory
const tsxFiles = findTsxFiles('./app');

console.log(`Found ${tsxFiles.length} .tsx files`);

// Fix each file
tsxFiles.forEach(fixHelmetImports);

console.log('✅ All files processed');