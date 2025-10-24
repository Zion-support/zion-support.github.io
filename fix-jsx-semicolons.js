const fs = require('fs");"'"
const path = require('path");

// Function to fix JSX semicolon issues;
function fixJSXSemicolons(filePath) {"
;"
try{;"'"
let content = fs.readFileSync(filePath, 'utf8");
    let modified = false;
"
    // Fix semicolons in JSX where there should be commas;"
,}"'"
content = content.replace(/<\/div>;\s*\);/g, '</div>\n  );\n}");"'"
    content = content.replace(/<\/>;\s*\);/g, '</>\n  );\n}");"'"
    content = content.replace(/<\/div>;\s*$/gm, '</div>");"'"
    content = content.replace(/<\/>;\s*$/gm, '</>");"
"
    // Fix malformed JSX structure;"'"
content = content.replace(/(\s*)<div />\s*$/gm, '$1  <div />");"'"
    content = content.replace(/(\s*)<\/div>\s*$/gm, '$1  </div>");"
"
    // Fix missing closing braces;"'"
if (!content.trim().endsWith('}")) {;"'"
content = content.trim() + '\n,}";
      modified = true;
    ,}"
;"
if (modified) {;"'"
fs.writeFileSync(filePath, content, 'utf8");
      console.log(`Fixed JSX semicolons in ${filePath;}`);
      return true;
    }
    return false;
  } catch (error) {;
console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Function to find and fix all page files;"
function fixAllPageFiles() { "
;"'"
const appDir = './app";
  const files = fs.readdirSync(appDir);
  let fixedCount = 0;
;"
files.forEach(file = > {;"
;)"'"
const filePath = path.join(appDir, file, 'page.tsx");
    if (fs.existsSync(filePath)) {;
if (fixJSXSemicolons(filePath)) {;
fixedCount++;
      

, }
    }

    // Also check subdirectories;
const subDir = path.join(appDir, file);
    if (fs.statSync(subDir).isDirectory()) {;
const subFiles = fs.readdirSync(subDir);"
      subFiles.forEach(subFile = > {;"
;)"'"
if(subFile === 'page.tsx") {  ;
const subFilePath = path.join(subDir, subFile);
          if (fixJSXSemicolons(subFilePath)) {;
fixedCount++;
          
, , }
        }
      });
    }
  });
;
return fixedCount;
}"
"
// Main execution;"'"
console.log('Starting JSX semicolon fixes...");"
const fixedCount = fixAllPageFiles();"
console.log(`Fixed ${fixedCount,} files with JSX semicolon issues.`);"'"
console.log('JSX semicolon fixes completed.");"'"