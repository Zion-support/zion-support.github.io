const fs = require('fs');
const path = require('path');

// Common missing imports that need to be added
const commonImports = {
  'useMemo': 'React',
  'useEffect': 'React',
  'useState': 'React',
  'Navigate': 'react-router-dom',
  'Link': 'react-router-dom',
  'Database': 'lucide-react',
  'Brain': 'lucide-react',
  'BarChart3': 'lucide-react',
  'Target': 'lucide-react',
  'Users': 'lucide-react',
  'Zap': 'lucide-react',
  'Shield': 'lucide-react',
  'Code': 'lucide-react',
  'Smartphone': 'lucide-react',
  'Cloud': 'lucide-react',
  'Globe': 'lucide-react',
  'Star': 'lucide-react',
  'Coins': 'lucide-react',
  'BarChart': 'lucide-react',
  'Cpu': 'lucide-react',
  'CheckCircle': 'lucide-react',
  'useCases': 'local data',
  'pricing': 'local data',
  'categories': 'local data'
};

// Find all .tsx files in src directory
function findTsxFiles(dir) {
  let files = [];
  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      files = files.concat(findTsxFiles(fullPath));
    } else if (item.endsWith('.tsx')) {
      files.push(fullPath);
    }
  }
  
  return files;
}

// Fix missing imports in a file
function fixImports(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Check for missing imports
    const missingImports = [];
    const existingImports = new Set();
    
    // Extract existing imports
    const importRegex = /import\s+.*?\s+from\s+['"]([^'"]+)['"]/g;
    let match;
    while ((match = importRegex.exec(content)) !== null) {
      existingImports.add(match[1]);
    }
    
    // Check for undefined variables
    for (const [varName, source] of Object.entries(commonImports)) {
      const varRegex = new RegExp(`\\b${varName}\\b`, 'g');
      if (varRegex.test(content)) {
        // Check if it's already imported
        const importLineRegex = new RegExp(`import\\s+.*\\b${varName}\\b.*from`, 'g');
        if (!importLineRegex.test(content)) {
          missingImports.push({ varName, source });
        }
      }
    }
    
    if (missingImports.length > 0) {
      // Find the last import statement
      const importLines = content.split('\n').filter(line => line.trim().startsWith('import'));
      const lastImportIndex = content.lastIndexOf(importLines[importLines.length - 1]);
      const insertIndex = content.indexOf('\n', lastImportIndex) + 1;
      
      // Add missing imports
      const newImports = [];
      const importsBySource = {};
      
      for (const { varName, source } of missingImports) {
        if (source === 'React') {
          // Add to existing React import or create new one
          const reactImportRegex = /import\s+React(?:,\s*\{([^}]+)\})?\s+from\s+['"]react['"]/;
          const reactMatch = content.match(reactImportRegex);
          if (reactMatch) {
            const existingImports = reactMatch[1] ? reactMatch[1].split(',').map(i => i.trim()) : [];
            if (!existingImports.includes(varName)) {
              existingImports.push(varName);
              content = content.replace(reactImportRegex, `import React, { ${existingImports.join(', ')} } from 'react'`);
            }
          } else {
            newImports.push(`import React, { ${varName} } from 'react';`);
          }
        } else if (source === 'local data') {
          // These are local variables that need to be defined
          continue;
        } else {
          if (!importsBySource[source]) {
            importsBySource[source] = [];
          }
          importsBySource[source].push(varName);
        }
      }
      
      // Add imports for other sources
      for (const [source, vars] of Object.entries(importsBySource)) {
        newImports.push(`import { ${vars.join(', ')} } from '${source}';`);
      }
      
      if (newImports.length > 0) {
        content = content.slice(0, insertIndex) + newImports.join('\n') + '\n' + content.slice(insertIndex);
        modified = true;
      }
    }
    
    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed imports in: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Main execution
const srcDir = '/workspace/src';
const tsxFiles = findTsxFiles(srcDir);
let fixedCount = 0;

console.log(`Found ${tsxFiles.length} .tsx files`);

for (const file of tsxFiles) {
  if (fixImports(file)) {
    fixedCount++;
  }
}

console.log(`Fixed imports in ${fixedCount} files`);