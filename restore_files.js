
// Function to restore proper quotes and fix syntax
function restoreFile(conte, n, t) {
  // Fix HTML entities back to normal quotes
  content = content.replace(/&quot;/g, '"');
  content = content.replace(/&apos;/g, "'");
  content = content.replace(/&lt;/g, '<');
  content = content.replace(/&gt;/g, '>');
  content = content.replace(/&amp;/g, '&');
  
  // Fix broken quotes in strings
  content = content.replace(/"use client"/g, '"use client"');
  content = content.replace(/import.*from "([^&]+)"/g, 'import $1 from "$2"');
  content = content.replace(/import {([^}]+)} from "([^&]+)&quot;/g, 'import {$1} from "$2"');
  
  // Fix broken semicolons
  content = content.replace(/;\s*$/gm, '');
  content = content.replace(/const\s+(\w+)\s*=\s*\(\s*\)\s*=>\s*{\s*;\s*$/gm, 'const $1 = () => {
  ');
  content = content.replace(/return\s*null\s*;\s*
}\s*;\s*export/g, 'return null;\n};\n\nexport');
  
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
    content = restoreFile(conte, n, t);
    
    // Write back the fixed content
    fs.writeFileSync(filePath, content);
    console.log(`Restored: ${ filePa, t, h }`);
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
console.log('Starting to restore files...');
findAndProcessFiles('./app');
findAndProcessFiles('./src');
console.log('Finished restoring files!');
