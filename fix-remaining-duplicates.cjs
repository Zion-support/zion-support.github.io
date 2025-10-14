const fs = require('fs');
const path = require('path');

function fixRemainingDuplicates(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let fixed = false;
    
    // Check if file has duplicate function declarations
    const functionMatches = content.match(/export\s+default\s+function\s+(\w+)\s*\([^)]*\)\s*\{[^}]*\}/g);
    if (functionMatches && functionMatches.length > 1) {
      // Keep only the last function declaration
      const lastFunction = functionMatches[functionMatches.length - 1];
      const functionName = lastFunction.match(/export\s+default\s+function\s+(\w+)\s*\(/)[1];
      
      // Remove all function declarations except the last one
      let newContent = content;
      for (let i = 0; i < functionMatches.length - 1; i++) {
        newContent = newContent.replace(functionMatches[i], '');
      }
      
      // Clean up extra whitespace
      newContent = newContent.replace(/\n\s*\n\s*\n/g, '\n\n');
      newContent = newContent.replace(/^\s*\n/gm, '');
      
      if (newContent !== content) {
        fs.writeFileSync(filePath, newContent, 'utf8');
        console.log(`Fixed duplicate functions in: ${filePath}`);
        fixed = true;
      }
    }
    
    // Check for duplicate const declarations
    const constMatches = content.match(/const\s+(\w+)\s*=\s*[^;]+;/g);
    if (constMatches) {
      const seenConsts = new Set();
      const lines = content.split('\n');
      const fixedLines = [];
      
      for (const line of lines) {
        const constMatch = line.match(/const\s+(\w+)\s*=/);
        if (constMatch) {
          const constName = constMatch[1];
          if (seenConsts.has(constName)) {
            // Skip duplicate const declaration
            fixed = true;
            continue;
          }
          seenConsts.add(constName);
        }
        fixedLines.push(line);
      }
      
      if (fixed) {
        const newContent = fixedLines.join('\n');
        fs.writeFileSync(filePath, newContent, 'utf8');
        console.log(`Fixed duplicate consts in: ${filePath}`);
      }
    }
    
    return fixed;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

function findAndFixAllFiles(dir) {
  const files = fs.readdirSync(dir);
  let fixedCount = 0;
  
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      fixedCount += findAndFixAllFiles(filePath);
    } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
      if (fixRemainingDuplicates(filePath)) {
        fixedCount++;
      }
    }
  }
  
  return fixedCount;
}

// Fix all remaining duplicates
console.log('Fixing remaining duplicate declarations...');
const fixedCount = findAndFixAllFiles('./app');
console.log(`Fixed duplicates in ${fixedCount} files`);

console.log('Remaining duplicate fixing complete!');