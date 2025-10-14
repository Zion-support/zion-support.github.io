const fs = require('fs');
const path = require('path');

function fixFileIssues(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let fixed = false;
    
    // Remove duplicate interface declarations
    const interfaceRegex = /interface\s+(\w+)\s*\{[^}]*\}\s*interface\s+\1\s*\{[^}]*\}/gs;
    if (interfaceRegex.test(content)) {
      content = content.replace(interfaceRegex, (match) => {
        const parts = match.split('interface');
        return parts[0] + 'interface' + parts[1];
      });
      fixed = true;
    }
    
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
    
    // Fix duplicate export default statements
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
            // Skip this export default
            fixed = true;
            continue;
          }
        }
        fixedLines.push(line);
      }
      
      content = fixedLines.join('\n');
    }
    
    // Remove empty lines and clean up formatting
    content = content.replace(/\n\s*\n\s*\n/g, '\n\n');
    content = content.replace(/^\s*\n/gm, '');
    
    if (fixed) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed issues in: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

function findAndFixAllIssues(dir) {
  const files = fs.readdirSync(dir);
  let fixedCount = 0;
  
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      fixedCount += findAndFixAllIssues(filePath);
    } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
      if (fixFileIssues(filePath)) {
        fixedCount++;
      }
    }
  }
  
  return fixedCount;
}

// Fix all issues in app directory
console.log('Fixing all remaining issues in app directory...');
const fixedCount = findAndFixAllIssues('./app');
console.log(`Fixed issues in ${fixedCount} files`);

console.log('All issues fixing complete!');