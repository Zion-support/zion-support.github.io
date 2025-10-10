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

// Function to fix remaining issues
function fixRemainingIssues(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Fix merge conflict markers
    if (content.includes('<<<<<<< HEAD') || content.includes('=======') || content.includes('>>>>>>>')) {
      const lines = content.split('\n');
      const cleanedLines = [];
      let inConflict = false;
      
      for (const line of lines) {
        if (line.includes('<<<<<<< HEAD') || line.includes('=======') || line.includes('>>>>>>>')) {
          inConflict = !inConflict;
          continue;
        }
        if (!inConflict) {
          cleanedLines.push(line);
        }
      }
      
      content = cleanedLines.join('\n');
      modified = true;
    }
    
    // Fix origin/ references
    if (content.includes('origin/')) {
      content = content.replace(/origin\/[a-zA-Z0-9-]+/g, '');
      modified = true;
    }
    
    // Remove metadata export from client components
    if (content.includes("'use client'") && content.includes('export const metadata')) {
      // Remove the entire metadata export
      content = content.replace(/export const metadata = \{[\s\S]*?\};/g, '');
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
  fixRemainingIssues(file);
});

console.log('Remaining issues fixes completed!');