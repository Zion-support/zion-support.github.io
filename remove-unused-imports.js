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
      // Skip node_modules and other common directories
      if (!['node_modules', '.git', 'dist', '.next', 'out'].includes(file)) {
        results = results.concat(getAllFiles(filePath, extensions));
      }
    } else {
      const ext = path.extname(file);
      if (extensions.includes(ext)) {
        results.push(filePath);
      }
    }
  });
  
  return results;
}

// Remove unused imports from a file
function removeUnusedImports(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    const originalContent = content;
    
    // Get unused imports using ESLint
    try {
      const result = execSync(`npx eslint "${filePath}" --format=json --no-eslintrc --config='{"extends":["@typescript-eslint/recommended"],"parser":"@typescript-eslint/parser","rules":{"@typescript-eslint/no-unused-vars":"error"}}'`, { 
        encoding: 'utf8',
        stdio: 'pipe'
      });
      
      const lintResults = JSON.parse(result);
      if (lintResults.length === 0) return false;
      
      const unusedVars = lintResults[0].messages
        .filter(msg => msg.ruleId === '@typescript-eslint/no-unused-vars' && msg.message.includes('is defined but never used'))
        .map(msg => msg.message.match(/'([^']+)'/)?.[1])
        .filter(Boolean);
      
      if (unusedVars.length === 0) return false;
      
      // Remove unused imports
      const lines = content.split('\n');
      const newLines = lines.filter(line => {
        // Check if line is an import statement
        if (line.trim().startsWith('import ')) {
          // Check if any of the unused vars are in this import
          const hasUnusedVar = unusedVars.some(varName => 
            line.includes(`{ ${varName}`) || 
            line.includes(`{${varName}`) ||
            line.includes(` ${varName},`) ||
            line.includes(` ${varName} `) ||
            line.includes(`,${varName}`) ||
            line.includes(`, ${varName}`) ||
            line.includes(`${varName},`) ||
            line.includes(`${varName} `) ||
            line.includes(`${varName}`) && line.includes('from')
          );
          
          if (hasUnusedVar) {
            // If this import only has unused vars, remove the entire line
            const importMatch = line.match(/import\s*{([^}]+)}\s*from/);
            if (importMatch) {
              const imports = importMatch[1].split(',').map(imp => imp.trim());
              const usedImports = imports.filter(imp => !unusedVars.includes(imp));
              if (usedImports.length === 0) {
                return false; // Remove entire import line
              } else {
                // Keep the line but remove unused imports
                const newImportList = usedImports.join(', ');
                return line.replace(importMatch[0], `import { ${newImportList} } from`);
              }
            }
            return false; // Remove line if it's a default import
          }
        }
        return true;
      });
      
      const newContent = newLines.join('\n');
      if (newContent !== originalContent) {
        fs.writeFileSync(filePath, newContent, 'utf8');
        console.log(`Fixed unused imports in: ${filePath}`);
        return true;
      }
      
    } catch (error) {
      // If ESLint fails, try a simpler approach
      console.log(`ESLint failed for ${filePath}, trying simple approach...`);
    }
    
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
  }
  
  return false;
}

// Main execution
console.log('Removing unused imports...');

const files = getAllFiles('.', ['.ts', '.tsx', '.js', '.jsx'])
  .filter(file => 
    !file.includes('node_modules') && 
    !file.includes('.git') &&
    !file.includes('dist') &&
    !file.includes('.next') &&
    !file.includes('out')
  );

let fixedCount = 0;
files.forEach(file => {
  if (removeUnusedImports(file)) {
    fixedCount++;
  }
});

console.log(`Fixed ${fixedCount} files`);