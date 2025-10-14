const fs = require('fs');
const path = require('path');

function fixFinalDuplicates(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let fixed = false;
    
    // Remove all merge conflict markers
    content = content.replace(/<<<<<<< HEAD[\s\S]*?=======[\s\S]*?>>>>>>> [^\n]+/g, '');
    content = content.replace(/<<<<<<< HEAD[\s\S]*?>>>>>>> [^\n]+/g, '');
    
    // Split into lines for processing
    const lines = content.split('\n');
    const fixedLines = [];
    const seenDeclarations = new Set();
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      
      // Check for duplicate const declarations
      const constMatch = line.match(/const\s+(\w+)\s*:/);
      if (constMatch) {
        const constName = constMatch[1];
        if (seenDeclarations.has(constName)) {
          // Skip duplicate const declaration
          fixed = true;
          continue;
        }
        seenDeclarations.add(constName);
      }
      
      // Check for duplicate function declarations
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
      
      fixedLines.push(line);
    }
    
    const newContent = fixedLines.join('\n');
    
    // Clean up empty lines
    const finalContent = newContent.replace(/\n\s*\n\s*\n/g, '\n\n').replace(/^\s*\n/gm, '');
    
    if (finalContent !== content) {
      fs.writeFileSync(filePath, finalContent, 'utf8');
      console.log(`Fixed final duplicates in: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

function fixAllFinalFiles(dir) {
  const files = fs.readdirSync(dir);
  let fixedCount = 0;
  
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      fixedCount += fixAllFinalFiles(filePath);
    } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
      if (fixFinalDuplicates(filePath)) {
        fixedCount++;
      }
    }
  }
  
  return fixedCount;
}

// Fix all final duplicates
console.log('Fixing final duplicate declarations...');
const fixedCount = fixAllFinalFiles('./app');
console.log(`Fixed final duplicates in ${fixedCount} files`);

console.log('Final duplicate fixing complete!');