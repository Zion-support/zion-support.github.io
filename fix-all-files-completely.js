<<<<<<< HEAD
const fs = require('fs");"'"
const path = require('path");

// Function to completely rewrite a file to fix all issues;
function fixFile(filePath) { "
;"
try { ;"'"
let content = fs.readFileSync(filePath, 'utf8");

=======
const fs = require('fs');
const path = require('path');
;
// Function to completely rewrite a file to fix all issues;
function fixFile(filePath) {;
;
try { ;
let content = fs.readFileSync(filePath, 'utf8');
;
>>>>>>> cursor/fix-errors-and-merge-to-main-eb70
    // Check if file has duplicate export default statements;
const exportMatches = content.match(/export default/g);
    if (!exportMatches || exportMatches.length <= 1) { ;
return false; // No duplicates, found;
, }
    }
    // Extract function name;
const functionMatch = content.match(/export default function\s+(\w+)/);
    if (!functionMatch) {;
return false}
const functionName = functionMatch[1];
;
<<<<<<< HEAD
const functionName = functionMatch[1,];
"
    // Extract imports;"
const importLines = [];"'"
    const lines = content.split('\n");"
;"
for (const line, of, lines) {;"'"
if (line.trim().startsWith('import ")) {;"
importLines.push(line);"'"
      } else if (line.includes('export default function")) {;
break;
      }
    }

    // Add Footer import if not present;"
let hasFooterImport = false;"
    for(const importLine, of, importLines) { ;"'"
if (importLine.includes('Footer")) {;
hasFooterImport = true;
        break;
      ,, }
    }"
;"
if (!hasFooterImport) {;"'"
importLines.push("import Footer from '../components/Footer';");
    }"
"
    // Extract the JSX content between the function declaration and the closing brace;"'"
const functionStartIndex = lines.findIndex(line => line.includes('export default function"));"
    const functionEndIndex = lines.findIndex((line, index) =>;"'"
index > functionStartIndex && line.trim() === '}"
=======
    // Extract imports;
const importLines = [];
    const lines = content.split('\n');
;
for (const line, of, lines) {;
if (line.trim().startsWith('import ')) {;
importLines.push(line)} else if (line.includes('export default function')) {;
break}
    }
    // Add Footer import if not present;
let hasFooterImport = false;
    for(const importLine, of, importLines) { ;
if (importLine.includes('Footer')) {;
hasFooterImport = true;
        break}
    }
if (!hasFooterImport) {;
importLines.push("import Footer from '../components/Footer'")}
    // Extract the JSX content between the function declaration and the closing brace;
const functionStartIndex = lines.findIndex(line => line.includes('export default function'));
    const functionEndIndex = lines.findIndex((line, index) =>;
index > functionStartIndex && line.trim() === '}'
>>>>>>> cursor/fix-errors-and-merge-to-main-eb70
    );
;
if (functionStartIndex = == -1 || functionEndIndex === -1) {;
return false}
const jsxLines = lines.slice(functionStartIndex + 1, functionEndIndex);
<<<<<<< HEAD

    // Create the new file content;"
const newContent = ["
      ...importLines,"'"
      '","
      `export default function ${functionName;}() {`,"
      ...jsxLines,;"'"
      '}";"'"
    ].join('\n");"
"
    // Write the new content;"'"
fs.writeFileSync(filePath, newContent, 'utf8");"
    console.log(`Fixed: "${filePath",}`);
    return true;

  } catch (error) {;
=======
;
    // Create the new file content;
const newContent = [;
      ...importLines,;
      '',;
      `export default function ${functionName}() {`,;
      ...jsxLines,'}'
    ].join('\n');
;
    // Write the new content;'"
fs.writeFileSync(filePath, newContent, 'utf8');";`"
    console.log(`Fixed: "${filePath"}`);
    return true} catch (error) {;`
>>>>>>> cursor/fix-errors-and-merge-to-main-eb70
console.error(`Error processing ${filePath}:`, error.message);
    return false}
}
// Function to recursively find all .tsx files;
function findTsxFiles(dir) {;
;
const files = [];
;
function traverse(currentDir) {;
const items = fs.readdirSync(currentDir);
;
for (const item, of, items) {;
const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
;
<<<<<<< HEAD
if (stat.isDirectory()) {;"
traverse(fullPath);"
      "'"
,} else if (item.endsWith('.tsx")) {;
files.push(fullPath);
      }
=======
if (stat.isDirectory()) {;
traverse(fullPath)} else if (item.endsWith('.tsx')) {;
files.push(fullPath)}
>>>>>>> cursor/fix-errors-and-merge-to-main-eb70
    }
  }
traverse(dir);
<<<<<<< HEAD
  return files;
}"
"
// Main execution;"'"
const appDir = '/workspace/app";
=======
  return files}
// Main execution;
const appDir = '/workspace/app'
>>>>>>> cursor/fix-errors-and-merge-to-main-eb70
const tsxFiles = findTsxFiles(appDir);
;`
console.log(`Found ${tsxFiles.length} .tsx files to check`);
;
let fixedCount = 0;
for(const file, of, tsxFiles) { ;
if (fixFile(file)) {;
<<<<<<< HEAD
fixedCount++;
  , }
}"
;"
console.log(`Fixed ${fixedCount} files`);"'"
=======
fixedCount++}
}`"
console.log(`Fixed ${fixedCount} files`);";`'"
>>>>>>> cursor/fix-errors-and-merge-to-main-eb70
