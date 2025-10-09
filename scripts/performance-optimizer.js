#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('🚀 Starting performance optimization...');

// Remove console.log statements from production code
function removeConsoleLogs(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    const originalContent = content;
    
    // Remove console.log, console.warn, console.error statements
    content = content.replace(/console\.(log|warn|error|info|debug)\([^)]*\);?\s*/g, '');
    
    // Remove empty lines that might be left behind
    content = content.replace(/\n\s*\n\s*\n/g, '\n\n');
    
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content);
      console.log(`✅ Cleaned console statements in: ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`❌ Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Process all TypeScript and JavaScript files
function processFiles(dir) {
  let processedCount = 0;
  let cleanedCount = 0;
  
  function walkDir(currentPath) {
    const files = fs.readdirSync(currentPath);
    
    files.forEach(file => {
      const filePath = path.join(currentPath, file);
      const stat = fs.statSync(filePath);
      
      if (stat.isDirectory()) {
        // Skip node_modules and dist directories
        if (!['node_modules', 'dist', '.git', '.next'].includes(file)) {
          walkDir(filePath);
        }
      } else if (file.endsWith('.ts') || file.endsWith('.tsx') || file.endsWith('.js') || file.endsWith('.jsx')) {
        processedCount++;
        
        if (removeConsoleLogs(filePath)) {
          cleanedCount++;
        }
      }
    });
  }
  
  walkDir(dir);
  
  console.log(`\n📊 Performance Optimization Summary:`);
  console.log(`   Files processed: ${processedCount}`);
  console.log(`   Files with console statements cleaned: ${cleanedCount}`);
}

// Main execution
const srcDir = path.join(__dirname, '..', 'src');

if (fs.existsSync(srcDir)) {
  processFiles(srcDir);
  console.log('\n🎉 Performance optimization completed successfully!');
} else {
  console.error('❌ Source directory not found:', srcDir);
  process.exit(1);
}
