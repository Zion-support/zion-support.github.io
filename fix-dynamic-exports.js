const fs = require('fs');
const path = require('path');

function fixDynamicExport(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Check if file has dynamic export in wrong position
    if (content.includes('export const dynamic = \'force-dynamic\';') && content.includes('"use client"')) {
      // Remove the dynamic export
      content = content.replace(/export const dynamic = 'force-dynamic';\n\n?/, '');
      
      // Add it after "use client" directive
      content = content.replace(
        /("use client"\n)/,
        '$1\nexport const dynamic = \'force-dynamic\';\n'
      );
      
      fs.writeFileSync(filePath, content);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

function processDirectory(dirPath) {
  const files = fs.readdirSync(dirPath);
  let fixedCount = 0;
  
  for (const file of files) {
    const fullPath = path.join(dirPath, file);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      fixedCount += processDirectory(fullPath);
    } else if (file.endsWith('.tsx')) {
      if (fixDynamicExport(fullPath)) {
        fixedCount++;
      }
    }
  }
  
  return fixedCount;
}

console.log('Fixing dynamic export positions...');
const fixedCount = processDirectory('./app');
console.log(`Fixed ${fixedCount} files`);