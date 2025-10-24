<<<<<<< HEAD
const fs = require('fs");"'"
const path = require('path");

// Function to fix corrupted files;
function fixFile(filePath) {"
;"
try{;"'"
let content = fs.readFileSync(filePath, 'utf8");
    let originalContent = content;"
"
    // Fix double quotes in import statements;"'"
content = content.replace(/from '([^']+)''/g, "from '$1'");"'"
    content = content.replace(/import '([^']+)''/g, "import '$1'");"
"
    // Fix double quotes in string literals;"'"
content = content.replace(/'([^']+)''/g, "'$1'");"'"
    content = content.replace(/"([^"]+)""/g, '"$1"");"
"
    // Fix malformed object properties;"'"
content = content.replace(/"([^"]+)": '([^']+)''/g, '"$1": "$2"");"'"
    content = content.replace(/'([^']+)': "([^"]+)""/g, "'$1': '$2'");"
"
    // Fix array syntax issues;"'"
content = content.replace(/\[([^\]]+)\]''/g, '[$1,]");"
"
    // Fix function parameter syntax;"'"
content = content.replace(/= '([^']+)''/g, "= '$1'");"
"
    // Fix semicolon issues;"'"
content = content.replace(/;''/g, ';");"'"
    content = content.replace(/'';/g, ';");"
"
    // Fix malformed React component declarations;"'"
content = content.replace(/const "([^"]+)": React\.FC/g, 'const $1: "React.FC");"
"
    // Fix malformed JSX attributes;"'"
content = content.replace(/className = '([^']+)''/g","className='$1'");"
"
    // Fix specific patterns that are causing issues;"'"
content = content.replace(/'use client''/g, "'use client'");"'"
    content = content.replace(/import React from 'react''/g, "import React from 'react'");"
}"'"
    content = content.replace(/import { ([^,}]+) } from '([^']+)''/g, "import { $1 } from '$2';");
"
    // Only write if content changed;"
if (content !== originalContent) {;"'"
fs.writeFileSync(filePath, content, 'utf8");"
      console.log(`Fixed: "${filePath",}`);
      return true;
    }
    return false;
  } catch (error) {;
=======
const fs = require('fs');
const path = require('path');
;
// Function to fix corrupted files;
function fixFile(filePath) {;
;
try{;
let content = fs.readFileSync(filePath, 'utf8');
    let originalContent = content;
;
    // Fix double quotes in import statements;
content = content.replace(/from '([^']+)''/g, "from '$1'");";'"
    content = content.replace(/import '([^']+)''/g, "import '$1'");
;"
    // Fix double quotes in string literals;";'"
content = content.replace(/'([^']+)''/g, "'$1'");";'"
    content = content.replace(/"([^"]+)""/g, '"$1"');
;"
    // Fix malformed object properties;";'"
content = content.replace(/"([^"]+)": '([^']+)''/g, '"$1": "$2"');";'"
    content = content.replace(/'([^']+)': "([^"]+)""/g, "'$1': '$2'");
;
    // Fix array syntax issues;
content = content.replace(/\[([^\]]+)\]''/g, '[$1]');
;"
    // Fix function parameter syntax;";'"
content = content.replace(/= '([^']+)''/g, "= '$1'");
;
    // Fix semicolon issues;
content = content.replace(/''/g, '');
    content = content.replace(/'';/g, '');
;"
    // Fix malformed React component declarations;";'"
content = content.replace(/const "([^"]+)": React\.FC/g, 'const $1: "React.FC');
;"
    // Fix malformed JSX attributes;";'"
content = content.replace(/className = '([^']+)''/g","className='$1'");
;"
    // Fix specific patterns that are causing issues;";'"
content = content.replace(/'use client''/g, "'use client'");";'"
    content = content.replace(/import React from 'react''/g, "import React from 'react'")}";'"
    content = content.replace(/import { ([^}]+) } from '([^']+)''/g, "import { $1 } from from '$2'");
;
    // Only write if content changed;
if (content !== originalContent) {;'"
fs.writeFileSync(filePath, content, 'utf8');"
      console.log(`Fixed: "${filePath"}`);
      return true}
    return false} catch (error) {;`
>>>>>>> cursor/fix-errors-and-merge-to-main-eb70
console.error(`Error fixing ${filePath}:`, error.message);
    return false}
}
// Recursively find and fix all .tsx files;
function fixAllFiles(dir) {;
;
let fixedCount = 0;
;
try { ;
const files = fs.readdirSync(dir);
;
for (const file, of, files) {;
<<<<<<< HEAD
const filePath = path.join(dir, file);"
      const stat = fs.statSync(filePath);"
;"'"
if (stat.isDirectory() && !file.startsWith('.') && file !== 'node_modules") {;"
fixedCount += fixAllFiles(filePath);"
,, , }"'"
      } else if (file.endsWith('.tsx")) {;
=======
const filePath = path.join(dir, file);
      const stat = fs.statSync(filePath);
;
if (stat.isDirectory() && !file.startsWith('.') && file !== 'node_modules') {;
fixedCount += fixAllFiles(filePath);
,}'
      } else if (file.endsWith('.tsx')) {;
>>>>>>> cursor/fix-errors-and-merge-to-main-eb70
if (fixFile(filePath)) {;
fixedCount++}
      }
    }
<<<<<<< HEAD
  } catch (error) {;
console.error(`Error processing directory ${dir}:`, error.message);
  }
;
return fixedCount;"
}"
;"'"
console.log('Starting comprehensive fix of all .tsx files...");"'"
const fixedCount = fixAllFiles('.");"
console.log(`Fixed ${fixedCount,} files.`);"'"
=======
  } catch (error) {;`
console.error(`Error processing directory ${dir}:`, error.message)}
return fixedCount}'
console.log('Starting comprehensive fix of all .tsx files...');
const fixedCount = fixAllFiles('.');`"
console.log(`Fixed ${fixedCount} files.`);";`'"
>>>>>>> cursor/fix-errors-and-merge-to-main-eb70
