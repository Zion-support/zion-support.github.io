const fs = require('fs');
const path = require('path');

// Function to fix common syntax errors
function fixSyntaxErrors(content) {
  // Fix extra commas in import statements
  content = content.replace(/import\s*{\s*([^}]+),\s*,\s*([^}]*)\s*}\s*from/g, (match, p1, p2) => {
    const cleanImports = (p1 + p2).split(',').map(s => s.trim()).filter(s => s).join(', ');
    return `import { ${cleanImports} } from`;
  });
  
  // Fix multiple commas in import statements
  content = content.replace(/,\s*,\s*/g, ', ');
  
  // Fix trailing commas in import statements
  content = content.replace(/,\s*}\s*from/g, ' } from');
  
  // Fix missing function declaration
  if (content.includes('return (') && !content.includes('function ') && !content.includes('=>')) {
    content = content.replace(/^import.*\n/, (match) => {
      return match + '\nexport default function Component() {\n';
    });
  }
  
  // Fix missing closing brace for function
  if (content.includes('export default') && !content.includes('}')) {
    content = content.replace(/export default (\w+)/, '}\n\nexport default $1');
  }
  
  // Fix missing semicolons
  content = content.replace(/import.*from.*\n(?!import)/g, (match) => {
    if (!match.endsWith(';')) {
      return match.trim() + ';\n';
    }
    return match;
  });
  
  return content;
}

// Function to process a file
function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const fixedContent = fixSyntaxErrors(content);
    
    if (content !== fixedContent) {
      fs.writeFileSync(filePath, fixedContent);
      console.log(`Fixed: ${filePath}`);
    }
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
  }
}

// Function to recursively find and process TypeScript/JavaScript files
function processDirectory(dirPath) {
  const files = fs.readdirSync(dirPath);
  
  files.forEach(file => {
    const filePath = path.join(dirPath, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory() && !file.startsWith('.') && file !== 'node_modules') {
      processDirectory(filePath);
    } else if (file.endsWith('.tsx') || file.endsWith('.ts') || file.endsWith('.jsx') || file.endsWith('.js')) {
      processFile(filePath);
    }
  });
}

// Start processing from src directory
console.log('Starting syntax error fixes...');
processDirectory('./src');
console.log('Syntax error fixes completed!');