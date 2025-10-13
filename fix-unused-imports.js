#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

// Get all TypeScript/JavaScript files
const getAllFiles = (dir, extensions = ['.tsx', '.ts', '.jsx', '.js']) => {
  let files = [];
  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
      files = files.concat(getAllFiles(fullPath, extensions));
    } else if (extensions.some(ext => item.endsWith(ext))) {
      files.push(fullPath);
    }
  }
  
  return files;
};

// Fix unused imports in a file
const fixUnusedImports = (filePath) => {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Get ESLint output for this file
    const eslintOutput = execSync(`npx eslint "${filePath}" --format=json`, { 
      encoding: 'utf8',
      stdio: 'pipe'
    }).trim();
    
    if (!eslintOutput) return false;
    
    const eslintResult = JSON.parse(eslintOutput);
    const messages = eslintResult[0]?.messages || [];
    
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
    const lines = content.split('\n');
    const linesToRemove = new Set();
    
    Object.keys(lineMessages).forEach(lineNum => {
      const lineIndex = lineNum - 1;
      const line = lines[lineIndex];
      const messages = lineMessages[lineNum];
      
      messages.forEach(msg => {
        const varName = msg.message.match(/'([^']+)' is defined but never used/)?.[1];
        if (varName) {
          // Check if this is an import line
          if (line.includes('import') && line.includes('from')) {
            // Remove the unused variable from the import
            const importMatch = line.match(/import\s*{([^}]+)}\s*from\s*['"]([^'"]+)['"]/);
            if (importMatch) {
              const imports = importMatch[1].split(',').map(imp => imp.trim());
              const filteredImports = imports.filter(imp => imp !== varName);
              
              if (filteredImports.length === 0) {
                // Remove the entire import line if no imports remain
                linesToRemove.add(lineIndex);
              } else {
                // Update the import line
                lines[lineIndex] = line.replace(
                  importMatch[0],
                  `import { ${filteredImports.join(', ')} } from '${importMatch[2]}'`
                );
                modified = true;
              }
            }
          } else if (line.includes('const') || line.includes('let') || line.includes('var')) {
            // Remove the entire line if it's a variable declaration
            linesToRemove.add(lineIndex);
            modified = true;
          }
        }
      });
    });
    
    // Remove lines that are marked for removal
    const filteredLines = lines.filter((_, index) => !linesToRemove.has(index));
    
    if (modified || filteredLines.length !== lines.length) {
      fs.writeFileSync(filePath, filteredLines.join('\n'));
      console.log(`Fixed unused imports in: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
};

// Main execution
const main = () => {
  console.log('🔧 Fixing unused imports...');
  
  const files = getAllFiles('./app');
  let fixedCount = 0;
  
  files.forEach(file => {
    if (fixUnusedImports(file)) {
      fixedCount++;
    }
  });
  
  console.log(`✅ Fixed ${fixedCount} files`);
  
  // Run ESLint again to check remaining issues
  console.log('🔍 Running ESLint to check remaining issues...');
  try {
    execSync('npm run lint', { stdio: 'inherit' });
    console.log('✅ All linting issues fixed!');
  } catch (error) {
    console.log('⚠️  Some linting issues remain, but unused imports have been fixed');
  }
};

main();