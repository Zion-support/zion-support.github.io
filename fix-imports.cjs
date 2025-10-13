const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

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
    let eslintOutput;
    try {
      eslintOutput = execSync(`npx eslint "${filePath}" --format=json`, { 
        encoding: 'utf8',
        stdio: 'pipe'
      }).trim();
    } catch (error) {
      // ESLint failed, skip this file
      return false;
    }
    
    if (!eslintOutput) return false;
    
    const eslintResult = JSON.parse(eslintOutput);
    const messages = eslintResult[0]?.messages || [];
    
    // Get unused variables
    const unusedVars = new Set();
    messages.forEach(msg => {
      if (msg.ruleId === '@typescript-eslint/no-unused-vars' && msg.message.includes('is defined but never used')) {
        const varName = msg.message.match(/'([^']+)' is defined but never used/)?.[1];
        if (varName) {
          unusedVars.add(varName);
        }
      }
    });
    
    if (unusedVars.size === 0) return false;
    
    // Process import statements
    const lines = content.split('\n');
    const newLines = [];
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      
      // Check if this is an import line
      if (line.includes('import') && line.includes('from')) {
        // Handle named imports
        const namedImportMatch = line.match(/import\s*{([^}]+)}\s*from\s*['"]([^'"]+)['"]/);
        if (namedImportMatch) {
          const imports = namedImportMatch[1].split(',').map(imp => imp.trim());
          const filteredImports = imports.filter(imp => !unusedVars.has(imp));
          
          if (filteredImports.length === 0) {
            // Skip this import line entirely
            continue;
          } else if (filteredImports.length !== imports.length) {
            // Update the import line
            newLines.push(line.replace(
              namedImportMatch[0],
              `import { ${filteredImports.join(', ')} } from '${namedImportMatch[2]}'`
            ));
            modified = true;
            continue;
          }
        }
        
        // Handle default imports
        const defaultImportMatch = line.match(/import\s+(\w+)\s+from\s*['"]([^'"]+)['"]/);
        if (defaultImportMatch) {
          const importName = defaultImportMatch[1];
          if (unusedVars.has(importName)) {
            // Skip this import line
            continue;
          }
        }
      }
      
      // Check if this is a variable declaration line
      if (line.includes('const') || line.includes('let') || line.includes('var')) {
        const varMatch = line.match(/(?:const|let|var)\s+(\w+)/);
        if (varMatch && unusedVars.has(varMatch[1])) {
          // Skip this line
          continue;
        }
      }
      
      newLines.push(line);
    }
    
    if (modified || newLines.length !== lines.length) {
      fs.writeFileSync(filePath, newLines.join('\n'));
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
};

main();