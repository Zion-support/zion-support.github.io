const fs = require('fs');
const path = require('path');

function resolveMergeConflicts(content) {
  // Remove all merge conflict markers and keep the content after =======
  let resolved = content.replace(/<<<<<<< HEAD[\s\S]*?=======([\s\S]*?)>>>>>>> [^\n]*/g, '$1');
  
  // Remove any remaining conflict markers
  resolved = resolved.replace(/<<<<<<< HEAD[\s\S]*?>>>>>>> [^\n]*/g, '');
  resolved = resolved.replace(/=======[\s\S]*?>>>>>>> [^\n]*/g, '');
  resolved = resolved.replace(/<<<<<<< HEAD/g, '');
  resolved = resolved.replace(/=======/g, '');
  resolved = resolved.replace(/>>>>>>> [^\n]*/g, '');
  
  return resolved;
}

function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    
    if (content.includes('<<<<<<< HEAD') || content.includes('=======') || content.includes('>>>>>>>')) {
      console.log(`Processing: ${filePath}`);
      const resolved = resolveMergeConflicts(content);
      fs.writeFileSync(filePath, resolved, 'utf8');
      console.log(`✓ Resolved conflicts in: ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

function walkDirectory(dir) {
  const files = fs.readdirSync(dir);
  let processedCount = 0;
  
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      // Skip node_modules and .git directories
      if (file === 'node_modules' || file === '.git') {
        continue;
      }
      processedCount += walkDirectory(filePath);
    } else if (stat.isFile()) {
      // Only process certain file types
      const ext = path.extname(file);
      if (['.ts', '.tsx', '.js', '.jsx', '.json', '.css', '.html', '.xml', '.md'].includes(ext)) {
        if (processFile(filePath)) {
          processedCount++;
        }
      }
    }
  }
  
  return processedCount;
}

console.log('Starting merge conflict resolution...');
const processedCount = walkDirectory('.');
console.log(`\n✓ Resolved conflicts in ${processedCount} files`);
console.log('Merge conflict resolution complete!');