#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('🔧 Fixing JSX structure issues...');

// Function to fix JSX structure issues
function fixJSXStructure(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Fix self-closing tags that have content
    content = content.replace(/<(\w+)([^>]*?)\s*><\/\1>/g, (match, tagName, attributes) => {
      modified = true;
      return `<${tagName}${attributes}></${tagName}>`;
    });
    
    // Fix malformed closing tags
    content = content.replace(/<\/di>/g, '</div>');
    content = content.replace(/<\/h>/g, '</h3>');
    content = content.replace(/<\/p>/g, '</p>');
    content = content.replace(/<\/a>/g, '</a>');
    content = content.replace(/<\/button>/g, '</button>');
    
    // Fix empty self-closing tags that should have content
    content = content.replace(/<(\w+)([^>]*?)\s*\/>\s*([^<\s][^<]*?)(?=\s*<)/g, (match, tagName, attributes, textContent) => {
      if (textContent.trim()) {
        modified = true;
        return `<${tagName}${attributes}>${textContent}</${tagName}>`;
      }
      return match;
    });
    
    // Fix specific patterns like </div>🚀</div>
    content = content.replace(/<\/div>([^<]+)<\/div>/g, (match, content) => {
      modified = true;
      return `>${content}</div>`;
    });
    
    // Fix malformed h3 tags
    content = content.replace(/<\/h3>([^<]+)<\/h3>/g, (match, content) => {
      modified = true;
      return `>${content}</h3>`;
    });
    
    // Fix malformed p tags
    content = content.replace(/<\/p>([^<]+)<\/p>/g, (match, content) => {
      modified = true;
      return `>${content}</p>`;
    });
    
    // Fix malformed h1 tags
    content = content.replace(/<\/h1>([^<]+)<\/h1>/g, (match, content) => {
      modified = true;
      return `>${content}</h1>`;
    });
    
    if (modified) {
      fs.writeFileSync(filePath, content);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`  Error fixing JSX in ${filePath}:`, error.message);
    return false;
  }
}

// Function to recursively fix files
function fixFilesInDirectory(dirPath) {
  const files = fs.readdirSync(dirPath);
  let fixedCount = 0;
  
  for (const file of files) {
    const filePath = path.join(dirPath, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      if (file === 'node_modules' || file === '.git' || file === 'dist' || file === '.next') {
        continue;
      }
      fixedCount += fixFilesInDirectory(filePath);
    } else if (file.endsWith('.tsx') || file.endsWith('.jsx')) {
      if (fixJSXStructure(filePath)) {
        console.log(`  Fixed JSX structure in: ${filePath}`);
        fixedCount++;
      }
    }
  }
  
  return fixedCount;
}

// Main execution
try {
  console.log('📁 Scanning for JSX structure issues...');
  const fixedCount = fixFilesInDirectory('/workspace');
  console.log(`✅ Fixed ${fixedCount} files with JSX structure issues`);
  console.log('🎉 JSX structure fixing completed!');
} catch (error) {
  console.error('❌ Error during JSX fixing process:', error.message);
  process.exit(1);
}