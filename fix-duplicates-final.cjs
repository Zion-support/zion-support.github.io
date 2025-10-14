const fs = require('fs');
const path = require('path');

function fixDuplicateDeclarations(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let fixed = false;
    
    // Split content into lines
    const lines = content.split('\n');
    const fixedLines = [];
    const seenDeclarations = new Set();
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      
      // Check for function declarations
      const functionMatch = line.match(/^(export\s+default\s+)?function\s+(\w+)\s*\(/);
      if (functionMatch) {
        const funcName = functionMatch[2];
        if (seenDeclarations.has(funcName)) {
          // Skip duplicate function declaration
          fixed = true;
          continue;
        }
        seenDeclarations.add(funcName);
      }
      
      // Check for const declarations
      const constMatch = line.match(/^const\s+(\w+)\s*=/);
      if (constMatch) {
        const constName = constMatch[1];
        if (seenDeclarations.has(constName)) {
          // Skip duplicate const declaration
          fixed = true;
          continue;
        }
        seenDeclarations.add(constName);
      }
      
      // Check for interface declarations
      const interfaceMatch = line.match(/^interface\s+(\w+)\s*\{/);
      if (interfaceMatch) {
        const interfaceName = interfaceMatch[1];
        if (seenDeclarations.has(interfaceName)) {
          // Skip duplicate interface declaration
          fixed = true;
          continue;
        }
        seenDeclarations.add(interfaceName);
      }
      
      fixedLines.push(line);
    }
    
    const newContent = fixedLines.join('\n');
    
    if (fixed) {
      fs.writeFileSync(filePath, newContent, 'utf8');
      console.log(`Fixed duplicate declarations in: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

function findAndFixDuplicates(dir) {
  const files = fs.readdirSync(dir);
  let fixedCount = 0;
  
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      fixedCount += findAndFixDuplicates(filePath);
    } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
      if (fixDuplicateDeclarations(filePath)) {
        fixedCount++;
      }
    }
  }
  
  return fixedCount;
}

// Fix duplicates in app directory
console.log('Fixing duplicate declarations in app directory...');
const fixedCount = findAndFixDuplicates('./app');
console.log(`Fixed duplicate declarations in ${fixedCount} files`);

console.log('Duplicate declaration fixing complete!');