const fs = require('fs');
const path = require('path');

// Function to fix comprehensive syntax issues
function fixSyntaxIssues(content) {
  // Fix function declarations
  content = content.replace(/const\s+(\w+)\s*:\s*React\.FC\s*=\s*\(\)\s*=>\s*{/g, 'const Page: React.FC = () => {');
  content = content.replace(/const\s+(\w+)\s*=\s*\(\)\s*=>\s*{/g, 'const Page = () => {');
  
  // Fix array declarations
  content = content.replace(/const\s+(\w+)\s*=\s*\[\s*([^\]]*)\s*\]/g, (match, varName, arrayContent) => {
    if (arrayContent.trim() === '') {
      return `const ${varName} = []`;
    }
    // Split by lines and fix each item
    const items = arrayContent.split('\n').map(item => {
      item = item.trim();
      if (item && !item.startsWith("'") && !item.startsWith('"') && !item.startsWith('{')) {
        return `'${item}'`;
      }
      return item;
    }).filter(item => item.trim());
    
    return `const ${varName} = [\n    ${items.join(',\n    ')}\n  ]`;
  });
  
  // Fix object declarations in arrays
  content = content.replace(/\[\s*{\s*([^}]+)\s*}\s*\]/g, (match, objContent) => {
    const lines = objContent.split('\n').map(line => line.trim()).filter(line => line);
    const fixedLines = lines.map(line => {
      if (line.includes(':') && !line.includes(',')) {
        return line + ',';
      }
      return line;
    });
    return `[\n    {\n      ${fixedLines.join('\n      ')}\n    }\n  ]`;
  });
  
  // Fix JSX syntax issues
  content = content.replace(/return\s*\(\s*\)\s*{/g, 'return (');
  content = content.replace(/return\s*\(\s*\)\s*<[^>]*>/g, 'return (');
  
  // Fix missing semicolons
  content = content.replace(/(\w+)\s*:\s*React\.FC\s*=\s*\(\)\s*=>\s*{/g, '$1: React.FC = () => {');
  content = content.replace(/(\w+)\s*=\s*\(\)\s*=>\s*{/g, '$1 = () => {');
  
  // Fix JSX closing tags
  content = content.replace(/<(\w+)\s*([^>]*)\s*>\s*<\/\1>/g, '<$1 $2></$1>');
  
  // Fix string literals
  content = content.replace(/(\w+)\s*=\s*\[\s*'([^']+)'\s*\]/g, '$1 = [\n    \'$2\'\n  ]');
  
  // Fix function calls
  content = content.replace(/return\s*\(\s*\)\s*{/g, 'return (');
  
  // Fix missing commas in object properties
  content = content.replace(/(\w+)\s*:\s*([^,}]+)\s*(\w+)\s*:/g, '$1: $2,\n      $3:');
  content = content.replace(/(\w+)\s*:\s*([^,}]+)\s*(\w+)\s*=\s*\[/g, '$1: $2,\n      $3 = [');
  
  // Fix array syntax
  content = content.replace(/\[\s*'([^']+)'\s*\]/g, '[\n    \'$1\'\n  ]');
  
  // Fix export statements
  content = content.replace(/export\s+default\s+\w+;?\s*$/, 'export default Page;');
  
  // Fix JSX elements
  content = content.replace(/<(\w+)\s*([^>]*)\s*>\s*<\/\1>/g, '<$1 $2></$1>');
  
  // Fix missing closing brackets
  const openBrackets = (content.match(/\{/g) || []).length;
  const closeBrackets = (content.match(/\}/g) || []).length;
  if (openBrackets > closeBrackets) {
    content += '\n' + '}'.repeat(openBrackets - closeBrackets);
  }
  
  // Fix specific patterns
  content = content.replace(/const\s+(\w+)\s*=\s*\[\s*([^\]]*)\s*\]/g, (match, varName, arrayContent) => {
    if (arrayContent.trim() === '') {
      return `const ${varName} = []`;
    }
    const items = arrayContent.split('\n').map(item => {
      item = item.trim();
      if (item && !item.startsWith("'") && !item.startsWith('"') && !item.startsWith('{')) {
        return `'${item}'`;
      }
      return item;
    }).filter(item => item.trim());
    
    return `const ${varName} = [\n    ${items.join(',\n    ')}\n  ]`;
  });
  
  return content;
}

// Function to process a single file
function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const fixedContent = fixSyntaxIssues(content);
    fs.writeFileSync(filePath, fixedContent);
    console.log(`Fixed: ${filePath}`);
    return true;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Function to find all TypeScript/JavaScript files
function findFiles(dir, extensions = ['.tsx', '.ts', '.js', '.jsx']) {
  const files = [];
  
  function traverse(currentDir) {
    const items = fs.readdirSync(currentDir);
    
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
        traverse(fullPath);
      } else if (stat.isFile() && extensions.some(ext => item.endsWith(ext))) {
        files.push(fullPath);
      }
    }
  }
  
  traverse(dir);
  return files;
}

// Main execution
const srcDir = path.join(__dirname, 'src');
const appDir = path.join(__dirname, 'app');

console.log('Starting comprehensive syntax fix...');

// Process src directory
if (fs.existsSync(srcDir)) {
  const srcFiles = findFiles(srcDir);
  console.log(`Found ${srcFiles.length} files in src directory`);
  
  let fixedCount = 0;
  for (const file of srcFiles) {
    if (processFile(file)) {
      fixedCount++;
    }
  }
  console.log(`Fixed ${fixedCount} files in src directory`);
}

// Process app directory
if (fs.existsSync(appDir)) {
  const appFiles = findFiles(appDir);
  console.log(`Found ${appFiles.length} files in app directory`);
  
  let fixedCount = 0;
  for (const file of appFiles) {
    if (processFile(file)) {
      fixedCount++;
    }
  }
  console.log(`Fixed ${fixedCount} files in app directory`);
}

console.log('Comprehensive syntax fix completed!');