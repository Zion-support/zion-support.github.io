const fs = require('fs');
const path = require('path');

function cleanFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Check if file has duplicate imports and handlers
    const importMatches = content.match(/import.*from ['"]next['"];?/g);
    const handlerMatches = content.match(/export default.*function handler/g);
    
    if (importMatches && importMatches.length > 1 && handlerMatches && handlerMatches.length > 1) {
      // Find the first complete handler function
      const firstImportIndex = content.indexOf('import');
      const firstHandlerIndex = content.indexOf('export default');
      
      // Find the end of the first handler function
      let braceCount = 0;
      let endIndex = firstHandlerIndex;
      let inString = false;
      let stringChar = '';
      
      for (let i = firstHandlerIndex; i < content.length; i++) {
        const char = content[i];
        
        if (!inString && (char === '"' || char === "'")) {
          inString = true;
          stringChar = char;
        } else if (inString && char === stringChar && content[i-1] !== '\\') {
          inString = false;
        } else if (!inString) {
          if (char === '{') braceCount++;
          else if (char === '}') braceCount--;
          
          if (braceCount === 0 && i > firstHandlerIndex) {
            endIndex = i + 1;
            break;
          }
        }
      }
      
      // Keep only the first complete handler
      const cleanContent = content.substring(firstImportIndex, endIndex);
      fs.writeFileSync(filePath, cleanContent);
      console.log(`Cleaned: ${filePath}`);
    }
  } catch (error) {
    console.error(`Error cleaning ${filePath}:`, error.message);
  }
}

function walkDir(dir) {
  const files = fs.readdirSync(dir);
  
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      walkDir(filePath);
    } else if (file.endsWith('.ts') && !file.endsWith('.d.ts')) {
      cleanFile(filePath);
    }
  }
}

// Start from the API directory
walkDir('/workspace/pages/api');
console.log('Duplicate cleanup complete!');