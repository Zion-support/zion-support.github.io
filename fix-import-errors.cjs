const fs = require('fs');
const path = require('path');

// Function to fix import and component name errors
function fixImportErrors(content) {
  let fixed = content;

  // Fix import statements with spaces
  fixed = fixed.replace(/import { ([^}]+) } from '([^']+)'/g, (match, imports, module) => {
    const cleanImports = imports.split(',').map(imp => imp.trim().replace(/\s+/g, '')).join(', ');
    return `import { ${cleanImports} } from '${module}'`;
  });

  // Fix component names with spaces
  fixed = fixed.replace(/const\s+([A-Z][A-Za-z\s]+)\s*:\s*React\.FC\s*=\s*\(\)\s*=>/g, (match, name) => {
    const cleanName = name.replace(/\s+/g, '');
    return `const ${cleanName}: React.FC = () =>`;
  });

  fixed = fixed.replace(/const\s+([A-Z][A-Za-z\s]+)\s*=\s*\(\)\s*=>/g, (match, name) => {
    const cleanName = name.replace(/\s+/g, '');
    return `const ${cleanName} = () =>`;
  });

  // Fix className with spaces
  fixed = fixed.replace(/className="([^"]*)\s+([^"]*)"/g, 'className="$1$2"');
  fixed = fixed.replace(/class\s+Name="/g, 'className="');

  // Fix specific common issues
  fixed = fixed.replace(/Arrow Right/g, 'ArrowRight');
  fixed = fixed.replace(/Check Circle/g, 'CheckCircle');
  fixed = fixed.replace(/Enhanced SE O/g, 'EnhancedSEO');
  fixed = fixed.replace(/Five G/g, 'FiveG');
  fixed = fixed.replace(/Not Found Page/g, 'NotFoundPage');
  fixed = fixed.replace(/React\.F C/g, 'React.FC');

  // Fix malformed array declarations
  fixed = fixed.replace(/const\s+(\w+)\s*=\s*$/gm, 'const $1 = []');

  // Fix missing closing brackets
  fixed = fixed.replace(/return\s*\(\s*$/gm, 'return (\n    <div>');

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
          const fixed = fixImportErrors(content);
          
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