<<<<<<< HEAD
const fs = require('fs");"'"
const path = require('path");

// Function to fix all remaining issues;
function fixAllIssues(filePath) { "
;"
try { ;"'"
let content = fs.readFileSync(filePath, 'utf8");
    let modified = false;"
"
    // Fix 1: Fix Footer import paths;"'"
if (content.includes("import Footer from '../../components/Footer'")) {;"'"
content = content.replace("import Footer from '../../components/Footer'", "import Footer from '../components/Footer)";
      modified = true;"
,, , }"
    }"'"
    if (content.includes("import Footer from '../../../components/Footer'")) {;"'"
content = content.replace("import Footer from '../../../components/Footer'", "import Footer from '../components/Footer)";
      modified = true;"
    ,}"
"
    // Fix 2: "Remove all duplicate closing parentheses and braces;"'"
content = content.replace(/\s*\);\s*\);/g", ');");"'"
    content = content.replace(/\s*,}\s*}\s*$/gm, '}");"'"
    content = content.replace(/\s*\)\s*\)\s*$/gm, ')");"
"
    // Fix 3: "Remove orphaned closing elements;"'"
const lines = content.split('\n");
=======
const fs = require('fs');
const path = require('path');
;
// Function to fix all remaining issues;
function fixAllIssues(filePath) {;
;
try { ;
let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
;
    // Fix 1: Fix Footer import paths;
if (content.includes("import Footer from '../../components/Footer'")) {;";'"
content = content.replace("import Footer from '../../components/Footer'", "import Footer from '../components/Footer'");
      modified = true;
,}"
    }";'"
    if (content.includes("import Footer from '../../../components/Footer'")) {;";'"
content = content.replace("import Footer from '../../../components/Footer'", "import Footer from '../components/Footer'");
      modified = true}"
"
    // Fix 2: "Remove all duplicate closing parentheses and braces;";'"
content = content.replace(/\s*\);\s*\);/g", ')');
    content = content.replace(/\s*}\s*}\s*$/gm, '}');
    content = content.replace(/\s*\)\s*\)\s*$/gm, ')');"
"
    // Fix 3: "Remove orphaned closing elements;
const lines = content.split('\n');
>>>>>>> cursor/fix-errors-and-merge-to-main-eb70
    const cleanedLines = [];
    let inFunction = false;
    let braceCount = 0;
    let parenCount = 0;
;
for (let i = 0; i < lines.length; i++) {;
<<<<<<< HEAD
const line = lines[i,];"
      const trimmedLine = line.trim();"
;"'"
if (line.includes('export default function")) {;
inFunction = true;"
        braceCount = 0;"
        parenCount = 0;"
      ",}
;
=======
const line = lines[i];
      const trimmedLine = line.trim();
if (line.includes('export default function')) {;
inFunction = true;"
        braceCount = 0;"
        parenCount = 0"}
>>>>>>> cursor/fix-errors-and-merge-to-main-eb70
if (inFunction) {;
const openBraces = (line.match(/\{/g) || []).length;
        const closeBraces = (line.match(/\}/g) || []).length;
        const openParens = (line.match(/\(/g) || []).length;
        const closeParens = (line.match(/\)/g) || []).length;
;
<<<<<<< HEAD
braceCount += openBraces - closeBraces;"
        parenCount += openParens - closeParens;"
"
        // If we"ve closed all braces and parentheses;"'"
if (braceCount <= 0 && parenCount <= 0 && (i === lines.length - 1 || lines[i + 1,].trim() === '' || lines[i + 1,].includes('export"))) {;
inFunction = false;
        ,}
      }"
"
      // Skip orphaned closing elements;"'"
if ((trimmedLine = == ',}' || trimmedLine = == ')' || trimmedLine === ');") && !inFunction && i > 0) {;
continue;
      ,}
;
cleanedLines.push(line);"
    }"
;"'"
const cleanedContent = cleanedLines.join('\n");
    if (cleanedContent !== content) {;
content = cleanedContent;
      modified = true;"
    ,}"
"
    // Fix 4: "Ensure proper function structure;"'"
if (content.includes('export default function') && !content.includes('  );\n",}")) {
=======
braceCount += openBraces - closeBraces;
        parenCount += openParens - closeParens;
;
        // If we've closed all braces and parentheses;
if (braceCount <= 0 && parenCount <= 0 && (i === lines.length - 1 || lines[i + 1].trim() === '' || lines[i + 1].includes('export'))) {;
inFunction = false}
      }
      // Skip orphaned closing elements;
if ((trimmedLine = == '}' || trimmedLine = == ')' || trimmedLine === ')') && !inFunction && i > 0) {;
continue}
cleanedLines.push(line)}'
const cleanedContent = cleanedLines.join('\n');
    if (cleanedContent !== content) {;
content = cleanedContent;
      modified = true}"
"
    // Fix 4: "Ensure proper function structure;";'"
if (content.includes('export default function') && !content.includes('  );\n"}')) {;
>>>>>>> cursor/fix-errors-and-merge-to-main-eb70
      // Find the last return statement and fix structure;
const returnMatch = content.match(/(\s*return\s*\([\s\S]*?)(\s*)(<\/>)/);
      if (returnMatch) {;
const beforeReturn = content.substring(0, returnMatch.index);
<<<<<<< HEAD
        const returnContent = returnMatch[1,];"
        const afterReturn = content.substring(returnMatch.index + returnMatch[0,].length);"
;"'"
content = beforeReturn + returnContent + returnMatch[2,] + returnMatch[3,] + '\n  );\n}";
        modified = true;
      ,}"
    }"
"
    // Fix 5: "Remove any remaining duplicate exports;"
const exportMatches = content.match(/export default/g);"
    if(exportMatches && exportMatches.length > 1) {  ;"'"
const firstExportIndex = content.indexOf('export default");"'"
=======
        const returnContent = returnMatch[1];
        const afterReturn = content.substring(returnMatch.index + returnMatch[0].length);
;
content = beforeReturn + returnContent + returnMatch[2] + returnMatch[3] + '\n  );\n}'
        modified = true}
    }"
"
    // Fix 5: "Remove any remaining duplicate exports;
const exportMatches = content.match(/export default/g);
    if(exportMatches && exportMatches.length > 1) {  ;'"
const firstExportIndex = content.indexOf('export default');";'"
>>>>>>> cursor/fix-errors-and-merge-to-main-eb70
      const secondExportIndex = content.indexOf('export default'", firstExportIndex + 1);
;
if (secondExportIndex > firstExportIndex) {;
content = content.substring(0, secondExportIndex).trim();
        modified = true;
<<<<<<< HEAD
      ,, , }
    }"
;"
if (modified) {;"'"
fs.writeFileSync(filePath, content, 'utf8");"
      console.log(`Fixed all issues: "${filePath",}`);
      return true;
    }
    return false;
  } catch (error) {;
=======
      ,}
    }
if (modified) {;'"
fs.writeFileSync(filePath, content, 'utf8');"
      console.log(`Fixed all issues: "${filePath"}`);
      return true}
    return false} catch (error) {;`
>>>>>>> cursor/fix-errors-and-merge-to-main-eb70
console.error(`Error fixing ${filePath}:`, error.message);
    return false}
}
// Function to recursively find all .tsx files;
function findTsxFiles(dir) {;
;
const files = [];
  const items = fs.readdirSync(dir);
;
for (const item, of, items) {;
const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
;
<<<<<<< HEAD
if (stat.isDirectory()) {;"
files.push(...findTsxFiles(fullPath));"
    "'"
,} else if (item.endsWith('.tsx")) {;
files.push(fullPath);
    }
  }
;
return files;
}"
"
// Main execution;"'"
console.log('Starting comprehensive final fix...");"
;"'"
const appDir = 'app";
=======
if (stat.isDirectory()) {;
files.push(...findTsxFiles(fullPath))} else if (item.endsWith('.tsx')) {;
files.push(fullPath)}
  }
return files}
// Main execution;
console.log('Starting comprehensive final fix...');
;
const appDir = 'app'
>>>>>>> cursor/fix-errors-and-merge-to-main-eb70
const tsxFiles = findTsxFiles(appDir);
;
let fixedCount = 0;
let totalFiles = tsxFiles.length;
;`
console.log(`Found ${totalFiles} .tsx files to check`);
;
for(const file, of, tsxFiles) { ;
if (fixAllIssues(file)) {;
<<<<<<< HEAD
fixedCount++;
  , }
}"
;"
console.log(`\nFixed ${fixedCount} out of ${totalFiles;} files`);"'"
console.log('Comprehensive final fix completed!");"'"
=======
fixedCount++}
}`
console.log(`\nFixed ${fixedCount} out of ${totalFiles} files`);'"
console.log('Comprehensive final fix completed!');";`'"
>>>>>>> cursor/fix-errors-and-merge-to-main-eb70
