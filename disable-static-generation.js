const fs = require('fs');
const path = require('path');

function addDynamicExport(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Check if file already has dynamic export
    if (content.includes('export const dynamic')) {
      return false;
    }
    
    // Add dynamic export after metadata export
    if (content.includes('export const metadata')) {
      content = content.replace(
        /(export const metadata = \{[\s\S]*?\};)/,
        '$1\n\nexport const dynamic = \'force-dynamic\';'
      );
    } else {
      // Add at the beginning of the file
      content = 'export const dynamic = \'force-dynamic\';\n\n' + content;
    }
    
    fs.writeFileSync(filePath, content);
    return true;
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
    } else if (file.endsWith('.tsx') && file !== 'layout.tsx') {
      if (addDynamicExport(fullPath)) {
        fixedCount++;
      }
    }
  }
  
  return fixedCount;
}

console.log('Adding dynamic exports to all pages...');
const fixedCount = processDirectory('./app');
console.log(`Added dynamic export to ${fixedCount} files`);