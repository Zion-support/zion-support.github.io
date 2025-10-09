#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Get all TypeScript/JavaScript files in src directory
function getAllFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      getAllFiles(filePath, fileList);
    } else if (file.endsWith('.tsx') || file.endsWith('.ts') || file.endsWith('.jsx') || file.endsWith('.js')) {
      fileList.push(filePath);
    }
  });
  
  return fileList;
}

// Fix unused imports in a file
function fixUnusedImports(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Get ESLint output for this specific file
    const eslintOutput = execSync(`npx eslint "${filePath}" --format=json`, { 
      encoding: 'utf8',
      stdio: 'pipe'
    }).trim();
    
    if (!eslintOutput) return false;
    
    const results = JSON.parse(eslintOutput);
    
    if (results.length === 0) return false;
    
    const file = results[0];
    if (!file.messages) return false;
    
    // Group warnings by line number
    const lineWarnings = {};
    file.messages.forEach(message => {
      if (message.ruleId === '@typescript-eslint/no-unused-vars' && message.message.includes('is defined but never used')) {
        if (!lineWarnings[message.line]) {
          lineWarnings[message.line] = [];
        }
        lineWarnings[message.line].push(message);
      }
    });
    
    // Process each line with unused imports
    const lines = content.split('\n');
    
    Object.keys(lineWarnings).forEach(lineNum => {
      const lineIndex = parseInt(lineNum) - 1;
      const line = lines[lineIndex];
      
      if (!line) return;
      
      // Check if this is an import statement
      if (line.trim().startsWith('import ')) {
        const warnings = lineWarnings[lineNum];
        const unusedVars = warnings.map(w => {
          const match = w.message.match(/'([^']+)' is defined but never used/);
          return match ? match[1] : null;
        }).filter(Boolean);
        
        if (unusedVars.length > 0) {
          // Parse the import statement
          const importMatch = line.match(/import\s+{([^}]+)}\s+from\s+['"]([^'"]+)['"]/);
          if (importMatch) {
            const [, imports, source] = importMatch;
            const importList = imports.split(',').map(imp => imp.trim());
            
            // Remove unused imports
            const usedImports = importList.filter(imp => !unusedVars.includes(imp));
            
            if (usedImports.length === 0) {
              // Remove the entire import line
              lines[lineIndex] = '';
            } else {
              // Update the import statement
              lines[lineIndex] = line.replace(
                /import\s+{[^}]+}\s+from\s+['"][^'"]+['"]/,
                `import { ${usedImports.join(', ')} } from '${source}'`
              );
            }
            modified = true;
          }
        }
      }
    });
    
    if (modified) {
      fs.writeFileSync(filePath, lines.join('\n'));
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
console.log('Starting to fix unused imports...');

const srcDir = path.join(__dirname, 'src');
const files = getAllFiles(srcDir);

let fixedCount = 0;

files.forEach(file => {
  if (fixUnusedImports(file)) {
    fixedCount++;
  }
});

console.log(`Fixed unused imports in ${fixedCount} files.`);