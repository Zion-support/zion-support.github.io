import fs from 'fs';
import path from 'path';

// Function to fix duplicate imports in a file
function fixDuplicateImports(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    const lines = content.split('\n');
    const newLines = [];
    const seenImports = new Set();
    let modified = false;
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i].trim();
      
      if (line.startsWith('import ')) {
        // Extract the import statement
        const importMatch = line.match(/import\s*\{([^}]+)\}\s*from\s*['"]([^'"]+)['"]/);
        if (importMatch) {
          const imports = importMatch[1].split(',').map(imp => imp.trim());
          const source = importMatch[2];
          const importKey = `${source}:${imports.sort().join(',')}`;
          
          if (seenImports.has(importKey)) {
            // Skip duplicate import
            modified = true;
            continue;
          }
          
          seenImports.add(importKey);
        }
        
        // Check for duplicate React imports
        if (line.includes('React') && line.includes('from \'react\'')) {
          const reactImportKey = 'react:React';
          if (seenImports.has(reactImportKey)) {
            modified = true;
            continue;
          }
          seenImports.add(reactImportKey);
        }
      }
      
      newLines.push(lines[i]);
    }
    
    if (modified) {
      content = newLines.join('\n');
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed duplicate imports in: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Function to recursively process all files
function fixAllFiles(dir) {
  const files = fs.readdirSync(dir);
  let fixedCount = 0;
  
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      fixedCount += fixAllFiles(filePath);
    } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
      if (fixDuplicateImports(filePath)) {
        fixedCount++;
      }
    }
  }
  
  return fixedCount;
}

// Main execution
console.log('Starting to fix duplicate imports...');
const fixedCount = fixAllFiles('./app');
console.log(`Fixed duplicate imports in ${fixedCount} files.`);