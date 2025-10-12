    if (line.startsWith('<<<<<<< HEAD')) {
      inConflict = true;
      conflictType = 'head';
      headLines = [];
      otherLines = [];
      continue;
    }
    
    if (content.includes('<<<<<<< HEAD')) {
      console.log(`Processing merge conflicts in: ${filePath}`);
      const resolvedContent = resolveMergeConflicts(content);
      fs.writeFileSync(filePath, resolvedContent, 'utf8');
      console.log(`✓ Fixed merge conflicts in: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Function to find all source files
function findSourceFiles(dir, extensions = ['.tsx', '.ts', '.jsx', '.js']) {
  const files = [];
  
  function traverse(currentDir) {
    const items = fs.readdirSync(currentDir);
    
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        // Skip certain directories
        if (!['node_modules', 'dist', '.git', '.next', 'out'].includes(item)) {
          traverse(fullPath);
        }
      } else if (stat.isFile()) {
        const ext = path.extname(item);
        if (extensions.includes(ext) && !item.includes('.original')) {
          files.push(fullPath);
        }
      }
    }
  }
  
  traverse(dir);
  return files;
}

// Main execution
console.log('🔧 Starting merge conflict resolution...');

const sourceFiles = findSourceFiles('.');
let processedCount = 0;
let fixedCount = 0;

for (const file of sourceFiles) {
  if (processFile(file)) {
    fixedCount++;
  }
  processedCount++;
}

console.log(`\n📊 Summary:`);
console.log(`   Files processed: ${processedCount}`);
console.log(`   Files with conflicts fixed: ${fixedCount}`);
console.log(`\n✅ Merge conflict resolution completed!`);