const fs = require('fs');
const path = require('path');

// Function to fix common syntax errors in page files
function fixPageFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Fix common syntax errors
    content = content
      // Remove extra semicolons after imports
      .replace(/import\s+[^;]+;';';/g, (match) => match.replace(/;';';$/, ''))
      // Fix meta description quotes
      .replace(/content="[^"]*" \/>";";/g, (match) => match.replace(/ \/>";";$/, ' />'))
      // Fix className quotes
      .replace(/className="[^"]*">";";/g, (match) => match.replace(/>";";$/, '>'))
      // Fix text content quotes
      .replace(/>[^<]*<[^>]*>";";/g, (match) => match.replace(/>";";$/, '>'))
      // Fix closing tags
      .replace(/<\/[^>]+>";";/g, (match) => match.replace(/";";$/, ''))
      // Fix React.Fragment closing
      .replace(/<\/React\.Fragment>";";/g, '</React.Fragment>')
      // Fix function closing
      .replace(/\}\);";/g, '});')
      // Clean up any remaining double semicolons
      .replace(/;;+/g, ';')
      // Fix any remaining quote issues
      .replace(/";";/g, '')
      .replace(/';';/g, '');
    
    fs.writeFileSync(filePath, content);
    console.log(`Fixed: ${filePath}`);
    return true;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Function to recursively find and fix all page.tsx files
function fixAllPageFiles(dir) {
  const files = fs.readdirSync(dir);
  let fixedCount = 0;
  
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      fixedCount += fixAllPageFiles(filePath);
    } else if (file === 'page.tsx') {
      if (fixPageFile(filePath)) {
        fixedCount++;
      }
    }
  }
  
  return fixedCount;
}

// Start fixing from the app directory
const appDir = path.join(__dirname, 'app');
console.log('Starting to fix page files...');
const totalFixed = fixAllPageFiles(appDir);
console.log(`Fixed ${totalFixed} page files`);