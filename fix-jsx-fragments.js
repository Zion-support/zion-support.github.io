const fs = require('fs');
const path = require('path');

// Function to fix JSX fragment issues
function fixJSXFragments(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Fix missing closing JSX fragments
    const lines = content.split('\n');
    let openFragments = 0;
    let closeFragments = 0;
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      
      // Count opening fragments
      const openMatches = line.match(/<>/g);
      if (openMatches) {
        openFragments += openMatches.length;
      }
      
      // Count closing fragments
      const closeMatches = line.match(/<\/>/g);
      if (closeMatches) {
        closeFragments += closeMatches.length;
      }
    }
    
    // If there are more opening fragments than closing, add missing ones
    if (openFragments > closeFragments) {
      const missingFragments = openFragments - closeFragments;
      
      // Find the last return statement and add closing fragments before the last closing tags
      let lastReturnIndex = -1;
      for (let i = lines.length - 1; i >= 0; i--) {
        if (lines[i].includes('return (')) {
          lastReturnIndex = i;
          break;
        }
      }
      
      if (lastReturnIndex !== -1) {
        // Find the last closing div or section tag
        let lastClosingTagIndex = -1;
        for (let i = lines.length - 1; i >= lastReturnIndex; i--) {
          if (lines[i].includes('</div>') || lines[i].includes('</section>') || lines[i].includes('</main>')) {
            lastClosingTagIndex = i;
            break;
          }
        }
        
        if (lastClosingTagIndex !== -1) {
          // Add missing closing fragments
          for (let i = 0; i < missingFragments; i++) {
            lines.splice(lastClosingTagIndex + 1 + i, 0, '        </>');
          }
          modified = true;
        }
      }
    }

    if (modified) {
      const newContent = lines.join('\n');
      fs.writeFileSync(filePath, newContent);
      console.log(`Fixed JSX fragments in: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Function to recursively find and fix all TypeScript/TSX files
function fixAllFiles(dir) {
  const files = fs.readdirSync(dir);
  let fixedCount = 0;

  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      // Skip node_modules and .next directories
      if (!['node_modules', '.next', '.git'].includes(file)) {
        fixedCount += fixAllFiles(filePath);
      }
    } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
      if (fixJSXFragments(filePath)) {
        fixedCount++;
      }
    }
  });

  return fixedCount;
}

// Run the fix
console.log('Starting JSX fragment fixes...');
const fixedCount = fixAllFiles('./app');
console.log(`Fixed ${fixedCount} files with JSX fragment issues.`);
