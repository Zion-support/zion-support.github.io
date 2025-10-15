const fs = require('fs');
const path = require('path');

// Function to fix comprehensive syntax errors
function fixComprehensive(content) {
  let fixed = content;

  // Fix missing semicolons after imports
  fixed = fixed.replace(/import\s+([^;]+)(?<!;)\s*$/gm, (match, importStatement) => {
    if (!importStatement.includes(';')) {
      return match + ';';
    }
    return match;
  });

  // Fix duplicate imports
  const importLines = fixed.split('\n').filter(line => line.trim().startsWith('import'));
  const uniqueImports = new Set();
  const cleanedImports = [];
  
  importLines.forEach(line => {
    const trimmed = line.trim();
    if (!uniqueImports.has(trimmed)) {
      uniqueImports.add(trimmed);
      cleanedImports.push(trimmed);
    }
  });

  // Remove all import lines and add back unique ones
  fixed = fixed.replace(/^import\s+.*$/gm, '');
  fixed = cleanedImports.join('\n') + '\n' + fixed;

  // Fix malformed JSX structure
  fixed = fixed.replace(/return\s*\(\s*<div>\s*<>/g, 'return (\n    <>\n      <div>');
  fixed = fixed.replace(/<div>\s*<div/g, '<div');
  fixed = fixed.replace(/<\/div>\s*<\/div>/g, '</div>');

  // Fix missing closing tags
  fixed = fixed.replace(/<div className="([^"]*)"[^>]*>\s*$/gm, '<div className="$1">\n        ');
  fixed = fixed.replace(/<section[^>]*>\s*$/gm, '<section>\n        ');
  fixed = fixed.replace(/<h1[^>]*>\s*$/gm, '<h1>\n          ');
  fixed = fixed.replace(/<h2[^>]*>\s*$/gm, '<h2>\n          ');
  fixed = fixed.replace(/<h3[^>]*>\s*$/gm, '<h3>\n          ');
  fixed = fixed.replace(/<p[^>]*>\s*$/gm, '<p>\n          ');

  // Fix specific issues
  fixed = fixed.replace(/5 G/g, '5G');
  fixed = fixed.replace(/min-h-screenbg-/g, 'min-h-screen bg-');
  fixed = fixed.replace(/title="([^"]*)\s+([^"]*)"/g, 'title="$1$2"');
  fixed = fixed.replace(/description="([^"]*)\s+([^"]*)"/g, 'description="$1$2"');

  // Fix array declarations
  fixed = fixed.replace(/const\s+(\w+)\s*=\s*\[\s*\]\s*$/gm, 'const $1 = [\n    {\n      title: "Service 1",\n      description: "Description 1"\n    },\n    {\n      title: "Service 2", \n      description: "Description 2"\n    }\n  ];');

  // Fix malformed JSX attributes
  fixed = fixed.replace(/className="([^"]*)\s+([^"]*)"/g, 'className="$1 $2"');

  // Fix missing closing brackets
  fixed = fixed.replace(/}\s*$/gm, '}\n  );');

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
          const fixed = fixComprehensive(content);
          
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