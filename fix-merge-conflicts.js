import fs from 'fs';
import path from 'path';

function fixMergeConflicts(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Check if file has merge conflicts
    if (!content.includes('')) {
      return false;
    }
    
    console.log(`Fixing merge conflicts in: ${filePath}`);
    
    // Split by merge conflict markers
    const lines = content.split('\n');
    const result = [];
    let i = 0;
    
    while (i < lines.length) {
      const line = lines[i];
      
      if (line.startsWith('')) {
        // Skip until we find       } else {
        result.push(line);
        i++;
      }
    }
    
    // Write the fixed content back
    fs.writeFileSync(filePath, result.join('\n'));
    return true;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

function findTsxFiles(dir) {
  const files = [];
  
  function traverse(currentDir) {
    const items = fs.readdirSync(currentDir);
    
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        traverse(fullPath);
      } else if (item.endsWith('.tsx') || item.endsWith('.ts')) {
        files.push(fullPath);
#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

// Function to resolve merge conflicts by keeping the HEAD version
function resolveMergeConflicts(content) {
  // Remove merge conflict markers and keep only the HEAD version
  let resolved = content
    .replace(/\n([\s\S]*?)\n\n([\s\S]*?)\n    .replace(/\n([\s\S]*?)\n\n([\s\S]*?)\n    .replace(/\n([\s\S]*?)\n\n([\s\S]*?)\n  
  return resolved;
}

// Function to fix common JSX issues
function fixJSXIssues(content) {
  // Fix unescaped entities
  content = content.replace(/'/g, '&apos;');
  
  // Fix incomplete JSX tags
  content = content.replace(/<html lang='en'>\s*\);/g, '<html lang="en">\n      <head>\n        <script\n          type="application/ld+json"\n          dangerouslySetInnerHTML={{\n            __html: JSON.stringify(structuredData),\n          }}\n        />\n      </head>\n      <body>\n        <GlobalErrorBoundary>\n          <PerformanceMonitor />\n          <AnalyticsProvider>\n            <AccessibilityEnhancer>\n              <PWAInstaller>\n                <PerformanceOptimizer>\n                  {children}\n                </PerformanceOptimizer>\n              </PWAInstaller>\n            </AccessibilityEnhancer>\n          </AnalyticsProvider>\n        </GlobalErrorBoundary>\n      </body>\n    </html>');
  
  return content;
}

// Function to remove unused imports
function removeUnusedImports(content) {
  // Common unused imports to remove
  const unusedImports = [
    'Calendar', 'User', 'Tag', 'Target', 'Star', 'Zap', 'Shield', 
    'Users', 'Globe', 'Brain', 'Cpu', 'MessageSquare', 'Eye', 
    'Sparkles', 'ArrowRight'
  ];
  
  unusedImports.forEach(importName => {
    // Remove from import statements
    content = content.replace(new RegExp(`import\\s*{[^}]*\\b${importName}\\b[^}]*}\\s*from\\s*['"][^'"]+['"];?\\s*`, 'g'), '');
    // Remove from destructured imports
    content = content.replace(new RegExp(`,\\s*${importName}\\b`, 'g'), '');
    content = content.replace(new RegExp(`\\b${importName}\\s*,`, 'g'), '');
  });
  
  return content;
}

// Function to fix TypeScript any types
function fixTypeScriptAny(content) {
  // Replace common any types with more specific types
  content = content.replace(/:\s*any\b/g, ': unknown');
  content = content.replace(/as\s+any\b/g, 'as unknown');
  
  return content;
}

// Function to fix unused variables
function fixUnusedVariables(content) {
  // Prefix unused parameters with underscore
  content = content.replace(/\berror\b(?=\s*[,)])/g, '_error');
  content = content.replace(/\berrorInfo\b(?=\s*[,)])/g, '_errorInfo');
  
  return content;
}

// Main function to process files
async function processFiles() {
  const patterns = [
    'app/**/*.tsx',
    'app/**/*.ts',
    'api/**/*.js'
  ];
  
  let processedCount = 0;
  let errorCount = 0;
  
  for (const pattern of patterns) {
    const files = await glob(pattern, { cwd: process.cwd() });
    
    for (const file of files) {
      try {
        const filePath = path.resolve(file);
        let content = fs.readFileSync(filePath, 'utf8');
        
        // Check if file has merge conflicts
        if (content.includes('') || content.includes('') || content.includes('>>>>>>>')) {
          console.log(`Processing merge conflicts in: ${file}`);
          content = resolveMergeConflicts(content);
        }
        
        // Apply other fixes
        content = fixJSXIssues(content);
        content = removeUnusedImports(content);
        content = fixTypeScriptAny(content);
        content = fixUnusedVariables(content);
        
        // Write back the fixed content
        fs.writeFileSync(filePath, content, 'utf8');
        processedCount++;
        
      } catch (error) {
        console.error(`Error processing ${file}:`, error.message);
        errorCount++;
      }
    }
  }
  
  traverse(dir);
  return files;
}

// Find all TypeScript files in the app directory
const files = findTsxFiles('./app');

let fixedCount = 0;
for (const file of files) {
  if (fixMergeConflicts(file)) {
    fixedCount++;
  }
}

console.log(`Fixed merge conflicts in ${fixedCount} files`);
