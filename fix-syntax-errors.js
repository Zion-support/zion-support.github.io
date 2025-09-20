#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Function to fix common JSX syntax errors
function fixJSXErrors(content) {
  // Fix missing closing tags and other common issues
  let fixed = content;
  
  // Fix unclosed div tags
  fixed = fixed.replace(/<div([^>]*)>/g, (match, attrs) => {
    // Check if this div has a corresponding closing tag
    const openDivs = (fixed.match(/<div/g) || []).length;
    const closeDivs = (fixed.match(/<\/div>/g) || []).length;
    
    if (openDivs > closeDivs) {
      return match;
    }
    return match;
  });
  
  // Fix common syntax issues
  fixed = fixed.replace(/<divdiv/g, '<div');
  fixed = fixed.replace(/<\/divdiv>/g, '</div>');
  fixed = fixed.replace(/<p([^>]*)>([^<]*)$/gm, '<p$1>$2</p>');
  fixed = fixed.replace(/<button([^>]*)>([^<]*)$/gm, '<button$1>$2</button>');
  
  // Fix missing closing tags at the end of files
  const openTags = (fixed.match(/<[^/][^>]*>/g) || []).filter(tag => 
    !tag.includes('/>') && !tag.includes('</')
  );
  const closeTags = (fixed.match(/<\/[^>]*>/g) || []).filter(tag => 
    tag !== '</>' && tag !== '</div>' // Exclude fragments and divs
  );
  
  // Add missing closing tags
  if (openTags.length > closeTags.length) {
    const missingTags = openTags.length - closeTags.length;
    for (let i = 0; i < missingTags; i++) {
      fixed += '\n  </div>';
    }
  }
  
  return fixed;
}

// Function to fix specific file types
function fixFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const fixed = fixJSXErrors(content);
    
    if (content !== fixed) {
      fs.writeFileSync(filePath, fixed);
      console.log(`✅ Fixed: ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`❌ Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Function to recursively find and fix TypeScript/JSX files
function fixFilesInDirectory(dir) {
  const files = fs.readdirSync(dir);
  let fixedCount = 0;
  
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory() && !file.startsWith('.') && file !== 'node_modules') {
      fixedCount += fixFilesInDirectory(filePath);
    } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
      if (fixFile(filePath)) {
        fixedCount++;
      }
    }
  }
  
  return fixedCount;
}

// Main execution
console.log('🔧 Starting syntax error fixes...');

const srcDir = path.join(__dirname, 'src');
if (fs.existsSync(srcDir)) {
  const fixedCount = fixFilesInDirectory(srcDir);
  console.log(`🎉 Fixed ${fixedCount} files`);
} else {
  console.log('❌ src directory not found');
}

console.log('✅ Syntax error fixes completed!');