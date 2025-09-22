const fs = require('fs');
const path = require('path');
const glob = require('glob');

console.log('🔧 Fixing import syntax errors...');

// Function to fix import syntax issues
function fixImportSyntax(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    const originalContent = content;
    let changesMade = false;

    // Fix import statements with extra commas
    const importFixes = [
      // Fix import type statements
      { from: /import type { ([^}]+) } from '([^']+)',;/g, to: "import type { $1 } from '$2';" },
      { from: /import type { ([^}]+) } from "([^"]+)",;/g, to: 'import type { $1 } from "$2";' },
      
      // Fix regular import statements
      { from: /import { ([^}]+) } from '([^']+)',;/g, to: "import { $1 } from '$2';" },
      { from: /import { ([^}]+) } from "([^"]+)",;/g, to: 'import { $1 } from "$2";' },
      
      // Fix default imports
      { from: /import ([^,]+) from '([^']+)',;/g, to: "import $1 from '$2';" },
      { from: /import ([^,]+) from "([^"]+)",;/g, to: 'import $1 from "$2";' },
      
      // Fix mixed imports
      { from: /import ([^,]+), { ([^}]+) } from '([^']+)',;/g, to: "import $1, { $2 } from '$3';" },
      { from: /import ([^,]+), { ([^}]+) } from "([^"]+)",;/g, to: 'import $1, { $2 } from "$3";' },
      
      // Fix const declarations with extra commas
      { from: /const ([^=]+) = ([^,]+),;/g, to: 'const $1 = $2;' },
      { from: /let ([^=]+) = ([^,]+),;/g, to: 'let $1 = $2;' },
      { from: /var ([^=]+) = ([^,]+),;/g, to: 'var $1 = $2;' },
      
      // Fix export statements with extra commas
      { from: /export { ([^}]+) } from '([^']+)',;/g, to: "export { $1 } from '$2';" },
      { from: /export { ([^}]+) } from "([^"]+)",;/g, to: 'export { $1 } from "$2";' },
      
      // Fix function declarations with extra commas
      { from: /export default async function ([^(]+)\([^)]*\) {;/g, to: 'export default async function $1(req, res) {\n  try {' },
      { from: /export default function ([^(]+)\([^)]*\) {;/g, to: 'export default function $1(req, res) {\n  try {' },
      
      // Fix path.join with extra commas
      { from: /path\.join\(([^)]+)\),;/g, to: 'path.join($1);' },
      
      // Fix require statements with extra commas
      { from: /require\('([^']+)'\),;/g, to: "require('$1');" },
      { from: /require\("([^"]+)"\),;/g, to: 'require("$1");' },
    ];

    importFixes.forEach(fix => {
      if (fix.from.test(content)) {
        content = content.replace(fix.from, fix.to);
        changesMade = true;
      }
    });

    // Clean up extra whitespace and newlines
    content = content.replace(/\n{3,}/g, '\n\n');
    content = content.replace(/\s+$/gm, '');
    
    if (changesMade || content !== originalContent) {
      fs.writeFileSync(filePath, content);
      console.log(`✅ Fixed import syntax in: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`❌ Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Function to find all TypeScript/JavaScript files
function getAllCodeFiles() {
  const patterns = [
    'pages/**/*.ts',
    'pages/**/*.tsx',
    'pages/**/*.js',
    'pages/**/*.jsx',
    'components/**/*.ts',
    'components/**/*.tsx',
    'components/**/*.js',
    'components/**/*.jsx',
    'utils/**/*.ts',
    'utils/**/*.js',
    'types/**/*.ts',
    'lib/**/*.ts',
    'lib/**/*.js',
    '*.ts',
    '*.tsx',
    '*.js',
    '*.jsx'
  ];

  let allFiles = [];
  patterns.forEach(pattern => {
    try {
      const files = glob.sync(pattern, { cwd: process.cwd() });
      allFiles = allFiles.concat(files);
    } catch (error) {
      // Pattern not found, continue
    }
  });

  return [...new Set(allFiles)]; // Remove duplicates
}

// Main execution
function main() {
  console.log('🚀 Starting import syntax fix...\n');
  
  const allFiles = getAllCodeFiles();
  console.log(`Found ${allFiles.length} code files to check`);
  
  let fixedCount = 0;
  
  allFiles.forEach(filePath => {
    if (fs.existsSync(filePath)) {
      if (fixImportSyntax(filePath)) {
        fixedCount++;
      }
    }
  });

  console.log(`\n📊 Fix Summary:`);
  console.log(`   Total files checked: ${allFiles.length}`);
  console.log(`   Files fixed: ${fixedCount}`);
  
  if (fixedCount > 0) {
    console.log('\n✅ Import syntax fixes completed!');
  } else {
    console.log('\n✅ No import syntax issues found!');
  }
}

// Run the script
if (require.main === module) {
  main();
}

module.exports = { fixImportSyntax };