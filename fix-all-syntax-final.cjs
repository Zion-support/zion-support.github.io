#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('🔧 Starting final comprehensive syntax fix...');

// Function to fix syntax errors in a file
function fixSyntaxErrors(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let originalContent = content;
    
    // Fix import statements - add missing quotes
    content = content.replace(/import\s+([^'"]+)\s+from\s+([^'";\n]+);?/g, (match, imports, module) => {
      if (!module.startsWith("'") && !module.startsWith('"')) {
        return `import ${imports} from '${module.trim()}';`;
      }
      return match;
    });
    
    // Fix 'use client' directive
    content = content.replace(/'use client;/g, "'use client';");
    content = content.replace(/'use client'/g, "'use client';");
    
    // Fix string literals in JSX
    content = content.replace(/title:\s*([^'",\n]+),/g, (match, title) => {
      if (!title.startsWith("'") && !title.startsWith('"')) {
        return `title: '${title.trim()}',`;
      }
      return match;
    });
    
    content = content.replace(/description:\s*([^'",\n]+),/g, (match, desc) => {
      if (!desc.startsWith("'") && !desc.startsWith('"')) {
        return `description: '${desc.trim()}',`;
      }
      return match;
    });
    
    content = content.replace(/href:\s*([^'",\n]+)/g, (match, href) => {
      if (!href.startsWith("'") && !href.startsWith('"')) {
        return `href: '${href.trim()}'`;
      }
      return match;
    });
    
    // Fix className attributes
    content = content.replace(/className=([^'">\s]+)/g, (match, className) => {
      if (!className.startsWith("'") && !className.startsWith('"')) {
        return `className='${className}'`;
      }
      return match;
    });
    
    // Fix JSX attributes
    content = content.replace(/(\w+)=([^'">\s]+)(?=\s|>)/g, (match, attr, value) => {
      if (!value.startsWith("'") && !value.startsWith('"') && !value.startsWith('{')) {
        return `${attr}='${value}'`;
      }
      return match;
    });
    
    // Fix JSX text content
    content = content.replace(/>\s*([^<>\n]+)\s*</g, (match, text) => {
      if (text.trim() && !text.includes('{') && !text.includes('}')) {
        return `>${text.trim()}<`;
      }
      return match;
    });
    
    // Fix object properties
    content = content.replace(/(\w+):\s*([^,}]+),/g, (match, key, value) => {
      if (!value.startsWith("'") && !value.startsWith('"') && !value.startsWith('{') && !value.includes('(')) {
        return `${key}: '${value.trim()}',`;
      }
      return match;
    });
    
    // Fix array elements
    content = content.replace(/\[\s*([^,\]]+)\s*\]/g, (match, element) => {
      if (!element.startsWith("'") && !element.startsWith('"') && !element.startsWith('{')) {
        return `['${element.trim()}']`;
      }
      return match;
    });
    
    // Remove extra semicolons
    content = content.replace(/;+/g, ';');
    content = content.replace(/;\s*;/g, ';');
    
    // Fix JSX closing tags
    content = content.replace(/<\/\s*([^>]+)\s*;/g, '</$1>');
    
    // Clean up whitespace
    content = content.replace(/\n\s*\n\s*\n/g, '\n\n');
    content = content.replace(/^\s+$/gm, '');
    
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`✅ Fixed: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`❌ Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Function to find all TypeScript/JavaScript files
function findFiles(dir, extensions = ['.ts', '.tsx', '.js', '.jsx']) {
  let files = [];
  
  try {
    const items = fs.readdirSync(dir);
    
    for (const item of items) {
      const fullPath = path.join(dir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        // Skip node_modules and other common directories
        if (!['node_modules', '.git', 'dist', 'build', '.next', 'out'].includes(item)) {
          files = files.concat(findFiles(fullPath, extensions));
        }
      } else if (extensions.some(ext => item.endsWith(ext))) {
        files.push(fullPath);
      }
    }
  } catch (error) {
    // Skip directories we can't read
  }
  
  return files;
}

// Main execution
async function main() {
  console.log('📁 Scanning for files with syntax errors...');
  
  const files = findFiles(process.cwd());
  let fixedCount = 0;
  let totalFiles = 0;
  
  for (const file of files) {
    totalFiles++;
    if (fixSyntaxErrors(file)) {
      fixedCount++;
    }
  }
  
  console.log(`\n📊 Summary:`);
  console.log(`   Total files processed: ${totalFiles}`);
  console.log(`   Files fixed: ${fixedCount}`);
  
  console.log('\n🎉 Final syntax fix completed!');
}

main().catch(console.error);