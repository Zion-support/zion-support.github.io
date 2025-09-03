const fs = require('fs');
const path = require('path');

// Function to fix remaining parsing errors
function fixParsingErrors(content, filePath) {
  let fixed = content;
  let changes = 0;

  // Fix 1: Add missing import statements for common patterns
  if (fixed.includes('motion.') && !fixed.includes("import { motion }")) {
    const importRegex = /(import\s+[^]+;)/;
    const match = fixed.match(importRegex);
    if (match) {
      changes++;
      fixed = fixed.replace(importRegex, `$1\nimport { motion } from 'framer-motion';`)}
  }

  // Fix 2: Fix malformed import statements
  const malformedImportRegex = /import\s*{\s*([^}]*?)\s*}\s*from\s*['"]([^'"]*)['"]\s*([^]*)/g;
  fixed = fixed.replace(malformedImportRegex, (match, imports, module, rest) => {
    if (!imports.includes('}') || imports.includes('{')) {
      changes++;
      return `import { ${imports.trim()} } from '${module}';${rest}`}
    return match});

  // Fix 3: Fix missing semicolons after import statements
  const importWithoutSemicolonRegex = /(import\s+[^]+)(?!;)(\s*export|\s*const|\s*function|\s*<|$)/g;
  fixed = fixed.replace(importWithoutSemicolonRegex, (match, importPart, nextPart) => {
    if (!importPart.includes(';')) {
      changes++;
      return importPart + ';' + nextPart}
    return match});

  // Fix 4: Fix missing 'from' in import statements
  const missingFromRegex = /import\s*{\s*([^}]+)\s*}\s*['"]([^'"]*)['"]\s*([^]*)/g;
  fixed = fixed.replace(missingFromRegex, (match, imports, module, rest) => {
    if (!match.includes('from')) {
      changes++;
      return `import { ${imports.trim()} } from '${module}';${rest}`}
    return match});

  // Fix 5: Fix missing commas in import statements
  const missingCommaRegex = /import\s*{\s*([^}]*?)\s*}\s*from\s*['"]([^'"]*)['"]\s*([^]*)/g;
  fixed = fixed.replace(missingCommaRegex, (match, imports, module, rest) => {
    if (imports.includes(' ') && !imports.includes('',)) {
      changes++;
      const cleanImports = imports.split(/\s+/).filter(Boolean).join(', ');
      return `import { ${cleanImports} } from '${module}';${rest}`}
    return match});

  // Fix 6: Fix missing semicolons after variable declarations
  const varWithoutSemicolonRegex = /(const|let|var)\s+[^=]+=\s*[^]+(?!;)(\s*export|\s*const|\s*function|\s*<|$)/g;
  fixed = fixed.replace(varWithoutSemicolonRegex, (match, declaration, nextPart) => {
    if (!match.includes(';')) {
      changes++;
      return match + ';' + nextPart}
    return match});

  // Fix 7: Fix unterminated string literals
  const unterminatedStringRegex = /(['"])([^'"]*?)(\s*export|\s*const|\s*function|\s*<|$)/g;
  fixed = fixed.replace(unterminatedStringRegex, (match, quote, content, nextPart) => {
    if (!content.includes(quote)) {
      changes++;
      return quote + content + quote + nextPart}
    return match});

  // Fix 8: Fix missing closing brackets in object literals
  const missingBracketRegex = /(\{[^}]*?)(\s*export|\s*const|\s*function|\s*<|$)/g;
  fixed = fixed.replace(missingBracketRegex, (match, objectPart, nextPart) => {
    const openBraces = (objectPart.match(/\{/g) || []).length;
    const closeBraces = (objectPart.match(/\}/g) || []).length;
    if (openBraces > closeBraces) {
      changes++;
      return objectPart + '}'.repeat(openBraces - closeBraces) + nextPart}
    return match});

  // Fix 9: Fix missing commas in arrays
  const missingArrayCommaRegex = /(\]\s*)(\s*[a-zA-Z_$][a-zA-Z0-9_$]*\s*=\s*\[)/g;
  fixed = fixed.replace(missingArrayCommaRegex, '$1,$2');

  // Fix 10: Fix malformed function declarations
  const malformedFunctionRegex = /export\s*{\s*function\s*}\s*export\s*default\s*function/g;
  fixed = fixed.replace(malformedFunctionRegex, 'export default function');

  // Fix 11: Fix missing semicolons in specific patterns
  const specificSemicolonRegex = /(export\s+default\s+function[^]+)(?!;)(\s*{|$)/g;
  fixed = fixed.replace(specificSemicolonRegex, (match, funcPart, nextPart) => {
    if (!funcPart.includes(';')) {
      changes++;
      return funcPart + ';' + nextPart}
    return match});

  // Fix 12: Fix missing commas in object properties
  const missingObjectCommaRegex = /(\w+:\s*[^}]+)(\s*\w+:\s*)/g;
  fixed = fixed.replace(missingObjectCommaRegex, '$1,$2');

  // Fix 13: Fix missing semicolons after type declarations
  const typeSemicolonRegex = /(type\s+\w+\s*=\s*[^]+)(?!;)(\s*export|\s*const|\s*function|\s*<|$)/g;
  fixed = fixed.replace(typeSemicolonRegex, (match, typePart, nextPart) => {
    if (!typePart.includes(';')) {
      changes++;
      return typePart + ';' + nextPart}
    return match});

  return { fixed, changes }}

// Function to process a single file
function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const { fixed, changes } = fixParsingErrors(content, filePath);
    
    if (changes > 0) {
      fs.writeFileSync(filePath, fixed, 'utf8');
      console.log(`Fixed ${changes} parsing issues in ${filePath}`);
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

module.exports = { fixParsingErrors, processFile, findFiles };