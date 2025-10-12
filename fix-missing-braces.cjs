const fs = require('fs');
const path = require('path');

// Function to fix missing closing braces in a file
function fixMissingBraces(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Check if file is missing closing brace for function
    const lines = content.split('\n');
    let braceCount = 0;
    let inFunction = false;
    let functionStartLine = -1;

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      
      // Check for function declaration
      if (line.includes('export default function') && line.includes('{')) {
        inFunction = true;
        functionStartLine = i;
        braceCount = 1;
      } else if (inFunction) {
        // Count braces
        for (const char of line) {
          if (char === '{') braceCount++;
          if (char === '}') braceCount--;
        }
        
        // If we reach the end of file and braces are not balanced
        if (i === lines.length - 1 && braceCount > 0) {
          // Add missing closing braces
          for (let j = 0; j < braceCount; j++) {
            lines.push('}');
          }
          modified = true;
          break;
        }
      }
    }

    if (modified) {
      content = lines.join('\n');
      fs.writeFileSync(filePath, content);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Get all page.tsx files
function getAllPageFiles(dir) {
  const files = [];
  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      const pageFile = path.join(fullPath, 'page.tsx');
      if (fs.existsSync(pageFile)) {
        files.push(pageFile);
      }
      // Recursively search subdirectories
      files.push(...getAllPageFiles(fullPath));
    }
  }
  
  return files;
}

// Fix all page files
const appDir = path.join(__dirname, 'app');
const pageFiles = getAllPageFiles(appDir);

console.log(`Found ${pageFiles.length} page files to check...`);

let fixedCount = 0;
pageFiles.forEach(file => {
  if (fixMissingBraces(file)) {
    console.log(`Fixed: ${file}`);
    fixedCount++;
  }
});

console.log(`Fixed ${fixedCount} files`);