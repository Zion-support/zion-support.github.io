const fs = require('fs');
const path = require('path');

// Function to fix duplicate imports
function fixDuplicateImports(content) {
  const lines = content.split('\n');
  const importLines = [];
  const otherLines = [];
  let inImportBlock = false;
  
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    
    if (line.trim().startsWith('import ')) {
      if (!inImportBlock) {
        inImportBlock = true;
      }
      importLines.push(line);
    } else if (inImportBlock && line.trim() === '') {
      // Empty line after imports, continue collecting
      importLines.push(line);
    } else if (inImportBlock && !line.trim().startsWith('import ')) {
      // End of import block
      inImportBlock = false;
      otherLines.push(line);
    } else {
      otherLines.push(line);
    }
  }
  
  if (importLines.length === 0) {
    return content;
  }
  
  // Process import lines to remove duplicates
  const processedImports = new Set();
  const uniqueImports = [];
  
  for (const importLine of importLines) {
    if (importLine.trim().startsWith('import ')) {
      // Extract the import statement
      const match = importLine.match(/import\s+(?:{[^}]*}|\w+)\s+from\s+['"]([^'"]+)['"]/);
      if (match) {
        const module = match[1];
        if (!processedImports.has(module)) {
          processedImports.add(module);
          uniqueImports.push(importLine);
        }
      } else {
        // Keep non-standard imports
        uniqueImports.push(importLine);
      }
    } else {
      uniqueImports.push(importLine);
    }
  }
  
  // Combine unique imports with other lines
  return [...uniqueImports, ...otherLines].join('\n');
}

// Function to fix specific duplicate import issues
function fixSpecificDuplicates(content) {
  // Fix duplicate imports in the same line
  content = content.replace(
    /import\s+{[^}]*}\s+from\s+['"][^'"]+['"]\s*import\s+{[^}]*}\s+from\s+['"][^'"]+['"]/g,
    (match) => {
      // Split by import and merge the imports
      const parts = match.split('import').filter(part => part.trim());
      const allImports = new Set();
      let module = '';
      
      for (const part of parts) {
        const trimmed = part.trim();
        if (trimmed.startsWith('{')) {
          const importMatch = trimmed.match(/^({[^}]*})\s+from\s+['"]([^'"]+)['"]/);
          if (importMatch) {
            const imports = importMatch[1];
            module = importMatch[2];
            
            // Extract individual imports
            const importList = imports.match(/\w+/g) || [];
            importList.forEach(imp => allImports.add(imp));
          }
        }
      }
      
      if (allImports.size > 0 && module) {
        const importList = Array.from(allImports).join(', ');
        return `import { ${importList} } from '${module}'`;
      }
      
      return match;
    }
  );
  
  return content;
}

// Function to process a single file
function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    
    if (content.includes('import ')) {
      console.log(`Processing: ${filePath}`);
      let fixed = fixDuplicateImports(content);
      fixed = fixSpecificDuplicates(fixed);
      
      if (fixed !== content) {
        fs.writeFileSync(filePath, fixed, 'utf8');
        return true;
      }
    }
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Function to recursively find and process files
function processDirectory(dirPath) {
  let processedCount = 0;
  
  try {
    const items = fs.readdirSync(dirPath);
    
    for (const item of items) {
      const fullPath = path.join(dirPath, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        if (!['node_modules', '.git', '.next', 'dist', 'build'].includes(item)) {
          processedCount += processDirectory(fullPath);
        }
      } else if (stat.isFile()) {
        if (/\.(tsx?|jsx?)$/.test(item)) {
          if (processFile(fullPath)) {
            processedCount++;
          }
        }
      }
    }
  } catch (error) {
    console.error(`Error processing directory ${dirPath}:`, error.message);
  }
  
  return processedCount;
}

// Main execution
console.log('Starting duplicate import fix...');
const processedCount = processDirectory('./app');
console.log(`Processed ${processedCount} files with duplicate imports.`);

if (fs.existsSync('./src')) {
  const srcProcessedCount = processDirectory('./src');
  console.log(`Processed ${srcProcessedCount} files in src directory.`);
}

console.log('Duplicate import fix completed!');
