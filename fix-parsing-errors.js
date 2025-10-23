const fs = require('fs');
const path = require('path');

// Function to fix common parsing errors
function fixParsingErrors(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Fix malformed JSX closing tags like </h1>h1>
    content = content.replace(/(<\/[^>]+>)[^<]+/g, '$1');
    
    // Fix missing function declarations for files that start with imports but have no function
    if (content.includes('import ') && content.includes('return (') && !content.includes('function ') && !content.includes('=>')) {
      // Find the last import statement
      const importLines = content.split('\n').filter(line => line.trim().startsWith('import '));
      const lastImportLine = importLines[importLines.length - 1];
      const lastImportIndex = content.lastIndexOf(lastImportLine);
      const insertIndex = lastImportIndex + lastImportLine.length;
      
      content = content.slice(0, insertIndex) + '\n\nexport default function Page() {\n' + content.slice(insertIndex);
      content = content.replace(/\);$/, '  );\n}');
      modified = true;
    }
    
    // Fix files that start with import but have parsing errors
    if (content.startsWith('import ') && !content.includes('export default')) {
      const lines = content.split('\n');
      const lastImportIndex = lines.findIndex(line => line.trim().startsWith('import '));
      if (lastImportIndex !== -1) {
        lines.splice(lastImportIndex + 1, 0, '', 'export default function Page() {');
        lines.push('}');
        content = lines.join('\n');
        modified = true;
      }
    }
    
    // Fix missing closing braces for JSX
    const openBraces = (content.match(/\{/g) || []).length;
    const closeBraces = (content.match(/\}/g) || []).length;
    if (openBraces > closeBraces) {
      content += '\n}'.repeat(openBraces - closeBraces);
      modified = true;
    }
    
    // Fix unescaped entities
    content = content.replace(/'/g, '&apos;');
    content = content.replace(/"/g, '&quot;');
    
    // Remove loading="lazy" attributes
    content = content.replace(/\s+loading="lazy"/g, '');
    
    // Fix common JSX syntax issues
    content = content.replace(/<([^>]+)>\s*<\/\1>/g, '<$1></$1>');
    
    if (modified) {
      fs.writeFileSync(filePath, content);
      console.log(`Fixed parsing errors in: ${filePath}`);
    }
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

// Function to recursively find and fix all TypeScript/TSX files
function fixAllFiles(dir) {
  const files = fs.readdirSync(dir);
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory() && !file.startsWith('.') && file !== 'node_modules') {
      fixAllFiles(filePath);
    } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
      fixParsingErrors(filePath);
    }
  });
}

// Start fixing from the workspace root
console.log('Starting to fix parsing errors...');
fixAllFiles('/workspace');
console.log('Finished fixing parsing errors.');