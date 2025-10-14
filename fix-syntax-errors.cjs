#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Function to fix common syntax errors in a file
function fixSyntaxErrors(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Fix unterminated string literals
    const stringLiteralPattern = /(["'])([^"']*?)(\n|$)/g;
    content = content.replace(stringLiteralPattern, (match, quote, text, newline) => {
      if (!text.includes(quote) && !text.endsWith('\\')) {
        modified = true;
        return `${quote}${text}${quote}${newline}`;
      }
      return match;
    });
    
    // Fix malformed JSX attributes
    content = content.replace(/(\w+)=([^"'\s>]+)(?=\s|>)/g, (match, attr, value) => {
      if (!value.startsWith('"') && !value.startsWith("'") && !value.startsWith('{')) {
        modified = true;
        return `${attr}="${value}"`;
      }
      return match;
    });
    
    // Fix missing closing tags in JSX
    const openTags = [];
    const lines = content.split('\n');
    let newContent = [];
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      
      // Find opening tags
      const openTagMatch = line.match(/<(\w+)(?:\s[^>]*)?(?!\/)>/g);
      if (openTagMatch) {
        openTagMatch.forEach(tag => {
          const tagName = tag.match(/<(\w+)/)[1];
          if (!['img', 'br', 'hr', 'input', 'meta', 'link'].includes(tagName)) {
            openTags.push(tagName);
          }
        });
      }
      
      // Find closing tags
      const closeTagMatch = line.match(/<\/(\w+)>/g);
      if (closeTagMatch) {
        closeTagMatch.forEach(tag => {
          const tagName = tag.match(/<\/(\w+)>/)[1];
          const index = openTags.lastIndexOf(tagName);
          if (index !== -1) {
            openTags.splice(index, 1);
          }
        });
      }
      
      newContent.push(line);
    }
    
    // Add missing closing tags
    if (openTags.length > 0) {
      modified = true;
      const closingTags = openTags.reverse().map(tag => `</${tag}>`).join('\n');
      newContent.push(closingTags);
    }
    
    content = newContent.join('\n');
    
    // Fix common TypeScript/JSX syntax issues
    content = content.replace(/;\s*$/gm, ''); // Remove trailing semicolons
    content = content.replace(/\s+$/gm, ''); // Remove trailing whitespace
    
    // Fix malformed object literals
    content = content.replace(/(\w+):\s*([^,}\n]+)(?=\s*[,}])/g, (match, key, value) => {
      if (!value.startsWith('"') && !value.startsWith("'") && !value.startsWith('{') && !value.startsWith('[')) {
        modified = true;
        return `${key}: "${value.trim()}"`;
      }
      return match;
    });
    
    // Fix broken JSX expressions
    content = content.replace(/\{([^}]*?)(\n|$)/g, (match, expr, newline) => {
      if (!expr.includes('}') && !expr.trim().endsWith(';')) {
        modified = true;
        return `{${expr.trim()}}${newline}`;
      }
      return match;
    });
    
    if (modified) {
      fs.writeFileSync(filePath, content);
      console.log(`Fixed syntax errors in: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Function to fix specific problematic files
function fixSpecificFiles() {
  const problematicFiles = [
    '/workspace/app/ai-services/page.tsx',
    '/workspace/app/ai-solutions/page.tsx',
    '/workspace/app/components/AccessibilityEnhancer.tsx',
    '/workspace/app/components/EnhancedAccessibility.tsx',
    '/workspace/app/components/Footer.tsx',
    '/workspace/app/components/FuturisticButton.tsx',
    '/workspace/app/components/FuturisticCard.tsx',
    '/workspace/app/components/Header.tsx',
    '/workspace/app/components/PerformanceMonitor.tsx',
    '/workspace/app/components/PerformanceOptimizer.tsx',
    '/workspace/app/components/ResponsiveContainer.tsx',
    '/workspace/app/components/SEOEnhancer.tsx'
  ];
  
  let fixedCount = 0;
  
  for (const filePath of problematicFiles) {
    if (fs.existsSync(filePath)) {
      if (fixSyntaxErrors(filePath)) {
        fixedCount++;
      }
    }
  }
  
  return fixedCount;
}

// Function to recursively fix files
function fixFilesInDirectory(dir) {
  let fixedCount = 0;
  
  try {
    const items = fs.readdirSync(dir);
    
    for (const item of items) {
      const fullPath = path.join(dir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        // Skip problematic directories
        if (['node_modules', 'dist', 'build', '.git', '.next', 'out', 'app-broken', 'app-disabled'].includes(item)) {
          continue;
        }
        fixedCount += fixFilesInDirectory(fullPath);
      } else if (stat.isFile()) {
        // Only process TypeScript/JavaScript files
        if (item.match(/\.(ts|tsx|js|jsx)$/)) {
          if (fixSyntaxErrors(fullPath)) {
            fixedCount++;
          }
        }
      }
    }
  } catch (error) {
    console.error(`Error reading directory ${dir}:`, error.message);
  }
  
  return fixedCount;
}

// Main execution
console.log('Starting syntax error resolution...');

// Fix specific problematic files first
console.log('Fixing specific problematic files...');
let specificFixed = fixSpecificFiles();
console.log(`Fixed ${specificFixed} specific files.`);

// Fix files in the main directories
const directories = [
  '/workspace/app',
  '/workspace/api',
  '/workspace/hooks'
];

let totalFixed = specificFixed;

for (const dir of directories) {
  if (fs.existsSync(dir)) {
    console.log(`Processing directory: ${dir}`);
    totalFixed += fixFilesInDirectory(dir);
  }
}

console.log(`\nFixed syntax errors in ${totalFixed} files.`);

// Run type checking to see remaining issues
console.log('\nRunning type checking to check for remaining issues...');
try {
  const { execSync } = require('child_process');
  execSync('npm run type-check', { stdio: 'inherit', cwd: '/workspace' });
  console.log('Type checking passed!');
} catch (error) {
  console.log('Type checking found remaining issues, but many syntax errors should be resolved.');
}

console.log('Syntax error resolution complete!');