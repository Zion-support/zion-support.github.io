const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Find all files with unused imports
const findFilesWithUnusedImports = () => {
  try {
    const result = execSync('find app -name "*.tsx" -o -name "*.ts" | head -50', { encoding: 'utf8' });
    return result.trim().split('\n').filter(Boolean);
  } catch (error) {
    console.error('Error finding files:', error.message);
    return [];
  }
};

// Remove unused imports from a file
const removeUnusedImports = (filePath) => {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const lines = content.split('\n');
    const updatedLines = [];
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      
      // Skip empty import statements
      if (line.trim() === 'import {} from' || line.includes('import {} from')) {
        continue;
      }
      
      // Check for unused React import
      if (line.includes('import React') && !content.includes('<React') && !content.includes('React.')) {
        // Check if React is actually used
        const reactUsage = content.match(/<[A-Z][a-zA-Z]*/g) || [];
        const hasJSX = reactUsage.length > 0;
        if (!hasJSX) {
          continue; // Skip this line
        }
      }
      
      // Check for unused Suspense import
      if (line.includes('import') && line.includes('Suspense') && !content.includes('<Suspense')) {
        // Remove Suspense from the import
        const importMatch = line.match(/import\s*{([^}]+)}\s*from/);
        if (importMatch) {
          const imports = importMatch[1].split(',').map(imp => imp.trim());
          const filteredImports = imports.filter(imp => imp !== 'Suspense');
          if (filteredImports.length === 0) {
            continue; // Skip this line entirely
          } else {
            const newLine = line.replace(/import\s*{[^}]+}\s*from/, `import { ${filteredImports.join(', ')} } from`);
            updatedLines.push(newLine);
            continue;
          }
        }
        continue; // Skip the line
      }
      
      // Check for other unused imports
      if (line.includes('import') && line.includes('{')) {
        const importMatch = line.match(/import\s*{([^}]+)}\s*from/);
        if (importMatch) {
          const imports = importMatch[1].split(',').map(imp => imp.trim());
          const usedImports = imports.filter(imp => {
            // Check if the import is used in the file
            const importName = imp.split(' as ')[0].trim();
            return content.includes(importName) && !content.includes(`import.*${importName}`);
          });
          
          if (usedImports.length === 0) {
            continue; // Skip this line entirely
          } else if (usedImports.length !== imports.length) {
            const newLine = line.replace(/import\s*{[^}]+}\s*from/, `import { ${usedImports.join(', ')} } from`);
            updatedLines.push(newLine);
            continue;
          }
        }
      }
      
      updatedLines.push(line);
    }
    
    const updatedContent = updatedLines.join('\n');
    if (updatedContent !== content) {
      fs.writeFileSync(filePath, updatedContent, 'utf8');
      console.log(`Fixed: ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`Error fixing file ${filePath}:`, error.message);
    return false;
  }
};

// Main execution
const main = () => {
  console.log('Finding files with unused imports...');
  const files = findFilesWithUnusedImports();
  console.log(`Found ${files.length} files to check`);
  
  let fixedCount = 0;
  let errorCount = 0;
  
  for (const file of files) {
    if (removeUnusedImports(file)) {
      fixedCount++;
    } else {
      errorCount++;
    }
  }
  
  console.log(`\nFixed ${fixedCount} files`);
  console.log(`Errors: ${errorCount} files`);
  console.log('Done!');
};

main();
