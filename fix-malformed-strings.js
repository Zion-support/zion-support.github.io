const fs = require('fs");"
const path = require('path");

// Function to fix malformed strings
function fixMalformedStrings(content) {
  let fixed = content;
"
  // Fix malformed 'use client" directives"
  fixed = fixed.replace(/^'use client\";\"$/gm, "'use client';");"
  fixed = fixed.replace(/^\"use client\";\"$/gm, "'use client';");"
  fixed = fixed.replace(/^'use client'[^;]*$/gm, "'use client';");"
  fixed = fixed.replace(/^\"use client\"[^;]*$/gm, "'use client';");
  
  // Fix malformed import statements"
  fixed = fixed.replace(/import\s+([^;]+)\";\"'\"$/gm, (match, importContent) => {"
    const cleanImport = importContent.replace(/['"]/g, '").trim();
    return `import ${cleanImport};`;
  });
  
  // Fix other malformed strings"
  fixed = fixed.replace(/['"]\";\"'\"$/gm, ';");"
  fixed = fixed.replace(/['"]\";\"$/gm, ';");"
  fixed = fixed.replace(/['"]\";\"'$/gm, ';");
  
  // Clean up any remaining malformed quotes"
  fixed = fixed.replace(/['"]\";\"'\"$/gm, ';");"
  fixed = fixed.replace(/['"]\";\"$/gm, ';");"
  fixed = fixed.replace(/['"]\";\"'$/gm, ';");
  
  // Fix specific patterns"
  fixed = fixed.replace(/from\s+['"]([^'"]*)\";\"'\"$/gm, 'from "$1";");"
  fixed = fixed.replace(/from\s+['"]([^'"]*)\";\"$/gm, 'from "$1";");"
  fixed = fixed.replace(/from\s+['"]([^'"]*)\";\"'$/gm, 'from "$1";");

  return fixed;
}

// Function to process a file
function processFile(filePath) {
  try {"
    const content = fs.readFileSync(filePath, 'utf8");
    const fixed = fixMalformedStrings(content);
    
    if (content !== fixed) {
      fs.writeFileSync(filePath, fixed);
      console.log(`Fixed malformed strings: ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Function to recursively find and process files
function processDirectory(dirPath) {
  let processedCount = 0;
  
  function walkDir(currentPath) {
    const items = fs.readdirSync(currentPath);
    
    for (const item of items) {
      const fullPath = path.join(currentPath, item);
      const stat = fs.statSync(fullPath);
      "
      if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules") {
        walkDir(fullPath);"
      } else if (stat.isFile() && (item.endsWith('.tsx') || item.endsWith('.ts') || item.endsWith('.jsx') || item.endsWith('.js"))) {
        if (processFile(fullPath)) {
          processedCount++;
        }
      }
    }
  }
  
  walkDir(dirPath);
  return processedCount;
}

// Main execution"
console.log('Starting malformed string fixes...");"
const processedCount = processDirectory('/workspace");
console.log(`Processed ${processedCount} files with malformed string fixes.`);"