const fs = require('fs');
const path = require('path');

function fixSyntaxErrors(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Fix common syntax errors
    content = content
      // Fix malformed quotes
      .replace(/''/g, '\n')
      .replace(/';'/g, ';\n')
      .replace(/';/g, ';\n')
      .replace(/`'/g, '`\n')
      .replace(/'`/g, '\n`')
      // Fix missing newlines after imports
      .replace(/';import/g, ';\nimport')
      .replace(/';const/g, ';\nconst')
      .replace(/';interface/g, ';\ninterface')
      .replace(/';export/g, ';\nexport')
      // Fix malformed JSX
      .replace(/className="([^"]*)"([^"]*)"([^"]*)"/g, 'className="$1$2$3"')
      .replace(/className={`([^`]*)`([^`]*)`([^`]*)`}/g, 'className={`$1$2$3`}')
      // Fix malformed template literals
      .replace(/`([^`]*)`([^`]*)`([^`]*)`/g, '`$1$2$3`')
      // Fix malformed function calls
      .replace(/\(([^)]*)\);([^;]*);/g, '($1);\n$2;')
      // Clean up multiple newlines
      .replace(/\n{3,}/g, '\n\n')
      // Fix malformed object properties
      .replace(/(\w+):\s*'([^']*)',\s*'([^']*)'/g, '$1: \'$2\',\n    $1: \'$3\'')
      .replace(/(\w+):\s*'([^']*)',\s*(\w+):/g, '$1: \'$2\',\n    $3:');
    
    fs.writeFileSync(filePath, content);
    console.log(`Fixed: ${filePath}`);
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

// Get all TypeScript/JavaScript files
const componentsDir = 'components';
const files = [];

function getAllFiles(dir) {
  const items = fs.readdirSync(dir);
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      getAllFiles(fullPath);
    } else if (item.endsWith('.tsx') || item.endsWith('.ts') || item.endsWith('.jsx') || item.endsWith('.js')) {
      files.push(fullPath);
    }
  }
}

getAllFiles(componentsDir);

// Fix all files
files.forEach(fixSyntaxErrors);

console.log(`Fixed ${files.length} files`);