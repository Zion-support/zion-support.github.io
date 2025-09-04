#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('🔧 Starting Comprehensive Syntax Fixer...');
console.log('=========================================');

const report = {
  timestamp: new Date().toISOString(),
  sessionId: Date.now().toString(),
  fixes: [],
  errors: [],
  summary: {
    totalFiles: 0,
    fixedFiles: 0,
    errorFiles: 0,
    totalFixes: 0
  }
};

// Common syntax fixes
const syntaxFixes = [
  // Fix missing closing braces in interfaces
  {
    pattern: /interface\s+\w+\s*\{[^}]*$/gm,
    replacement: (match) => {
      if (!match.includes('}')) {
        return match + '\n}'}
      return match},
    description: 'Fix missing closing braces in interfaces'
  },
  
  // Fix malformed style objects
  {
    pattern: /style=\{\{\s*([^}]*?)\s*,\s*;\s*>\s*([^<]*?)\s*<\/[^>]*>/g,
    replacement: 'style={{ $1 }}>$2</div>',
    description: 'Fix malformed style objects with trailing commas'
  },
  
  // Fix missing commas in object properties
  {
    pattern: /(\w+):\s*'([^']*)'\s*(\w+):/g,
    replacement: "$1: '$2',\n    $3:",
    description: 'Fix missing commas in object properties'
  },
  
  // Fix malformed JSX attributes
  {
    pattern: /(\w+):\s*'([^']*)'\s*;\s*>/g,
    replacement: "$1: '$2' }}>",
    description: 'Fix malformed JSX attributes'
  },
  
  // Fix broken template literals
  {
    pattern: /`([^`]*?)\$\{([^}]*?)\}([^`]*?)`/g,
    replacement: '`$1${$2}$3`',
    description: 'Fix broken template literals'
  },
  
  // Fix malformed rgba colors
  {
    pattern: /rgb,a\(([^)]*?)\)/g,
    replacement: 'rgba($1)',
    description: 'Fix malformed rgba colors'
  },
  
  // Fix missing quotes in object keys
  {
    pattern: /(\w+):\s*([^,}]+?)(?=\s*[,}])/g,
    replacement: (match, key, value) => {
      if (!value.includes("'") && !value.includes('"') && !value.includes('{') && !value.includes('(')) {
        return `${key}: '${value.trim()}'`}
      return match},
    description: 'Fix missing quotes in object keys'
  },
  
  // Fix broken JSX closing tags
  {
    pattern: /<\/[^>]*>\s*;\s*$/gm,
    replacement: '></div>',
    description: 'Fix broken JSX closing tags'
  },
  
  // Fix malformed grid properties
  {
    pattern: /gridTemplateColumns:\s*'([^']*?)\s*'/g,
    replacement: "gridTemplateColumns: '$1'",
    description: 'Fix malformed grid properties'
  },
  
  // Fix broken string concatenation
  {
    pattern: /"([^"]*?)"\s*"([^"]*?)"/g,
    replacement: '"$1$2"',
    description: 'Fix broken string concatenation'
  }
];

// Function to fix a single file
function fixFile(filePath) {
  try {
    console.log(`\n🔍 Processing: ${filePath}`);
    
    let content = fs.readFileSync(filePath, 'utf8');
    let originalContent = content;
    let fixesApplied = 0;
    
    // Apply each fix
    syntaxFixes.forEach((fix, index) => {
      const beforeLength = content.length;
      
      if (typeof fix.replacement === 'function') {
        content = content.replace(fix.pattern, fix.replacement)} else {
        content = content.replace(fix.pattern, fix.replacement)}
      
      const afterLength = content.length;
      if (beforeLength !== afterLength) {
        fixesApplied++;
        console.log(`   ✅ Applied fix ${index + 1}: ${fix.description}`)}
    });
    
    // Additional specific fixes for common issues
    const specificFixes = [
      // Fix missing semicolons in style objects
      {
        pattern: /(\w+):\s*'([^']*)'\s*(\w+):/g,
        replacement: "$1: '$2',\n    $3:"
      },
      // Fix malformed JSX
      {
        pattern: />\s*;\s*$/gm,
        replacement: '>'
      },
      // Fix broken style objects
      {
        pattern: /\{\{\s*([^}]*?)\s*,\s*;\s*>\s*([^<]*?)\s*<\/[^>]*>/g,
        replacement: '{{ $1 }}>$2</div>'
      }
    ];
    
    specificFixes.forEach(fix => {
      const beforeLength = content.length;
      content = content.replace(fix.pattern, fix.replacement);
      const afterLength = content.length;
      if (beforeLength !== afterLength) {
        fixesApplied++}
    });
    
    // Write the fixed content back
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`   ✅ Applied ${fixesApplied} fixes to ${filePath}`);
      
      report.fixes.push({
        file: filePath,
        fixesApplied,
        description: `Applied ${fixesApplied} syntax fixes`
      });
      
      report.summary.fixedFiles++;
      report.summary.totalFixes += fixesApplied} else {
      console.log(`   ℹ️  No fixes needed for ${filePath}`)}
    
    report.summary.totalFiles++;
    return true} catch (error) {
    console.log(`   ❌ Error processing ${filePath}: ${error.message}`);
    report.errors.push({
      file: filePath,
      error: error.message
    });
    report.summary.errorFiles++;
    return false}
}

// Function to find all TypeScript/JavaScript files
function findSourceFiles(dir) {
  const files = [];
  
  function traverse(currentDir) {
    const items = fs.readdirSync(currentDir);
    
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        // Skip node_modules and .next directories
        if (!['node_modules', '.next', 'out', 'dist', '.git'].includes(item)) {
          traverse(fullPath)}
      } else if (stat.isFile()) {
        // Include TypeScript and JavaScript files
        if (item.endsWith('.tsx') || item.endsWith('.ts') || item.endsWith('.jsx') || item.endsWith('.js')) {
          files.push(fullPath)}
      }
    }
  }
  
  traverse(dir);
  return files}

// Main execution
console.log('\n📁 Finding source files...');
const sourceFiles = findSourceFiles(process.cwd());
console.log(`Found ${sourceFiles.length} source files`);

console.log('\n🔧 Starting syntax fixes...');
let processedFiles = 0;

for (const file of sourceFiles) {
  if (fixFile(file)) {
    processedFiles++}
  
  // Progress indicator
  if (processedFiles % 10 === 0) {
    console.log(`\n📊 Progress: ${processedFiles}/${sourceFiles.length} files processed`)}
}

// Final summary
console.log('\n📊 Comprehensive Syntax Fixer Summary');
console.log('=====================================');
console.log(`   - Total files processed: ${report.summary.totalFiles}`);
console.log(`   - Files fixed: ${report.summary.fixedFiles}`);
console.log(`   - Files with errors: ${report.summary.errorFiles}`);
console.log(`   - Total fixes applied: ${report.summary.totalFixes}`);

if (report.errors.length > 0) {
  console.log('\n❌ Errors encountered:');
  report.errors.forEach(error => {
    console.log(`   - ${error.file}: ${error.error}`)})}

// Save report
const reportPath = path.join(process.cwd(), `comprehensive-syntax-fix-report-${report.sessionId}.json`);
fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));

console.log(`\n📄 Detailed report saved to: comprehensive-syntax-fix-report-${report.sessionId}.json`);

// Test the fixes
console.log('\n🧪 Testing fixes...');
try {
  console.log('Running TypeScript check...');
  execSync('npx tsc --noEmit', { stdio: 'pipe' });
  console.log('✅ TypeScript check passed')} catch (error) {
  console.log('⚠️  TypeScript check still has issues, but some fixes were applied')}

try {
  console.log('Running ESLint...');
  execSync('npm run lint', { stdio: 'pipe' });
  console.log('✅ ESLint check passed')} catch (error) {
  console.log('⚠️  ESLint check still has issues, but some fixes were applied')}

console.log('\n🎉 Comprehensive syntax fixing completed!');