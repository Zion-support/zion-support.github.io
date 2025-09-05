<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
=======
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7ef8
>>>>>>> 22585ea456adf6ad6cf7b3256318e997f8ac668b
const fs = require('fs');
const path = require('path');

function fixMergeConflicts(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Check if file has merge conflict markers
    if (content.includes('<<<<<<< HEAD') || content.includes('=======') || content.includes('>>>>>>>')) {
      console.log(`Fixing merge conflicts in: ${filePath}`);
      
      // Remove merge conflict markers and keep the content after =======
      const lines = content.split('\n');
      let fixedLines = [];
      let inConflict = false;
      let keepContent = false;
      
      for (let i = 0; i < lines.length; i++) {
        const line = lines[i];
        
        if (line.includes('<<<<<<< HEAD')) {
          inConflict = true;
          keepContent = false;
          continue;
        }
        
        if (line.includes('=======')) {
          keepContent = true;
          continue;
        }
        
        if (line.includes('>>>>>>>')) {
          inConflict = false;
          keepContent = false;
          continue;
        }
        
        if (!inConflict || keepContent) {
          fixedLines.push(line);
        }
      }
      
      const fixedContent = fixedLines.join('\n');
      fs.writeFileSync(filePath, fixedContent, 'utf8');
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

function fixPropertyAssignmentErrors(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Fix common property assignment errors
    if (content.includes('Property assignment expected')) {
      console.log(`Fixing property assignment in: ${filePath}`);
      
      // Fix object property syntax issues
      content = content.replace(/(\w+):\s*(\w+)\s*=/g, '$1: $2');
      content = content.replace(/(\w+):\s*(\w+)\s*:/g, '$1: $2:');
      
      fs.writeFileSync(filePath, content, 'utf8');
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

function removeUnusedImports(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Remove unused lucide-react imports
    const lucideImportRegex = /import\s*{\s*([^}]+)\s*}\s*from\s*['"]lucide-react['"];?/g;
    const matches = content.match(lucideImportRegex);
    
    if (matches) {
      for (const match of matches) {
        const importContent = match.match(/{\s*([^}]+)\s*}/)[1];
        const imports = importContent.split(',').map(imp => imp.trim());
        
        // Check which imports are actually used
        const usedImports = imports.filter(imp => {
          const importName = imp.split(' as ')[0].trim();
          return content.includes(importName) && !content.includes(`// ${importName}`);
        });
        
        if (usedImports.length === 0) {
          content = content.replace(match, '');
          modified = true;
        } else if (usedImports.length < imports.length) {
          const newImport = `import { ${usedImports.join(', ')} } from 'lucide-react';`;
          content = content.replace(match, newImport);
          modified = true;
        }
      }
    }
    
    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

function processDirectory(dirPath) {
  const files = fs.readdirSync(dirPath);
  let fixedCount = 0;
  
  for (const file of files) {
    const filePath = path.join(dirPath, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      fixedCount += processDirectory(filePath);
    } else if (file.endsWith('.tsx') || file.endsWith('.ts') || file.endsWith('.jsx') || file.endsWith('.js')) {
      if (fixMergeConflicts(filePath)) fixedCount++;
      if (fixPropertyAssignmentErrors(filePath)) fixedCount++;
      if (removeUnusedImports(filePath)) fixedCount++;
    }
  }
  
  return fixedCount;
}

console.log('Starting merge conflict and code quality fixes...');
const fixedCount = processDirectory('./pages');
console.log(`Fixed ${fixedCount} files`);