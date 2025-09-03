const fs = require('fs');
const path = require('path');

// Function to fix common syntax errors
function fixSyntaxErrors(content, filePath) {
  let fixed = content;
  let changes = 0;

  // Fix 1: Add missing semicolons after import statements
  const importSemicolonRegex = /(import\s+[^]+)(?!;)(\s*export|\s*const|\s*function|\s*<|$)/g;
  fixed = fixed.replace(importSemicolonRegex, (match, importPart, nextPart) => {
    if (!importPart.includes(';')) {
      changes++;
      return importPart + ';' + nextPart}
    return match});

  // Fix 2: Fix malformed import statements with missing closing brackets
  const malformedImportRegex = /import\s*{\s*([^}]+)\s*from\s*['"]([^'"]+)['"]\s*([^]*)/g;
  fixed = fixed.replace(malformedImportRegex, (match, imports, module, rest) => {
    if (!imports.includes('}')) {
      changes++;
      return `import { ${imports.trim()} } from '${module}';${rest}`}
    return match});

  // Fix 3: Fix missing commas in arrays
  const arrayCommaRegex = /(\]\s*)(\s*[a-zA-Z_$][a-zA-Z0-9_$]*\s*=\s*\[)/g;
  fixed = fixed.replace(arrayCommaRegex, '$1,$2');

  // Fix 4: Fix unterminated string literals
  const unterminatedStringRegex = /(['"])([^'"]*?)(\s*export|\s*const|\s*function|\s*<|$)/g;
  fixed = fixed.replace(unterminatedStringRegex, (match, quote, content, nextPart) => {
    if (!content.includes(quote)) {
      changes++;
      return quote + content + quote + nextPart}
    return match});

  // Fix 5: Fix malformed JSX syntax
  const malformedJSXRegex = /(return\s*\(\s*)([^<]*?)(<[^>]*>)/g;
  fixed = fixed.replace(malformedJSXRegex, (match, returnPart, content, jsxPart) => {
    if (content.includes("'") && !content.includes("'")) {
      changes++;
      return returnPart + content.replace(/'/g, "'") + jsxPart}
    return match});

  // Fix 6: Fix missing semicolons after variable declarations
  const varSemicolonRegex = /(const|let|var)\s+[^=]+=\s*[^]+(?!;)(\s*export|\s*const|\s*function|\s*<|$)/g;
  fixed = fixed.replace(varSemicolonRegex, (match, declaration, nextPart) => {
    if (!match.includes(';')) {
      changes++;
      return match + ';' + nextPart}
    return match});

  // Fix 7: Fix malformed function declarations
  const malformedFunctionRegex = /export\s*{\s*function\s*}\s*export\s*default\s*function/g;
  fixed = fixed.replace(malformedFunctionRegex, 'export default function');

  // Fix 8: Fix corrupted JSX attributes
  const corruptedJSXRegex = /className\s*=\s*['"]([^'"]*?)['"]\s*([^>]*?)(>|$)/g;
  fixed = fixed.replace(corruptedJSXRegex, (match, className, rest, closing) => {
    if (className.includes("'") && !className.includes("'")) {
      changes++;
      return `className="${className.replace(/'/g, "'")}"${rest}${closing}`}
    return match});

  // Fix 9: Fix missing closing brackets in object literals
  const missingBracketRegex = /(\{[^}]*?)(\s*export|\s*const|\s*function|\s*<|$)/g;
  fixed = fixed.replace(missingBracketRegex, (match, objectPart, nextPart) => {
    const openBraces = (objectPart.match(/\{/g) || []).length;
    const closeBraces = (objectPart.match(/\}/g) || []).length;
    if (openBraces > closeBraces) {
      changes++;
      return objectPart + '}'.repeat(openBraces - closeBraces) + nextPart}
    return match});

  // Fix 10: Fix malformed array syntax
  const malformedArrayRegex = /(\[\s*)([^\]]*?)(\s*\]\s*)(\s*[a-zA-Z_$][a-zA-Z0-9_$]*\s*=)/g;
  fixed = fixed.replace(malformedArrayRegex, '$1$2$3,$4');

  return { fixed, changes }}

// Function to process a single file
function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const { fixed, changes } = fixSyntaxErrors(content, filePath);
    
    if (changes > 0) {
      fs.writeFileSync(filePath, fixed, 'utf8');
      console.log(`Fixed ${changes} issues in ${filePath}`);
      return changes}
    return 0} catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return 0}
}

// Function to recursively find all TypeScript/JavaScript files
function findFiles(dir, extensions = ['.ts', '.tsx', '.js', '.jsx']) {
  let files = [];
  
  try {
    const items = fs.readdirSync(dir);
    
    for (const item of items) {
      const fullPath = path.join(dir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
        files = files.concat(findFiles(fullPath, extensions))} else if (stat.isFile() && extensions.some(ext => item.endsWith(ext))) {
        files.push(fullPath)}
    }
  } catch (error) {
    console.error(`Error reading directory ${dir}:`, error.message)}
  
  return files}

// Main execution
function main() {
  const srcDir = path.join(__dirname, 'src');
  const files = findFiles(srcDir);
  
  console.log(`Found ${files.length} files to process...`);
  
  let totalChanges = 0;
  let processedFiles = 0;
  
  for (const file of files) {
    const changes = processFile(file);
    totalChanges += changes;
    if (changes > 0) {
      processedFiles++}
  }
  
  console.log(`\nProcessing complete!`);
  console.log(`Files processed: ${processedFiles}`);
  console.log(`Total changes made: ${totalChanges}`)}

if (require.main === module) {
  main()}

module.exports = { fixSyntaxErrors, processFile, findFiles };