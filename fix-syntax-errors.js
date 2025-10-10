#!/usr/bin/env node

import fs from 'fs';
import path from 'path';

// Function to fix common JSX syntax errors
function fixSyntaxErrors(content) {
  let fixed = content;
  
  // Fix JSX expressions that need one parent element
  // Look for patterns like: <div>...</div><div>...</div> and wrap in fragment
  fixed = fixed.replace(/(<div[^>]*>[\s\S]*?<\/div>)\s*(<div[^>]*>)/g, '<>\n$1\n$2');
  
  // Fix missing closing tags by looking for common patterns
  // Fix unclosed JSX fragments
  fixed = fixed.replace(/<>([\s\S]*?)<div[^>]*>([\s\S]*?)<\/div>([\s\S]*?)<\/div>/g, '<>\n$1<div$2</div>\n$3</>');
  
  // Fix missing closing tags for sections
  fixed = fixed.replace(/(<section[^>]*>[\s\S]*?)(<div[^>]*>[\s\S]*?<\/div>)([\s\S]*?)(?!<\/section>)/g, '$1$2$3</section>');
  
  // Fix missing closing tags for divs
  fixed = fixed.replace(/(<div[^>]*>[\s\S]*?)(<div[^>]*>[\s\S]*?<\/div>)([\s\S]*?)(?!<\/div>)/g, '$1$2$3</div>');
  
  // Fix JSX expressions that need parentheses
  fixed = fixed.replace(/return\s+([^;]*?)(<[^>]*>[\s\S]*?<\/[^>]*>)/g, 'return (\n$1$2\n)');
  
  // Fix missing semicolons after JSX
  fixed = fixed.replace(/(<\/[^>]*>)\s*(\w)/g, '$1;\n$2');
  
  // Fix unclosed JSX fragments at the end of return statements
  fixed = fixed.replace(/(<[^>]*>[\s\S]*?)(?!<\/[^>]*>)\s*;\s*}\s*$/g, '$1</>;\n}');
  
  // Fix common JSX syntax issues
  fixed = fixed.replace(/(\w+)\s*=\s*{([^}]*?)}\s*([^=])/g, '$1={$2} $3');
  
  // Fix missing closing tags by analyzing structure
  const lines = fixed.split('\n');
  const fixedLines = [];
  const tagStack = [];
  
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const trimmed = line.trim();
    
    // Track opening tags
    const openTagMatch = trimmed.match(/<(\w+)(?:\s[^>]*)?(?:>|\s*$)/);
    if (openTagMatch && !trimmed.includes('/>') && !trimmed.includes('</')) {
      tagStack.push(openTagMatch[1]);
    }
    
    // Track closing tags
    const closeTagMatch = trimmed.match(/<\/(\w+)>/);
    if (closeTagMatch) {
      const tagName = closeTagMatch[1];
      const lastIndex = tagStack.lastIndexOf(tagName);
      if (lastIndex !== -1) {
        tagStack.splice(lastIndex, 1);
      }
    }
    
    fixedLines.push(line);
  }
  
  // Add missing closing tags at the end
  while (tagStack.length > 0) {
    const tag = tagStack.pop();
    fixedLines.push(`</${tag}>`);
  }
  
  return fixedLines.join('\n');
}

// Function to process a single file
function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const fixedContent = fixSyntaxErrors(content);
    
    if (content !== fixedContent) {
      fs.writeFileSync(filePath, fixedContent, 'utf8');
      console.log(`✓ Fixed syntax errors in: ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Function to find all TypeScript/JSX files
function findTsxFiles(dir) {
  const files = [];
  
  function walkDir(currentPath) {
    const items = fs.readdirSync(currentPath);
    
    for (const item of items) {
      const fullPath = path.join(currentPath, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
        walkDir(fullPath);
      } else if (stat.isFile() && (item.endsWith('.tsx') || item.endsWith('.ts'))) {
        files.push(fullPath);
      }
    }
  }
  
  walkDir(dir);
  return files;
}

// Main execution
console.log('🔍 Finding TypeScript/JSX files...');
const files = findTsxFiles('./app');

console.log(`Found ${files.length} files to process`);

let fixedCount = 0;
for (const file of files) {
  if (processFile(file)) {
    fixedCount++;
  }
}

console.log(`\n✅ Fixed syntax errors in ${fixedCount} files`);
console.log('\n🎉 Syntax error fixing complete!');