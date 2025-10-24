const fs = require('fs');
const path = require('path');

// Function to fix specific parsing errors
function fixParsingErrors(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Fix malformed JSX closing tags
    const jsxClosingTagRegex = /<(\w+)([^>]*)>\s*<\/\1>/g;
    if (jsxClosingTagRegex.test(content)) {
      content = content.replace(jsxClosingTagRegex, '<$1$2 />');
      modified = true;
    }

    // Fix missing closing tags for div elements
    const divRegex = /<div([^>]*)>\s*$/gm;
    if (divRegex.test(content)) {
      // This is a complex fix - we'll need to track opening and closing tags
      const lines = content.split('\n');
      const fixedLines = [];
      const tagStack = [];
      
      for (let i = 0; i < lines.length; i++) {
        const line = lines[i];
        const openTags = line.match(/<(\w+)([^>]*)>/g);
        const closeTags = line.match(/<\/(\w+)>/g);
        
        if (openTags) {
          openTags.forEach(tag => {
            const tagName = tag.match(/<(\w+)/)[1];
            if (!tag.includes('/>')) {
              tagStack.push(tagName);
            }
          });
        }
        
        if (closeTags) {
          closeTags.forEach(tag => {
            const tagName = tag.match(/<\/(\w+)>/)[1];
            const index = tagStack.lastIndexOf(tagName);
            if (index !== -1) {
              tagStack.splice(index, 1);
            }
          });
        }
        
        fixedLines.push(line);
      }
      
      // Add missing closing tags
      while (tagStack.length > 0) {
        const tag = tagStack.pop();
        fixedLines.push(`</${tag}>`);
      }
      
      content = fixedLines.join('\n');
      modified = true;
    }

    // Fix malformed object properties
    content = content.replace(/(\w+)\s*:\s*([^,}\n]+)\s*\n(\s*)(\w+)\s*:/g, '$1: $2,\n$3$4:');
    
    // Fix missing commas in function parameters
    content = content.replace(/(\w+)\s*\(\s*([^)]+)\s*\)\s*{/g, (match, funcName, params) => {
      const fixedParams = params.replace(/(\w+)\s+(\w+)/g, '$1, $2');
      return `${funcName}(${fixedParams}) {`;
    });

    // Fix malformed imports
    content = content.replace(/import\s+{\s*([^}]+)\s*}\s*from\s*['"]([^'"]+)['"]\s*;?\s*$/gm, 'import { $1 } from "$2";');

    // Fix missing semicolons
    content = content.replace(/(\w+)\s*=\s*([^;]+)\s*$/gm, (match, varName, value) => {
      if (!value.includes(';') && !value.includes('{') && !value.includes('(')) {
        return `${varName} = ${value};`;
      }
      return match;
    });

    // Fix malformed JSX expressions
    content = content.replace(/<(\w+)([^>]*)>\s*<\/\1>/g, '<$1$2 />');
    
    // Fix missing closing braces
    const openBraces = (content.match(/{/g) || []).length;
    const closeBraces = (content.match(/}/g) || []).length;
    if (openBraces > closeBraces) {
      const missingBraces = openBraces - closeBraces;
      content += '\n' + '}'.repeat(missingBraces);
      modified = true;
    }

    // Fix malformed function declarations
    content = content.replace(/function\s+(\w+)\s*\(\s*\)\s*{\s*$/gm, 'function $1() {\n  ');

    // Fix missing return statements
    content = content.replace(/function\s+(\w+)\s*\([^)]*\)\s*{\s*$/gm, 'function $1() {\n  return ');

    // Fix malformed React components
    content = content.replace(/const\s+(\w+)\s*=\s*\(\s*\)\s*=>\s*{\s*$/gm, 'const $1 = () => {\n  return ');

    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed parsing errors in ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Function to fix specific files that are known to have issues
function fixSpecificFiles() {
  const problematicFiles = [
    'app/components/AccessibilityComponents.tsx',
    'app/components/AdvancedAccessibilityEnhancer.tsx',
    'app/components/AdvancedErrorBoundary.tsx',
    'app/components/AdvancedPerformanceMonitor.tsx',
    'app/components/AdvancedPerformanceOptimizer.tsx',
    'app/components/AdvancedSEOOptimizer.tsx',
    'app/components/Analytics.tsx',
    'app/components/AnalyticsProvider.tsx',
    'app/components/AnimatedCounter.tsx',
    'app/components/AnimatedText.tsx',
    'app/components/Breadcrumb.tsx'
  ];

  let fixedCount = 0;
  problematicFiles.forEach(file => {
    if (fs.existsSync(file)) {
      if (fixParsingErrors(file)) {
        fixedCount++;
      }
    }
  });
  return fixedCount;
}

// Function to recursively find and fix files
function fixFilesInDirectory(dir) {
  const files = fs.readdirSync(dir);
  let fixedCount = 0;

  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory() && !file.startsWith('.') && file !== 'node_modules') {
      fixedCount += fixFilesInDirectory(filePath);
    } else if (file.endsWith('.tsx') || file.endsWith('.ts') || file.endsWith('.jsx') || file.endsWith('.js')) {
      if (fixParsingErrors(filePath)) {
        fixedCount++;
      }
    }
  });

  return fixedCount;
}

// Main execution
console.log('Starting comprehensive parsing error fixes...');

// Fix specific problematic files first
const specificFixed = fixSpecificFiles();
console.log(`Fixed ${specificFixed} specific problematic files.`);

// Then fix all files in the app directory
const appFixed = fixFilesInDirectory('./app');
console.log(`Fixed ${appFixed} files in app directory.`);

// Also fix files in src directory if it exists
let srcFixed = 0;
if (fs.existsSync('./src')) {
  srcFixed = fixFilesInDirectory('./src');
  console.log(`Fixed ${srcFixed} files in src directory.`);
}

console.log(`Comprehensive parsing error fixes completed. Total files fixed: ${specificFixed + appFixed + srcFixed}`);