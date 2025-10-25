const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('Starting comprehensive error fix...');

// Common imports that are missing
const commonImports = {
  'Head': "import Head from 'next/head';",
  'Link': "import Link from 'next/link';",
  'ArrowRight': "import { ArrowRight } from 'lucide-react';",
  'CheckCircle': "import { CheckCircle } from 'lucide-react';",
  'Star': "import { Star } from 'lucide-react';",
  'ImageIcon': "import { ImageIcon } from 'lucide-react';",
  'Upload': "import { Upload } from 'lucide-react';",
  'Zap': "import { Zap } from 'lucide-react';",
  'Download': "import { Download } from 'lucide-react';",
  'Clock': "import { Clock } from 'lucide-react';",
  'X': "import { X } from 'lucide-react';",
  'Circle': "import { Circle } from 'lucide-react';",
  'Helmet': "import { Helmet } from 'react-helmet-async';"
};

// Function to fix a single file
function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Check if it's a React component file
    if (filePath.endsWith('.tsx') || filePath.endsWith('.jsx')) {
      // Add missing imports
      const missingImports = [];
      const existingImports = content.match(/import.*from.*['"]/g) || [];
      const existingImportText = existingImports.join('\n');
      
      for (const [component, importStatement] of Object.entries(commonImports)) {
        if (content.includes(`<${component}`) || content.includes(`{${component}`)) {
          if (!existingImportText.includes(component)) {
            missingImports.push(importStatement);
          }
        }
      }
      
      if (missingImports.length > 0) {
        // Find the last import statement
        const lastImportIndex = content.lastIndexOf('import ');
        if (lastImportIndex !== -1) {
          const nextLineIndex = content.indexOf('\n', lastImportIndex);
          content = content.slice(0, nextLineIndex + 1) + 
                   missingImports.join('\n') + '\n' + 
                   content.slice(nextLineIndex + 1);
          modified = true;
        }
      }
      
      // Fix common JSX issues
      content = content.replace(/`'/g, "`&apos;");
      content = content.replace(/'/g, "&apos;");
      content = content.replace(/"/g, "&quot;");
      
      // Fix parsing errors - remove problematic characters
      content = content.replace(/[^\x20-\x7E\n\r\t]/g, '');
      
      // Fix missing closing tags
      content = content.replace(/<div([^>]*)>\s*$/, '<div$1></div>');
      content = content.replace(/<section([^>]*)>\s*$/, '<section$1></section>');
      content = content.replace(/<main([^>]*)>\s*$/, '<main$1></main>');
      
      // Fix JSX structure issues
      content = content.replace(/<>\s*$/, '<div>');
      content = content.replace(/<\/>\s*$/, '</div>');
      
      // Fix function declarations
      content = content.replace(/function\s+(\d+)/g, 'function function$1');
      content = content.replace(/const\s+(\d+)/g, 'const const$1');
      
      // Fix typeof issues
      content = content.replace(/typeof\s+(\w+)/g, 'typeof $1');
      
      if (modified) {
        fs.writeFileSync(filePath, content);
        console.log(`Fixed: ${filePath}`);
      }
    }
  } catch (error) {
    console.log(`Error fixing ${filePath}: ${error.message}`);
  }
}

// Function to recursively find and fix all files
function fixAllFiles(dir) {
  const files = fs.readdirSync(dir);
  
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory() && !file.startsWith('.') && file !== 'node_modules') {
      fixAllFiles(filePath);
    } else if (file.endsWith('.tsx') || file.endsWith('.jsx') || file.endsWith('.ts') || file.endsWith('.js')) {
      fixFile(filePath);
    }
  }
}

// Start fixing
console.log('Scanning for files to fix...');
fixAllFiles('./app');

console.log('Fixing specific problematic files...');

// Fix specific files with known issues
const problematicFiles = [
  './app/consultation/page.tsx',
  './app/compliance/page-backup.tsx',
  './app/compliance/page-fixed.tsx',
  './app/components/EnhancedServicesShowcase.tsx',
  './app/utils/performanceUtils.ts'
];

for (const file of problematicFiles) {
  if (fs.existsSync(file)) {
    console.log(`Fixing ${file}...`);
    fixFile(file);
  }
}

console.log('Error fixing completed!');