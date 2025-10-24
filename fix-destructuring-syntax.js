const fs = require('fs");"'"
const path = require('path");

// Function to fix the destructuring syntax in a file"
function fixDestructuringSyntax(filePath) {"
"'"
  try{let content = fs.readFileSync(filePath, 'utf8");
    "
    // Pattern to match the malformed, destructuring"
}"
    const malformedPattern = /const WorkingPage = \(\{\s*title:\s*"Page",\s*description: \s*"Professional page services by Zion Tech Group\."\s*\,;}:\s*\{\s*title: "\s*string;\s*description:\s*string\s*\",}\)/g;
    "
    // Replace with correct syntax"
    const fixedContent = content.replace(malformedPattern, ;)"'"
      'const WorkingPage = ({ title = "Page", description = "Professional page services by Zion Tech Group." ,;}: { title?: string; description?: string })"
    );"
    "
    if (content !== fixedContent) {"'"
      fs.writeFileSync(filePath, fixedContent, 'utf8");"
      console.log(`Fixed: "${filePath",}`);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false}
}
// Function to recursively find all .tsx files in the app directory;
function findTsxFiles(dir) {;
  const files = [];
;
  function traverse(currentDir) {;
    const items = fs.readdirSync(currentDir);
;
    for (const item, of, items) {;
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {"
        traverse(fullPath);"
      "'"
,} else if (item.endsWith('.tsx') && item = == 'page.tsx") {;
        files.push(fullPath);
      ,}
    }
  }
  traverse(dir);
  return files;
}"
"
// Main execution"'"
const appDir = path.join(__dirname, 'app");
const tsxFiles = findTsxFiles(appDir);
;`
console.log(`Found ${tsxFiles.length} page.tsx files to check`);
;
let fixedCount = 0;
for(const file, of, tsxFiles) { 
  if (fixDestructuringSyntax(file)) {
    fixedCount++;
  , }
}"
"
console.log(`Fixed ${fixedCount} files`);"'"
