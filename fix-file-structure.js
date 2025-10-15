import fs from 'fs';
import path from 'path';

// Get all TypeScript/JavaScript files
const getAllFiles = (dir, extensions = ['.ts', '.tsx', '.js', '.jsx']) => {
  let files = [];
  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
      files = files.concat(getAllFiles(fullPath, extensions));
    } else if (extensions.some(ext => item.endsWith(ext))) {
      files.push(fullPath);
    }
  }
  
  return files;
};

// Fix file structure issues
const fixFileStructure = (filePath) => {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Check if file has structural issues (imports mixed with component code)
    const hasStructuralIssues = content.includes('import ') && content.includes('const ') && 
                               content.indexOf('const ') < content.lastIndexOf('import ');
    
    if (!hasStructuralIssues) return;
    
    console.log(`Fixing structure in: ${filePath}`);
    
    // Extract all import statements
    const importRegex = /import\s+.*?from\s+['"][^'"]+['"];?/g;
    const imports = [];
    let match;
    
    while ((match = importRegex.exec(content)) !== null) {
      imports.push(match[0]);
    }
    
    // Remove all imports from content
    content = content.replace(importRegex, '');
    
    // Find the component definition
    const componentMatch = content.match(/const\s+\w+.*?React\.FC.*?=/);
    if (componentMatch) {
      const componentStart = content.indexOf(componentMatch[0]);
      const beforeComponent = content.substring(0, componentStart).trim();
      const componentAndAfter = content.substring(componentStart);
      
      // Rebuild the file with proper structure
      const newContent = [
        ...imports,
        '',
        beforeComponent,
        componentAndAfter
      ].filter(line => line.trim()).join('\n');
      
      if (newContent !== content) {
        fs.writeFileSync(filePath, newContent);
        modified = true;
      }
    }
    
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
  }
};

// Main execution
console.log('Fixing file structure issues...');

const files = getAllFiles('./app');
let fixedCount = 0;

files.forEach(file => {
  try {
    fixFileStructure(file);
    fixedCount++;
  } catch (error) {
    console.error(`Error with file ${file}:`, error.message);
  }
});

console.log(`Processed ${fixedCount} files`);

console.log('File structure fixes completed!');