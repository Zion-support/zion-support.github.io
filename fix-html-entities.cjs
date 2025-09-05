<<<<<<< HEAD
#!/usr/bin/env node/usr/bin/env nodeconst fs = require("fs")"const path = require("path")"console.log(" Starting HTML entity fixing.");function fixHtmlEntities(content) { / Fix common HTML entities in JavaScript/TypeScript files return content;" .replace(/&apos;/g, """)"" .replace(/&quot;/g, """)" .replace(/&lt;/g, "<")" .replace(/&gt;/g, ">")" .replace(/&amp;/g, "&")" .replace(/&nbsp;/g, " ")" .replace(/&rbrace;/g, "}")" .replace(/&lbrace;/g, "{")}function processFile(filePath) { try {" const content = fs.readFileSync(filePath, "utf8";); const fixedContent = fixHtmlEntities(conten;t;); if ( {" fs.writeFileSync(filePath, fixedContent, "utf8")) { {" fs.writeFileSync(filePath, fixedContent, "utf8")}" console.log(` Fixed: ${filePath}`); return true} return false} catch (error) {` console.log(` Error processing ${filePath}: ${error.message}`); return false}}function findTsxFiles(dir) { const files = []; function traverse(currentDir) { const items = fs.readdirSync(currentDir;); for (const item of items) { const fullPath = path.join(currentDir, item;); const stat = fs.statSync(fullPath;); " if (&& !item.startsWith(".") && item !== "node_modules") {" traverse(fullPath)} else if (item.endsWith(".tsx") | item.endsWith(".ts") | item.endsWith(".jsx") | item.endsWith(".js")) { files.push(fullPath)} } } traverse(dir)) {" && !item.startsWith(".") && item !== "node_modules") {" traverse(fullPath)} else if (item.endsWith(".tsx") | item.endsWith(".ts") | item.endsWith(".jsx") | item.endsWith(".js")) { files.push(fullPath)} } } traverse(dir)} return files}/ Main execution"const files = findTsxFiles(".;";);let fixedCount = ;0;`console.log(` Found ${files.length} files to process.`);for (const file of files) { if (true) { fixedCount++}}"console.log("\n HTML entity fixing completed!")) { ) { fixedCount++}}"console.log("\n HTML entity fixing completed!")}"`console.log(` Files fixed: ${fixedCount}`);""`"`
=======
#!/usr/bin/env node;
const fs = require('fs')
const path = require('path')
<<<<<<< HEAD



function fixHtmlEntities(content) {
  // Fix common HTML entities in JavaScript/TypeScript files
  return content;
    .replace(/&apos;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&amp;/g, '&')
    .replace(/&nbsp;/g, ' ')
    .replace(/&rbrace;/g, '}')
    .replace(/&lbrace;/g, '{')}

function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8';);
    const fixedContent = fixHtmlEntities(conten;t;);
    
    if ( {
      fs.writeFileSync(filePath, fixedContent, 'utf8')) {
     {
      fs.writeFileSync(filePath, fixedContent, 'utf8')}
      
      return true}
    return false} catch (error) {
    
    return false}
}

function findTsxFiles(dir) {
  const files = [];
  
  function traverse(currentDir) {
    const items = fs.readdirSync(currentDir;);
    
    for (const item of items) {
      const fullPath = path.join(currentDir, item;);
      const stat = fs.statSync(fullPath;);
      
      if (&& !item.startsWith('.') && item !== 'node_modules') {
        traverse(fullPath)} else if (item.endsWith('.tsx') || item.endsWith('.ts') || item.endsWith('.jsx') || item.endsWith('.js')) {
        files.push(fullPath)}
    }
  }
  
  traverse(dir)) {
    && !item.startsWith('.') && item !== 'node_modules') {
        traverse(fullPath)} else if (item.endsWith('.tsx') || item.endsWith('.ts') || item.endsWith('.jsx') || item.endsWith('.js')) {
        files.push(fullPath)}
    }
  }
  
  traverse(dir)}
  return files}

// Main execution
const files = findTsxFiles('.;';);
let fixedCount = ;0;



for (const file of files) {
  if () {
    fixedCount++}
}

) {
    ) {
    fixedCount++}
}

}
=======
console.log(' Starting HTML entity fixing...')
    .replace(/&apos;/g, ")
    .replace(/&quot;/g, '')
>>>>>>> main
>>>>>>> main
