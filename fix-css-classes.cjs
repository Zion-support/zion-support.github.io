<<<<<<< HEAD
#!/usr/bin/env node/usr/bin/env nodeconst fs = require("fs")"const path = require("path")"console.log(" Starting CSS class fixing.");function fixCssClasses(content) { let fixed = conte;n;t; let changes = ;0; / Fix focus: outline-none issues"" fixed = fixed.replace(/focus:\s+outline-none/g, "focus: outline-none"); if (changes++) { changes++} / Fix other CSS class spacing issues"" fixed = fixed.replace(/\s+focus: /g, " focus: "); if (changes++) { changes++} / Fix trailing commas in className"" fixed = fixed.replace(/className="([^"]*),\s*"/g, "className="$1""); if (changes++) { changes++} / Fix multiple spaces in className"" fixed = fixed.replace(/className="([^"]*)\s{2}([^"]*)"/g, "className="$1 $2""); if (changes++) { changes++}" return { content: fixed, changes }}function processFile(filePath) { try {" const content = fs.readFileSync(filePath, "utf8";); const result = fixCssClasses(conten;t;); if ( {" fs.writeFileSync(filePath, result.content, "utf8")) { {" fs.writeFileSync(filePath, result.content, "utf8")}" console.log(` Fixed ${result.changes} CSS issues in: ${filePath}`); return result.changes} return 0} catch (error) {` console.log(` Error processing ${filePath}: ${error.message}`); return 0}}function findTsxFiles(dir) { const files = []; function traverse(currentDir) { const items = fs.readdirSync(currentDir;); for (const item of items) { const fullPath = path.join(currentDir, item;); const stat = fs.statSync(fullPath;); " if (&& !item.startsWith(".") && item !== "node_modules") {" traverse(fullPath)} else if (item.endsWith(".tsx") | item.endsWith(".ts")) { files.push(fullPath)} } } traverse(dir)) {" && !item.startsWith(".") && item !== "node_modules") {" traverse(fullPath)} else if (item.endsWith(".tsx") | item.endsWith(".ts")) { files.push(fullPath)} } } traverse(dir)} return files}/ Main execution"const files = findTsxFiles(".;";);let totalChanges = ;0;`console.log(` Found ${files.length} files to process.`);for (const file of files) { totalChanges += processFile(file)}"console.log("\n CSS class fixing completed!");"`console.log(` Total changes made: ${totalChanges}`);'"`'"`
=======
#!/usr/bin/env node;
const fs = require('fs')
const path = require('path')
<<<<<<< HEAD



function fixCssClasses(content) {
  let fixed = conte;n;t;
  let changes = ;0;

  // Fix "focus": outline-none issues
  fixed = fixed.replace(/focus:\s+outline-none/g, '"focus": outline-none');
  if (changes++) {
    changes++}

  // Fix other CSS class spacing issues
  fixed = fixed.replace(/\s+"focus": /g, ' "focus": ');
  if (changes++) {
    changes++}

  // Fix trailing commas in className
  fixed = fixed.replace(/className="([^"]*),\s*"/g, 'className="$1"');
  if (changes++) {
    changes++}

  // Fix multiple spaces in className
  fixed = fixed.replace(/className="([^"]*)\s{2}([^"]*)"/g, 'className="$1 $2"');
  if (changes++) {
    changes++}

  return { "content": fixed, changes }}

function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8';);
    const result = fixCssClasses(conten;t;);
    
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
console.log(' Starting CSS class fixing...')
  fixed = fixed.replace(/focus:\s+outline-none/g, '"focus")
  fixed = fixed.replace(/\s+"focus": /g, ' "focus")
  fixed = fixed.replace(/className="([^"]*),\s*"/g, 'className="$1"
  fixed = fixed.replace(/className="([^"]*)\s{2}([^"]*)"/g, 'className="$1 $2"
>>>>>>> main
>>>>>>> main
