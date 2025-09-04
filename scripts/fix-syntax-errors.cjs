#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('🔧 Starting syntax error fixing...');

const issues = [];
const fixes = [];

// Common syntax fixes
const syntaxFixes = [
  {
    pattern: /;\s*;\s*$/gm,
    replacement: ';',
    description: 'Remove duplicate semicolons'
  },
  {
    pattern: /}\s*;\s*$/gm,
    replacement: '}',
    description: 'Remove semicolon after closing brace'
  },
  {
    pattern: /}\s*}\s*$/gm,
    replacement: '}',
    description: 'Remove duplicate closing braces'
  },
  {
    pattern: /<<<<<<< HEAD[\s\S]*?>>>>>>> [a-f0-9]+/g,
    replacement: '',
    description: 'Remove merge conflict markers'
  }
];

// File extensions to check
const extensions = ['.tsx', '.ts', '.jsx', '.js'];

// Directories to scan
const directories = ['components', 'pages', 'lib', 'scripts'];

function fixFile(filePath) {
  if (!fs.existsSync(filePath)) return;
  
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let originalContent = content;
    let fileFixes = 0;
    
    syntaxFixes.forEach(fix => {
      const matches = content.match(fix.pattern);
      if (matches) {
        content = content.replace(fix.pattern, fix.replacement);
        fileFixes += matches.length;
        fixes.push(`${filePath}: ${fix.description} (${matches.length} fixes)`);
      }
    });
    
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content);
      console.log(`✅ Fixed ${fileFixes} issues in ${filePath}`);
    }
  } catch (error) {
    issues.push(`Error processing ${filePath}: ${error.message}`);
  }
}

// Scan directories
directories.forEach(dir => {
  if (fs.existsSync(dir)) {
    const files = fs.readdirSync(dir, { recursive: true });
    files.forEach(file => {
      if (typeof file === 'string' && extensions.some(ext => file.endsWith(ext))) {
        fixFile(path.join(dir, file));
      }
    });
  }
});

// Also check root files
['package.json', 'next.config.cjs', 'eslint.config.js'].forEach(file => {
  if (fs.existsSync(file)) {
    fixFile(file);
  }
});

// Report results
console.log(`\n📊 Syntax fixing complete:`);
console.log(`   - Files processed: ${directories.length + 3}`);
console.log(`   - Fixes applied: ${fixes.length}`);
console.log(`   - Issues encountered: ${issues.length}`);

if (issues.length > 0) {
  console.log('\n⚠️  Issues:');
  issues.forEach(issue => console.log(`   - ${issue}`));
}

if (fixes.length > 0) {
  console.log('\n✅ Fixes applied:');
  fixes.forEach(fix => console.log(`   - ${fix}`));
}

// Save report
const report = {
  timestamp: new Date().toISOString(),
  fixes: fixes,
  issues: issues,
  totalFixes: fixes.length,
  totalIssues: issues.length
};

fs.writeFileSync('syntax-fix-report.json', JSON.stringify(report, null, 2));
console.log('\n📄 Report saved to syntax-fix-report.json');

process.exit(issues.length > 0 ? 1 : 0);