#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('🔧 Fixing import statements and syntax errors...\n');

// Function to fix a single file
function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Fix broken import statements - restore proper syntax
    if (content.includes('import React from &apos;react&apos;')) {
      content = content.replace(/import React from &apos;react&apos;/g, "import React from 'react'");
      modified = true;
    }

    if (content.includes('import {') && content.includes('&apos;lucide-react&apos;')) {
      content = content.replace(/&apos;lucide-react&apos;/g, "'lucide-react'");
      modified = true;
    }

    if (content.includes('import {') && content.includes('&apos;react&apos;')) {
      content = content.replace(/&apos;react&apos;/g, "'react'");
      modified = true;
    }

    if (content.includes('import {') && content.includes('&apos;react-dom&apos;')) {
      content = content.replace(/&apos;react-dom&apos;/g, "'react-dom'");
      modified = true;
    }

    if (content.includes('import {') && content.includes('&apos;react-helmet-async&apos;')) {
      content = content.replace(/&apos;react-helmet-async&apos;/g, "'react-helmet-async'");
      modified = true;
    }

    // Fix unescaped entities in JSX content (not in imports)
    content = content.replace(/(?<!import.*)&apos;/g, "'");
    content = content.replace(/(?<!import.*)&quot;/g, '"');
    
    // Fix specific JSX content issues
    content = content.replace(/(?<!import.*)&apos;(?![^<]*>)/g, "'");
    content = content.replace(/(?<!import.*)&quot;(?![^<]*>)/g, '"');

    // Remove console statements
    content = content.replace(/console\.(log|warn|error|info|debug)\([^)]*\);?\n?/g, '');
    modified = true;

    // Fix empty import statements
    content = content.replace(/import \{\s*\} from '[^']+';/g, '');
    modified = true;

    // Fix React import if no React usage
    if (content.includes("import React from 'react'") && !content.includes('React.')) {
      content = content.replace(/import React from 'react';\n?/g, '');
      modified = true;
    }

    if (modified) {
      fs.writeFileSync(filePath, content);
      console.log(`✅ Fixed: ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`❌ Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Function to find all TypeScript/TSX files
function findTsxFiles(dir) {
  const files = [];
  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
      files.push(...findTsxFiles(fullPath));
    } else if (item.endsWith('.tsx') || item.endsWith('.ts')) {
      files.push(fullPath);
    }
  }
  
  return files;
}

// Main execution
try {
  const appDir = path.join(__dirname, '..', 'app');
  const files = findTsxFiles(appDir);
  
  console.log(`📁 Found ${files.length} TypeScript files to process...\n`);
  
  let fixedCount = 0;
  files.forEach(file => {
    if (fixFile(file)) {
      fixedCount++;
    }
  });
  
  console.log(`\n🎉 Fixed ${fixedCount} files successfully!`);
  console.log('\n✨ Import fixes completed!');
  
} catch (error) {
  console.error('❌ Error during import fixes:', error.message);
  process.exit(1);
}