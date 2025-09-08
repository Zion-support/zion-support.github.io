const fs = require('fs');
const path = require('path');

// Function to fix remaining lint issues
function fixLintIssues(content, filePath) {
  let fixed = content;
  let changes = 0;

  // Fix 1: Escape unescaped quotes and apostrophes in JSX
  const unescapedApostropheRegex = /([^&])'([^])/g;
  fixed = fixed.replace(unescapedApostropheRegex, (match, before, after) => {
    // Don't replace if it's already escaped or in a string literal
    if (!before.includes('&') && !after.includes('&')) {
      changes++;
      return before + '&apos;' + after}
    return match});

  const unescapedQuoteRegex = /([^&])"([^])/g;
  fixed = fixed.replace(unescapedQuoteRegex, (match, before, after) => {
    // Don't replace if it's already escaped or in a string literal
    if (!before.includes('&') && !after.includes('&')) {
      changes++;
      return before + '&quot;' + after}
    return match});

  // Fix 2: Replace <a> tags with Next.js Link components for internal navigation
  const internalLinkRegex = /<a\s+href=["'](\/[^"']*)["']([^>]*)>([^<]*)<\/a>/g;
  fixed = fixed.replace(internalLinkRegex, (match, href, attributes, text) => {
    // Only replace if it's an internal link (starts with /)
    if (href.startsWith('/') && !href.startsWith('//')) {
      changes++;
      return `<Link href="${href}"${attributes}>${text}</Link>`}
    return match});

  // Fix 3: Add missing Link import if we added Link components
  if (fixed.includes('<Link ') && !fixed.includes("import Link from 'next/link'")) {
    const importRegex = /(import\s+[^]+;)/;
    const match = fixed.match(importRegex);
    if (match) {
      changes++;
      fixed = fixed.replace(importRegex, `$1\nimport Link from 'next/link';`)}
  }

  return { fixed, changes }}

// Function to process a single file
function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const { fixed, changes } = fixLintIssues(content, filePath);
    
    if (changes > 0) {
      fs.writeFileSync(filePath, fixed, 'utf8');
      console.log(`Fixed ${changes} lint issues in ${filePath}`);
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

module.exports = { fixLintIssues, processFile, findFiles };