const fs = require('fs');
const path = require('path');

function fixMergeConflicts(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Remove all merge conflict markers and keep the latest version
    const lines = content.split('\n');
    const fixedLines = [];
    let inConflict = false;
    let conflictType = '';
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      
      if (line.startsWith('<<<<<<< HEAD')) {
        inConflict = true;
        conflictType = 'head';
        continue;
      }
      
      if (line.startsWith('=======')) {
        conflictType = 'separator';
        continue;
      }
      
      if (line.startsWith('>>>>>>> ')) {
        inConflict = false;
        conflictType = '';
        continue;
      }
      
      if (!inConflict) {
        fixedLines.push(line);
      } else if (inConflict && conflictType === 'separator') {
        // Keep content after ======= (usually the newer version)
        fixedLines.push(line);
      }
    }
    
    const fixedContent = fixedLines.join('\n');
    
    // Only write if content changed
    if (fixedContent !== content) {
      fs.writeFileSync(filePath, fixedContent, 'utf8');
      console.log(`Fixed merge conflicts in: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

function findAndFixConflicts(dir) {
  const files = fs.readdirSync(dir);
  let fixedCount = 0;
  
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      fixedCount += findAndFixConflicts(filePath);
    } else if (file.endsWith('.tsx') || file.endsWith('.ts') || file.endsWith('.js') || file.endsWith('.jsx')) {
      if (fixMergeConflicts(filePath)) {
        fixedCount++;
      }
    }
  }
  
  return fixedCount;
}

// Fix conflicts in app directory
console.log('Fixing merge conflicts in app directory...');
const fixedCount = findAndFixConflicts('./app');
console.log(`Fixed merge conflicts in ${fixedCount} files`);

// Also fix specific files that might be causing issues
const specificFiles = [
  './app/pages/CareersPage.tsx',
  './app/components/AccessibilityEnhancer.tsx',
  './app/components/Footer.tsx',
  './app/contact/page.tsx'
];

console.log('Fixing specific problematic files...');
for (const file of specificFiles) {
  if (fs.existsSync(file)) {
    if (fixMergeConflicts(file)) {
      console.log(`Fixed: ${file}`);
    }
  }
}

console.log('Merge conflict fixing complete!');