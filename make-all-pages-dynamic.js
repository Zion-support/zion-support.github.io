const fs = require('fs');
const path = require('path');

// Function to recursively find all page.tsx files
function findPageFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory() && !file.startsWith('.') && file !== 'node_modules') {
      findPageFiles(filePath, fileList);
    } else if (file === 'page.tsx') {
      fileList.push(filePath);
    }
  });
  
  return fileList;
}

// Function to make a page dynamic
function makePageDynamic(pagePath) {
  try {
    let content = fs.readFileSync(pagePath, 'utf8');
    
    // Check if dynamic export already exists
    if (content.includes('export const dynamic')) {
      return;
    }
    
    // Add dynamic export after imports
    const lines = content.split('\n');
    let insertIndex = 0;
    
    // Find the last import statement
    for (let i = 0; i < lines.length; i++) {
      if (lines[i].startsWith('import ')) {
        insertIndex = i + 1;
      }
    }
    
    // Insert dynamic export
    lines.splice(insertIndex, 0, "export const dynamic = 'force-dynamic';");
    content = lines.join('\n');
    
    fs.writeFileSync(pagePath, content, 'utf8');
    console.log(`✅ Made dynamic: ${pagePath}`);
    
  } catch (error) {
    console.error(`❌ Error making ${pagePath} dynamic:`, error.message);
  }
}

// Main execution
console.log('🔧 Making all pages dynamic...');

const appDir = path.join(__dirname, 'app');
const pageFiles = findPageFiles(appDir);

console.log(`Found ${pageFiles.length} page files`);

pageFiles.forEach(pagePath => {
  makePageDynamic(pagePath);
});

console.log('✅ All pages made dynamic!');