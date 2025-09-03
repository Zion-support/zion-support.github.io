#!/usr/bin/env node

const fs = require('fs');

function cleanupSyntax(filePath) {
  console.log(`Final syntax cleanup for: ${filePath}`);
  
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Fix all the common syntax issues
  content = content
    // Fix execSync calls with missing quotes and semicolons
    .replace(/execSync\("([^"]*)"\s*\+\s*([^"]*)\s*\+\s*"([^"]*)",\s*{\s*;\s*/g, 'execSync("$1" + $2 + "$3", {')
    .replace(/execSync\("([^"]*)",\s*{\s*;\s*/g, 'execSync("$1", {')
    // Fix missing semicolons after statements
    .replace(/(\w+)\s*$/gm, (match) => {
      const line = match.trim();
      if (line.match(/^(const|let|var|return|throw|break|continue|console\.|fs\.|this\.|execSync)/) && 
          !line.endsWith(';') && 
          !line.endsWith('{') && 
          !line.endsWith('}') &&
          !line.endsWith(')')) {
        return match + ';';
      }
      return match;
    })
    // Fix object literals
    .replace(/}\s*$/gm, (match, offset, string) => {
      const lines = string.split('\n');
      const lineIndex = string.substring(0, offset).split('\n').length - 1;
      const line = lines[lineIndex].trim();
      
      if (line.match(/^[}\]\)]\s*$/) && !line.endsWith(';')) {
        return match + ';';
      }
      return match;
    })
    // Fix missing semicolons after method calls
    .replace(/(this\.log\([^)]*\))\s*$/gm, '$1;')
    .replace(/(execSync\([^)]*\))\s*$/gm, '$1;');

  fs.writeFileSync(filePath, content);
  console.log(`Cleaned up: ${filePath}`);
}

// Clean up both files
['simple-automation-orchestrator.cjs', 'run-automation-suite.cjs'].forEach(file => {
  if (fs.existsSync(file)) {
    cleanupSyntax(file);
  }
});

console.log('Final syntax cleanup completed!');