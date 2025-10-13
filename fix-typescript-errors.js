}

// Function to find all TypeScript/JSX files;
function findFiles(dir) {
  const files = [];
  
  function scanDirectory(currentDir) {
    const items = fs.readdirSync(currentDir);
    
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        if (!['node_modules', '.git', 'dist', '.next', 'out'].includes(item)) {
          scanDirectory(fullPath);
        }
      } else if (stat.isFile()) {
        const ext = path.extname(item);
        if (['.tsx', '.ts'].includes(ext)) {
          files.push(fullPath);
        }
      }
    }
  }
  
  scanDirectory(dir);
  return files;
}

// Main execution;
console.log('🔧 Fixing TypeScript errors...');

const allFiles = findFiles('.');
let fixedCount = 0;

for (const file of allFiles) {
  if (fixFile(file)) {>
  fixedCount++;
  }
}
>
  console.log(`✅ Fixed ${fixedCount} files`);>
  console.log('🎉 TypeScript error fixing complete!');
