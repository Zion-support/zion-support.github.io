const fs = require('fs');
const path = require('path');

// Function to fix common syntax errors in page files
function fixPageFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Fix 1: Add "use client" directive at the top if missing
    if (!content.includes('"use client"') && !content.includes("'use client'")) {
      content = '"use client";\n' + content;
      modified = true;
    }

    // Fix 2: Move "use client" to the top if it's not there
    if (content.includes('"use client"') && !content.startsWith('"use client"')) {
      content = content.replace(/import.*?\n/g, '').replace(/"use client";\n?/g, '');
      content = '"use client";\n' + content;
      modified = true;
    }

    // Fix 3: Fix malformed JSX with empty fragments
    if (content.includes('</>')) {
      content = content.replace(/<>\s*<\/>/g, '<div></div>');
      modified = true;
    }

    // Fix 4: Fix extra closing div tags
    const divOpenCount = (content.match(/<div/g) || []).length;
    const divCloseCount = (content.match(/<\/div>/g) || []).length;
    
    if (divCloseCount > divOpenCount) {
      // Remove extra closing div tags
      const extraDivs = divCloseCount - divOpenCount;
      let closeDivCount = 0;
      content = content.replace(/<\/div>/g, (match) => {
        closeDivCount++;
        if (closeDivCount > divOpenCount) {
          return '';
        }
        return match;
      });
      modified = true;
    }

    // Fix 5: Ensure proper function names
    if (content.includes('export default function PageTsxPage()')) {
      const fileName = path.basename(path.dirname(filePath));
      const properName = fileName.split('-').map(word => 
        word.charAt(0).toUpperCase() + word.slice(1)
      ).join('') + 'Page';
      content = content.replace('export default function PageTsxPage()', `export default function ${properName}()`);
      modified = true;
    }

    if (content.includes('export default function PagePage()')) {
      const fileName = path.basename(path.dirname(filePath));
      const properName = fileName.split('-').map(word => 
        word.charAt(0).toUpperCase() + word.slice(1)
      ).join('') + 'Page';
      content = content.replace('export default function PagePage()', `export default function ${properName}()`);
      modified = true;
    }

    // Fix 6: Add proper page titles
    if (content.includes('Page.Tsx') || content.includes('page.tsx solutions')) {
      const fileName = path.basename(path.dirname(filePath));
      const properTitle = fileName.split('-').map(word => 
        word.charAt(0).toUpperCase() + word.slice(1)
      ).join(' ');
      content = content.replace(/Page\.Tsx/g, properTitle);
      content = content.replace(/page\.tsx solutions/g, `${properTitle} solutions`);
      modified = true;
    }

    if (modified) {
      fs.writeFileSync(filePath, content);
      console.log(`Fixed: ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Get all page.tsx files
const appDir = '/workspace/app';
const pageFiles = [];

function findPageFiles(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat.isDirectory()) {
      findPageFiles(filePath);
    } else if (file === 'page.tsx') {
      pageFiles.push(filePath);
    }
  }
}

findPageFiles(appDir);

console.log(`Found ${pageFiles.length} page files to check`);

let fixedCount = 0;
for (const filePath of pageFiles) {
  if (fixPageFile(filePath)) {
    fixedCount++;
  }
}

console.log(`Fixed ${fixedCount} files`);