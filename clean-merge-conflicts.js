const fs = require('fs');
const path = require('path');

// Function to clean merge conflicts in a single file
function cleanMergeConflicts(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Remove merge conflict markers
    if (content.includes('<<<<<<< HEAD') || content.includes('=======') || content.includes('>>>>>>>')) {
      // Remove all merge conflict markers and everything between them
      content = content.replace(/<<<<<<< HEAD[\s\S]*?=======[\s\S]*?>>>>>>> [^\n]*/g, '');
      content = content.replace(/<<<<<<< [^\n]*[\s\S]*?=======[\s\S]*?>>>>>>> [^\n]*/g, '');
      content = content.replace(/=======[\s\S]*?>>>>>>> [^\n]*/g, '');
      content = content.replace(/>>>>>>> [^\n]*/g, '');
      content = content.replace(/<<<<<<< [^\n]*/g, '');
      content = content.replace(/=======/g, '');
      modified = true;
    }

    // Clean up any remaining malformed syntax
    if (content.includes(');}') && !content.includes('  );')) {
      content = content.replace(/\);}/g, '\n  );\n}');
      modified = true;
    }

    // Fix missing closing braces
    if (content.includes('</div>);') && !content.includes('  );')) {
      content = content.replace('</div>);', '      </div>\n    </div>\n  );\n}');
      modified = true;
    }

    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Cleaned: ${filePath}`);
      return true;
    }
  } catch (error) {
    console.error(`Error cleaning ${filePath}:`, error.message);
  }
  return false;
}

// Function to recursively find all .tsx files
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

// Main execution
console.log('Starting merge conflict cleanup...');
const appDir = path.join(__dirname, 'app');
const tsxFiles = findTsxFiles(appDir);

console.log(`Found ${tsxFiles.length} .tsx files`);

let cleanedCount = 0;
for (const file of tsxFiles) {
  if (cleanMergeConflicts(file)) {
    cleanedCount++;
  }
}

console.log(`Cleaned ${cleanedCount} files`);
console.log('Merge conflict cleanup complete!');