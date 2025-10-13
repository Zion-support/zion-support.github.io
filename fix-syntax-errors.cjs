const fs = require('fs');
const path = require('path');

// Function to fix unterminated string literals in a file
function fixUnterminatedStrings(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Fix import statements with missing quotes
    content = content.replace(/import React from 'react;/g, "import React from 'react';");
    content = content.replace(/import { Helmet } from 'react-helmet-async;/g, "import { Helmet } from 'react-helmet-async';");
    content = content.replace(/import { [^}]+ } from 'lucide-react;/g, (match) => {
      return match.replace(/'lucide-react;/, "'lucide-react';");
    });
    content = content.replace(/import [^;]+ from '[^']+;/g, (match) => {
      return match.replace(/;$/, "';");
    });

    // Fix JSX syntax errors - remove semicolons after JSX elements
    content = content.replace(/<([^>]+)>;/g, '<$1>');
    content = content.replace(/<\/>;/g, '</>');
    content = content.replace(/<title>([^<]+)<\/title>;/g, '<title>$1</title>');
    content = content.replace(/<meta[^>]+>;/g, (match) => match.replace(/;$/, '>'));

    // Fix object syntax errors
    content = content.replace(/icon: icon: /g, 'icon: ');
    content = content.replace(/'([^']+)',;/g, "'$1',");
    content = content.replace(/"([^"]+)",;/g, '"$1",');

    // Fix function declarations
    content = content.replace(/const ([^=]+): React\.FC = \(\) => {/g, 'const $1: React.FC = () => {');

    // Fix return statements
    content = content.replace(/return \(\s*<>;/g, 'return (\n    <>');
    content = content.replace(/<Helmet>;/g, '<Helmet>');
    content = content.replace(/<\/Helmet>;/g, '</Helmet>');

    // Remove 'use client' if it appears in the wrong place
    content = content.replace(/'use client';\s*export/g, 'export');

    if (content !== fs.readFileSync(filePath, 'utf8')) {
      fs.writeFileSync(filePath, content);
      console.log(`Fixed: ${filePath}`);
      modified = true;
    }

    return modified;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Function to recursively find and fix all .tsx files
function fixAllTsxFiles(dir) {
  const files = fs.readdirSync(dir);
  let fixedCount = 0;

  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      // Skip node_modules and other directories we don't want to process
      if (!['node_modules', '.git', 'dist', 'build'].includes(file)) {
        fixedCount += fixAllTsxFiles(filePath);
      }
    } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
      if (fixUnterminatedStrings(filePath)) {
        fixedCount++;
      }
    }
  }

  return fixedCount;
}

// Main execution
console.log('Starting syntax error fixes...');
const appDir = path.join(__dirname, 'app');
const fixedCount = fixAllTsxFiles(appDir);
console.log(`Fixed ${fixedCount} files.`);

// Also fix root level files
const rootFiles = ['App.tsx', 'App-minimal.tsx', 'App_minimal.tsx', 'App_test.tsx', 'EnhancedFooter.tsx', 'SidebarNavigation.tsx'];
let rootFixedCount = 0;

for (const file of rootFiles) {
  const filePath = path.join(__dirname, file);
  if (fs.existsSync(filePath)) {
    if (fixUnterminatedStrings(filePath)) {
      rootFixedCount++;
    }
  }
}

console.log(`Fixed ${rootFixedCount} root files.`);
console.log(`Total files fixed: ${fixedCount + rootFixedCount}`);