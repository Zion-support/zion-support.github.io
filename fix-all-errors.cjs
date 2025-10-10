#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('🔧 Starting comprehensive error fixing...');

// Function to fix merge conflicts in a file
function fixMergeConflicts(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Check if file has merge conflicts
    if (!content.includes('<<<<<<<') && !content.includes('=======') && !content.includes('>>>>>>>')) {
      return false;
    }
    
    console.log(`  Fixing merge conflicts in: ${filePath}`);
    
    // Remove merge conflict markers and keep the second version (after =======)
    const lines = content.split('\n');
    const fixedLines = [];
    let inConflict = false;
    let keepVersion = false;
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      
      if (line.trim().startsWith('<<<<<<<')) {
        inConflict = true;
        keepVersion = false;
        continue;
      }
      
      if (line.trim().startsWith('=======')) {
        keepVersion = true;
        continue;
      }
      
      if (line.trim().startsWith('>>>>>>>')) {
        inConflict = false;
        keepVersion = false;
        continue;
      }
      
      if (!inConflict || keepVersion) {
        fixedLines.push(line);
      }
    }
    
    fs.writeFileSync(filePath, fixedLines.join('\n'));
    return true;
  } catch (error) {
    console.error(`  Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Function to fix common JSX syntax errors
function fixJSXSyntax(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Fix self-closing tags with content
    content = content.replace(/<(\w+)([^>]*?)\s*><\/\1>/g, (match, tagName, attributes) => {
      modified = true;
      return `<${tagName}${attributes}></${tagName}>`;
    });
    
    // Fix malformed closing tags like </di> instead of </div>
    content = content.replace(/<\/di>/g, '</div>');
    content = content.replace(/<\/h>/g, '</h3>');
    content = content.replace(/<\/p>/g, '</p>');
    
    // Fix empty self-closing tags that should have content
    content = content.replace(/<(\w+)([^>]*?)\s*\/>\s*([^<]+)/g, (match, tagName, attributes, content) => {
      if (content.trim()) {
        modified = true;
        return `<${tagName}${attributes}>${content}</${tagName}>`;
      }
      return match;
    });
    
    // Fix template literal syntax errors
    content = content.replace(/`\s*\{\s*([^}]+)\s*\]\s*\}/g, '`{$1}`');
    
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

// Function to recursively find and fix files
function fixFilesInDirectory(dirPath) {
  const files = fs.readdirSync(dirPath);
  let fixedCount = 0;
  
  for (const file of files) {
    const filePath = path.join(dirPath, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      // Skip node_modules and other irrelevant directories
      if (file === 'node_modules' || file === '.git' || file === 'dist' || file === '.next') {
        continue;
      }
      fixedCount += fixFilesInDirectory(filePath);
    } else if (file.endsWith('.tsx') || file.endsWith('.ts') || file.endsWith('.jsx') || file.endsWith('.js')) {
      if (fixMergeConflicts(filePath)) {
        fixedCount++;
      }
      if (fixJSXSyntax(filePath)) {
        fixedCount++;
      }
    }
  }
  
  return fixedCount;
}

// Main execution
try {
  console.log('📁 Scanning for files with errors...');
  const fixedCount = fixFilesInDirectory('/workspace');
  console.log(`✅ Fixed ${fixedCount} files`);
  
  console.log('🧹 Running additional cleanup...');
  
  // Try to run lint fix
  try {
    execSync('npm run lint:fix', { stdio: 'pipe' });
    console.log('✅ Lint fixes applied');
  } catch (error) {
    console.log('⚠️  Lint fix had issues, continuing...');
  }
  
  console.log('🎉 Error fixing completed!');
  
} catch (error) {
  console.error('❌ Error during fixing process:', error.message);
  process.exit(1);
}