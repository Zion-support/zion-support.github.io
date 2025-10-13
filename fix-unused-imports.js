import fs from 'fs';
import path from 'path';
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
      console.log(`Updated ${filePath}`);    }
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
  }
};

// Main execution
const files = getAllFiles('/workspace/app');
console.log(`Found ${files.length} files to process`);
files.forEach(file => {
  removeUnusedImports(file);
});

console.log('Done fixing unused imports');