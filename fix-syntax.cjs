const fs = require('fs');
const path = require('path');

function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Fix common syntax errors
    content = content.replace(/;,$/gm, ';');
    content = content.replace(/",$/gm, '"');
    content = content.replace(/,$/gm, ',');
    content = content.replace(/{\s*$/gm, '{');
    content = content.replace(/}\s*$/gm, '}');
    content = content.replace(/\[\s*$/gm, '[');
    content = content.replace(/\]\s*$/gm, ']');
    content = content.replace(/import _React/g, 'import React');
    content = content.replace(/from 'react';,/g, "from 'react';");
    content = content.replace(/from 'next\/link';,/g, "from 'next/link';");
    content = content.replace(/from 'next\/head';,/g, "from 'next/head';");
    content = content.replace(/from 'framer-motion';,/g, "from 'framer-motion';");
    content = content.replace(/from 'lucide-react';,/g, "from 'lucide-react';");
    content = content.replace(/from '\.\.\/components\/Layout';,/g, "from '../components/Layout';");
    
    fs.writeFileSync(filePath, content);
    console.log(`Fixed: ${filePath}`);
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

function walkDir(dir) {
  const files = fs.readdirSync(dir);
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat.isDirectory()) {
      walkDir(filePath);
    } else if (file.endsWith('.tsx')) {
      fixFile(filePath);
    }
  });
}

walkDir('./pages');
console.log('Syntax fixing complete!');