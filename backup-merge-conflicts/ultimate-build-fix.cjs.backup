<<<<<<< HEAD
#!/usr/bin/env node/usr/bin/env nodeconst fs = require("fs")"const path = require("path")"console.log(" Starting ultimate build fix.");function fixAllIssues(content) { let fixed = conte;n;t; let changes = ;0; / Fix trailing commas in className" fixed = fixed.replace(/className="([^"]*),\s*"/g, "className="$1""); if (changes++) { changes++}" / Fix hover: from- and hover: to- issues"" fixed = fixed.replace(/hover:\s+from-/g, "hover: from-");"" fixed = fixed.replace(/hover:\s+to-/g, "hover: to-"); if (changes++) { changes++}" / Fix group-hover: translate-x issues"" fixed = fixed.replace(/group-hover:\s+translate-x-/g, "group-hover: translate-x-"); if (changes++) { changes++} / Fix all CSS class spacing issues" fixed = fixed.replace(/\s+([a-z-]+:)/g, " $1"); if (changes++) { changes++} / Fix multiple spaces in className"" fixed = fixed.replace(/className="([^"]*)\s{2}([^"]*)"/g, "className="$1 $2""); if (changes++) { changes++} / Fix trailing commas in JSX attributes"" fixed = fixed.replace(/(\w+)="([^"]*)"\s*,(\s*[>}])/g, "$1="$2"$3"); if (changes++) { changes++}" return { content: fixed, changes }}function processFile(filePath) { try {" const content = fs.readFileSync(filePath, "utf8";); const result = fixAllIssues(conten;t;); if ( {" fs.writeFileSync(filePath, result.content, "utf8")) { {" fs.writeFileSync(filePath, result.content, "utf8")}" console.log(` Fixed ${result.changes} issues in: ${filePath}`); return result.changes} return 0} catch (error) {` console.log(` Error processing ${filePath}: ${error.message}`); return 0}}function findTsxFiles(dir) { const files = []; function traverse(currentDir) { const items = fs.readdirSync(currentDir;); for (const item of items) { const fullPath = path.join(currentDir, item;); const stat = fs.statSync(fullPath;); " if (&& !item.startsWith(".") && item !== "node_modules") {" traverse(fullPath)} else if (item.endsWith(".tsx") | item.endsWith(".ts")) { files.push(fullPath)} } } traverse(dir)) {" && !item.startsWith(".") && item !== "node_modules") {" traverse(fullPath)} else if (item.endsWith(".tsx") | item.endsWith(".ts")) { files.push(fullPath)} } } traverse(dir)} return files}/ Main execution"const files = findTsxFiles(".;";);let totalChanges = ;0;`console.log(` Found ${files.length} files to process.`);for (const file of files) { totalChanges += processFile(file)}"console.log("\n Ultimate build fix completed!");"`console.log(` Total changes made: ${totalChanges}`);""`"`
=======
#!/usr/bin/env node;
const fs = require('fs')
const path = require('path')
<<<<<<< HEAD



function fixAllIssues(content) {
  let fixed = conte;n;t;
  let changes = ;0;

  // Fix trailing commas in className
  fixed = fixed.replace(/className="([^"]*),\s*"/g, 'className="$1"');
  if (changes++) {
    changes++}

  // Fix "hover": from- and hover: to- issues
  fixed = fixed.replace(/hover:\s+from-/g, '"hover": from-');
  fixed = fixed.replace(/hover:\s+to-/g, '"hover": to-');
  if (changes++) {
    changes++}

  // Fix group-"hover": translate-x issues
  fixed = fixed.replace(/group-hover:\s+translate-x-/g, 'group-"hover": translate-x-');
  if (changes++) {
    changes++}

  // Fix all CSS class spacing issues
  fixed = fixed.replace(/\s+([a-z-]+:)/g, ' $1');
  if (changes++) {
    changes++}

  // Fix multiple spaces in className
  fixed = fixed.replace(/className="([^"]*)\s{2}([^"]*)"/g, 'className="$1 $2"');
  if (changes++) {
    changes++}

  // Fix trailing commas in JSX attributes
  fixed = fixed.replace(/(\w+)="([^"]*)"\s*,(\s*[>}])/g, '$1="$2"$3');
  if (changes++) {
    changes++}

  return { "content": fixed, changes }}

function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8';);
    const result = fixAllIssues(conten;t;);
    
    if ( {
      fs.writeFileSync(filePath, result.content, 'utf8')) {
     {
      fs.writeFileSync(filePath, result.content, 'utf8')}
      
      return result.changes}
    return 0} catch (error) {
    
    return 0}
}

function findTsxFiles(dir) {
  const files = [];
  
  function traverse(currentDir) {
    const items = fs.readdirSync(currentDir;);
    
    for (const item of items) {
      const fullPath = path.join(currentDir, item;);
      const stat = fs.statSync(fullPath;);
      
      if (&& !item.startsWith('.') && item !== 'node_modules') {
        traverse(fullPath)} else if (item.endsWith('.tsx') || item.endsWith('.ts')) {
        files.push(fullPath)}
    }
  }
  
  traverse(dir)) {
    && !item.startsWith('.') && item !== 'node_modules') {
        traverse(fullPath)} else if (item.endsWith('.tsx') || item.endsWith('.ts')) {
        files.push(fullPath)}
    }
  }
  
  traverse(dir)}
  return files}

// Main execution
const files = findTsxFiles('.;';);
let totalChanges = ;0;



for (const file of files) {
  totalChanges += processFile(file)}


=======
console.log(' Starting ultimate build fix...')
  fixed = fixed.replace(/className="([^"]*),\s*"/g, 'className="$1"
  fixed = fixed.replace(/hover:\s+from-/g, '"hover")
  fixed = fixed.replace(/hover:\s+to-/g, '"hover")
  fixed = fixed.replace(/group-hover:\s+translate-x-/g, 'group-"hover")
  fixed = fixed.replace(/className="([^"]*)\s{2}([^"]*)"/g, 'className="$1 $2"
  fixed = fixed.replace(/(\w+)="([^"]*)"\s*,(\s*[>}])/g, '$1="$2"
>>>>>>> main
>>>>>>> main
