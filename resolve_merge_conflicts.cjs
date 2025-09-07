const fs = require('fs');
const path = require('path');

// Function to resolve merge conflicts by taking our version
function resolveConflicts(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Check if file has merge conflict markers
    if (content.includes('<<<<<<< HEAD') || content.includes('=======') || content.includes('>>>>>>>')) {
      console.log(`Resolving conflicts in: ${filePath}`);
      
      // For modify/delete conflicts, keep our version (the file exists in our branch)
      // For content conflicts, take our version (after =======)
      let lines = content.split('\n');
      let resolvedLines = [];
      let inConflict = false;
      let inOurVersion = false;
      
      for (let i = 0; i < lines.length; i++) {
        const line = lines[i];
        
        if (line.includes('<<<<<<< HEAD')) {
          inConflict = true;
          inOurVersion = false;
          continue;
        }
        
        if (line.includes('=======')) {
          inOurVersion = true;
          continue;
        }
        
        if (line.includes('>>>>>>>')) {
          inConflict = false;
          inOurVersion = false;
          continue;
        }
        
        if (inConflict && !inOurVersion) {
          // Skip lines from HEAD version
          continue;
        }
        
        resolvedLines.push(line);
      }
      
      const resolvedContent = resolvedLines.join('\n');
      fs.writeFileSync(filePath, resolvedContent, 'utf8');
      console.log(`✓ Resolved conflicts in: ${filePath}`);
    }
  } catch (error) {
    console.log(`Error processing ${filePath}: ${error.message}`);
  }
}

// Function to recursively find all files
function findFiles(dir) {
  const files = [];
  
  try {
    const items = fs.readdirSync(dir);
    
    for (const item of items) {
      const fullPath = path.join(dir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        // Skip node_modules and .git directories
        if (item !== 'node_modules' && item !== '.git') {
          files.push(...findFiles(fullPath));
        }
      } else if (stat.isFile()) {
        // Only process text files that might have conflicts
        if (item.endsWith('.tsx') || item.endsWith('.ts') || item.endsWith('.js') || 
            item.endsWith('.jsx') || item.endsWith('.json') || item.endsWith('.md') ||
            item.endsWith('.txt') || item.endsWith('.xml') || item.endsWith('.yml') ||
            item.endsWith('.yaml') || item.endsWith('.lock')) {
          files.push(fullPath);
        }
      }
    }
  } catch (error) {
    console.log(`Error reading directory ${dir}: ${error.message}`);
  }
  
  return files;
}

// Main execution
console.log('Starting conflict resolution...');
const allFiles = findFiles('/workspace');
let resolvedCount = 0;

for (const file of allFiles) {
  resolveConflicts(file);
  resolvedCount++;
}

console.log(`\nProcessed ${resolvedCount} files`);
console.log('Conflict resolution complete!');