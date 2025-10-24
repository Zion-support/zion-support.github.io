const fs = require('fs');
const path = require('path');

<<<<<<< HEAD
function fixRemainingErrors(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Fix common remaining issues
    const fixes = [
      // Fix malformed h1 tags
      {
        pattern: /<h1([^>]*)>\s*([^<]+)\s*<\/h1>/gs,
        replacement: '<h1$1>$2</h1>'
      },
      // Fix malformed p tags
      {
        pattern: /<p([^>]*)>\s*([^<]+)\s*<\/p>/gs,
        replacement: '<p$1>$2</p>'
      },
      // Fix malformed div tags
      {
        pattern: /<div([^>]*)>\s*<\/div><div([^>]*)>\s*([^<]+)\s*<\/div>/gs,
        replacement: '<div$1>\n        <div$2>$3</div>'
      },
      // Fix malformed className attributes
      {
        pattern: /className="([^"]*?)\s*,\s*([^"]*?)"/g,
        replacement: 'className="$1 $2"'
      },
      // Fix malformed hover classes
      {
        pattern: /hover:\s*from-([^-\s]+)\s*hover:\s*to-([^-\s]+)/g,
        replacement: 'hover:from-$1 hover:to-$2'
      },
      // Fix missing semicolons
      {
        pattern: /(\w+)\s*\n\s*export/g,
        replacement: '$1;\n\nexport'
      }
    ];

    fixes.forEach(fix => {
      const newContent = content.replace(fix.pattern, fix.replacement);
      if (newContent !== content) {
        content = newContent;
        modified = true;
      }
    });

    // Additional specific fixes
    // Fix the specific pattern in 5g pages
    if (content.includes('5g') && content.includes('Edge Computing')) {
      content = content.replace(
        /<div[^>]*>\s*<\/div><div[^>]*>\s*([^<]+)\s*<\/div>/gs,
        '<div$1>\n        <div$2>$3</div>'
      );
      modified = true;
    }

    if (modified) {
      fs.writeFileSync(filePath, content);
      console.log(`Fixed remaining errors in: ${filePath}`);
      return true;
    }
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
  return false;
}

function walkDirectory(dir) {
  const files = fs.readdirSync(dir);
  let fixedCount = 0;

  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory() && !file.startsWith('.') && file !== 'node_modules') {
      fixedCount += walkDirectory(filePath);
    } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
      if (fixRemainingErrors(filePath)) {
        fixedCount++;
      }
    }
  });

  return fixedCount;
}

console.log('Starting remaining error fixes...');
const fixedCount = walkDirectory('./app');
console.log(`Fixed remaining errors in ${fixedCount} files`);
=======
// Function to fix remaining syntax errors
function fixRemainingErrors(content) {
  let fixed = content;
  
  // Fix extra closing divs at the end
  const lines = fixed.split('\n');
  const lastLines = lines.slice(-10);
  let extraDivs = 0;
  
  // Count extra closing divs in the last few lines
  for (let i = lastLines.length - 1; i >= 0; i--) {
    if (lastLines[i].trim() === '</div>') {
      extraDivs++;
    } else if (lastLines[i].trim() && !lastLines[i].trim().startsWith('//')) {
      break;
    }
  }
  
  // Remove extra closing divs
  if (extraDivs > 1) {
    const extraDivsToRemove = extraDivs - 1;
    let removed = 0;
    for (let i = lines.length - 1; i >= 0 && removed < extraDivsToRemove; i--) {
      if (lines[i].trim() === '</div>') {
        lines.splice(i, 1);
        removed++;
      }
    }
    fixed = lines.join('\n');
  }
  
  // Fix missing closing fragment tags
  fixed = fixed.replace(/<\/div>\s*\)\s*$/, '</>\n  );');
  fixed = fixed.replace(/<\/div>\s*\)\s*;\s*$/, '</>\n  );');
  
  // Fix missing semicolon after return statement
  fixed = fixed.replace(/\)\s*$/, ');');
  
  // Fix malformed closing tags
  fixed = fixed.replace(/<\/div>\s*\)\s*$/, '</>\n  );');
  
  return fixed;
}

// Function to process a single file
function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const fixed = fixRemainingErrors(content);
    
    if (content !== fixed) {
      fs.writeFileSync(filePath, fixed, 'utf8');
      console.log(`Fixed: ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Function to recursively find all .tsx files
function findTsxFiles(dir) {
  const files = [];
  
  function traverse(currentDir) {
    const items = fs.readdirSync(currentDir);
    
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
        traverse(fullPath);
      } else if (item.endsWith('.tsx')) {
        files.push(fullPath);
      }
    }
  }
  
  traverse(dir);
  return files;
}

// Main execution
const appDir = '/workspace/app';
const tsxFiles = findTsxFiles(appDir);

console.log(`Found ${tsxFiles.length} .tsx files to process`);

let fixedCount = 0;
for (const file of tsxFiles) {
  if (processFile(file)) {
    fixedCount++;
  }
}

console.log(`Fixed ${fixedCount} files`);
>>>>>>> cursor/fix-errors-and-merge-to-main-607a
