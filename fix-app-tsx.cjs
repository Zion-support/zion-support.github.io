const fs = require('fs');

function fixAppTsx() {
  const filePath = './App.tsx';
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Remove unused imports by commenting them out instead of deleting
  const lines = content.split('\n');
  const newLines = [];
  
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    
    // Skip lines that are just unused imports
    if (line.includes('is defined but never used') || 
        line.includes('is assigned a value but never used')) {
      continue;
    }
    
    // Comment out unused lazy imports
    if (line.includes('const ') && line.includes('Page') && line.includes('=') && line.includes('React.lazy')) {
      // Check if this component is used in routes
      const varName = line.match(/const (\w+)/)?.[1];
      if (varName && !content.includes(`<${varName}`) && !content.includes(`element={<${varName}`)) {
        newLines.push('// ' + line + ' // UNUSED');
        continue;
      }
    }
    
    newLines.push(line);
  }
  
  const newContent = newLines.join('\n');
  if (newContent !== content) {
    fs.writeFileSync(filePath, newContent, 'utf8');
    console.log('Fixed App.tsx - commented out unused imports');
    return true;
  }
  
  return false;
}

fixAppTsx();