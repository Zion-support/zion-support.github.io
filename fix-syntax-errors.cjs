const fs = require('fs');
const path = require('path');

function fixSyntaxErrors(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Remove duplicate imports and malformed syntax
    const lines = content.split('\n');
    const fixedLines = [];
    const seenImports = new Set();
    let inComponent = false;
    let braceCount = 0;
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i].trim();
      
      // Skip empty lines
      if (!line) {
        fixedLines.push('');
        continue;
      }
      
      // Handle imports
      if (line.startsWith('import ')) {
        // Clean up malformed imports
        const cleanImport = line
          .replace(/;'$/, '')
          .replace(/;'$/, '')
          .replace(/from '([^']*);'$/, "from '$1'")
          .replace(/from "([^"]*);"$/, 'from "$1"');
        
        if (!seenImports.has(cleanImport)) {
          seenImports.add(cleanImport);
          fixedLines.push(cleanImport);
        }
        continue;
      }
      
      // Handle component start
      if (line.includes('export default function') || line.includes('const ') && line.includes('= () =>')) {
        inComponent = true;
        fixedLines.push(line);
        continue;
      }
      
      // Handle malformed object properties
      if (line.includes('""') || line.includes("''")) {
        const fixed = line
          .replace(/""/g, '"')
          .replace(/''/g, "'")
          .replace(/,\s*""/g, ',"')
          .replace(/,\s*''/g, ",'");
        fixedLines.push(fixed);
        continue;
      }
      
      // Handle malformed JSX
      if (line.includes('className="') && line.includes('""')) {
        const fixed = line.replace(/""/g, '"');
        fixedLines.push(fixed);
        continue;
      }
      
      // Skip malformed lines that are clearly corrupted
      if (line.includes('<<<<<<<') || line.includes('=======') || line.includes('>>>>>>>')) {
        continue;
      }
      
      // Skip lines that are just fragments of code
      if (line.startsWith('icon:') && !line.includes('=')) {
        continue;
      }
      
      if (line.startsWith('title:') && !line.includes('=')) {
        continue;
      }
      
      if (line.startsWith('description:') && !line.includes('=')) {
        continue;
      }
      
      fixedLines.push(line);
    }
    
    // Write the cleaned content
    fs.writeFileSync(filePath, fixedLines.join('\n'), 'utf8');
    console.log(`Fixed syntax errors in: ${filePath}`);
    return true;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

function findAndFixFiles(dir) {
  const files = fs.readdirSync(dir);
  
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      findAndFixFiles(filePath);
    } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
      fixSyntaxErrors(filePath);
    }
  }
}

// Start fixing files
console.log('Starting syntax error fixes...');
findAndFixFiles('./app');
console.log('Syntax error fixes completed!');