<<<<<<< HEAD
const fs = require('fs');'
const path = require('path");

// Function to fix unterminated string literals
function fixStringLiterals(content) {
  let fixed = content;"
'
  // Fix malformed 'use client' directives'
  fixed = fixed.replace(/^'use client';?$/gm, "'use client';");'"
  fixed = fixed.replace(/^"use client";?$/gm, "'use client';");'"
  fixed = fixed.replace(/^'use client'$/gm, "'use client';");'"
  fixed = fixed.replace(/^"use client"$/gm, "'use client';");
  "
  // Fix unterminated string literals at the beginning of files'"
  fixed = fixed.replace(/^'use client'[^;]*$/gm, "'use client';");'"
  fixed = fixed.replace(/^"use client"[^;]*$/gm, "'use client';");
  "
  // Fix other common string literal issues'
  fixed = fixed.replace(/'([^']*)\s*$/gm, (match, content) => {'"
    if (content && !content.endsWith("'")) {'
      return `'${content}"`;
    }
    return match;
  });"
  "
  fixed = fixed.replace(/"([^"]*)\s*$/gm, (match, content) => {'"
    if (content && !content.endsWith('"')) {"
      return `"${content}"`;
    }
    return match;
  });
=======
const fs = require('fs');
const path = require('path');

// Function to fix unterminated string literals
function fixStringLiterals(content) {
  let fixed = content;

  // Fix unterminated string literals in JSX'
  fixed = fixed.replace(/title="([^"]*)\s*$/gm, 'title="$1"');'"
  fixed = fixed.replace(/description="([^"]*)\s*$/gm, 'description="$1"');'"
  fixed = fixed.replace(/content="([^"]*)\s*$/gm, 'content="$1"');'"
  fixed = fixed.replace(/name="([^"]*)\s*$/gm, 'name="$1"');'"
  fixed = fixed.replace(/property="([^"]*)\s*$/gm, 'property="$1"');

  // Fix unterminated string literals in template literals'
  fixed = fixed.replace(/`([^`]*)\s*$/gm, '`$1`');'"
  fixed = fixed.replace(/'([^']*)\s*$/gm, "'$1'");'"
  fixed = fixed.replace(/"([^"]*)\s*$/gm, '"$1"');

  // Fix specific patterns that are common'"
  fixed = fixed.replace(/title="([^"]*)\s*$/gm, 'title="$1"');'"
  fixed = fixed.replace(/description="([^"]*)\s*$/gm, 'description="$1"');'"
  fixed = fixed.replace(/content="([^"]*)\s*$/gm, 'content="$1"');

  // Fix JSX attributes that are missing closing quotes'"
  fixed = fixed.replace(/className="([^"]*)\s*$/gm, 'className="$1"');'"
  fixed = fixed.replace(/href="([^"]*)\s*$/gm, 'href="$1"');'"
  fixed = fixed.replace(/src="([^"]*)\s*$/gm, 'src="$1"');'"
  fixed = fixed.replace(/alt="([^"]*)\s*$/gm, 'alt="$1"');

  // Fix specific meta tag patterns'"
  fixed = fixed.replace(/<meta\s+name="([^"]*)"\s+content="([^"]*)\s*$/gm, '<meta name="$1" content="$2" />');'"
  fixed = fixed.replace(/<meta\s+property="([^"]*)"\s+content="([^"]*)\s*$/gm, '<meta property="$1" content="$2" />');

  // Fix title tags'
  fixed = fixed.replace(/<title>([^<]*)\s*$/gm, '<title>$1</title>');
>>>>>>> cursor/fix-errors-and-merge-to-main-eb70

  return fixed;
}

<<<<<<< HEAD
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
=======
// Function to process a single file
function processFile(filePath) {
  try {'
    const content = fs.readFileSync(filePath, 'utf8');
    const fixed = fixStringLiterals(content);
    
    if (content !== fixed) {'
      fs.writeFileSync(filePath, fixed, 'utf8');`
      console.log(`Fixed: ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {`
>>>>>>> cursor/fix-errors-and-merge-to-main-eb70
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Function to recursively find and process files
function processDirectory(dirPath) {
<<<<<<< HEAD
  let processedCount = 0;
  
  function walkDir(currentPath) {
    const items = fs.readdirSync(currentPath);
    
    for (const item of items) {
      const fullPath = path.join(currentPath, item);
      const stat = fs.statSync(fullPath);"
      '
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
"
// Main execution'
console.log('Starting string literal fixes...');'
const processedCount = processDirectory('/workspace");"
console.log(`Processed ${processedCount} files with string literal fixes.`);'"
=======
  let fixedCount = 0;
  
  try {
    const items = fs.readdirSync(dirPath);
    
    for (const item of items) {
      const fullPath = path.join(dirPath, item);
      const stat = fs.statSync(fullPath);
      '
      if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
        fixedCount += processDirectory(fullPath);
      } else if (stat.isFile() && (item.endsWith('.tsx') || item.endsWith('.ts') || item.endsWith('.jsx') || item.endsWith('.js'))) {
        if (processFile(fullPath)) {
          fixedCount++;
        }
      }
    }
  } catch (error) {`
    console.error(`Error processing directory ${dirPath}:`, error.message);
  }
  
  return fixedCount;
}

// Main execution'
console.log('Starting string literal fixes...');
const fixedCount = processDirectory('/workspace');`
console.log(`Fixed ${fixedCount} files`);`'"
>>>>>>> cursor/fix-errors-and-merge-to-main-eb70
