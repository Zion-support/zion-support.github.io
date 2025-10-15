#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Common syntax error patterns and their fixes
const fixes = [
  // Fix missing function declarations
  {
    pattern: /^  return \(<div className="min-h-screen/gm,
    replacement: 'const ComponentName = () => {\n  return (\n    <div className="min-h-screen'
  },
  // Fix duplicate function declarations
  {
    pattern: /const \w+:\s*React\.FC\s*=\s*\(\)\s*=>\s*{\s*const \w+:\s*React\.FC\s*=\s*\(\)\s*=>\s*{/gm,
    replacement: 'const ComponentName: React.FC = () => {'
  },
  // Fix missing closing braces
  {
    pattern: /(\s+)(<div[^>]*>)(\s*)(<section[^>]*>)(\s*)(<div[^>]*>)(\s*)(<h1[^>]*>.*<\/h1>)(\s*)(<p[^>]*>.*<\/p>)(\s*)(<\/div>)(\s*)(<\/section>)(\s*)(<\/div>)(\s*)(<\/>)(\s*)(\}\);)/gm,
    replacement: '$1$2$3$4$5$6$7$8$9$10$11$12$13$14$15$16$17$18'
  },
  // Fix missing imports
  {
    pattern: /^import React from 'react';\n^import { Helmet } from 'react-helmet-async';\n^import { motion } from 'framer-motion';\n^import { Heart, ArrowRight } from 'lucide-react';\n^const \w+ = \(\) => {/gm,
    replacement: 'import React from \'react\';\nimport { Helmet } from \'react-helmet-async\';\nimport { motion } from \'framer-motion\';\nimport { Heart, ArrowRight } from \'lucide-react\';\n\nconst ComponentName = () => {'
  },
  // Fix malformed JSX
  {
    pattern: /<HelmetProvider><\/Helmet>/gm,
    replacement: '<HelmetProvider>'
  },
  // Fix missing semicolons
  {
    pattern: /(\s+)(<\/div>\s*<\/section>\s*<\/div>\s*<\/>\s*)(\s*)(\}\);)/gm,
    replacement: '$1$2$3$4'
  }
];

// Function to fix a single file
function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Apply fixes
    fixes.forEach(fix => {
      const newContent = content.replace(fix.pattern, fix.replacement);
      if (newContent !== content) {
        content = newContent;
        modified = true;
      }
    });
    
    // Additional specific fixes for common issues
    // Fix missing closing tags
    content = content.replace(/(<section[^>]*>)([^<]*<div[^>]*>)([^<]*<h1[^>]*>.*<\/h1>)([^<]*<p[^>]*>.*<\/p>)([^<]*<\/div>)([^<]*<\/div>)([^<]*<\/section>)([^<]*<\/div>)([^<]*<\/>)([^<]*\}\);)/gm, 
      '$1$2$3$4$5$6$7$8$9$10');
    
    // Fix missing function declarations
    if (content.includes('return (<div') && !content.includes('const ') && !content.includes('function ')) {
      content = 'const ComponentName = () => {\n' + content;
    }
    
    // Fix missing closing braces
    if (content.includes('</div>') && !content.includes('};')) {
      content = content.replace(/(<\/div>\s*<\/>\s*)(\s*)$/gm, '$1\n  );\n};');
    }
    
    if (modified || content !== fs.readFileSync(filePath, 'utf8')) {
      fs.writeFileSync(filePath, content);
      console.log(`Fixed: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Function to find all TypeScript/JavaScript files
function findFiles(dir, extensions = ['.tsx', '.ts', '.jsx', '.js']) {
  const files = [];
  
  function traverse(currentDir) {
    const items = fs.readdirSync(currentDir);
    
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        // Skip node_modules and other common directories
        if (!['node_modules', '.git', 'dist', 'build', '.next'].includes(item)) {
          traverse(fullPath);
        }
      } else if (extensions.some(ext => item.endsWith(ext))) {
        files.push(fullPath);
      }
    }
  }
  
  traverse(dir);
  return files;
}

// Main execution
console.log('Starting syntax error fixes...');

const appDir = path.join(__dirname, 'app');
const files = findFiles(appDir);

let fixedCount = 0;
let errorCount = 0;

files.forEach(file => {
  try {
    if (fixFile(file)) {
      fixedCount++;
    }
  } catch (error) {
    console.error(`Error processing ${file}:`, error.message);
    errorCount++;
  }
});

console.log(`\nFixed ${fixedCount} files`);
console.log(`Errors in ${errorCount} files`);

// Run type check to see remaining errors
console.log('\nRunning type check...');
try {
  execSync('pnpm run type-check', { stdio: 'inherit' });
} catch (error) {
  console.log('Type check completed with errors (expected)');
}