const fs = require('fs');
const path = require('path');

// Find all page.tsx files
function findPageFiles(dir) {
  const files = [];
  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      files.push(...findPageFiles(fullPath));
    } else if (item === 'page.tsx') {
      files.push(fullPath);
    }
  }
  
  return files;
}

// Fix a single file
function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Fix missing closing braces
    if (content.includes('  );') && !content.includes('}')) {
      content = content.replace(/  \);\s*$/, '  );\n}');
      modified = true;
    }
    
    // Fix missing closing braces for other patterns
    if (content.includes('    </>') && !content.includes('  );') && !content.includes('}')) {
      content = content.replace(/    <\/>\s*$/, '    </>\n  );\n}');
      modified = true;
    }
    
    // Fix missing closing braces for other patterns
    if (content.includes('  );') && content.includes('  \n  \n') && !content.includes('}')) {
      content = content.replace(/  \);\s*\n\s*\n\s*$/, '  );\n}');
      modified = true;
    }
    
    // Fix missing closing braces for other patterns
    if (content.includes('  );') && content.includes('  \n  \n  \n') && !content.includes('}')) {
      content = content.replace(/  \);\s*\n\s*\n\s*\n\s*$/, '  );\n}');
      modified = true;
    }
    
    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed: ${filePath}`);
      return true;
    }
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
  return false;
}

// Main execution
const pageFiles = findPageFiles('./app');
console.log(`Found ${pageFiles.length} page.tsx files`);

let fixedCount = 0;
pageFiles.forEach(file => {
  if (fixFile(file)) {
    fixedCount++;
  }
});

console.log(`Fixed ${fixedCount} files`);
