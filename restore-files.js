import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Function to restore a file to a basic working state
function restoreFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Fix broken import statements
    if (content.includes('import { }')) {
      content = content.replace(/import\s*{\s*}\s*\n\s*([^}]+)\s*}\s*from\s*['"]([^'"]+)['"];?/g, (match, imports, module) => {
        const cleanImports = imports.split(',').map(imp => imp.trim()).filter(imp => imp).join(',\n  ');
        return `import { \n  ${cleanImports}\n} from '${module}';`;
      });
      modified = true;
    }
    
    // Fix broken interface declarations
    if (content.includes('interface NavigationProps {}')) {
      content = content.replace(/interface\s+(\w+)\s*{\s*}\s*\n\s*([^}]+)\s*}/g, (match, name, props) => {
        const cleanProps = props.split(',').map(prop => prop.trim()).filter(prop => prop).join(';\n  ');
        return `interface ${name} {\n  ${cleanProps};\n}`;
      });
      modified = true;
    }
    
    // Fix broken function declarations
    if (content.includes('const') && content.includes('=') && !content.includes(';') && !content.includes('{') && !content.includes('[')) {
      content = content.replace(/(const\s+\w+\s*=\s*[^;{[\n]+)(?=\n)/g, '$1;');
      modified = true;
    }
    
    // Fix broken JSX
    if (content.includes('</div>') && content.includes('Expected corresponding JSX closing tag')) {
      content = content.replace(/<\/div>.*Expected corresponding JSX closing tag.*/g, '</div>');
      modified = true;
    }
    
    // Remove parsing error messages
    content = content.replace(/Parsing error:.*$/gm, '');
    content = content.replace(/Declaration or statement expected.*$/gm, '');
    content = content.replace(/Expression expected.*$/gm, '');
    content = content.replace(/Expected corresponding JSX closing tag.*$/gm, '');
    content = content.replace(/';' expected.*$/gm, '');
    content = content.replace(/'from' expected.*$/gm, '');
    
    // Fix specific patterns
    const lines = content.split('\n');
    const newLines = [];
    
    for (let i = 0; i < lines.length; i++) {
      let line = lines[i];
      let originalLine = line;
      
      // Skip empty lines that were created by removing error messages
      if (line.trim() === '') {
        continue;
      }
      
      // Fix broken const declarations
      if (line.includes('const') && line.includes('=') && !line.includes(';') && 
          !line.includes('{') && !line.includes('[') && !line.includes('(') &&
          !line.includes('`') && !line.includes('"') && !line.includes("'")) {
        line = line.trim() + ';';
        modified = true;
      }
      
      // Fix broken function calls
      if (line.includes('(') && !line.includes(')') && !line.includes('//')) {
        line = line + ')';
        modified = true;
      }
      
      // Fix broken array/object literals
      if (line.includes('[') && !line.includes(']') && !line.includes('//')) {
        line = line + ']';
        modified = true;
      }
      
      if (line.includes('{') && !line.includes('}') && !line.includes('//')) {
        line = line + '}';
        modified = true;
      }
      
      if (line !== originalLine) {
        modified = true;
      }
      
      newLines.push(line);
    }
    
    if (modified) {
      fs.writeFileSync(filePath, newLines.join('\n'));
      console.log(`Restored: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Function to recursively find and fix all files
function restoreAllFiles(dir) {
  const files = fs.readdirSync(dir);
  let fixedCount = 0;
  
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      if (file !== 'node_modules' && file !== '.git' && file !== 'dist' && file !== '.next') {
        fixedCount += restoreAllFiles(filePath);
      }
    } else if (file.endsWith('.tsx') || file.endsWith('.ts') || file.endsWith('.jsx') || file.endsWith('.js')) {
      if (restoreFile(filePath)) {
        fixedCount++;
      }
    }
  }
  
  return fixedCount;
}

// Start restoring files
console.log('Starting file restoration...');
const fixedCount = restoreAllFiles('./app');
console.log(`Restored ${fixedCount} files`);