#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Function to fix specific syntax errors
function fixSyntaxErrors(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Fix common syntax patterns that cause parsing errors
    const fixes = [
      // Fix missing comma in object properties
      {
        pattern: /(\w+):\s*(\w+)\s*(\w+):/g,
        replacement: '$1: $2,\n    $3:'
      },
      // Fix missing closing tags
      {
        pattern: /<h1([^>]*?)>([^<]*?)<([^>]*?)>/g,
        replacement: '<h1$1>$2</h1>'
      },
      {
        pattern: /<h2([^>]*?)>([^<]*?)<([^>]*?)>/g,
        replacement: '<h2$1>$2</h2>'
      },
      {
        pattern: /<h3([^>]*?)>([^<]*?)<([^>]*?)>/g,
        replacement: '<h3$1>$2</h3>'
      },
      {
        pattern: /<p([^>]*?)>([^<]*?)<([^>]*?)>/g,
        replacement: '<p$1>$2</p>'
      },
      {
        pattern: /<button([^>]*?)>([^<]*?)<([^>]*?)>/g,
        replacement: '<button$1>$2</button>'
      },
      // Fix JSX fragment issues
      {
        pattern: /<>([^<]*?)<([^>]*?)>/g,
        replacement: '<>'
      },
      // Fix missing closing brackets
      {
        pattern: /className=\{`([^`]*?)\$\{([^}]*?)\}`/g,
        replacement: 'className={`$1${$2}`}'
      },
      // Fix unclosed strings
      {
        pattern: /"([^"]*?)\n([^"]*?)"/g,
        replacement: '"$1$2"'
      },
      // Fix missing semicolons in JSX
      {
        pattern: /(\w+)\s*=\s*\{([^}]*?)\}\s*(\w+)/g,
        replacement: '$1={$2};\n    $3'
      }
    ];
    
    for (const fix of fixes) {
      const newContent = content.replace(fix.pattern, fix.replacement);
      if (newContent !== content) {
        content = newContent;
        modified = true;
      }
    }
    
    // Additional specific fixes for common patterns
    const specificFixes = [
      // Fix malformed JSX attributes
      {
        pattern: /className=\{`([^`]*?)\$\{([^}]*?)\}`/g,
        replacement: 'className={`$1${$2}`}'
      },
      // Fix missing closing tags in common patterns
      {
        pattern: /<section([^>]*?)>([^<]*?)<([^>]*?)>/g,
        replacement: '<section$1>$2</section>'
      },
      // Fix unclosed React fragments
      {
        pattern: /<>([^<]*?)<([^>]*?)>/g,
        replacement: '<>'
      }
    ];
    
    for (const fix of specificFixes) {
      const newContent = content.replace(fix.pattern, fix.replacement);
      if (newContent !== content) {
        content = newContent;
        modified = true;
      }
    }
    
    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error fixing syntax in ${filePath}:`, error.message);
    return false;
  }
}

// Function to fix specific problematic files
function fixSpecificFiles() {
  const problematicFiles = [
    'app/ai-3d-generation/page.tsx',
    'app/ai-agricultural-intelligence-pro/page.tsx',
    'app/ai-analytics/page.tsx',
    'app/ai-api-management/page.tsx',
    'app/ai-api-manager/page.tsx',
    'app/ai-automation/page.tsx'
  ];
  
  for (const file of problematicFiles) {
    const filePath = path.join(__dirname, file);
    if (fs.existsSync(filePath)) {
      console.log(`Fixing specific issues in: ${file}`);
      fixSyntaxErrors(filePath);
    }
  }
}

// Function to find all TypeScript/JSX files
function findFiles(dir, extensions = ['.tsx', '.ts', '.jsx', '.js']) {
  const files = [];
  
  function traverse(currentDir) {
    const items = fs.readdirSync(currentDir);
    
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
        traverse(fullPath);
      } else if (stat.isFile() && extensions.some(ext => item.endsWith(ext))) {
        files.push(fullPath);
      }
    }
  }
  
  traverse(dir);
  return files;
}

// Main execution
console.log('Starting comprehensive syntax error fixes...');

// Fix specific problematic files first
fixSpecificFiles();

const appDir = path.join(__dirname, 'app');
const files = findFiles(appDir);

let fixedCount = 0;

for (const file of files) {
  try {
    if (fixSyntaxErrors(file)) {
      fixedCount++;
    }
  } catch (error) {
    console.error(`Error processing ${file}:`, error.message);
  }
}

console.log(`\nFixed syntax errors in ${fixedCount} files`);
console.log('Syntax error fixes completed!');