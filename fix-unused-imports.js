import fs from 'fs';
import path from 'path';
<<<<<<< HEAD

// Get all TypeScript/JavaScript files
const getAllFiles = (dir, extensions = ['.ts', '.tsx', '.js', '.jsx']) => {
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

// Remove unused imports from a file
const removeUnusedImports = (filePath) => {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const lines = content.split('\n');
    const newLines = [];
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      
      // Check if this is an import line
      if (line.trim().startsWith('import ')) {
        // Check if the next line is also an import (multiline import)
        let importLines = [line];
        let j = i + 1;
        
        while (j < lines.length && lines[j].trim().startsWith('import ')) {
          importLines.push(lines[j]);
          j++;
        }
        
        // Check if any of these imports are used in the file
        const importContent = importLines.join('\n');
        const restOfFile = lines.slice(j).join('\n');
        
        // Extract imported names
        const importMatches = importContent.match(/\{([^}]+)\}/g);
        if (importMatches) {
          const importedNames = importMatches
            .flatMap(match => match.slice(1, -1).split(','))
            .map(name => name.trim().split(' as ')[0].trim());
          
          // Check if any imported name is used in the rest of the file
          const isUsed = importedNames.some(name => {
            if (name === 'React') return true; // Always keep React
            const regex = new RegExp(`\\b${name}\\b`, 'g');
            return regex.test(restOfFile);
          });
          
          if (!isUsed) {
            console.log(`Removing unused import from ${filePath}: ${importedNames.join(', ')}`);
            i = j - 1; // Skip the import lines
            continue;
          }
        }
      }
      
      newLines.push(line);
    }
    
    const newContent = newLines.join('\n');
    if (newContent !== content) {
      fs.writeFileSync(filePath, newContent);
      console.log(`Updated ${filePath}`);
=======
import { execSync } from 'child_process';

// Function to remove unused imports from a file
function removeUnusedImports(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    
    // Skip if file doesn't exist or is not a TypeScript/JavaScript file
    if (!fs.existsSync(filePath) || (!filePath.endsWith('.tsx') && !filePath.endsWith('.ts') && !filePath.endsWith('.jsx') && !filePath.endsWith('.js'))) {
      return;
    }

    // Use ESLint to fix unused imports
    try {
      execSync(`npx eslint "${filePath}" --fix --no-eslintrc --config '{"extends": ["@typescript-eslint/recommended"], "parser": "@typescript-eslint/parser", "rules": {"@typescript-eslint/no-unused-vars": "error"}}'`, { 
        stdio: 'pipe',
        cwd: '/workspace'
      });
      console.log(`Fixed unused imports in: ${filePath}`);
    } catch (error) {
      // If ESLint fails, try a simple approach to remove unused imports
      console.log(`ESLint failed for ${filePath}, trying manual approach...`);
      
      // Simple regex to remove unused imports (this is a basic approach)
      const lines = content.split('\n');
      const newLines = lines.filter(line => {
        // Keep import statements that are likely used
        if (line.trim().startsWith('import ')) {
          // Check if any of the imported items are used in the file
          const importMatch = line.match(/import\s*\{([^}]+)\}/);
          if (importMatch) {
            const imports = importMatch[1].split(',').map(imp => imp.trim());
            const isUsed = imports.some(imp => {
              const cleanImp = imp.replace(/\s+as\s+\w+/, '').trim();
              return content.includes(cleanImp) && !line.includes(cleanImp);
            });
            return isUsed || imports.length === 0;
          }
          return true;
        }
        return true;
      });
      
      if (newLines.length !== lines.length) {
        fs.writeFileSync(filePath, newLines.join('\n'));
        console.log(`Manually fixed unused imports in: ${filePath}`);
      }
>>>>>>> 2fda46b8c81d66ef34322b3dc826b41bdfbc86e8
    }
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
  }
<<<<<<< HEAD
};

// Main execution
const files = getAllFiles('/workspace/app');
console.log(`Found ${files.length} files to process`);

=======
}

// Function to recursively find all TypeScript/JavaScript files
function findFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory() && !file.includes('node_modules') && !file.includes('.git')) {
      findFiles(filePath, fileList);
    } else if (file.endsWith('.tsx') || file.endsWith('.ts') || file.endsWith('.jsx') || file.endsWith('.js')) {
      fileList.push(filePath);
    }
  });
  
  return fileList;
}

// Main execution
console.log('Starting to fix unused imports...');

const files = findFiles('/workspace/app');
>>>>>>> 2fda46b8c81d66ef34322b3dc826b41bdfbc86e8
files.forEach(file => {
  removeUnusedImports(file);
});

<<<<<<< HEAD
console.log('Done fixing unused imports');
=======
// Also fix component files
const componentFiles = findFiles('/workspace/app/components');
componentFiles.forEach(file => {
  removeUnusedImports(file);
});

console.log('Finished fixing unused imports.');
