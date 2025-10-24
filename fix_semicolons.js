const fs = require('fs');
const path = require('path');

// Function to fix semicolons in wrong places
function fixSemicolons(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Fix semicolons in JSX text content
    content = content.replace(/([^;])\s*;\s*<\/h1>/g, '$1</h1>');
    content = content.replace(/([^;])\s*;\s*<\/p>/g, '$1</p>');
    content = content.replace(/([^;])\s*;\s*<\/span>/g, '$1</span>');
    content = content.replace(/([^;])\s*;\s*<\/div>/g, '$1</div>');
    content = content.replace(/([^;])\s*;\s*<\/button>/g, '$1</button>');
    content = content.replace(/([^;])\s*;\s*<\/a>/g, '$1</a>');
    
    // Fix semicolons after JSX elements
    content = content.replace(/<Link\s*;\s*/g, '<Link ');
    content = content.replace(/<button\s*;\s*/g, '<button ');
    content = content.replace(/<div\s*;\s*/g, '<div ');
    content = content.replace(/<span\s*;\s*/g, '<span ');
    content = content.replace(/<h1\s*;\s*/g, '<h1 ');
    content = content.replace(/<h2\s*;\s*/g, '<h2 ');
    content = content.replace(/<h3\s*;\s*/g, '<h3 ');
    content = content.replace(/<p\s*;\s*/g, '<p ');
    
    // Fix semicolons in className attributes
    content = content.replace(/className\s*=\s*["']([^"']*);\s*["']/g, 'className="$1"');
    
    // Fix semicolons in href attributes
    content = content.replace(/href\s*=\s*["']([^"']*);\s*["']/g, 'href="$1"');
    
    // Fix semicolons in other common attributes
    content = content.replace(/title\s*=\s*["']([^"']*);\s*["']/g, 'title="$1"');
    content = content.replace(/alt\s*=\s*["']([^"']*);\s*["']/g, 'alt="$1"');
    
    // Fix semicolons in text content that should not have them
    content = content.replace(/([a-zA-Z0-9\s])\s*;\s*$/gm, '$1');
    
    // Write the fixed content back
    fs.writeFileSync(filePath, content);
    console.log(`Fixed: ${filePath}`);
    return true;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Function to recursively find and fix all TypeScript/React files
function fixAllFiles(dir) {
  const files = fs.readdirSync(dir);
  let fixedCount = 0;
  
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory() && !file.startsWith('.') && file !== 'node_modules') {
      fixedCount += fixAllFiles(filePath);
    } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
      if (fixSemicolons(filePath)) {
        fixedCount++;
      }
    }
  }
  
  return fixedCount;
}

// Start fixing from the app directory
console.log('Starting to fix semicolon issues...');
const fixedCount = fixAllFiles('./app');
console.log(`Fixed ${fixedCount} files`);

// Also fix components directory
const componentsFixedCount = fixAllFiles('./components');
console.log(`Fixed ${componentsFixedCount} files in components`);

console.log('Semicolon fixing completed!');