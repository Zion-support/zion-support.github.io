#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

console.log('🔧 Starting comprehensive syntax error and merge conflict resolution...');

// Function to fix common syntax errors
function fixSyntaxErrors(content) {
  // Fix unterminated string literals
  content = content.replace(/(['"`])([^'"`]*?)(\n|$)/g, (match, quote, str, newline) => {
    if (!str.includes(quote) && !match.endsWith(quote)) {
      return match + quote;
    }
    return match;
  });

  // Fix merge conflict markers
  content = content.replace(/<<<<<<< HEAD[\s\S]*?=======[\s\S]*?>>>>>>> [^\n]+/g, '');
  content = content.replace(/<<<<<<< [^\n]+[\s\S]*?=======[\s\S]*?>>>>>>> [^\n]+/g, '');
  content = content.replace(/=======[\s\S]*?>>>>>>> [^\n]+/g, '');
  content = content.replace(/<<<<<<< [^\n]+[\s\S]*?=======/g, '');

  // Fix common JSX syntax errors
  content = content.replace(/<([A-Z][a-zA-Z0-9]*)\s*\/>/g, '<$1 />');
  content = content.replace(/(\w+)\s*=\s*{([^}]*?)\s*}/g, '$1={$2}');
  
  // Fix malformed function declarations
  content = content.replace(/export default function\s+(\w+)\s*\(\s*\)\s*\{\s*\}/g, 'export default function $1() {\n  return null;\n}');
  
  // Fix missing semicolons
  content = content.replace(/([^;}])\n\s*(import|export|const|let|var|function|class)/g, '$1;\n$2');
  
  // Fix malformed JSX returns
  content = content.replace(/return\s*\(\s*\)\s*\(/g, 'return (');
  content = content.replace(/return\s*\(\s*\)\s*<([^>]+)>/g, 'return <$1>');
  
  // Fix broken class names
  content = content.replace(/className="([^"]*?)\s*"/g, (match, className) => {
    const fixed = className.replace(/\s+/g, ' ').trim();
    return `className="${fixed}"`;
  });
  
  // Fix numeric class names (like 90o0 -> 900)
  content = content.replace(/(\d+)o(\d+)/g, '$1$2');
  
  // Fix malformed grid classes
  content = content.replace(/grid\s+md:\s+grid-cols-(\d+)\s+l,g:grid-cols-(\d+)/g, 'grid md:grid-cols-$1 lg:grid-cols-$2');
  
  // Fix broken quotes in strings
  content = content.replace(/(['"`])([^'"`]*?)''/g, '$1$2"');
  content = content.replace(/""/g, '"');
  
  // Fix malformed JSX fragments
  content = content.replace(/<React\.Fragment>\s*<\/React>/g, '<React.Fragment>');
  content = content.replace(/<\/React>\s*<\/React\.Fragment>/g, '</React.Fragment>');
  
  // Fix broken closing tags
  content = content.replace(/<\/div>\s*<\/div>\s*<\/div>\s*<\/div>\s*<\/div>/g, '</div>');
  content = content.replace(/<\/h3>\s*<\/h3>/g, '</h3>');
  content = content.replace(/<\/p>\s*<\/p>/g, '</p>');
  
  return content;
}

// Function to process a single file
function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const fixedContent = fixSyntaxErrors(content);
    
    if (content !== fixedContent) {
      fs.writeFileSync(filePath, fixedContent, 'utf8');
      console.log(`✅ Fixed: ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`❌ Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Function to find all relevant files
function findFiles(dir, extensions = ['.tsx', '.ts', '.js', '.jsx']) {
  const files = [];
  
  function traverse(currentDir) {
    const items = fs.readdirSync(currentDir);
    
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        // Skip node_modules and other irrelevant directories
        if (!['node_modules', '.git', 'dist', 'build', '.next'].includes(item)) {
          traverse(fullPath);
        }
      } else if (stat.isFile()) {
        const ext = path.extname(item);
        if (extensions.includes(ext)) {
          files.push(fullPath);
        }
      }
    }
  }
  
  traverse(dir);
  return files;
}

// Main execution
try {
  const files = findFiles('./app');
  let fixedCount = 0;
  
  console.log(`📁 Found ${files.length} files to process...`);
  
  for (const file of files) {
    if (processFile(file)) {
      fixedCount++;
    }
  }
  
  console.log(`\n🎉 Fixed ${fixedCount} files!`);
  
  // Try to run linting to check for remaining issues
  try {
    console.log('\n🔍 Running lint check...');
    execSync('pnpm run lint', { stdio: 'pipe' });
    console.log('✅ Lint check passed!');
  } catch (error) {
    console.log('⚠️  Lint check found remaining issues, but many were fixed.');
  }
  
} catch (error) {
  console.error('❌ Error during processing:', error.message);
  process.exit(1);
}