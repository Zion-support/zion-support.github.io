const fs = require('fs');
const path = require('path');

// Get all TypeScript/JavaScript files in src directory
function getAllFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      getAllFiles(filePath, fileList);
    } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
      fileList.push(filePath);
    }
  });
  
  return fileList;
}

// Fix unused variables and exports
function fixUnusedVars(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const lines = content.split('\n');
    let modified = false;
    
    // Check for unused variable declarations
    const newLines = lines.map(line => {
      // Fix unused variable declarations
      if (line.includes('const ') && line.includes(': React.FC') && line.includes('= () =>')) {
        // This is likely a component declaration that's not exported
        const varName = line.match(/const\s+(\w+):/);
        if (varName) {
          const name = varName[1];
          // Check if this variable is used anywhere in the file
          const isUsed = content.includes(`<${name}`) || content.includes(`export default ${name}`);
          if (!isUsed) {
            // Convert to default export
            const newLine = line.replace(`const ${name}: React.FC = () =>`, `export default function ${name}()`);
            modified = true;
            return newLine;
          }
        }
      }
      
      // Fix unused exports
      if (line.includes('export default') && line.includes(';')) {
        const exportMatch = line.match(/export default (\w+);/);
        if (exportMatch) {
          const exportName = exportMatch[1];
          // Check if this export is used in the file
          const isUsed = content.includes(`<${exportName}`) || content.includes(`const ${exportName}`);
          if (!isUsed) {
            // Remove the export line
            modified = true;
            return '';
          }
        }
      }
      
      return line;
    }).filter(line => line !== '');
    
    if (modified) {
      const newContent = newLines.join('\n');
      fs.writeFileSync(filePath, newContent);
      console.log(`Fixed unused vars: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Main execution
console.log('Fixing unused variables in src directory...');

const srcDir = path.join(process.cwd(), 'src');
const files = getAllFiles(srcDir);

let fixedCount = 0;
files.forEach(file => {
  if (fixUnusedVars(file)) {
    fixedCount++;
  }
});

console.log(`Fixed ${fixedCount} files`);