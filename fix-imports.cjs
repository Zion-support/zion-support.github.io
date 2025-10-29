const fs = require('fs');
const path = require('path');

// Function to fix import syntax errors
function fixImportSyntax(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Fix common import syntax errors
    content = content.replace(/import \{Helmet\}\}from 'react-helmet-async';/g, "import { Helmet } from 'react-helmet-async';");
    content = content.replace(/import \{([^}]+)\}\}from 'lucide-react';/g, "import { $1 } from 'lucide-react';");
    
    // Fix other common syntax errors
    content = content.replace(/const (\w+): React\.FC = \(\) => \{,/g, 'const $1: React.FC = () => {');
    content = content.replace(/'use client'/g, "'use client';");
    
    fs.writeFileSync(filePath, content);
    console.log(`Fixed: ${filePath}`);
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

// Function to recursively find and fix all .tsx files
function fixAllTsxFiles(dir) {
  const files = fs.readdirSync(dir);
  
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      fixAllTsxFiles(filePath);
    } else if (file.endsWith('.tsx')) {
      fixImportSyntax(filePath);
    }
  }
}

// Start fixing from the app directory
console.log('Fixing import syntax errors in all .tsx files...');
fixAllTsxFiles('./app');
console.log('Done!');