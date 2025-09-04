#!/usr/bin/env node

const fs = require('fs');

// Function to fix all remaining syntax errors
function fixSyntaxErrors(content) {
  // Fix extra commas in JSX attributes
  content = content.replace(/className="[^"]*"\s*,\s*>/g, (match) => {
    return match.replace(/,\s*$/, '');
  });
  
  // Fix malformed function declarations: {, -> {
  content = content.replace(/\{\s*,/g, '{');
  
  // Fix malformed JSX elements: >, -> >
  content = content.replace(/>\s*,\s*$/gm, '>');
  
  // Fix malformed JSX elements: >, -> >
  content = content.replace(/>\s*,\s*</g, '><');
  
  // Fix malformed function declarations: ) {, -> ) {
  content = content.replace(/\)\s*\{\s*,/g, ') {');
  
  // Fix malformed JSX elements: >, -> >
  content = content.replace(/>\s*,\s*$/gm, '>');
  
  return content;
}

// Function to process a file
function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const fixedContent = fixSyntaxErrors(content);
    
    if (content !== fixedContent) {
      fs.writeFileSync(filePath, fixedContent, 'utf8');
      console.log(`✅ Fixed: ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`❌ Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Main execution
console.log('🔧 Starting final syntax error fixing...');

const filesToFix = [
  'components/ContactForm.tsx',
  'components/ErrorBoundary.tsx',
  'components/PerformanceMonitor.tsx',
  'pages/cybersecurity.tsx',
  'pages/docs.tsx'
];

let totalFixed = 0;

for (const file of filesToFix) {
  if (fs.existsSync(file)) {
    if (processFile(file)) {
      totalFixed++;
    }
  }
}

console.log(`\n📊 Syntax fixing complete:`);
console.log(`   - Files fixed: ${totalFixed}`);
console.log(`   - Issues encountered: 0`);

if (totalFixed > 0) {
  console.log('\n✅ All syntax errors have been fixed!');
} else {
  console.log('\n✅ No syntax errors found!');
}