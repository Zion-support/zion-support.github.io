const fs = require('fs');
const { glob } = require('glob');

async function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let originalContent = content;
    
    // Fix broken imports - remove spaces in import names
    content = content
      // Fix import statements with spaces
      .replace(/import\s+{\s*([^}]+)\s*}\s*from\s*'([^']+)';/g, (match, imports, module) => {
        const cleanImports = imports.split(',').map(imp => imp.trim().replace(/\s+/g, '')).join(', ');
        return `import { ${cleanImports} } from '${module}';`;
      })
      
      // Fix component names with spaces
      .replace(/const\s+([A-Z][a-zA-Z]*\s+[A-Z][a-zA-Z]*)\s*=/g, (match, name) => {
        const cleanName = name.replace(/\s+/g, '');
        return `const ${cleanName} =`;
      })
      
      // Fix function names with spaces
      .replace(/function\s+([A-Z][a-zA-Z]*\s+[A-Z][a-zA-Z]*)\s*\(/g, (match, name) => {
        const cleanName = name.replace(/\s+/g, '');
        return `function ${cleanName}(`;
      })
      
      // Fix export statements with spaces
      .replace(/export\s+default\s+([A-Z][a-zA-Z]*\s+[A-Z][a-zA-Z]*)/g, (match, name) => {
        const cleanName = name.replace(/\s+/g, '');
        return `export default ${cleanName}`;
      })
      
      // Fix JSX component names with spaces
      .replace(/<([A-Z][a-zA-Z]*\s+[A-Z][a-zA-Z]*)/g, (match, name) => {
        const cleanName = name.replace(/\s+/g, '');
        return `<${cleanName}`;
      })
      
      // Fix closing JSX tags with spaces
      .replace(/<\/([A-Z][a-zA-Z]*\s+[A-Z][a-zA-Z]*)>/g, (match, name) => {
        const cleanName = name.replace(/\s+/g, '');
        return `</${cleanName}>`;
      });
    
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed: ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

async function main() {
  try {
    const files = await glob('app/**/*.{ts,tsx,js,jsx}', { cwd: process.cwd() });
    
    console.log(`Found ${files.length} files to process...`);
    
    let fixedCount = 0;
    for (const file of files) {
      if (await fixFile(file)) {
        fixedCount++;
      }
    }
    
    console.log(`Fixed ${fixedCount} files.`);
  } catch (error) {
    console.error('Error:', error);
  }
}

main();