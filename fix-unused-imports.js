#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Get all TypeScript/JavaScript files
function getAllFiles(dir, extensions = ['.ts', '.tsx', '.js', '.jsx']) {
  let files = [];
  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory() && !item.startsWith('.') && !item.includes('node_modules')) {
      files = files.concat(getAllFiles(fullPath, extensions));
    } else if (extensions.some(ext => item.endsWith(ext))) {
      files.push(fullPath);
    }
  }
  
  return files;
}

// Remove unused imports from a file
function removeUnusedImports(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    const originalContent = content;
    
    // Skip if file is too small or doesn't contain imports
    if (content.length < 100 || !content.includes('import')) {
      return false;
    }
    
    // Get all import statements
    const importRegex = /import\s+.*?from\s+['"][^'"]+['"];?\s*/g;
    const imports = content.match(importRegex) || [];
    
    // Get all used identifiers in the file
    const usedIdentifiers = new Set();
    
    // Find all identifiers that are used in the file
    const identifierRegex = /\b[A-Za-z_$][A-Za-z0-9_$]*\b/g;
    const matches = content.match(identifierRegex) || [];
    
    for (const match of matches) {
      // Skip common keywords and built-ins
      if (!['const', 'let', 'var', 'function', 'class', 'interface', 'type', 'enum', 'return', 'if', 'else', 'for', 'while', 'do', 'switch', 'case', 'default', 'break', 'continue', 'try', 'catch', 'finally', 'throw', 'new', 'this', 'super', 'extends', 'implements', 'static', 'public', 'private', 'protected', 'readonly', 'async', 'await', 'yield', 'of', 'in', 'instanceof', 'typeof', 'void', 'null', 'undefined', 'true', 'false', 'NaN', 'Infinity', 'console', 'window', 'document', 'navigator', 'location', 'history', 'localStorage', 'sessionStorage', 'fetch', 'Promise', 'Array', 'Object', 'String', 'Number', 'Boolean', 'Date', 'RegExp', 'Error', 'Math', 'JSON', 'parseInt', 'parseFloat', 'isNaN', 'isFinite', 'decodeURI', 'decodeURIComponent', 'encodeURI', 'encodeURIComponent', 'escape', 'unescape', 'setTimeout', 'setInterval', 'clearTimeout', 'clearInterval', 'requestAnimationFrame', 'cancelAnimationFrame'].includes(match)) {
        usedIdentifiers.add(match);
      }
    }
    
    // Process each import statement
    for (const importStatement of imports) {
      // Extract the import part (before 'from')
      const importPart = importStatement.split('from')[0].trim();
      
      // Handle different import patterns
      if (importPart.includes('{')) {
        // Named imports: import { a, b, c } from 'module'
        const namedImports = importPart.match(/\{([^}]+)\}/);
        if (namedImports) {
          const imports = namedImports[1].split(',').map(imp => imp.trim().split(' as ')[0].trim());
          const usedImports = imports.filter(imp => usedIdentifiers.has(imp));
          
          if (usedImports.length === 0) {
            // Remove entire import statement if no imports are used
            content = content.replace(importStatement, '');
          } else if (usedImports.length < imports.length) {
            // Replace with only used imports
            const newImportStatement = importStatement.replace(/\{[^}]+\}/, `{ ${usedImports.join(', ')} }`);
            content = content.replace(importStatement, newImportStatement);
          }
        }
      } else if (importPart.includes('*')) {
        // Namespace imports: import * as name from 'module'
        const namespaceMatch = importPart.match(/\*\s+as\s+(\w+)/);
        if (namespaceMatch) {
          const namespaceName = namespaceMatch[1];
          if (!usedIdentifiers.has(namespaceName)) {
            content = content.replace(importStatement, '');
          }
        }
      } else {
        // Default imports: import name from 'module'
        const defaultMatch = importPart.match(/import\s+(\w+)/);
        if (defaultMatch) {
          const defaultName = defaultMatch[1];
          if (!usedIdentifiers.has(defaultName)) {
            content = content.replace(importStatement, '');
          }
        }
      }
    }
    
    // Clean up multiple empty lines
    content = content.replace(/\n\s*\n\s*\n/g, '\n\n');
    
    // Only write if content changed
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content, 'utf8');
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Main execution
function main() {
  console.log('🔍 Finding TypeScript/JavaScript files...');
  
  const srcDir = path.join(__dirname, 'src');
  const files = getAllFiles(srcDir);
  
  console.log(`📁 Found ${files.length} files to process`);
  
  let modifiedCount = 0;
  
  for (const file of files) {
    if (removeUnusedImports(file)) {
      modifiedCount++;
      console.log(`✅ Cleaned: ${path.relative(__dirname, file)}`);
    }
  }
  
  console.log(`\n🎉 Cleaned ${modifiedCount} files`);
  
  // Run TypeScript check to see remaining errors
  console.log('\n🔍 Running TypeScript check...');
  try {
    execSync('npx tsc --noEmit --skipLibCheck', { stdio: 'inherit' });
  } catch (error) {
    console.log('⚠️  Some TypeScript errors remain');
  }
}

main();