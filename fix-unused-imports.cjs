const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Get all TypeScript/JavaScript files
function getAllFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory() && !file.startsWith('.') && file !== 'node_modules') {
      getAllFiles(filePath, fileList);
    } else if (file.endsWith('.tsx') || file.endsWith('.ts') || file.endsWith('.jsx') || file.endsWith('.js')) {
      fileList.push(filePath);
    }
  });
  
  return fileList;
}

// Remove unused imports from a file
function removeUnusedImports(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    const originalContent = content;
    
    // Get unused imports using ESLint
    try {
      const result = execSync(`npx eslint "${filePath}" --format=json --no-eslintrc --config='{"extends": ["@typescript-eslint/recommended"], "parser": "@typescript-eslint/parser", "rules": {"@typescript-eslint/no-unused-vars": "error"}}'`, { 
        encoding: 'utf8',
        stdio: 'pipe'
      });
      
      const lintResults = JSON.parse(result);
      if (lintResults.length > 0 && lintResults[0].messages) {
        const unusedVars = lintResults[0].messages.filter(msg => 
          msg.ruleId === '@typescript-eslint/no-unused-vars' && 
          msg.message.includes('is defined but never used')
        );
        
        if (unusedVars.length > 0) {
          console.log(`Fixing ${unusedVars.length} unused imports in ${filePath}`);
          
          // Remove unused imports
          unusedVars.forEach(msg => {
            const line = content.split('\n')[msg.line - 1];
            if (line.includes('import')) {
              // Handle different import patterns
              if (line.includes('{')) {
                // Named imports: import { A, B, C } from 'module'
                const importMatch = line.match(/import\s*{\s*([^}]+)\s*}\s*from\s*['"]([^'"]+)['"]/);
                if (importMatch) {
                  const imports = importMatch[1].split(',').map(imp => imp.trim());
                  const unusedImport = msg.message.match(/'([^']+)'/)[1];
                  const filteredImports = imports.filter(imp => imp !== unusedImport);
                  
                  if (filteredImports.length === 0) {
                    // Remove entire import line
                    content = content.replace(line + '\n', '');
                  } else {
                    // Replace with filtered imports
                    const newLine = line.replace(
                      /{\s*[^}]+\s*}/,
                      `{ ${filteredImports.join(', ')} }`
                    );
                    content = content.replace(line, newLine);
                  }
                }
              } else if (line.includes('import') && !line.includes('{')) {
                // Default import: import A from 'module'
                const unusedImport = msg.message.match(/'([^']+)'/)[1];
                if (line.includes(unusedImport)) {
                  content = content.replace(line + '\n', '');
                }
              }
            }
          });
          
          // Write the fixed content back
          if (content !== originalContent) {
            fs.writeFileSync(filePath, content);
            console.log(`Fixed unused imports in ${filePath}`);
          }
        }
      }
    } catch (error) {
      // ESLint might fail on some files, continue with others
      console.log(`Skipping ${filePath} due to ESLint error: ${error.message}`);
    }
    
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
  }
}

// Main execution
console.log('Starting to fix unused imports...');

const files = getAllFiles('.');
console.log(`Found ${files.length} files to process`);

files.forEach(file => {
  if (!file.includes('node_modules') && !file.includes('.git')) {
    removeUnusedImports(file);
  }
});

console.log('Finished fixing unused imports');