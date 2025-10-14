const fs = require('fs');
const path = require('path');

// Function to fix final syntax errors
function fixFinal(content) {
  let fixed = content;

  // Fix array syntax issues
  fixed = fixed.replace(/const\s+(\w+)\s*=\s*\[\s*\{\s*title:\s*"([^"]*)",\s*description:\s*"([^"]*)"\s*\},\s*\{\s*title:\s*"([^"]*)",\s*description:\s*"([^"]*)"\s*\}\s*\)\s*;\s*\]\s*;/g, 
    'const $1 = [\n    {\n      title: "$2",\n      description: "$3"\n    },\n    {\n      title: "$4",\n      description: "$5"\n    }\n  ];');

  // Fix extra closing brackets
  fixed = fixed.replace(/\)\s*;\s*\]\s*;/g, '];');
  fixed = fixed.replace(/\)\s*;\s*\]\s*;\s*\]\s*;/g, '];');

  // Fix malformed array declarations
  fixed = fixed.replace(/const\s+(\w+)\s*=\s*\[\s*\{\s*title:\s*"([^"]*)",\s*description:\s*"([^"]*)"\s*\},\s*\{\s*title:\s*"([^"]*)",\s*description:\s*"([^"]*)"\s*\}\s*\]\s*;/g, 
    'const $1 = [\n    {\n      title: "$2",\n      description: "$3"\n    },\n    {\n      title: "$4",\n      description: "$5"\n    }\n  ];');

  // Fix missing semicolons after imports
  fixed = fixed.replace(/import\s+([^;]+)(?<!;)\s*$/gm, (match, importStatement) => {
    if (!importStatement.includes(';')) {
      return match + ';';
    }
    return match;
  });

  // Fix duplicate imports
  const lines = fixed.split('\n');
  const importLines = lines.filter(line => line.trim().startsWith('import'));
  const nonImportLines = lines.filter(line => !line.trim().startsWith('import'));
  
  const uniqueImports = new Set();
  const cleanedImports = [];
  
  importLines.forEach(line => {
    const trimmed = line.trim();
    if (!uniqueImports.has(trimmed)) {
      uniqueImports.add(trimmed);
      cleanedImports.push(trimmed);
    }
  });

  // Reconstruct the file
  fixed = cleanedImports.join('\n') + '\n\n' + nonImportLines.join('\n');

  // Fix specific parsing errors
  fixed = fixed.replace(/,\s*$/gm, '');
  fixed = fixed.replace(/;\s*$/gm, '');
  fixed = fixed.replace(/\)\s*;\s*$/gm, ')');

  // Fix JSX structure
  fixed = fixed.replace(/return\s*\(\s*<>\s*<div>/g, 'return (\n    <>\n      <div>');
  fixed = fixed.replace(/<\/div>\s*<\/>/g, '</div>\n    </>');

  // Fix component structure
  fixed = fixed.replace(/const\s+(\w+)\s*=\s*\(\)\s*=>\s*{\s*$/gm, 'const $1 = () => {\n  ');

  // Fix export statements
  fixed = fixed.replace(/export default (\w+)/g, 'export default $1;');

  return fixed;
}

// Function to process all TSX files
function processFiles() {
  const appDir = path.join('/workspace', 'app');
  
  function processDirectory(dir) {
    const files = fs.readdirSync(dir);
    
    files.forEach(file => {
      const filePath = path.join(dir, file);
      const stat = fs.statSync(filePath);
      
      if (stat.isDirectory()) {
        processDirectory(filePath);
      } else if (file.endsWith('.tsx') || file.endsWith('.jsx')) {
        try {
          const content = fs.readFileSync(filePath, 'utf8');
          const fixed = fixFinal(content);
          
          if (content !== fixed) {
            fs.writeFileSync(filePath, fixed, 'utf8');
            console.log(`Fixed: ${filePath}`);
          }
        } catch (error) {
          console.error(`Error processing ${filePath}:`, error.message);
        }
      }
    });
  }
  
  processDirectory(appDir);
  console.log('All files processed!');
}

// Run the fix
processFiles();