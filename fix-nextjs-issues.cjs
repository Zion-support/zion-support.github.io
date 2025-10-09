const fs = require('fs');
const path = require('path');

// Function to recursively find all .tsx and .ts files
function findFiles(dir, extensions = ['.tsx', '.ts']) {
  let results = [];
  const list = fs.readdirSync(dir);
  
  list.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat && stat.isDirectory()) {
      results = results.concat(findFiles(filePath, extensions));
    } else if (extensions.some(ext => file.endsWith(ext))) {
      results.push(filePath);
    }
  });
  
  return results;
}

// Function to fix various Next.js issues
function fixNextJSIssues(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Fix merge conflict markers
    if (content.includes('cursor/')) {
      content = content.replace(/cursor\/[a-zA-Z0-9-]+/g, '');
      modified = true;
    }
    
    // Add "use client" directive to components that use hooks
    const needsUseClient = content.includes('useState') || 
                          content.includes('useEffect') || 
                          content.includes('createContext') ||
                          content.includes('useContext') ||
                          content.includes('Component') ||
                          content.includes('class ') ||
                          content.includes('extends ');
    
    if (needsUseClient && !content.includes("'use client'") && !content.includes('"use client"')) {
      content = "'use client';\n\n" + content;
      modified = true;
    }
    
    // Fix duplicate exports
    const exportDefaultMatches = content.match(/export default/g);
    if (exportDefaultMatches && exportDefaultMatches.length > 1) {
      // Remove the last export default
      const lines = content.split('\n');
      let foundFirst = false;
      for (let i = lines.length - 1; i >= 0; i--) {
        if (lines[i].includes('export default') && !lines[i].includes('function') && !lines[i].includes('const')) {
          if (foundFirst) {
            lines.splice(i, 1);
            modified = true;
            break;
          } else {
            foundFirst = true;
          }
        }
      }
      content = lines.join('\n');
    }
    
    // Fix import paths that reference src/
    if (content.includes("from '../../src/") || content.includes("from '../src/")) {
      content = content.replace(/from ['"]\.\.\/\.\.\/src\//g, "from '../");
      content = content.replace(/from ['"]\.\.\/src\//g, "from './");
      modified = true;
    }
    
    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed: ${filePath}`);
    }
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

// Main execution
const appDir = path.join(__dirname, 'app');
const files = findFiles(appDir);

console.log(`Found ${files.length} files to check...`);

files.forEach(file => {
  fixNextJSIssues(file);
});

console.log('Next.js issues fixes completed!');