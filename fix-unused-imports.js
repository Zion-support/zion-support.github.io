import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

// Function to remove unused imports from a file
function removeUnusedImports(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Get the list of unused imports from ESLint
    try {
      const eslintOutput = execSync(`npx eslint "${filePath}" --format=json`, { 
        encoding: 'utf8',
        stdio: 'pipe'
      });
      
      const eslintResults = JSON.parse(eslintOutput);
      if (eslintResults.length === 0) return false;

      const unusedVars = eslintResults[0].messages
        .filter(msg => msg.ruleId === '@typescript-eslint/no-unused-vars' && msg.message.includes('is defined but never used'))
        .map(msg => {
          const match = msg.message.match(/'([^']+)' is defined but never used/);
          return match ? match[1] : null;
        })
        .filter(Boolean);

      if (unusedVars.length === 0) return false;

      // Remove unused imports
      const lines = content.split('\n');
      const newLines = [];

      for (let i = 0; i < lines.length; i++) {
        const line = lines[i];
        
        // Check if this line contains an import statement
        if (line.trim().startsWith('import ')) {
          // Check if any unused var is in this line
          const hasUnusedVar = unusedVars.some(varName => {
            // Check for direct import: import { varName } from '...'
            const directImportRegex = new RegExp(`\\b${varName}\\b`);
            // Check for named import in destructuring: import { ..., varName, ... } from '...'
            const namedImportRegex = new RegExp(`\\{[^}]*\\b${varName}\\b[^}]*\\}`);
            // Check for default import: import varName from '...'
            const defaultImportRegex = new RegExp(`^import\\s+${varName}\\s+from`);
            
            return directImportRegex.test(line) || namedImportRegex.test(line) || defaultImportRegex.test(line);
          });

          if (hasUnusedVar) {
            // Try to remove the unused variable from the import
            let modifiedLine = line;
            
            // Handle named imports: { var1, var2, var3 }
            const namedImportMatch = line.match(/import\s+\{([^}]+)\}\s+from/);
            if (namedImportMatch) {
              const imports = namedImportMatch[1].split(',').map(imp => imp.trim());
              const remainingImports = imports.filter(imp => !unusedVars.includes(imp));
              
              if (remainingImports.length === 0) {
                // All imports are unused, remove the entire line
                continue;
              } else {
                // Replace with remaining imports
                modifiedLine = line.replace(/\{[^}]+\}/, `{ ${remainingImports.join(', ')} }`);
              }
            }
            
            // Handle default imports: import varName from '...'
            const defaultImportMatch = line.match(/^import\s+(\w+)\s+from/);
            if (defaultImportMatch && unusedVars.includes(defaultImportMatch[1])) {
              // Remove the entire line for unused default imports
              continue;
            }
            
            // Handle mixed imports: import varName, { var1, var2 } from '...'
            const mixedImportMatch = line.match(/^import\s+(\w+),\s*\{([^}]+)\}\s+from/);
            if (mixedImportMatch) {
              const defaultVar = mixedImportMatch[1];
              const namedImports = mixedImportMatch[2].split(',').map(imp => imp.trim());
              
              const remainingNamedImports = namedImports.filter(imp => !unusedVars.includes(imp));
              const isDefaultUnused = unusedVars.includes(defaultVar);
              
              if (isDefaultUnused && remainingNamedImports.length === 0) {
                // Remove entire line
                continue;
              } else if (isDefaultUnused) {
                // Remove default import, keep named imports
                modifiedLine = line.replace(/^import\s+\w+,\s*/, 'import ');
                modifiedLine = modifiedLine.replace(/\{[^}]+\}/, `{ ${remainingNamedImports.join(', ')} }`);
              } else if (remainingNamedImports.length === 0) {
                // Keep default import, remove named imports
                modifiedLine = line.replace(/,\s*\{[^}]+\}/, '');
              } else {
                // Update named imports
                modifiedLine = modifiedLine.replace(/\{[^}]+\}/, `{ ${remainingNamedImports.join(', ')} }`);
              }
            }
            
            if (modifiedLine !== line) {
              newLines.push(modifiedLine);
              modified = true;
            } else {
              newLines.push(line);
            }
          } else {
            newLines.push(line);
          }
        } else {
          newLines.push(line);
        }
      }

      if (modified) {
        fs.writeFileSync(filePath, newLines.join('\n'));
        console.log(`Fixed unused imports in: ${filePath}`);
        return true;
      }
    } catch (error) {
      // ESLint might fail, continue with next file
      console.log(`Skipping ${filePath} due to ESLint error: ${error.message}`);
    }
  } catch (error) {
    console.log(`Error processing ${filePath}: ${error.message}`);
  }
  
  return false;
}

// Function to recursively find all TypeScript/JavaScript files
function findTsxFiles(dir) {
  const files = [];
  
  function traverse(currentDir) {
    const items = fs.readdirSync(currentDir);
    
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
        traverse(fullPath);
      } else if (stat.isFile() && (item.endsWith('.tsx') || item.endsWith('.ts'))) {
        files.push(fullPath);
      }
    }
  }
  
  traverse(dir);
  return files;
}

// Main execution
console.log('Starting to fix unused imports...');

const files = findTsxFiles('./app');
let fixedCount = 0;

for (const file of files) {
  if (removeUnusedImports(file)) {
    fixedCount++;
  }
}

console.log(`Fixed unused imports in ${fixedCount} files.`);

// Also fix the main App.tsx file
if (removeUnusedImports('./App.tsx')) {
  fixedCount++;
  console.log('Fixed unused imports in App.tsx');
}

console.log(`Total files fixed: ${fixedCount}`);