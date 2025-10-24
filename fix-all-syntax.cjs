const fs = require('fs');
const path = require('path');

// Function to fix common syntax issues
function fixSyntaxIssues(content) {
  let fixed = content;
  
  // Fix missing closing braces in interfaces
  fixed = fixed.replace(/(interface\s+\w+\s*\{[^}]*?)(\n\w+)/g, (match, interfacePart, nextLine) => {
    if (!interfacePart.includes('}')) {
      return interfacePart + '\n}' + nextLine;
    }
    return match;
  });
  
  // Fix missing semicolons after interface declarations
  fixed = fixed.replace(/(interface\s+\w+\s*\{[^}]*\})\s*(\n\w+)/g, '$1;\n$2');
  
  // Fix missing closing braces in function declarations
  fixed = fixed.replace(/(const\s+\w+:\s*React\.FC<[^>]*>\s*=\s*\([^)]*\)\s*=>\s*\{[^}]*?)(\n\w+)/g, (match, funcPart, nextLine) => {
    if (!funcPart.includes('}')) {
      return funcPart + '\n}' + nextLine;
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
  
  // Fix malformed className attributes (missing spaces)
  fixed = fixed.replace(/className="([^"]*?)([a-zA-Z])([a-zA-Z])/g, (match, before, char1, char2) => {
    return `className="${before}${char1} ${char2}`;
  });
  
  // Fix missing semicolons at end of statements
  fixed = fixed.replace(/(\w+)\s*(\n\s*[a-zA-Z])/g, (match, statement, nextLine) => {
    if (!statement.includes(';') && !statement.includes('{') && !statement.includes('}') && !statement.includes('=')) {
      return statement + ';' + nextLine;
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
    const fixed = fixSyntaxIssues(content);
    
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
