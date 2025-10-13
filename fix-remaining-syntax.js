import fs from 'fs';
import path from 'path';

// Get all TypeScript/TSX files in the app directory
function getAllTsxFiles(dir) {
  let files = [];
  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      files = files.concat(getAllTsxFiles(fullPath));
    } else if (item.endsWith('.tsx') || item.endsWith('.ts')) {
      files.push(fullPath);
    }
  }
  
  return files;
}

// Fix common syntax issues
function fixSyntaxIssues(content) {
  // Fix interface names with hyphens
  content = content.replace(/interface ([a-zA-Z0-9-]+)Props/g, (match, name) => {
    const fixedName = name.replace(/-/g, '');
    return `interface ${fixedName}Props`;
  });
  
  // Fix component names with hyphens
  content = content.replace(/const ([a-zA-Z0-9-]+): React\.FC/g, (match, name) => {
    const fixedName = name.replace(/-/g, '');
    return `const ${fixedName}: React.FC`;
  });
  
  // Fix export default with hyphens
  content = content.replace(/export default ([a-zA-Z0-9-]+);/g, (match, name) => {
    const fixedName = name.replace(/-/g, '');
    return `export default ${fixedName};`;
  });
  
  // Fix malformed comments
  content = content.replace(/\*\*;/g, '/**');
  content = content.replace(/\* \* \*/g, ' */');
  content = content.replace(/\* \*/g, ' */');
  
  // Fix malformed object literals
  content = content.replace(/\{,\}/g, '{}');
  content = content.replace(/\{,\s*\}/g, '{}');
  
  // Fix malformed function calls
  content = content.replace(/\(,\s*\)/g, '()');
  content = content.replace(/\(\s*,\s*\)/g, '()');
  
  return content;
}

// Get all files
const allFiles = getAllTsxFiles('/workspace/app');

let fixedCount = 0;

allFiles.forEach(filePath => {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const fixedContent = fixSyntaxIssues(content);
    
    if (content !== fixedContent) {
      fs.writeFileSync(filePath, fixedContent);
      fixedCount++;
      console.log(`Fixed: ${filePath}`);
    }
    
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
  }
});

console.log(`Fixed ${fixedCount} files with syntax issues`);
console.log('Done!');