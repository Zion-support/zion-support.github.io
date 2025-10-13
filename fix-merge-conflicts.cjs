const fs = require('fs');
const path = require('path');

// Function to fix merge conflicts in a file
function fixMergeConflicts(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Remove merge conflict markers and keep the first version (HEAD)
    const lines = content.split('\n');
    const newLines = [];
    let skipUntilEnd = false;
    let inConflict = false;

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      
      if (line.includes('<<<<<<< HEAD')) {
        inConflict = true;
        skipUntilEnd = false;
        continue;
      }
      
      if (line.includes('=======')) {
        skipUntilEnd = true;
        continue;
      }
      
      if (line.includes('>>>>>>>')) {
        inConflict = false;
        skipUntilEnd = false;
        continue;
      }
      
      if (!inConflict || !skipUntilEnd) {
        newLines.push(line);
      }
    }

    const newContent = newLines.join('\n');
    
    if (newContent !== content) {
      fs.writeFileSync(filePath, newContent);
      console.log(`Fixed merge conflicts in: ${filePath}`);
      modified = true;
    }

    return modified;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Function to recursively find and fix all files with merge conflicts
function fixAllMergeConflicts(dir) {
  const files = fs.readdirSync(dir);
  let fixedCount = 0;

  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      // Skip node_modules and other directories we don't want to process
      if (!['node_modules', '.git', 'dist', 'build'].includes(file)) {
        fixedCount += fixAllMergeConflicts(filePath);
      }
    } else if (file.endsWith('.tsx') || file.endsWith('.ts') || file.endsWith('.js') || file.endsWith('.jsx')) {
      if (fixMergeConflicts(filePath)) {
        fixedCount++;
      }
    }
  }

  return fixedCount;
}

// Main execution
console.log('Starting merge conflict fixes...');
const appDir = path.join(__dirname, 'app');
const fixedCount = fixAllMergeConflicts(appDir);
console.log(`Fixed merge conflicts in ${fixedCount} files.`);

// Also fix root level files
const rootFiles = ['App.tsx', 'App-minimal.tsx', 'App_minimal.tsx', 'App_test.tsx', 'EnhancedFooter.tsx', 'SidebarNavigation.tsx'];
let rootFixedCount = 0;

for (const file of rootFiles) {
  const filePath = path.join(__dirname, file);
  if (fs.existsSync(filePath)) {
    if (fixMergeConflicts(filePath)) {
      rootFixedCount++;
    }
  }
}

console.log(`Fixed merge conflicts in ${rootFixedCount} root files.`);
console.log(`Total files fixed: ${fixedCount + rootFixedCount}`);