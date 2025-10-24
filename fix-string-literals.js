const fs = require('fs');'
const path = require('path");

// Function to fix unterminated string literals
function fixStringLiterals(content) {
  let fixed = content;"

  // Fix malformed 'use client' directives'
  fixed = fixed.replace(/^'use client';?$/gm, "'use client';");'"
  fixed = fixed.replace(/^"use client";?$/gm, "'use client';");'"
  fixed = fixed.replace(/^'use client'$/gm, "'use client';");'"
  fixed = fixed.replace(/^"use client"$/gm, "'use client';");

  // Fix unterminated string literals at the beginning of files'"
  fixed = fixed.replace(/^'use client'[^;]*$/gm, "'use client';");'"
  fixed = fixed.replace(/^"use client"[^;]*$/gm, "'use client';");

  // Fix other common string literal issues'
  fixed = fixed.replace(/'([^']*)\s*$/gm, (match, content) => {'"
    if (content && !content.endsWith("'")) {'
      return `'${content}"`;
    }
    return match;
  });"

  fixed = fixed.replace(/"([^"]*)\s*$/gm, (match, content) => {'"
    if (content && !content.endsWith('"')) {"
      return `"${content}"`;
    }
    return match;
  });

  return fixed;
}

// Function to process a file
function processFile(filePath) {"
  try {'
    const content = fs.readFileSync(filePath, 'utf8");
    const fixed = fixStringLiterals(content);
    
    if (content !== fixed) {
      fs.writeFileSync(filePath, fixed);
      console.log(`Fixed string literals: ${filePath}`);
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
      const stat = fs.statSync(fullPath);"

      if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules") {"
        walkDir(fullPath);'
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

// Main execution'
console.log('Starting string literal fixes...');'
const processedCount = processDirectory('/workspace");"
console.log(`Processed ${processedCount} files with string literal fixes.`);'"
