const fs = require('fs');
const path = require('path');

function findTsxFiles(dir) {
  const files = [];
  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      files.push(...findTsxFiles(fullPath));
    } else if (item.endsWith('.tsx')) {
      files.push(fullPath);
    }
  }
  
  return files;
}

function resolveMergeConflicts(content) {
  // Remove merge conflict markers and keep the HEAD version (our changes)
  return content
    .replace(/<<<<<<< HEAD\n([\s\S]*?)=======\n([\s\S]*?)>>>>>>> [^\n]+\n/g, '$1')
    .replace(/<<<<<<< HEAD\n([\s\S]*?)=======\n([\s\S]*?)>>>>>>> [^\n]+/g, '$1');
}

function main() {
  const appDir = './app';
  const files = findTsxFiles(appDir);
  let fixedCount = 0;
  
  console.log(`Found ${files.length} .tsx files to process`);
  
  for (const file of files) {
    try {
      const content = fs.readFileSync(file, 'utf8');
      
      if (content.includes('<<<<<<< HEAD') || content.includes('=======') || content.includes('>>>>>>>')) {
        const resolvedContent = resolveMergeConflicts(content);
        
        if (resolvedContent !== content) {
          fs.writeFileSync(file, resolvedContent);
          fixedCount++;
          console.log(`Resolved conflicts in: ${file}`);
        }
      }
    } catch (error) {
      console.error(`Error processing ${file}:`, error.message);
    }
  }
  
  console.log(`\nResolved merge conflicts in ${fixedCount} files`);
}

main();