const fs = require('fs');
const path = require('path');
;
function fixObjectSyntax(filePath) {;
  try {;
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
<<<<<<< HEAD
;
    // Fix semicolons in object properties;
    content = content.replace(/(\w+):\s*"([^"]*)"\s*;/g, '$1:"$2",');
    content = content.replace(/(\w+):\s*"([^"]*)"\s*;/g, '$1:"$2"');
;
    // Fix semicolons in array elements;
    content = content.replace(/"([^"]*)"\s*;/g, '"$1",');
=======

    // Fix semicolons in object properties
    content = content.replace(/(\w+):\s*"([^"]*)"\s*,;/g, '$1: "$2",');
    content = content.replace(/(\w+):\s*"([^"]*)"\s*;/g, '$1: "$2"');

    // Fix semicolons in array elements
    content = content.replace(/"([^"]*)"\s*,;/g, '"$1",');
>>>>>>> dd4771918e1828cabc889a89f71cd19694beb220
    content = content.replace(/"([^"]*)"\s*;/g, '"$1"');
<<<<<<< HEAD
;
    // Fix semicolons in function declarations;
    content = content.replace(;
      /function\s+(\w+)\s*\(\s*\)\s*{\s*;/g,;
      'function $1() {';
=======

    // Fix semicolons in function declarations
    content = content.replace(
      /function\s+(\w+)\s*\(\s*\)\s*{\s*;/g,
      'function $1() {'
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
    );
;
    // Fix semicolons in const/let declarations;
    content = content.replace(/(const|let)\s+(\w+)\s*=\s*\[\s*;/g, '$1 $2 = [');
    content = content.replace(/(const|let)\s+(\w+)\s*=\s*\{\s*;/g, '$1 $2 = {');
;
    // Fix semicolons in object literals;
    content = content.replace(/\{\s*;/g, '{');
    content = content.replace(/\[\s*;/g, '[');
;
    // Remove trailing semicolons before closing braces/brackets;
    content = content.replace(/,\s*;\s*(\}|\])/g, '$1');
    content = content.replace(/;\s*(\}|\])/g, '$1');
;
    if (content !== fs.readFileSync(filePath, 'utf8')) {;
      fs.writeFileSync(filePath, content, 'utf8');
      modified = true;
    }
;
    return modified;
  } catch (error) {;
    console.error(`Error processing ${filePath} `, error.message);
    return false;
  }
}
;
function processDirectory(dirPath) {;
  const files = fs.readdirSync(dirPath);
  let fixedCount = 0;
;
  for (const file of files) {;
    const filePath = path.join(dirPath, file);
    const stat = fs.statSync(filePath);
;
    if (stat.isDirectory()) {;
      fixedCount += processDirectory(filePath);
    } else if (;
      file.endsWith('.tsx') ||;
      file.endsWith('.ts') ||;
      file.endsWith('.jsx') ||;
      file.endsWith('.js');
    ) {;
      if (fixObjectSyntax(filePath)) fixedCount++;
    }
  }
;
  return fixedCount;
}
;
console.log('Starting object syntax fixes...');
const fixedCount = processDirectory('./pages');
console.log(`Fixed ${fixedCount} files`);
