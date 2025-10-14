const fs = require('fs');
const path = require('path');

function fixDuplicateExports(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let fixed = false;
    
    // Remove duplicate imports
    const lines = content.split('\n');
    const seenImports = new Set();
    const fixedLines = [];
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      
      if (line.trim().startsWith('import ')) {
        if (seenImports.has(line.trim())) {
          // Skip duplicate import
          fixed = true;
          continue;
        }
        seenImports.add(line.trim());
      }
      
      fixedLines.push(line);
    }
    
    content = fixedLines.join('\n');
    
    // Fix duplicate default exports
    const exportDefaultRegex = /export\s+default\s+function\s+(\w+)\s*\([^)]*\)\s*\{[^}]*\}\s*export\s+default\s+function\s+\1\s*\([^)]*\)\s*\{[^}]*\}/gs;
    if (exportDefaultRegex.test(content)) {
      // Keep only the first export default function
      content = content.replace(exportDefaultRegex, (match) => {
        const parts = match.split('export default function');
        return parts[0] + 'export default function' + parts[1];
      });
      fixed = true;
    }
    
    // Fix multiple export default statements
    const exportDefaults = content.match(/export\s+default\s+/g);
    if (exportDefaults && exportDefaults.length > 1) {
      // Keep only the last export default
      const lines = content.split('\n');
      let exportCount = 0;
      const fixedLines = [];
      
      for (let i = 0; i < lines.length; i++) {
        const line = lines[i];
        if (line.trim().startsWith('export default')) {
          exportCount++;
          if (exportCount < exportDefaults.length) {
            // Skip this export default
            fixed = true;
            continue;
          }
        }
        fixedLines.push(line);
      }
      
      content = fixedLines.join('\n');
    }
    
    // Remove duplicate 'use client' directives
    const useClientMatches = content.match(/'use client';/g);
    if (useClientMatches && useClientMatches.length > 1) {
      content = content.replace(/'use client';\n/g, '');
      content = "'use client';\n" + content;
      fixed = true;
    }
    
    if (fixed) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed duplicate exports in: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

function findAndFixDuplicates(dir) {
  const files = fs.readdirSync(dir);
  let fixedCount = 0;
  
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      fixedCount += findAndFixDuplicates(filePath);
    } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
      if (fixDuplicateExports(filePath)) {
        fixedCount++;
      }
    }
  }
  
  return fixedCount;
}

// Fix duplicates in app directory
console.log('Fixing duplicate exports in app directory...');
const fixedCount = findAndFixDuplicates('./app');
console.log(`Fixed duplicate exports in ${fixedCount} files`);

console.log('Duplicate export fixing complete!');