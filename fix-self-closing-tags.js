import fs from 'fs';
import path from 'path';

// Function to fix malformed self-closing tags
function fixSelfClosingTags(content) {
  let fixed = content;
  
  // Fix malformed self-closing tags like <Component / / />
  fixed = fixed.replace(/<(\w+)([^>]*)\s*\/\s*\/\s*\/>/g, '<$1$2 />');
  fixed = fixed.replace(/<(\w+)([^>]*)\s*\/\s*\/>/g, '<$1$2 />');
  
  // Fix malformed self-closing tags with extra spaces
  fixed = fixed.replace(/<(\w+)([^>]*)\s*\/\s*\/\s*\/\s*>/g, '<$1$2 />');
  
  // Fix specific component patterns
  const components = ['Award', 'Shield', 'Globe', 'Brain', 'Users', 'CheckCircle', 'Helmet', 'Cube', 'Star'];
  for (const component of components) {
    // Fix patterns like <Component / / /> -> <Component />
    fixed = fixed.replace(new RegExp(`<${component}([^>]*)\\s*\\/\\s*\\/\\s*\\/>`, 'g'), `<${component}$1 />`);
    fixed = fixed.replace(new RegExp(`<${component}([^>]*)\\s*\\/\\s*\\/>`, 'g'), `<${component}$1 />`);
  }
  
  return fixed;
}

// Function to process files
function processFiles() {
  const files = fs.readdirSync('/workspace');
  let fixedCount = 0;
  
  for (const file of files) {
    const filePath = path.join('/workspace', file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory() && !file.startsWith('.') && file !== 'node_modules') {
      fixedCount += processDirectory(filePath);
    } else if (file.endsWith('.tsx') || file.endsWith('.jsx')) {
      try {
        const content = fs.readFileSync(filePath, 'utf8');
        const fixedContent = fixSelfClosingTags(content);
        
        if (content !== fixedContent) {
          fs.writeFileSync(filePath, fixedContent);
          console.log(`Fixed: ${filePath}`);
          fixedCount++;
        }
      } catch (error) {
        console.error(`Error processing ${filePath}:`, error.message);
      }
    }
  }
  
  return fixedCount;
}

// Function to process directory recursively
function processDirectory(dirPath) {
  const files = fs.readdirSync(dirPath);
  let fixedCount = 0;
  
  for (const file of files) {
    const filePath = path.join(dirPath, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory() && !file.startsWith('.') && file !== 'node_modules') {
      fixedCount += processDirectory(filePath);
    } else if (file.endsWith('.tsx') || file.endsWith('.jsx')) {
      try {
        const content = fs.readFileSync(filePath, 'utf8');
        const fixedContent = fixSelfClosingTags(content);
        
        if (content !== fixedContent) {
          fs.writeFileSync(filePath, fixedContent);
          console.log(`Fixed: ${filePath}`);
          fixedCount++;
        }
      } catch (error) {
        console.error(`Error processing ${filePath}:`, error.message);
      }
    }
  }
  
  return fixedCount;
}

// Main execution
console.log('Starting self-closing tag fixes...');
const fixedCount = processFiles();
console.log(`Fixed ${fixedCount} files`);