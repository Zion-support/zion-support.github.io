#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

// Get all TypeScript/JavaScript files
function getAllFiles(dir, extensions = ['.ts', '.tsx', '.js', '.jsx']) {
  let results = [];
  const list = fs.readdirSync(dir);
  
  list.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat && stat.isDirectory()) {
      // Skip node_modules, dist, .git, etc.
      if (!['node_modules', 'dist', '.git', '.next', 'out'].includes(file)) {
        results = results.concat(getAllFiles(filePath, extensions));
      }
    } else if (extensions.some(ext => file.endsWith(ext))) {
      results.push(filePath);
    }
  });
  
  return results;
}

// Fix unused imports in a file
function fixUnusedImports(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Get ESLint output for this specific file
    try {
      const eslintOutput = execSync(`npx eslint "${filePath}" --format=json`, { 
        encoding: 'utf8',
        stdio: 'pipe'
      });
      
      const results = JSON.parse(eslintOutput);
      
      if (results.length > 0 && results[0].messages) {
        const messages = results[0].messages;
        
        // Group messages by line
        const lineMessages = {};
        messages.forEach(msg => {
          if (msg.ruleId === '@typescript-eslint/no-unused-vars' && msg.message.includes('is defined but never used')) {
            if (!lineMessages[msg.line]) {
              lineMessages[msg.line] = [];
            }
            lineMessages[msg.line].push(msg);
          }
        });
        
        // Process each line with unused variables
        Object.keys(lineMessages).forEach(lineNum => {
          const line = parseInt(lineNum);
          const lineContent = content.split('\n')[line - 1];
          
          if (lineContent && lineContent.includes('import')) {
            // Extract the import statement
            const importMatch = lineContent.match(/import\s*{([^}]+)}\s*from\s*['"]([^'"]+)['"]/);
            if (importMatch) {
              const imports = importMatch[1].split(',').map(imp => imp.trim());
              const source = importMatch[2];
              
              // Get unused variables for this line
              const unusedVars = lineMessages[lineNum]
                .map(msg => msg.message.match(/'([^']+)' is defined but never used/)?.[1])
                .filter(Boolean);
              
              if (unusedVars.length > 0) {
                // Remove unused imports
                const remainingImports = imports.filter(imp => !unusedVars.includes(imp));
                
                if (remainingImports.length === 0) {
                  // Remove entire import line
                  const lines = content.split('\n');
                  lines.splice(line - 1, 1);
                  content = lines.join('\n');
                } else {
                  // Update import statement
                  const newImport = `import { ${remainingImports.join(', ')} } from '${source}'`;
                  const lines = content.split('\n');
                  lines[line - 1] = newImport;
                  content = lines.join('\n');
                }
                modified = true;
              }
            }
          }
        });
      }
    } catch (error) {
      // ESLint might fail for some files, continue
      console.log(`Skipping ${filePath} due to ESLint error: ${error.message}`);
    }
    
    if (modified) {
      fs.writeFileSync(filePath, content);
      console.log(`Fixed unused imports in: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Main execution
console.log('🔧 Fixing unused imports...');

const files = getAllFiles('./app');
let fixedCount = 0;

files.forEach(file => {
  if (fixUnusedImports(file)) {
    fixedCount++;
  }
});

console.log(`✅ Fixed unused imports in ${fixedCount} files`);

// Also fix some specific problematic files
const problematicFiles = [
  './app/ai-customer-sentiment-tracker/page.tsx',
  './app/ai-healthcare-diagnostics/page.tsx',
  './app/ai-powered-devops/page.tsx',
  './app/ai-powered-email-analyzer/page.tsx',
  './app/ai-quantum-computing/page.tsx'
];

problematicFiles.forEach(file => {
  if (fs.existsSync(file)) {
    fixUnusedImports(file);
  }
});

console.log('🎉 Unused imports fix completed!');