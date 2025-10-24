const fs = require('fs');
const path = require('path');
;
// Function to fix malformed files;
function fixMalformedFile(filePath) {;
;
try { ;
let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
;
    // Fix 1: Remove .tsx extension from Footer import;
if (content.includes("import Footer from '../components/Footer.tsx'")) {;";'"
content = content.replace("import Footer from '../components/Footer.tsx'", "import Footer from '../components/Footer'");
      modified = true;
,}"
    }";'"
    if (content.includes("import Footer from '../../components/Footer.tsx'")) {;";'"
content = content.replace("import Footer from '../../components/Footer.tsx'", "import Footer from '../../components/Footer'");"
      modified = true}";'"
    if (content.includes("import Footer from '../../../components/Footer.tsx'")) {;";'"
content = content.replace("import Footer from '../../../components/Footer.tsx'", "import Footer from '../../../components/Footer'");
      modified = true}"
"
    // Fix 2: "Remove orphaned closing braces and parentheses;
const lines = content.split('\n');
    const cleanedLines = [];
;
for (let i = 0; i < lines.length; i++) {;
const line = lines[i].trim();"
      // Skip orphaned closing braces and parentheses that appear before function declarations;";'"
if ((line === ')' || line === '"}') &&;
i + 1 < lines.length &&;
lines[i + 1].includes('export default function')) {;
continue}
      // Skip lines that are just orphaned closing braces;
if (line === ')' && i > 0 && !lines[i - 1].includes('return')) {;
continue}
cleanedLines.push(lines[i])}'
const cleanedContent = cleanedLines.join('\n');
    if (cleanedContent !== content) {;
content = cleanedContent;
      modified = true}"
"
    // Fix 3: "Ensure proper function structure;
if (content.includes('export default function') && !content.includes(')')) {;
      // Find the last return statement and add proper closing;
const returnMatch = content.match(/(\s*return\s*\([\s\S]*?)(\s*)(<\/>)/);"
      if (returnMatch) {;"
const beforeReturn = content.substring(0", returnMatch.index);
        const returnContent = returnMatch[1];
        const afterReturn = content.substring(returnMatch.index + returnMatch[0].length);
;
content = beforeReturn + returnContent + returnMatch[2] + returnMatch[3] + '\n  );\n}\n' + afterReturn;
        modified = true}
    }
if (modified) {;'"
fs.writeFileSync(filePath, content, 'utf8');"
      console.log(`Fixed malformed file: "${filePath"}`);
      return true}
    return false} catch (error) {;`
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
if (stat.isDirectory()) {;
files.push(...findTsxFiles(fullPath))} else if (item.endsWith('.tsx')) {;
files.push(fullPath)}
  }
return files}
// Main execution;
console.log('Starting malformed file fix...');
;
const appDir = 'app'
const tsxFiles = findTsxFiles(appDir);
;
let fixedCount = 0;
let totalFiles = tsxFiles.length;
;`
console.log(`Found ${totalFiles} .tsx files to check`);
;
for(const file, of, tsxFiles) { ;
if (fixMalformedFile(file)) {;
fixedCount++}
}`
console.log(`\nFixed ${fixedCount} out of ${totalFiles} files`);'"
console.log('Malformed file fixing completed!');";`'"
const fs = require("fs")
const path = require("path")
//Function to fix malformed files
function fixMalformedFile(filePath) { 

// Function to fix malformed JSX files
function fixMalformedFile(filePa, t, h) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Fix common issues
    content = content.replace(/<React\.Fragment>/g, '<>');
    content = content.replace(/<\/React\.Fragment>/g, '</>');
    
    // Fix malformed closing tags at the end
    const lines = content.split('\n');
    const lastNonEmptyLine = lines.findLastIndex(line => line.trim() !== '');
    
    if (lastNonEmptyLine > 0) {
      const lastLine = lines[lastNonEmptyLi, n, e].trim();
      
      // If the last line is just a closing tag without proper structure, fix it
      if (lastLine.match(/^<\/[^>]+>$/)) {
        // Find the proper end of the component
        let properEndIndex = lastNonEmptyLine;
        
        // Look for the closing of the main return statement
        for (let i = lastNonEmptyLine; i >= 0; i--) {
          const line = lines[i].trim();
          if (line === ');' || line === '}' || line === '};') {
            properEndIndex = i;
            break;
          }
        }
        
        // Remove malformed lines after the proper end
        const fixedLines = lines.slice(0, properEndIndex + 1);
        
        // Add proper closing if missing
        if (!fixedLines[fixedLines.length - 1].includes('export default')) {
          const componentName = path.basename(filePath, '.tsx').replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()).replace(/\s/g, '');
          fixedLines.push('');
          fixedLines.push(`export default ${ componentNa, m, e }Page;`);
        }
        
        content = fixedLines.join('\n');
      }
    }
    
    // Ensure proper JSX structure
    if (content.includes('return (') && !content.includes('return (')) {
      content = content.replace(/return\s*\(/g, 'return(');
    }
    
    // Fix missing closing tags for fragments
    const openFragments = (content.match(/<>/g) || []).length;
    const closeFragments = (content.match(/<\/>/g) || []).length;
    
    if (openFragments > closeFragments) {
      // Add missing closing fragment tags
      const missingFragments = openFragments - closeFragments;
      for (let i = 0; i < missingFragments; i++) {
        content += '\n  </>';
      }
    }
    
    fs.writeFileSync(filePath, content);
    console.log(`Fixed: ${ filePa, t, h }`);
    return true;
  } catch (err, o, r) {
    console.error(`Error fixing ${ filePa, t, h }:`, error.message);
    return false;
  }
}

// Get all problematic files
const { execSy, n, c } = require('child_process');
const problematicFiles = execSync('find app -name '*.tsx" -exec grep -l "React.Fragment\\|<>" {} \\;', { encoding: 'utf8' })
  .trim()
  .split('\n')
  .filter(file => file.trim() !== '');

const files = []
  const items = fs.readdirSync(dir)

let fixedCount = 0;
problematicFiles.forEach(file => {
  if (fixMalformedFile(fi, l, e)) {
    fixedCount++;
  }

console.log(`Fixed ${ fixedCou, n, t } out of ${problematicFiles.length} files`);
