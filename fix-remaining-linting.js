#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log('🔧 Fixing remaining linting issues...\n');

// Function to fix ReactNode imports
function fixReactNodeImports(content) {
  // Remove ReactNode from single imports
  content = content.replace(/import\s*\{\s*ReactNode\s*\}\s*from\s*['"]react['"];?\s*/g, '');
  
  // Remove ReactNode from multi-imports
  content = content.replace(/import\s*\{\s*([^}]*),\s*ReactNode\s*([^}]*)\s*\}\s*from\s*['"]react['"];?\s*/g, (match, before, after) => {
    const imports = (before + after).split(',').map(imp => imp.trim()).filter(imp => imp && imp !== 'ReactNode');
    if (imports.length === 0) {
      return '';
    }
    return `import { ${imports.join(', ')} } from 'react';\n`;
  });
  
  return content;
}

// Function to fix unused variables
function fixUnusedVariables(content) {
  // Remove unused error variables in catch blocks
  content = content.replace(/catch\s*\(\s*error\s*\)\s*\{[^}]*\}/g, (match) => {
    if (match.includes('error') && !match.includes('error.')) {
      return match.replace(/catch\s*\(\s*error\s*\)/, 'catch');
    }
    return match;
  });

  // Remove unused variables in destructuring
  content = content.replace(/const\s*\{\s*([^}]+)\s*\}\s*=\s*[^;]+;/g, (match, destructured) => {
    const vars = destructured.split(',').map(v => v.trim());
    const usedVars = vars.filter(v => {
      const varName = v.split(':')[0].trim();
      return content.includes(varName) && !['error', 'registration', 'errorData', 'imgIndex', 'index'].includes(varName);
    });
    
    if (usedVars.length === 0) {
      return ''; // Remove the entire line
    } else if (usedVars.length < vars.length) {
      return match.replace(destructured, usedVars.join(', '));
    }
    return match;
  });

  return content;
}

// Function to fix specific component issues
function fixSpecificIssues(content, filePath) {
  // Fix Navigation component
  if (filePath.includes('Navigation.tsx')) {
    content = content.replace(/import\s*\{\s*memo\s*\}\s*from\s*['"]react['"];?\s*/g, '');
  }
  
  // Fix PerformanceOptimizer component
  if (filePath.includes('PerformanceOptimizer.tsx')) {
    content = content.replace(/import\s*\{\s*PerformanceEventTiming\s*\}\s*from\s*['"]web-vitals['"];?\s*/g, '');
    content = content.replace(/import\s*\{\s*LayoutShift\s*\}\s*from\s*['"]web-vitals['"];?\s*/g, '');
  }
  
  // Fix ServiceWorkerRegistration component
  if (filePath.includes('ServiceWorkerRegistration.tsx')) {
    content = content.replace(/const\s*\[\s*registration\s*,\s*setRegistration\s*\]\s*=\s*useState[^;]+;?\s*/g, '');
  }
  
  // Fix EnhancedAccessibilityManager component
  if (filePath.includes('EnhancedAccessibilityManager.tsx')) {
    content = content.replace(/imgIndex\s*,\s*/g, '');
    content = content.replace(/,\s*index/g, '');
  }
  
  // Fix logger.ts
  if (filePath.includes('logger.ts')) {
    content = content.replace(/function\s+\w+\(\s*message[^)]*\)\s*\{[^}]*\}/g, (match) => {
      if (match.includes('message') && !match.includes('message.')) {
        return match.replace(/\(\s*message[^)]*\)/, '()');
      }
      return match;
    });
  }
  
  // Fix performance utils
  if (filePath.includes('performanceUtils.ts') || filePath.includes('performance.ts')) {
    content = content.replace(/const\s+start\s*=\s*[^;]+;?\s*/g, '');
    content = content.replace(/const\s+end\s*=\s*[^;]+;?\s*/g, '');
  }
  
  return content;
}

// Function to process a single file
function processFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    const originalContent = content;
    
    // Apply all fixes
    content = fixReactNodeImports(content);
    content = fixUnusedVariables(content);
    content = fixSpecificIssues(content, filePath);
    
    // Clean up multiple empty lines
    content = content.replace(/\n\s*\n\s*\n/g, '\n\n');
    
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content);
      console.log(`✅ Fixed: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`❌ Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Function to recursively find TypeScript/JavaScript files
function findFiles(dir, extensions = ['.tsx', '.ts', '.js', '.jsx']) {
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
const appDir = path.join(__dirname, 'app');
const files = findFiles(appDir);

console.log(`Found ${files.length} files to process...\n`);

let fixedCount = 0;
for (const file of files) {
  if (processFile(file)) {
    fixedCount++;
  }
}

console.log(`\n🎉 Fixed ${fixedCount} files!`);
console.log('✨ Remaining linting fixes completed!');