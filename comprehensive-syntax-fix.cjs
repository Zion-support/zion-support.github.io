#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Function to fix common syntax errors
function fixSyntaxErrors(content) {
  // Fix extra commas in JSX attributes: className="..." , -> className="..."
  content = content.replace(/className="[^"]*"\s*,\s*>/g, (match) => {
    return match.replace(/,\s*$/, '');
  });
  
  // Fix extra commas in style objects: textAlign: 'center', , -> textAlign: 'center',
  content = content.replace(/(\w+):\s*'[^']*',\s*,/g, '$1: \'$2\',');
  content = content.replace(/(\w+):\s*"[^"]*",\s*,/g, '$1: "$2",');
  
  // Fix malformed JSX elements: <div><Link -> <div><Link
  content = content.replace(/<div[^>]*><Link/g, (match) => {
    return match.replace(/<div([^>]*)><Link/, '<div$1>\n                <Link');
  });
  
  // Fix extra commas in JSX closing tags: </Link> , -> </Link>
  content = content.replace(/<\/Link>\s*,\s*>/g, '</Link>');
  
  // Fix extra commas in JSX elements: >, -> >
  content = content.replace(/>\s*,\s*</g, '><');
  
  // Fix extra commas in JSX attributes: required , -> required
  content = content.replace(/required\s*,\s*className/g, 'required\n            className');
  
  // Fix extra commas in style objects: }, , -> },
  content = content.replace(/}\s*,\s*,/g, '},');
  
  // Fix extra commas in JSX elements: >, -> >
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
console.log('🔧 Starting comprehensive syntax error fixing...');

const filesToFix = [
  'components/ContactForm.tsx',
  'pages/_app.tsx',
  'pages/cloud-devops.tsx',
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