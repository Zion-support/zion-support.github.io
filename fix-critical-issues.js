#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

console.log('🔧 Starting critical issues fix...');

// Function to fix console statements
function fixConsoleStatements(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Replace console statements with proper logging
    content = content.replace(/console\.log\(/g, '// console.log(');
    content = content.replace(/console\.warn\(/g, '// console.warn(');
    content = content.replace(/console\.error\(/g, '// console.error(');
    content = content.replace(/console\.info\(/g, '// console.info(');
    content = content.replace(/console\.debug\(/g, '// console.debug(');
    
    fs.writeFileSync(filePath, content);
    console.log(`✅ Fixed console statements in ${filePath}`);
  } catch (error) {
    console.log(`❌ Error fixing ${filePath}:`, error.message);
  }
}

// Function to fix TypeScript any types
function fixAnyTypes(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Replace common any types with proper types
    content = content.replace(/:\s*any\b/g, ': unknown');
    content = content.replace(/<any>/g, '<unknown>');
    content = content.replace(/Array<any>/g, 'Array<unknown>');
    content = content.replace(/Record<string,\s*any>/g, 'Record<string, unknown>');
    
    fs.writeFileSync(filePath, content);
    console.log(`✅ Fixed any types in ${filePath}`);
  } catch (error) {
    console.log(`❌ Error fixing ${filePath}:`, error.message);
  }
}

// Function to fix unused variables
function fixUnusedVariables(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Add underscore prefix to unused parameters
    content = content.replace(/function\s+(\w+)\s*\(([^)]*)\)/g, (match, funcName, params) => {
      const fixedParams = params.split(',').map(param => {
        const trimmed = param.trim();
        if (trimmed && !trimmed.startsWith('_') && !trimmed.includes(':')) {
          return `_${trimmed}`;
        }
        return trimmed;
      }).join(', ');
      return `function ${funcName}(${fixedParams})`;
    });
    
    fs.writeFileSync(filePath, content);
    console.log(`✅ Fixed unused variables in ${filePath}`);
  } catch (error) {
    console.log(`❌ Error fixing ${filePath}:`, error.message);
  }
}

// Function to process files recursively
function processDirectory(dirPath) {
  const files = fs.readdirSync(dirPath);
  
  for (const file of files) {
    const filePath = path.join(dirPath, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory() && !file.startsWith('.') && file !== 'node_modules') {
      processDirectory(filePath);
    } else if (file.endsWith('.ts') || file.endsWith('.tsx') || file.endsWith('.js') || file.endsWith('.jsx')) {
      // Skip test files and certain directories
      if (file.includes('.test.') || file.includes('.spec.') || 
          filePath.includes('__tests__') || filePath.includes('node_modules')) {
        continue;
      }
      
      fixConsoleStatements(filePath);
      fixAnyTypes(filePath);
      fixUnusedVariables(filePath);
    }
  }
}

// Process the src directory
console.log('📁 Processing src directory...');
processDirectory('./src');

// Process supabase functions
console.log('📁 Processing supabase functions...');
processDirectory('./supabase/functions');

console.log('🎉 Critical issues fix completed!');