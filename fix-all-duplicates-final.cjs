const fs = require('fs');
const path = require('path');

function fixAllDuplicates(filePath) {
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
    let inFunction = false;
    let functionName = '';
    let braceCount = 0;
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      
      // Track function declarations
      const functionMatch = line.match(/^(export\s+default\s+)?function\s+(\w+)\s*\(/);
      if (functionMatch) {
        const funcName = functionMatch[2];
        if (seenDeclarations.has(funcName)) {
          // Skip duplicate function declaration
          fixed = true;
          inFunction = true;
          functionName = funcName;
          braceCount = 0;
          continue;
        }
        seenDeclarations.add(funcName);
        inFunction = true;
        functionName = funcName;
        braceCount = 0;
      }
      
      // Track const declarations
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
      
      // Track interface declarations
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
      
      // Track brace count for function scope
      if (inFunction) {
        braceCount += (line.match(/\{/g) || []).length;
        braceCount -= (line.match(/\}/g) || []).length;
        
        if (braceCount <= 0 && line.includes('}')) {
          inFunction = false;
          functionName = '';
        }
      }
      
      // Skip lines inside duplicate functions
      if (inFunction && functionName) {
        continue;
      }
      
      fixedLines.push(line);
    }
    
    const newContent = fixedLines.join('\n');
    
    // Additional cleanup
    let finalContent = newContent;
    
    // Remove duplicate export default statements
    const exportDefaults = finalContent.match(/export\s+default\s+/g);
    if (exportDefaults && exportDefaults.length > 1) {
      const lines = finalContent.split('\n');
      let exportCount = 0;
      const fixedLines = [];
      
      for (let i = 0; i < lines.length; i++) {
        const line = lines[i];
        if (line.trim().startsWith('export default')) {
          exportCount++;
          if (exportCount < exportDefaults.length) {
            fixed = true;
            continue;
          }
        }
        fixedLines.push(line);
      }
      
      finalContent = fixedLines.join('\n');
    }
    
    // Remove duplicate imports
    const importLines = finalContent.split('\n');
    const seenImports = new Set();
    const uniqueImports = [];
    
    for (const line of importLines) {
      if (line.trim().startsWith('import ')) {
        if (!seenImports.has(line.trim())) {
          seenImports.add(line.trim());
          uniqueImports.push(line);
        } else {
          fixed = true;
        }
      } else {
        uniqueImports.push(line);
      }
    }
    
    finalContent = uniqueImports.join('\n');
    
    // Clean up empty lines
    finalContent = finalContent.replace(/\n\s*\n\s*\n/g, '\n\n');
    finalContent = finalContent.replace(/^\s*\n/gm, '');
    
    if (fixed) {
      fs.writeFileSync(filePath, finalContent, 'utf8');
      console.log(`Fixed duplicates in: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

function fixAllFiles(dir) {
  const files = fs.readdirSync(dir);
  let fixedCount = 0;
  
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      fixedCount += fixAllFiles(filePath);
    } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
      if (fixAllDuplicates(filePath)) {
        fixedCount++;
      }
    }
  }
  
  return fixedCount;
}

// Fix all duplicates in app directory
console.log('Fixing all duplicate declarations in app directory...');
const fixedCount = fixAllFiles('./app');
console.log(`Fixed duplicates in ${fixedCount} files`);

console.log('All duplicate fixing complete!');