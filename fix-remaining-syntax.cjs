const fs = require('fs');
const path = require('path');

// Function to fix remaining syntax issues
function fixRemainingSyntax(content) {
  let fixed = content;
  
  // Fix missing closing braces in object literals
  fixed = fixed.replace(/(\{[^}]*?)(\n\s*[a-zA-Z])/g, (match, objPart, nextLine) => {
    if (!objPart.includes('}') && objPart.includes('{')) {
      return objPart + '\n}' + nextLine;
    }
    return match;
  });
  
  // Fix missing closing parentheses in function calls
  fixed = fixed.replace(/(\w+\([^)]*?)(\n\s*[a-zA-Z])/g, (match, callPart, nextLine) => {
    if (!callPart.includes(')') && callPart.includes('(')) {
      return callPart + ')' + nextLine;
    }
    return match;
  });
  
  // Fix missing semicolons after statements
  fixed = fixed.replace(/(\w+)\s*(\n\s*[a-zA-Z])/g, (match, statement, nextLine) => {
    if (!statement.includes(';') && !statement.includes('{') && !statement.includes('}') && !statement.includes('=')) {
      return statement + ';' + nextLine;
    }
    return match;
  });
  
  // Fix malformed destructuring
  fixed = fixed.replace(/(\{[^}]*?)(\n\s*[a-zA-Z])/g, (match, destructurePart, nextLine) => {
    if (!destructurePart.includes('}') && destructurePart.includes('{')) {
      return destructurePart + '\n}' + nextLine;
    }
    return match;
  });
  
  // Fix missing closing braces in try-catch blocks
  fixed = fixed.replace(/(try\s*\{[^}]*?)(\n\s*[a-zA-Z])/g, (match, tryPart, nextLine) => {
    if (!tryPart.includes('}')) {
      return tryPart + '\n}' + nextLine;
    }
    return match;
  });
  
  // Fix missing closing braces in if statements
  fixed = fixed.replace(/(if\s*\([^)]*\)\s*\{[^}]*?)(\n\s*[a-zA-Z])/g, (match, ifPart, nextLine) => {
    if (!ifPart.includes('}')) {
      return ifPart + '\n}' + nextLine;
    }
    return match;
  });
  
  // Fix missing closing braces in for loops
  fixed = fixed.replace(/(for\s*\([^)]*\)\s*\{[^}]*?)(\n\s*[a-zA-Z])/g, (match, forPart, nextLine) => {
    if (!forPart.includes('}')) {
      return forPart + '\n}' + nextLine;
    }
    return match;
  });
  
  // Fix missing closing braces in while loops
  fixed = fixed.replace(/(while\s*\([^)]*\)\s*\{[^}]*?)(\n\s*[a-zA-Z])/g, (match, whilePart, nextLine) => {
    if (!whilePart.includes('}')) {
      return whilePart + '\n}' + nextLine;
    }
    return match;
  });
  
  // Fix missing closing braces in switch statements
  fixed = fixed.replace(/(switch\s*\([^)]*\)\s*\{[^}]*?)(\n\s*[a-zA-Z])/g, (match, switchPart, nextLine) => {
    if (!switchPart.includes('}')) {
      return switchPart + '\n}' + nextLine;
    }
    return match;
  });
  
  // Fix missing closing braces in class methods
  fixed = fixed.replace(/(\w+\s*\([^)]*\)\s*\{[^}]*?)(\n\s*[a-zA-Z])/g, (match, methodPart, nextLine) => {
    if (!methodPart.includes('}')) {
      return methodPart + '\n  }' + nextLine;
    }
    return match;
  });
  
  // Fix missing closing braces in arrow functions
  fixed = fixed.replace(/(=>\s*\{[^}]*?)(\n\s*[a-zA-Z])/g, (match, arrowPart, nextLine) => {
    if (!arrowPart.includes('}')) {
      return arrowPart + '\n}' + nextLine;
    }
    return match;
  });
  
  // Fix missing closing braces in regular functions
  fixed = fixed.replace(/(function\s+\w+\s*\([^)]*\)\s*\{[^}]*?)(\n\s*[a-zA-Z])/g, (match, funcPart, nextLine) => {
    if (!funcPart.includes('}')) {
      return funcPart + '\n}' + nextLine;
    }
    return match;
  });
  
  // Fix missing closing braces in anonymous functions
  fixed = fixed.replace(/(function\s*\([^)]*\)\s*\{[^}]*?)(\n\s*[a-zA-Z])/g, (match, anonFuncPart, nextLine) => {
    if (!anonFuncPart.includes('}')) {
      return anonFuncPart + '\n}' + nextLine;
    }
    return match;
  });
  
  return fixed;
}

// Function to recursively find all TypeScript/JavaScript files
function findFiles(dir, extensions = ['.ts', '.tsx', '.js', '.jsx']) {
  const files = [];
  
  function traverse(currentDir) {
    const items = fs.readdirSync(currentDir);
    
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
        traverse(fullPath);
      } else if (stat.isFile() && extensions.some(ext => item.endsWith(ext))) {
        files.push(fullPath);
      }
    }
  }
  
  traverse(dir);
  return files;
}

// Main execution
const appDir = path.join(__dirname, 'app');
const files = findFiles(appDir);

console.log(`Found ${files.length} files to process...`);

let fixedCount = 0;
for (const file of files) {
  try {
    const content = fs.readFileSync(file, 'utf8');
    const fixed = fixRemainingSyntax(content);
    
    if (content !== fixed) {
      fs.writeFileSync(file, fixed);
      console.log(`Fixed: ${file}`);
      fixedCount++;
    }
  } catch (error) {
    console.error(`Error processing ${file}:`, error.message);
  }
}

console.log(`Fixed ${fixedCount} files`);
