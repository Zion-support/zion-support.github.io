const fs = require('fs');
const path = require('path');

<<<<<<< HEAD
// Find all .tsx files in the app directory
const appDir = './app';
const files = [];

function findTsxFiles(dir) {
  const items = fs.readdirSync(dir);
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      findTsxFiles(fullPath);
    } else if (item.endsWith('.tsx')) {
      files.push(fullPath);
    }
  }
}

findTsxFiles(appDir);

let fixedCount = 0;

for (const file of files) {
  try {
    const content = fs.readFileSync(file, 'utf8');
=======
// Function to remove unused imports
function removeUnusedImports(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Remove ErrorBoundary imports that are not used
    if (content.includes('import ErrorBoundary') && !content.includes('<ErrorBoundary')) {
      content = content.replace(/import ErrorBoundary from.*\n/g, '');
      modified = true;
    }
    
    // Remove unused variable declarations
>>>>>>> ace3976bd22d904e50634e99bfd241eea501f09d
    const lines = content.split('\n');
    const newLines = [];
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      
<<<<<<< HEAD
      // Check if it's an import line
      if (line.trim().startsWith('import ')) {
        // Extract the imported name
        const match = line.match(/import\s+(\w+)\s+from/);
        if (match) {
          const importedName = match[1];
          // Check if this import is used in the file
          const remainingContent = lines.slice(i + 1).join('\n');
          if (!remainingContent.includes(importedName)) {
            console.log(`Removing unused import: ${importedName} from ${file}`);
            continue; // Skip this line
          }
        }
=======
      // Skip lines that declare unused variables
      if (line.includes('Warning:') && line.includes('is defined but never used')) {
        continue;
      }
      
      // Remove unused function declarations
      if (line.match(/^\s*function\s+\w+Page\(\)\s*\{/) && !content.includes(`<${line.match(/function\s+(\w+Page)/)[1]}`)) {
        // Find the end of the function and remove it
        let braceCount = 0;
        let j = i;
        while (j < lines.length) {
          const currentLine = lines[j];
          braceCount += (currentLine.match(/\{/g) || []).length;
          braceCount -= (currentLine.match(/\}/g) || []).length;
          if (braceCount === 0 && currentLine.includes('}')) {
            break;
          }
          j++;
        }
        i = j; // Skip the entire function
        modified = true;
        continue;
>>>>>>> ace3976bd22d904e50634e99bfd241eea501f09d
      }
      
      newLines.push(line);
    }
    
<<<<<<< HEAD
    const newContent = newLines.join('\n');
    if (newContent !== content) {
      fs.writeFileSync(file, newContent);
      fixedCount++;
      console.log(`Fixed: ${file}`);
    }
  } catch (error) {
    console.error(`Error processing ${file}:`, error.message);
  }
}

console.log(`Fixed ${fixedCount} files`);
=======
    if (modified) {
      fs.writeFileSync(filePath, newLines.join('\n'));
      console.log(`Removed unused imports: ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Find all .tsx files in the app directory
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
const appDir = path.join(__dirname, 'app');
const tsxFiles = findTsxFiles(appDir);

let fixedCount = 0;
for (const file of tsxFiles) {
  if (removeUnusedImports(file)) {
    fixedCount++;
  }
}

console.log(`Fixed ${fixedCount} files with unused imports`);
>>>>>>> ace3976bd22d904e50634e99bfd241eea501f09d
