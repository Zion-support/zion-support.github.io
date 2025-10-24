const fs = require('fs');
const path = require('path');

// Function to fix JSX fragments in a single page file
function fixJSXFragments(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Check if file has JSX fragments
    if (content.includes('return (\n    <>') && content.includes('</>')) {
      // Replace JSX fragments with div elements
      content = content.replace(
        /return \(\s*<>/g,
        'return (\n    <div>'
      );
      
      content = content.replace(
        /<\/>\s*\);/g,
        '</div>\n  );'
      );
      
      // Write the fixed content back
      fs.writeFileSync(filePath, content);
      console.log(`Fixed JSX fragments: ${filePath}`);
      return true;
    }
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
  return false;
}

// Function to recursively find and fix all page.tsx files
function fixAllPages(dir) {
  const files = fs.readdirSync(dir);
  let fixedCount = 0;
  
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      fixedCount += fixAllPages(filePath);
    } else if (file === 'page.tsx') {
      if (fixJSXFragments(filePath)) {
        fixedCount++;
      }
    }
  }
  
  return fixedCount;
}

// Start fixing from the app directory
const appDir = path.join(__dirname, 'app');
console.log('Starting to fix JSX fragments...');
const totalFixed = fixAllPages(appDir);
console.log(`Fixed ${totalFixed} page files.`);