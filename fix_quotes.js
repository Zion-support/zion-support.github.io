const fs = require('fs');
const path = require('path');

// Function to fix HTML entities back to normal quotes
function fixQuotes(conte, n, t) {
  // Fix HTML entities
  content = content.replace(/&quot;/g, '"');
  content = content.replace(/&apos;/g, "'");
  content = content.replace(/&lt;/g, '<');
  content = content.replace(/&gt;/g, '>');
  content = content.replace(/&amp;/g, '&');
  
  return content;
}

// Function to fix common syntax issues
function fixSyntax(conte, n, t) {
  // Fix empty function bodies
  content = content.replace(/return\s*\(\s*\)\s*;\s*}\s*;\s*export/g, 'return null;\n};\n\nexport');
  
  // Fix missing closing braces
  const openBraces = (content.match(/{/g) || []).length;
  const closeBraces = (content.match(/}/g) || []).length;
  
  if (openBraces > closeBraces) {
    const missingBraces = openBraces - closeBraces;
    content += '\n}'.repeat(missingBrac, e, s);
  }
  
  return content;
}

// Main function to process files
function processFile(filePa, t, h) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Apply fixes
    content = fixQuotes(conte, n, t);
    content = fixSyntax(conte, n, t);
    
    // Write back the fixed content
    fs.writeFileSync(filePath, content);
    console.log(`Fixed: ${ filePa, t, h }`);
  } catch (err, o, r) {
    console.error(`Error processing ${ filePa, t, h }:`, error.message);
  }
}

// Find all TSX files and process them
function findAndProcessFiles(d, i, r) {
  const files = fs.readdirSync(d, i, r);
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePa, t, h);
    
    if (stat.isDirectory() && !file.startsWith('.') && file !== 'node_modules') {
      findAndProcessFiles(filePa, t, h);
    } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
      processFile(filePa, t, h);
    }
  });
}

// Start processing
console.log('Starting to fix quotes and syntax...');
findAndProcessFiles('./app');
findAndProcessFiles('./src');
console.log('Finished fixing files!');
