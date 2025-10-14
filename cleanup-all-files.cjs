const fs = require('fs');
const path = require('path');

function cleanFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let fixed = false;
    
    // Remove all merge conflict markers
    content = content.replace(/<<<<<<< HEAD[\s\S]*?=======[\s\S]*?>>>>>>> [^\n]+/g, '');
    content = content.replace(/<<<<<<< HEAD[\s\S]*?>>>>>>> [^\n]+/g, '');
    
    // Remove duplicate imports
    const lines = content.split('\n');
    const seenImports = new Set();
    const fixedLines = [];
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      
      if (line.trim().startsWith('import ')) {
        if (seenImports.has(line.trim())) {
          fixed = true;
          continue;
        }
        seenImports.add(line.trim());
      }
      
      fixedLines.push(line);
    }
    
    content = fixedLines.join('\n');
    
    // Remove duplicate function declarations
    const functionRegex = /export\s+default\s+function\s+(\w+)\s*\([^)]*\)\s*\{[^}]*\}\s*export\s+default\s+function\s+\1\s*\([^)]*\)\s*\{[^}]*\}/gs;
    if (functionRegex.test(content)) {
      content = content.replace(functionRegex, (match) => {
        const parts = match.split('export default function');
        return parts[0] + 'export default function' + parts[1];
      });
      fixed = true;
    }
    
    // Remove duplicate const declarations
    const constRegex = /const\s+(\w+)\s*=\s*[^;]+;\s*const\s+\1\s*=\s*[^;]+;/gs;
    if (constRegex.test(content)) {
      content = content.replace(constRegex, (match) => {
        const parts = match.split('const');
        return parts[0] + 'const' + parts[1];
      });
      fixed = true;
    }
    
    // Remove duplicate interface declarations
    const interfaceRegex = /interface\s+(\w+)\s*\{[^}]*\}\s*interface\s+\1\s*\{[^}]*\}/gs;
    if (interfaceRegex.test(content)) {
      content = content.replace(interfaceRegex, (match) => {
        const parts = match.split('interface');
        return parts[0] + 'interface' + parts[1];
      });
      fixed = true;
    }
    
    // Fix multiple export default statements
    const exportDefaults = content.match(/export\s+default\s+/g);
    if (exportDefaults && exportDefaults.length > 1) {
      const lines = content.split('\n');
      let exportCount = 0;
      const fixedLines = [];
      
      for (let i = 0; i < lines.length; i++) {
        const line = lines[i];
        if (line.trim().startsWith('export default')) {
          exportCount++;
          if (exportCount < exportDefaults.length) {
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
    
    // Clean up empty lines
    content = content.replace(/\n\s*\n\s*\n/g, '\n\n');
    content = content.replace(/^\s*\n/gm, '');
    
    if (fixed) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Cleaned: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error cleaning ${filePath}:`, error.message);
    return false;
  }
}

function cleanAllFiles(dir) {
  const files = fs.readdirSync(dir);
  let cleanedCount = 0;
  
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      cleanedCount += cleanAllFiles(filePath);
    } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
      if (cleanFile(filePath)) {
        cleanedCount++;
      }
    }
  }
  
  return cleanedCount;
}

// Clean all files in app directory
console.log('Cleaning all files in app directory...');
const cleanedCount = cleanAllFiles('./app');
console.log(`Cleaned ${cleanedCount} files`);

console.log('File cleaning complete!');