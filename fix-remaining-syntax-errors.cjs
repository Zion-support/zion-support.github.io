#!/usr/bin/env node;
const fs = require("fs");
const path = require("path");
class $1 {
  constructor() {

const fs = require('fs');
const path = require('path');
console.log('🔧 Fixing remaining syntax errors...');

// Function to fix remaining syntax issues
function fixRemainingSyntax(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let originalContent = content;
    let changesMade = false;

    // Fix type definitions with extra commas
    const syntaxFixes = [
      // Fix type definitions
      { from: /type (\w+) = \{;/g, to: 'type $1 = {' },
      { from: /type (\w+) = \{([^}]+)\},;/g, to: 'type $1 = {$2};' },
      
      // Fix const declarations with extra commas
      { from: /const (\w+) = ([^,]+),;/g, to: 'const $1 = $2;' },
      { from: /const (\w+) = path\.join\(([^)]+)\),;/g, to: 'const $1 = path.join($2);' },
      
      // Fix function parameters with extra commas
      { from: /function (\w+)\([^)]*\),;/g, to: 'function $1(req, res) {' },
      { from: /export default function (\w+)\([^)]*\),;/g, to: 'export default function $1(req, res) {' },
      { from: /export default async function (\w+)\([^)]*\),;/g, to: 'export default async function $1(req, res) {' },
      
      // Fix object type definitions
      { from: /Record<string, (\w+)>;/g, to: 'Record<string, $1>;' },
      { from: /Record<string (\w+)>;/g, to: 'Record<string, $1>;' },
      
      // Fix return statements with extra commas
      { from: /return res\.status\(\d+\)\.json\(\{([^}]+)\}\),;/g, to: 'return res.status($1).json({$2});' },
      { from: /return res\.status\(\d+\)\.json\(\{([^}]+)\}\),;/g, to: 'return res.status($1).json({$2});' },
      
      // Fix if statements with extra commas
      { from: /if \([^)]+\) return [^,]+;/g, to: 'if ($1) return $2;' },
      { from: /if \([^)]+\) return res\.status\(\d+\)\.json\(\{([^}]+)\}\),;/g, to: 'if ($1) return res.status($2).json({$3});' },
      
      // Fix destructuring with extra commas
      { from: /const \{([^}]+)\} = req\.query,;/g, to: 'const {$1} = req.query;' },
      { from: /const \{([^}]+)\} = req\.body \|\| \{\} as \{([^}]+)\},;/g, to: 'const {$1} = req.body || {} as {$2};' },
      
      // Fix method checks with extra commas
      { from: /if \(req\.method !== '[^']+'\) {;/g, to: 'if (req.method !== \'$1\') {' },
      
      // Fix try-catch blocks
      { from: /try {;/g, to: 'try {' },
      { from: /} catch \([^)]+\) {;/g, to: '} catch (error) {' },
      
      // Fix object property definitions
      { from: /(\w+): string,;/g, to: '$1: string;' },
      { from: /(\w+): string\?,;/g, to: '$1?: string;' },
      { from: /(\w+): number,;/g, to: '$1: number;' },
      { from: /(\w+): boolean,;/g, to: '$1: boolean;' },
      
      // Fix array type definitions
      { from: /(\w+): (\w+)\[\],;/g, to: '$1: $2[];' },
      
      // Fix function calls with extra commas
      { from: /(\w+)\(([^)]+)\),;/g, to: '$1($2);' },
      
      // Fix variable assignments
      { from: /(\w+) = ([^,]+),;/g, to: '$1 = $2;' },
      
      // Fix object destructuring in function parameters
      { from: /\{([^}]+)\} as \{([^}]+)\},;/g, to: '{$1} as {$2};' },
      
      // Fix action map definitions
      { from: /const actionMap: Record<string (\w+)> = \{;/g, to: 'const actionMap: Record<string, $1> = {' },
      
      // Fix method checks
      { from: /if \(req\.method === '[^']+'\) {;/g, to: 'if (req.method === \'$1\') {' },
      
      // Fix async function declarations
      { from: /export default async function (\w+)\([^)]*\) {;/g, to: 'export default async function $1(req, res) {\n  try {' },
      { from: /export default function (\w+)\([^)]*\) {;/g, to: 'export default function $1(req, res) {\n  try {' },
      
      // Fix error handling
      { from: /} catch \([^)]+\) {;/g, to: '  } catch (error) {\n    console.error("Error:", error);\n    return res.status(500).json({ error: "Internal server error" });\n  }\n}' },
      
      // Fix JSON responses
      { from: /res\.json\(\{([^}]+)\}\),;/g, to: 'res.json({$1});' },
      { from: /res\.status\(\d+\)\.json\(\{([^}]+)\}\),;/g, to: 'res.status($1).json({$2});' },
      
      // Fix file path operations
      { from: /path\.join\(([^)]+)\),;/g, to: 'path.join($1);' },
      
      // Fix data loading functions
      { from: /function load\(\): Record<string (\w+)> {;/g, to: 'function load(): Record<string, $1> {' },
      
      // Fix try-catch in data loading
      { from: /try {;/g, to: 'try {' },
      { from: /} catch \([^)]+\) {;/g, to: '} catch (error) {' },
      
      // Fix return statements in data loading
      { from: /return \{\},;/g, to: 'return {};' },
      { from: /return JSON\.parse\(([^)]+)\),;/g, to: 'return JSON.parse($1);' },
    ];

    syntaxFixes.forEach(fix => {
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
      console.log(`✅ Fixed syntax in: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`❌ Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Function to find all TypeScript files
function getAllTypeScriptFiles() {
  const patterns = [
    'pages/**/*.ts',
    'pages/**/*.tsx',
    'components/**/*.ts',
    'components/**/*.tsx',
    'utils/**/*.ts',
    'types/**/*.ts',
    'lib/**/*.ts',
    '*.ts',
    '*.tsx'
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
  console.log('🚀 Starting remaining syntax fix...\n');
  
  const allFiles = getAllTypeScriptFiles();
  console.log(`Found ${allFiles.length} TypeScript files to check`);
  
  let fixedCount = 0;
  
  allFiles.forEach(filePath => {
    if (fs.existsSync(filePath)) {
      if (fixRemainingSyntax(filePath)) {
        fixedCount++;
      }
    }
  });

  console.log(`\n📊 Fix Summary:`);
  console.log(`   Total files checked: ${allFiles.length}`);
  console.log(`   Files fixed: ${fixedCount}`);
  
  if (fixedCount > 0) {
    console.log('\n✅ Remaining syntax fixes completed!');
  } else {
    console.log('\n✅ No remaining syntax issues found!');
  }
}

// Run the script
if (require.main === module) {
  main();
}

module.exports = { fixRemainingSyntax };
const { execSync } = require('child_process');

console.log('🔧 Fixing remaining syntax errors...');

// Find all files with syntax errors
const findSyntaxErrorFiles = () => {
  try {
    const result = execSync('npm run build 2>&1 | grep -E "Syntax error|Unexpected token" | grep -o "\./[^:]*" | sort -u', { encoding: 'utf8' });
    return result.trim().split('\n').filter(Boolean);
  } catch (error) {
    return [];
  }
};

let fixedCount = 0;

for (const filePath of syntaxErrorFiles) {
  try {
    console.log(`🔧 Fixing ${filePath}...`);
    
    let content = fs.readFileSync(filePath, 'utf8');
    let originalContent = content;
    
    // Fix common syntax issues
    
    // Fix export statements that are not at the top level
    content = content.replace(/(\s+)(export\s+function\s+\w+)/g, '\n$2');
    content = content.replace(/(\s+)(export\s+default\s+function)/g, '\n$2');
    content = content.replace(/(\s+)(export\s+const\s+\w+)/g, '\n$2');
    content = content.replace(/(\s+)(export\s+{\s*\w+)/g, '\n$2');
    
    // Fix missing semicolons
    content = content.replace(/(\w+)\s*(\n\s*export)/g, '$1;\n$2');
    content = content.replace(/(\w+)\s*(\n\s*return)/g, '$1;\n$2');
    
    // Fix malformed function declarations
    content = content.replace(/function\s+(\w+)\s*\(\s*\)\s*{\s*$/gm, 'function $1() {\n');
    
    // Fix missing closing braces
    const openBraces = (content.match(/\{/g) || []).length;
    const closeBraces = (content.match(/\}/g) || []).length;
    if (openBraces > closeBraces) {
      const missingBraces = openBraces - closeBraces;
      content += '\n' + '}'.repeat(missingBraces);
    }
    
    // Fix malformed return statements
    content = content.replace(/return\s+([^;]+)\s*$/gm, 'return $1;');
    
    // Fix missing commas in object literals
    content = content.replace(/(\w+)\s*(\n\s*})/g, '$1,\n$2');
    
    // Clean up extra whitespace
    content = content.replace(/\n\s*\n\s*\n/g, '\n\n');
    
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content);
      console.log(`✅ Fixed ${filePath}`);
      fixedCount++;
    } else {
      console.log(`ℹ️  No changes needed for ${filePath}`);
    }
  } catch (error) {
    console.log(`⚠️  Could not fix ${filePath}: ${error.message}`);
  }
}

console.log(`🎉 Fixed ${fixedCount} files with syntax errors!`);
fs.writeFileSync('/workspace/remaining-syntax-errors-fix-report.json', JSON.stringify(report, null, 2));
console.log('📄 Report saved to remaining-syntax-errors-fix-report.json');