const fs = require('fs');
const path = require('path');

function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let fixed = false;

    // Fix common import issues
    if (content.includes("from 'react;")) {
      content = content.replace(/from 'react;/g, "from 'react';");
      fixed = true;
    }
    if (content.includes("from 'lucide-react;")) {
      content = content.replace(/from 'lucide-react;/g, "from 'lucide-react';");
      fixed = true;
    }
    if (content.includes("from 'react-helmet-async;")) {
      content = content.replace(/from 'react-helmet-async;/g, "from 'react-helmet-async';");
      fixed = true;
    }

    // Fix common JSX issues
    if (content.includes("'use client;")) {
      content = content.replace(/'use client;/g, "'use client';");
      fixed = true;
    }

    // Fix missing semicolons in imports
    content = content.replace(/import ([^;]+)(?<!;)$/gm, (match, p1) => {
      if (!p1.includes(';')) {
        return match + ';';
      }
      return match;
    });

    if (fixed) {
      fs.writeFileSync(filePath, content);
      console.log(`Fixed: ${filePath}`);
    }
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

function walkDir(dir) {
  const files = fs.readdirSync(dir);
  
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      walkDir(filePath);
    } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
      fixFile(filePath);
    }
  }
}

// Start fixing from the app directory
walkDir('/workspace/app');
console.log('Syntax fixing completed');