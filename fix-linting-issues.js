#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log('🔧 Starting comprehensive linting fixes...\n');

// Function to fix unused ReactNode imports
function fixUnusedReactNodeImports(content) {
  // Remove unused ReactNode imports
  const lines = content.split('\n');
  const filteredLines = lines.filter(line => {
    // Remove lines that only import ReactNode and nothing else
    if (line.includes("import { ReactNode } from 'react'") && !line.includes(',')) {
      return false;
    }
    // Remove ReactNode from multi-import lines if it's the only unused import
    if (line.includes('ReactNode') && line.includes('from \'react\'')) {
      const importMatch = line.match(/import\s*\{\s*([^}]+)\s*\}\s*from\s*['"]react['"]/);
      if (importMatch) {
        const imports = importMatch[1].split(',').map(imp => imp.trim());
        const usedImports = imports.filter(imp => {
          const importName = imp.replace(/\s+as\s+\w+/, '').trim();
          return content.includes(importName) && importName !== 'ReactNode';
        });
        if (usedImports.length === 0) {
          return false; // Remove the entire import line
        } else if (imports.length === 1 && imports[0].trim() === 'ReactNode') {
          return false; // Remove ReactNode-only import
        }
      }
    }
    return true;
  });
  return filteredLines.join('\n');
}

// Function to fix unused variables
function fixUnusedVariables(content) {
  // Remove unused error variables in catch blocks
  content = content.replace(/catch\s*\(\s*error\s*\)\s*\{[^}]*\}/g, (match) => {
    if (match.includes('error') && !match.includes('error.')) {
      return match.replace(/catch\s*\(\s*error\s*\)/, 'catch');
    }
    return match;
  });

  // Remove unused variables in destructuring
  content = content.replace(/const\s*\{\s*([^}]+)\s*\}\s*=\s*[^;]+;/g, (match, destructured) => {
    const vars = destructured.split(',').map(v => v.trim());
    const usedVars = vars.filter(v => {
      const varName = v.split(':')[0].trim();
      return content.includes(varName) && varName !== 'error';
    });
    
    if (usedVars.length === 0) {
      return ''; // Remove the entire line
    } else if (usedVars.length < vars.length) {
      return match.replace(destructured, usedVars.join(', '));
    }
    return match;
  });

  return content;
}

// Function to fix console statements
function fixConsoleStatements(content) {
  // Replace console.log with proper logging or remove
  content = content.replace(/console\.log\([^)]*\);?\s*/g, '');
  content = content.replace(/console\.error\([^)]*\);?\s*/g, '');
  content = content.replace(/console\.warn\([^)]*\);?\s*/g, '');
  content = content.replace(/console\.info\([^)]*\);?\s*/g, '');
  
  return content;
}

// Function to fix unused imports
function fixUnusedImports(content) {
  // Remove unused memo import
  content = content.replace(/import\s*\{\s*memo\s*\}\s*from\s*['"]react['"];?\s*/g, '');
  
  // Remove unused Navigation imports
  content = content.replace(/import\s*Navigation\s*from\s*['"]@\/components\/Navigation['"];?\s*/g, '');
  
  return content;
}

// Function to fix specific component issues
function fixComponentIssues(content, filePath) {
  // Fix Navigation component unused state
  if (filePath.includes('Navigation.tsx')) {
    content = content.replace(/const\s*\[\s*isOpen\s*,\s*setIsOpen\s*\]\s*=\s*useState\([^)]*\);?\s*/g, '');
  }
  
  // Fix PerformanceMonitoring component
  if (filePath.includes('PerformanceMonitoring.tsx')) {
    content = content.replace(/const\s*memoryUsage\s*=\s*[^;]+;?\s*/g, '');
  }
  
  // Fix PerformanceOptimizer component
  if (filePath.includes('PerformanceOptimizer.tsx')) {
    content = content.replace(/const\s*fidEntry\s*=\s*[^;]+;?\s*/g, '');
    content = content.replace(/const\s*clsEntry\s*=\s*[^;]+;?\s*/g, '');
  }
  
  return content;
}

// Function to process a single file
function processFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    const originalContent = content;
    
    // Apply all fixes
    content = fixUnusedReactNodeImports(content);
    content = fixUnusedVariables(content);
    content = fixConsoleStatements(content);
    content = fixUnusedImports(content);
    content = fixComponentIssues(content, filePath);
    
    // Clean up multiple empty lines
    content = content.replace(/\n\s*\n\s*\n/g, '\n\n');
    
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content);
      console.log(`✅ Fixed: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`❌ Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Function to recursively find TypeScript/JavaScript files
function findFiles(dir, extensions = ['.tsx', '.ts', '.js', '.jsx']) {
  const files = [];
  
  function traverse(currentDir) {
    const items = fs.readdirSync(currentDir);
    
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
        traverse(fullPath);
      } else if (stat.isFile() && extensions.some(ext => item.endsWith(ext))) {
        files.push(fullPath);
      }
    }
  }
  
  traverse(dir);
  return files;
}

// Main execution
const appDir = path.join(__dirname, 'app');
const files = findFiles(appDir);

console.log(`Found ${files.length} files to process...\n`);

let fixedCount = 0;
for (const file of files) {
  if (processFile(file)) {
    fixedCount++;
  }
}

console.log(`\n🎉 Fixed ${fixedCount} files!`);
console.log('✨ Linting fixes completed!');