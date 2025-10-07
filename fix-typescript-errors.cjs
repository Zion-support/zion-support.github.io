#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Function to fix Metadata import
function fixMetadataImport(content) {
  // Fix: import { Metadata } from 'next';
  // To: import type { Metadata } from 'next';
  return content.replace(
    /import\s*{\s*Metadata\s*}\s*from\s*['"]next['"];?/g,
    'import type { Metadata } from \'next\';'
  );
}

// Function to fix other type imports
function fixTypeImports(content) {
  // Fix ErrorInfo and ReactNode imports
  content = content.replace(
    /import\s*{\s*ErrorInfo\s*}\s*from\s*['"]react['"];?/g,
    'import type { ErrorInfo } from \'react\';'
  );
  content = content.replace(
    /import\s*{\s*ReactNode\s*}\s*from\s*['"]react['"];?/g,
    'import type { ReactNode } from \'react\';'
  );
  return content;
}

// Function to fix property access with index signatures
function fixPropertyAccess(content) {
  // Fix: data.title -> data['title']
  // Fix: data.description -> data['description']
  // Fix: data.author -> data['author']
  // Fix: data.date -> data['date']
  content = content.replace(/\bdata\.title\b/g, 'data[\'title\']');
  content = content.replace(/\bdata\.description\b/g, 'data[\'description\']');
  content = content.replace(/\bdata\.author\b/g, 'data[\'author\']');
  content = content.replace(/\bdata\.date\b/g, 'data[\'date\']');
  return content;
}

// Function to fix missing icon imports
function fixIconImports(content) {
  // Add missing icon imports at the top
  const iconImports = [
    'import { Calculator } from \'lucide-react\';',
    'import { Factory, Cogs } from \'lucide-react\';',
    'import { Star } from \'lucide-react\';',
    'import { Building2 } from \'lucide-react\';'
  ];
  
  // Check if any of these icons are used but not imported
  if (content.includes('Calculator') && !content.includes('import { Calculator }')) {
    content = iconImports[0] + '\n' + content;
  }
  if ((content.includes('Factory') || content.includes('Cogs')) && !content.includes('import { Factory')) {
    content = iconImports[1] + '\n' + content;
  }
  if (content.includes('Star') && !content.includes('import { Star }')) {
    content = iconImports[2] + '\n' + content;
  }
  if (content.includes('Building2') && !content.includes('import { Building2 }')) {
    content = iconImports[3] + '\n' + content;
  }
  
  return content;
}

// Function to fix override modifiers
function fixOverrideModifiers(content) {
  // Fix componentDidCatch and componentDidMount methods
  content = content.replace(
    /componentDidCatch\(/g,
    'override componentDidCatch('
  );
  content = content.replace(
    /componentDidMount\(/g,
    'override componentDidMount('
  );
  return content;
}

// Function to fix undefined object access
function fixUndefinedAccess(content) {
  // Add optional chaining for potentially undefined objects
  content = content.replace(
    /(\w+)\.(\w+)(?=\s*\.)/g,
    '$1?.$2'
  );
  return content;
}

// Main function to process files
function processFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    const originalContent = content;
    
    // Apply all fixes
    content = fixMetadataImport(content);
    content = fixTypeImports(content);
    content = fixPropertyAccess(content);
    content = fixIconImports(content);
    content = fixOverrideModifiers(content);
    content = fixUndefinedAccess(content);
    
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed: ${filePath}`);
      modified = true;
    }
    
    return modified;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Find all TypeScript/TSX files in the app directory
const pattern = 'app/**/*.{ts,tsx}';
const files = glob.sync(pattern, { cwd: process.cwd() });

console.log(`Found ${files.length} TypeScript files to process...`);

let fixedCount = 0;
files.forEach(file => {
  if (processFile(file)) {
    fixedCount++;
  }
});

console.log(`\nFixed ${fixedCount} files.`);