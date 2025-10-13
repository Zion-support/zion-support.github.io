const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Fix duplicate import statements
function fixFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let modified = false;

  // Fix duplicate import statements
  content = content.replace(/} from ['"][^'"]+['"];\s*} from ['"][^'"]+['"];/g, (match) => {
    // Keep only the first occurrence
    const lines = match.split('\n');
    return lines[0];
  });

  // Fix other duplicate patterns
  content = content.replace(/import\s*{\s*[^}]*}\s*from\s*['"][^'"]+['"];\s*import\s*{\s*[^}]*}\s*from\s*['"][^'"]+['"];/g, (match) => {
    // Keep only the first import
    const lines = match.split('\n');
    return lines[0];
  });

  // Fix multiple consecutive import statements from the same package
  const lines = content.split('\n');
  const newLines = [];
  const importMap = new Map();
  
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    
    if (line.trim().startsWith('import ')) {
      const match = line.match(/import\s*{\s*([^}]+)}\s*from\s*['"]([^'"]+)['"];/);
      if (match) {
        const imports = match[1].split(',').map(imp => imp.trim()).filter(imp => imp);
        const packageName = match[2];
        
        if (!importMap.has(packageName)) {
          importMap.set(packageName, new Set());
        }
        
        for (const imp of imports) {
          importMap.get(packageName).add(imp);
        }
        
        // Skip this line as we'll add it later
        continue;
      }
    }
    
    newLines.push(line);
  }

  // Rebuild imports
  const finalLines = [];
  let inImports = true;
  
  for (let i = 0; i < newLines.length; i++) {
    const line = newLines[i];
    
    if (inImports && (line.trim().startsWith('import ') || line.trim() === '')) {
      // Skip original import lines
      continue;
    } else {
      inImports = false;
      finalLines.push(line);
    }
  }

  // Add consolidated imports at the beginning
  const consolidatedImports = [];
  for (const [packageName, imports] of importMap) {
    const importList = Array.from(imports);
    consolidatedImports.push(`import { ${importList.join(', ')} } from '${packageName}';`);
  }

  const finalContent = [...consolidatedImports, ...finalLines].join('\n');

  if (finalContent !== content) {
    fs.writeFileSync(filePath, finalContent);
    console.log(`Fixed: ${filePath}`);
    return true;
  }
  return false;
}

// Main execution
console.log('Starting duplicate import fixes...');

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