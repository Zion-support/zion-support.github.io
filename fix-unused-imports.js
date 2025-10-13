import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

// Function to remove unused imports from a file
function removeUnusedImports(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    
    // Skip if file doesn't exist or is empty
    if (!content.trim()) return;
    
    // Get unused imports using ESLint
    let unusedImports = [];
    try {
      const eslintOutput = execSync(`npx eslint "${filePath}" --format=json --no-eslintrc --config='{"extends":["@typescript-eslint/recommended"],"parser":"@typescript-eslint/parser","rules":{"@typescript-eslint/no-unused-vars":"error"}}'`, { 
        encoding: 'utf8',
        stdio: 'pipe'
      });
      
      const result = JSON.parse(eslintOutput);
      if (result[0] && result[0].messages) {
        unusedImports = result[0].messages
          .filter(msg => msg.ruleId === '@typescript-eslint/no-unused-vars' && msg.message.includes('is defined but never used'))
          .map(msg => msg.message.match(/'([^']+)' is defined but never used/)?.[1])
          .filter(Boolean);
      }
    } catch (error) {
      // If ESLint fails, try a simpler approach
      console.log(`ESLint failed for ${filePath}, using regex approach`);
    }
    
    if (unusedImports.length === 0) {
      // Try regex approach to find unused imports
      const importLines = content.split('\n').filter(line => line.trim().startsWith('import'));
      
      for (const line of importLines) {
        const match = line.match(/import\s*\{([^}]+)\}\s*from/);
        if (match) {
          const imports = match[1].split(',').map(imp => imp.trim());
          const usedImports = imports.filter(imp => {
            const importName = imp.replace(/\s+as\s+\w+/, '').trim();
            return content.includes(importName) && !line.includes(importName);
          });
          
          if (usedImports.length === imports.length) {
            // All imports in this line are unused
            const newContent = content.replace(line + '\n', '');
            fs.writeFileSync(filePath, newContent);
            console.log(`Removed unused import line from ${filePath}`);
            return;
          }
        }
      }
      return;
    }
    
    // Remove unused imports
    let newContent = content;
    for (const unusedImport of unusedImports) {
      // Remove from import statements
      newContent = newContent.replace(
        new RegExp(`import\\s*\\{[^}]*\\b${unusedImport}\\b[^}]*\\}\\s*from[^;]+;?`, 'g'),
        ''
      );
      
      // Remove entire import line if it becomes empty
      newContent = newContent.replace(/import\s*\{\s*\}\s*from[^;]+;?\n?/g, '');
    }
    
    // Clean up multiple empty lines
    newContent = newContent.replace(/\n\s*\n\s*\n/g, '\n\n');
    
    if (newContent !== content) {
      fs.writeFileSync(filePath, newContent);
      console.log(`Fixed unused imports in ${filePath}`);
    }
    
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
  }
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
console.log('Starting unused import removal...');

const files = findTsxFiles('./app');
console.log(`Found ${files.length} files to process`);

let fixedCount = 0;
for (const file of files) {
  const originalContent = fs.readFileSync(file, 'utf8');
  removeUnusedImports(file);
  const newContent = fs.readFileSync(file, 'utf8');
  
  if (originalContent !== newContent) {
    fixedCount++;
  }
}

console.log(`Fixed ${fixedCount} files`);
console.log('Unused import removal completed!');