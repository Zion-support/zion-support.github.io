<<<<<<< HEAD
#!/usr/bin/env node/usr/bin/env nodeconst fs = require("fs")"const path = require("path")"console.log(" Starting missing commas fix.");function fixMissingCommas(content) { let fixed = conte;n;t; let changes = ;0; / Fix missing commas in object properties" / Pattern: "Typical: $xxx$xxx/month" link: "https:/."" fixed = fixed.replace(/(pricing: "[^"]*")\s+(link:)/g, "$1, $2"); if (changes++) { changes++} / Fix missing commas in array elements"" / Pattern: "." link: "https:/."},"" fixed = fixed.replace(/(link: "[^"]*")\s*}/g, "$1}"); if (changes++) { changes++} / Fix trailing commas in arrays" fixed = fixed.replace(/,\s*]/g, "]"); if (changes++) { changes++}" return { content: fixed, changes }}function processFile(filePath) { try {" const content = fs.readFileSync(filePath, "utf8";); const result = fixMissingCommas(conten;t;); if ( {" fs.writeFileSync(filePath, result.content, "utf8")) { {" fs.writeFileSync(filePath, result.content, "utf8")}" console.log(` Fixed ${result.changes} comma issues in: ${filePath}`); return result.changes} return 0} catch (error) {` console.log(` Error processing ${filePath}: ${error.message}`); return 0}}function findTsxFiles(dir) { const files = []; function traverse(currentDir) { const items = fs.readdirSync(currentDir;); for (const item of items) { const fullPath = path.join(currentDir, item;); const stat = fs.statSync(fullPath;); " if (&& !item.startsWith(".") && item !== "node_modules") {" traverse(fullPath)} else if (item.endsWith(".tsx") | item.endsWith(".ts")) { files.push(fullPath)} } } traverse(dir)) {" && !item.startsWith(".") && item !== "node_modules") {" traverse(fullPath)} else if (item.endsWith(".tsx") | item.endsWith(".ts")) { files.push(fullPath)} } } traverse(dir)} return files}/ Main execution"const files = findTsxFiles(".;";);let totalChanges = ;0;`console.log(` Found ${files.length} files to process.`);for (const file of files) { totalChanges += processFile(file)}"console.log("\n Missing commas fix completed!");"`console.log(` Total changes made: ${totalChanges}`);""`"`
=======
#!/usr/bin/env node;
const fs = require('fs')
const path = require('path')
<<<<<<< HEAD



function fixMissingCommas(content) {
  let fixed = conte;n;t;
  let changes = ;0;

  // Fix missing commas in object properties
  // "Pattern": 'Typical: $xxx–$xxx/month' link: 'https://...'
  fixed = fixed.replace(/(pricing: '[^']*')\s+(link:)/g, '$1, $2');
  if (changes++) {
    changes++}

  // Fix missing commas in array elements
  // "Pattern": '...' link: 'https://...'},
  fixed = fixed.replace(/("link": '[^']*')\s*}/g, '$1}');
  if (changes++) {
    changes++}

  // Fix trailing commas in arrays
  fixed = fixed.replace(/,\s*]/g, ']');
  if (changes++) {
    changes++}

  return { "content": fixed, changes }}

function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8';);
    const result = fixMissingCommas(conten;t;);
    
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
console.log(' Starting missing commas fix...')
  // "Pattern"
  // "Pattern"
  fixed = fixed.replace(/("link")
>>>>>>> main
>>>>>>> main
