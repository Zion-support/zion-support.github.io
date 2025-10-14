#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Function to fix JSX structure issues
function fixJSXStructure(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Remove any remaining merge conflict artifacts
    if (content.includes('<<<<<<< HEAD') || content.includes('=======') || content.includes('>>>>>>>')) {
      console.log(`Removing merge conflict artifacts from: ${filePath}`);
      content = content.replace(/<<<<<<< HEAD[\s\S]*?=======([\s\S]*?)>>>>>>>/g, '$1');
      content = content.replace(/<<<<<<< HEAD[\s\S]*?>>>>>>>/g, '');
      content = content.replace(/=======[\s\S]*?>>>>>>>/g, '');
      modified = true;
    }
    
    // Remove commit hashes and other artifacts
    content = content.replace(/^\s*[a-f0-9]{40}\s*$/gm, '');
    content = content.replace(/^\s*[a-f0-9]{7,}\s*$/gm, '');
    
    // Fix common JSX structure issues
    const originalContent = content;
    
    // Fix missing closing tags for common patterns
    const lines = content.split('\n');
    const fixedLines = [];
    let braceCount = 0;
    let inJSX = false;
    let currentIndent = '';
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      const trimmed = line.trim();
      
      // Skip empty lines and comments
      if (!trimmed || trimmed.startsWith('//') || trimmed.startsWith('/*')) {
        fixedLines.push(line);
        continue;
      }
      
      // Track opening braces
      if (trimmed.includes('{')) {
        braceCount += (trimmed.match(/\{/g) || []).length;
      }
      
      // Track closing braces
      if (trimmed.includes('}')) {
        braceCount -= (trimmed.match(/\}/g) || []).length;
      }
      
      // Check if we're in JSX
      if (trimmed.includes('<') && !trimmed.includes('</')) {
        inJSX = true;
        currentIndent = line.match(/^(\s*)/)[1];
      }
      
      // Check if JSX is ending
      if (trimmed.includes('</') || trimmed.includes('/>')) {
        inJSX = false;
      }
      
      // If we have an opening brace but no closing brace, and we're at the end of a function
      if (braceCount > 0 && i === lines.length - 1) {
        // Add missing closing braces
        for (let j = 0; j < braceCount; j++) {
          fixedLines.push(currentIndent + '}');
        }
        modified = true;
      }
      
      // Fix incomplete JSX elements
      if (inJSX && trimmed.includes('<') && !trimmed.includes('>') && !trimmed.includes('</')) {
        // This is likely an incomplete JSX element, try to complete it
        if (trimmed.includes('<div')) {
          fixedLines.push(line);
          // Add closing div if not present
          if (!content.substring(i * 100).includes('</div>')) {
            fixedLines.push(currentIndent + '</div>');
            modified = true;
          }
        } else {
          fixedLines.push(line);
        }
      } else {
        fixedLines.push(line);
      }
    }
    
    // Join lines back
    content = fixedLines.join('\n');
    
    // Fix specific common patterns
    content = content.replace(/}\s*$/, '}\n}');
    content = content.replace(/^\s*}\s*$/gm, '}');
    
    // Remove duplicate closing braces
    content = content.replace(/\}\s*\}/g, '}');
    
    // Fix missing export statements
    if (content.includes('function') && !content.includes('export') && !content.includes('const')) {
      content = content.replace(/function\s+(\w+)/, 'export default function $1');
      modified = true;
    }
    
    // Clean up extra whitespace
    content = content.replace(/\n\s*\n\s*\n/g, '\n\n');
    content = content.replace(/^\s*\n/gm, '');
    
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content);
      return true;
    }
    
    return modified;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Function to find all TypeScript/JavaScript files
function findSourceFiles(dir) {
  const files = [];
  
  function traverse(currentDir) {
    const items = fs.readdirSync(currentDir);
    
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules' && item !== 'dist') {
        traverse(fullPath);
      } else if (stat.isFile() && (item.endsWith('.tsx') || item.endsWith('.ts') || item.endsWith('.js') || item.endsWith('.jsx'))) {
        files.push(fullPath);
      }
    }
  }
  
  traverse(dir);
  return files;
}

// Main execution
console.log('🔍 Searching for source files to fix...');
const sourceFiles = findSourceFiles(process.cwd());

console.log(`📝 Found ${sourceFiles.length} source files to check.`);

console.log('\n🔧 Fixing JSX structure issues...');
let fixedCount = 0;

sourceFiles.forEach(file => {
  if (fixJSXStructure(file)) {
    fixedCount++;
  }
});

console.log(`\n✅ Successfully processed ${fixedCount} files.`);
console.log('\n🎉 JSX structure fixing complete!');