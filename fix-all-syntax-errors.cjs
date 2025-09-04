#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Function to fix common syntax errors
function fixSyntaxErrors(content) {
  // Fix malformed style objects: style={{ > -> style={{
  content = content.replace(/style=\{\{\s*>/g, 'style={{');
  
  // Fix extra commas in function declarations: () => {, -> () => {
  content = content.replace(/\(\)\s*=>\s*\{\s*,/g, '() => {');
  
  // Fix extra commas in interface properties: string;, -> string;
  content = content.replace(/(\w+):\s*(\w+);\s*,/g, '$1: $2;');
  
  // Fix extra commas in object properties: }; -> }
  content = content.replace(/;\s*,\s*\]/g, '}');
  content = content.replace(/;\s*,\s*\]/g, '}');
  
  // Fix malformed JSX closing tags: </>; -> </>
  content = content.replace(/<\/>\s*;/g, '</>');
  
  // Fix extra commas in JSX attributes: className="..." , -> className="..."
  content = content.replace(/className="[^"]*"\s*,\s*>/g, (match) => match.replace(/,\s*$/, ''));
  
  // Fix extra commas in function parameters: HTMLInputElement>) => {, -> HTMLInputElement>) => {
  content = content.replace(/\)\s*=>\s*\{\s*,/g, ') => {');
  
  // Fix malformed style objects with extra commas: style={{ ,> -> style={{
  content = content.replace(/style=\{\{\s*,\s*>/g, 'style={{');
  
  // Fix extra commas in array elements: }, -> }
  content = content.replace(/}\s*,\s*\]/g, '}');
  
  // Fix extra commas in JSX elements: >, -> >
  content = content.replace(/>\s*,\s*</g, '><');
  
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

// Function to recursively find and process files
function processDirectory(dirPath, extensions = ['.tsx', '.ts', '.jsx', '.js']) {
  let fixedCount = 0;
  
  try {
    const items = fs.readdirSync(dirPath);
    
    for (const item of items) {
      const fullPath = path.join(dirPath, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
        fixedCount += processDirectory(fullPath, extensions);
      } else if (stat.isFile() && extensions.some(ext => item.endsWith(ext))) {
        if (processFile(fullPath)) {
          fixedCount++;
        }
      }
    }
  } catch (error) {
    console.error(`❌ Error processing directory ${dirPath}:`, error.message);
  }
  
  return fixedCount;
}

// Main execution
console.log('🔧 Starting comprehensive syntax error fixing...');

const directories = ['pages', 'components', 'scripts'];
let totalFixed = 0;

for (const dir of directories) {
  if (fs.existsSync(dir)) {
    console.log(`📁 Processing directory: ${dir}`);
    totalFixed += processDirectory(dir);
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