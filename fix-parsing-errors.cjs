const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Fix parsing errors and clean up imports
function fixFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let modified = false;

  // Fix duplicate imports
  const lines = content.split('\n');
  const importLines = [];
  const otherLines = [];
  const seenImports = new Set();
  let inImports = true;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    
    if (inImports && line.trim().startsWith('import ')) {
      const importKey = line.trim();
      if (!seenImports.has(importKey)) {
        seenImports.add(importKey);
        importLines.push(line);
      } else {
        modified = true;
      }
    } else if (inImports && (line.trim() === '' || line.trim().startsWith('//'))) {
      importLines.push(line);
    } else {
      inImports = false;
      otherLines.push(line);
    }
  }

  // Clean up the imports
  const cleanedImports = [];
  const importMap = new Map();

  for (const line of importLines) {
    if (line.trim().startsWith('import ')) {
      const match = line.match(/import\s*{([^}]+)}\s*from\s*['"]([^'"]+)['"]/);
      if (match) {
        const imports = match[1].split(',').map(imp => imp.trim()).filter(imp => imp);
        const packageName = match[2];
        
        if (!importMap.has(packageName)) {
          importMap.set(packageName, new Set());
        }
        
        for (const imp of imports) {
          importMap.get(packageName).add(imp);
        }
      } else {
        // Handle default imports
        const defaultMatch = line.match(/import\s+(\w+)\s+from\s*['"]([^'"]+)['"]/);
        if (defaultMatch) {
          const importName = defaultMatch[1];
          const packageName = defaultMatch[2];
          
          if (!importMap.has(packageName)) {
            importMap.set(packageName, new Set());
          }
          importMap.get(packageName).add(`default as ${importName}`);
        } else {
          cleanedImports.push(line);
        }
      }
    } else {
      cleanedImports.push(line);
    }
  }

  // Rebuild imports
  const finalImports = [];
  for (const [packageName, imports] of importMap) {
    const importList = Array.from(imports);
    if (importList.length === 1 && importList[0].startsWith('default as ')) {
      finalImports.push(`import ${importList[0].replace('default as ', '')} from '${packageName}';`);
    } else {
      const namedImports = importList.filter(imp => !imp.startsWith('default as '));
      const defaultImports = importList.filter(imp => imp.startsWith('default as '));
      
      if (defaultImports.length > 0) {
        const defaultName = defaultImports[0].replace('default as ', '');
        if (namedImports.length > 0) {
          finalImports.push(`import ${defaultName}, { ${namedImports.join(', ')} } from '${packageName}';`);
        } else {
          finalImports.push(`import ${defaultName} from '${packageName}';`);
        }
      } else {
        finalImports.push(`import { ${namedImports.join(', ')} } from '${packageName}';`);
      }
    }
  }

  // Remove unused imports
  const finalContent = [...finalImports, ...otherLines].join('\n');
  
  // Remove unused useLocation and useNavigate
  let cleanedContent = finalContent;
  if (cleanedContent.includes('useLocation') && !cleanedContent.includes('useLocation(')) {
    cleanedContent = cleanedContent.replace(/useLocation,?\s*/g, '');
    cleanedContent = cleanedContent.replace(/,\s*useLocation/g, '');
    modified = true;
  }
  
  if (cleanedContent.includes('useNavigate') && !cleanedContent.includes('useNavigate(')) {
    cleanedContent = cleanedContent.replace(/useNavigate,?\s*/g, '');
    cleanedContent = cleanedContent.replace(/,\s*useNavigate/g, '');
    modified = true;
  }

  // Clean up empty import statements
  cleanedContent = cleanedContent.replace(/import\s*{\s*}\s*from\s*['"][^'"]+['"];\s*\n?/g, '');
  cleanedContent = cleanedContent.replace(/import\s*{\s*}\s*from\s*['"][^'"]+['"];\s*/g, '');

  if (cleanedContent !== content) {
    fs.writeFileSync(filePath, cleanedContent);
    console.log(`Fixed: ${filePath}`);
    return true;
  }
  return false;
}

// Main execution
console.log('Starting parsing error fixes...');

// Get all TypeScript/JavaScript files in the app directory
const files = glob.sync('app/**/*.{ts,tsx,js,jsx}', { cwd: __dirname });

let fixedCount = 0;
for (const file of files) {
  const fullPath = path.join(__dirname, file);
  try {
    if (fixFile(fullPath)) {
      fixedCount++;
    }
  } catch (error) {
    console.log(`Error fixing ${file}: ${error.message}`);
  }
}

console.log(`Fixed ${fixedCount} files`);