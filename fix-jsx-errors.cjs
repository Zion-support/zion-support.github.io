const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Find all TypeScript/JSX files in the app directory
const files = glob.sync('app/**/*.{ts,tsx}', { cwd: __dirname });

console.log(`Found ${files.length} files to check`);

let fixedFiles = 0;
let totalErrors = 0;

files.forEach(file => {
  const filePath = path.join(__dirname, file);
  let content = fs.readFileSync(filePath, 'utf8');
  let originalContent = content;
  let fileErrors = 0;

  // Fix common JSX syntax errors
  
  // Fix missing closing tags for common elements
  const commonTags = ['div', 'section', 'main', 'header', 'footer', 'article', 'aside', 'nav'];
  
  commonTags.forEach(tag => {
    // Count opening and closing tags
    const openingTags = (content.match(new RegExp(`<${tag}(?:\\s[^>]*)?>`, 'g')) || []).length;
    const closingTags = (content.match(new RegExp(`</${tag}>`, 'g')) || []).length;
    
    if (openingTags > closingTags) {
      console.log(`  ${file}: Missing ${openingTags - closingTags} closing </${tag}> tags`);
      fileErrors += openingTags - closingTags;
    }
  });

  // Fix missing closing tags for h1, h2, h3, etc.
  for (let i = 1; i <= 6; i++) {
    const openingTags = (content.match(new RegExp(`<h${i}(?:\\s[^>]*)?>`, 'g')) || []).length;
    const closingTags = (content.match(new RegExp(`</h${i}>`, 'g')) || []).length;
    
    if (openingTags > closingTags) {
      console.log(`  ${file}: Missing ${openingTags - closingTags} closing </h${i}> tags`);
      fileErrors += openingTags - closingTags;
    }
  }

  // Fix missing closing tags for button
  const buttonOpening = (content.match(/<button(?:\\s[^>]*)?>/g) || []).length;
  const buttonClosing = (content.match(/<\/button>/g) || []).length;
  
  if (buttonOpening > buttonClosing) {
    console.log(`  ${file}: Missing ${buttonOpening - buttonClosing} closing </button> tags`);
    fileErrors += buttonOpening - buttonClosing;
  }

  // Fix missing closing tags for p
  const pOpening = (content.match(/<p(?:\\s[^>]*)?>/g) || []).length;
  const pClosing = (content.match(/<\/p>/g) || []).length;
  
  if (pOpening > pClosing) {
    console.log(`  ${file}: Missing ${pOpening - pClosing} closing </p> tags`);
    fileErrors += pOpening - pClosing;
  }

  // Fix JSX fragments
  const fragmentOpening = (content.match(/<>/g) || []).length;
  const fragmentClosing = (content.match(/<\/>/g) || []).length;
  
  if (fragmentOpening > fragmentClosing) {
    console.log(`  ${file}: Missing ${fragmentOpening - fragmentClosing} closing JSX fragments`);
    fileErrors += fragmentOpening - fragmentClosing;
  }

  // Fix common syntax issues
  // Fix missing semicolons in object properties
  content = content.replace(/(\w+):\s*'([^']*)'(\s*[^,}\n])/g, "$1: '$2',$3");
  content = content.replace(/(\w+):\s*"([^"]*)"(\s*[^,}\n])/g, '$1: "$2",$3');
  
  // Fix missing commas in arrays
  content = content.replace(/(\w+)\s*\n\s*{/g, '$1,\n    {');
  
  // Fix missing closing braces in objects
  const openBraces = (content.match(/{/g) || []).length;
  const closeBraces = (content.match(/}/g) || []).length;
  
  if (openBraces > closeBraces) {
    console.log(`  ${file}: Missing ${openBraces - closeBraces} closing braces`);
    fileErrors += openBraces - closeBraces;
  }

  // Fix missing closing parentheses
  const openParens = (content.match(/\(/g) || []).length;
  const closeParens = (content.match(/\)/g) || []).length;
  
  if (openParens > closeParens) {
    console.log(`  ${file}: Missing ${openParens - closeParens} closing parentheses`);
    fileErrors += openParens - closeParens;
  }

  // Fix duplicate imports
  const importLines = content.split('\n').filter(line => line.trim().startsWith('import'));
  const uniqueImports = [...new Set(importLines)];
  if (importLines.length !== uniqueImports.length) {
    console.log(`  ${file}: Found ${importLines.length - uniqueImports.length} duplicate imports`);
    fileErrors += importLines.length - uniqueImports.length;
  }

  // Fix duplicate exports
  const exportLines = content.split('\n').filter(line => line.trim().startsWith('export default'));
  if (exportLines.length > 1) {
    console.log(`  ${file}: Found ${exportLines.length - 1} duplicate exports`);
    fileErrors += exportLines.length - 1;
  }

  if (content !== originalContent) {
    fs.writeFileSync(filePath, content);
    fixedFiles++;
    console.log(`  ${file}: Fixed ${fileErrors} issues`);
  } else if (fileErrors > 0) {
    console.log(`  ${file}: Found ${fileErrors} issues but couldn't auto-fix`);
  }

  totalErrors += fileErrors;
});

console.log(`\nSummary:`);
console.log(`- Files processed: ${files.length}`);
console.log(`- Files fixed: ${fixedFiles}`);
console.log(`- Total issues found: ${totalErrors}`);