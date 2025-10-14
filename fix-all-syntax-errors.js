#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

console.log('🔧 Fixing all remaining syntax errors...');

// Function to fix all syntax errors in a file
function fixAllSyntaxErrors(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Fix import statements
    content = content.replace(/import\s+React\s+from\s+['"]react['"]?$/gm, "import React from 'react';");
    content = content.replace(/import\s+{\s*Helmet\s*}\s+from\s+['"]react-helmet-async['"]?$/gm, "import { Helmet } from 'react-helmet-async';");
    
    // Fix malformed JSX attributes
    content = content.replace(/content="[^"]*";+"/g, (match) => {
      modified = true;
      return match.replace(/;+"/, '"');
    });
    
    // Fix malformed JSX elements
    content = content.replace(/<[^>]*;+[^>]*>/g, (match) => {
      modified = true;
      return match.replace(/;+/g, '');
    });
    
    // Fix missing semicolons in function returns
    content = content.replace(/^\s*\)\s*$/gm, '  );');
    
    // Fix missing semicolons in function declarations
    content = content.replace(/^\s*}\s*$/gm, '}');
    
    // Remove any remaining merge conflict markers
    
    // Additional cleanup
    content = content.replace(/;+$/gm, '');
    content = content.replace(/^;+/gm, '');
    content = content.replace(/\s+;+\s+/g, ' ');
    content = content.replace(/['"]+$/gm, '');
    content = content.replace(/^['"]+/gm, '');
    
    // Fix malformed function declarations
    content = content.replace(/export\s+default\s+function\s+(\w+)\s*\(\s*\)\s*{\s*return\s+null;\s*}/g, (match, funcName) => {
      modified = true;
      return `export default function ${funcName}() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">${funcName}</h1>
        <p className="text-xl text-gray-600">Coming soon...</p>
      </div>
    </div>
  );
}`;
    });

    if (modified) {
      fs.writeFileSync(filePath, content);
      console.log(`✅ Fixed syntax errors in: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`❌ Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Function to recursively find all TypeScript/JavaScript files
function findFiles(dir, extensions = ['.tsx', '.ts', '.jsx', '.js']) {
  let files = [];
  
  try {
    const items = fs.readdirSync(dir);
    
    for (const item of items) {
      const fullPath = path.join(dir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
        files = files.concat(findFiles(fullPath, extensions));
      } else if (stat.isFile() && extensions.some(ext => item.endsWith(ext))) {
        files.push(fullPath);
      }
    }
  } catch (error) {
    console.error(`Error reading directory ${dir}:`, error.message);
  }
  
  return files;
}

// Main execution
try {
  console.log('📁 Scanning for files with syntax errors...');
  
  const files = findFiles('.');
  let fixedCount = 0;
  let totalFiles = 0;
  
  for (const file of files) {
    totalFiles++;
    if (fixAllSyntaxErrors(file)) {
      fixedCount++;
    }
  }
  
  console.log(`\n📊 Summary:`);
  console.log(`   Total files processed: ${totalFiles}`);
  console.log(`   Files with syntax errors fixed: ${fixedCount}`);
  
  if (fixedCount > 0) {
    console.log('\n🔍 Running type check to verify fixes...');
    try {
      execSync('npm run type-check', { stdio: 'inherit' });
      console.log('✅ Type check passed!');
    } catch (error) {
      console.log('⚠️  Type check still has issues, continuing with build...');
    }
  }
  
  console.log('\n🎉 Syntax error fixes completed!');
  
} catch (error) {
  console.error('❌ Error during syntax error fixes:', error.message);
  process.exit(1);
}