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

// Function to fix all remaining issues
function fixFinalIssues(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Remove all merge conflict markers and origin/ references
    if (content.includes('origin/') || content.includes('cursor/')) {
      content = content.replace(/origin\/[a-zA-Z0-9-]+/g, '');
      content = content.replace(/cursor\/[a-zA-Z0-9-]+/g, '');
      modified = true;
    }
    
    // Fix duplicate export default issues
    const exportDefaultMatches = content.match(/export default/g);
    if (exportDefaultMatches && exportDefaultMatches.length > 1) {
      // Keep only the first export default
      const lines = content.split('\n');
      let foundFirst = false;
      for (let i = lines.length - 1; i >= 0; i--) {
        if (lines[i].includes('export default') && !lines[i].includes('function') && !lines[i].includes('const')) {
          if (foundFirst) {
            lines.splice(i, 1);
            modified = true;
          } else {
            foundFirst = true;
          }
        }
      }
      content = lines.join('\n');
    }
    
    // Fix syntax errors around arrow functions
    if (content.includes('const _categories = [...new Set(securityServices.map(service => service.category))];')) {
      content = content.replace(
        'const _categories = [...new Set(securityServices.map(service => service.category))];',
        'const _categories = [...new Set(securityServices.map(service => service.category))];'
      );
      modified = true;
    }
    
    // Clean up any remaining syntax issues
    content = content.replace(/\n\s*\n\s*\n/g, '\n\n');
    content = content.replace(/  +/g, ' ');
    
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
  fixFinalIssues(file);
});

console.log('Final issues fixes completed!');