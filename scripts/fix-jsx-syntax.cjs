#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('🔧 Fixing JSX syntax issues...\n');

// Function to fix a single file
function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Fix malformed React.Fragment
    content = content.replace(/<React\.Fragment><\/React\.Fragment>/g, '<>');
    content = content.replace(/<React\.Fragment>/g, '<>');
    content = content.replace(/<\/React\.Fragment>/g, '</>');
    
    // Fix malformed JSX attributes
    content = content.replace(/name="([^"]*)" content="([^"]*)"/g, 'name="$1" content="$2"');
    
    // Fix unclosed JSX tags
    content = content.replace(/<meta name="([^"]*)" content="([^"]*)" \/>/g, '<meta name="$1" content="$2" />');
    
    // Fix malformed JSX fragments
    content = content.replace(/<React\.Fragment><\/React\.Fragment>\s*<Helmet>/g, '<>\n      <Helmet>');
    
    // Fix missing closing tags
    content = content.replace(/<Helmet>\s*<title>([^<]*)<\/title>\s*<meta name="([^"]*)" content="([^"]*)" \/>\s*<meta name="([^"]*)" content="([^"]*)" \/>\s*<\/Helmet>/g, 
      '<Helmet>\n        <title>$1</title>\n        <meta name="$2" content="$3" />\n        <meta name="$4" content="$5" />\n      </Helmet>');

    if (modified || content !== fs.readFileSync(filePath, 'utf8')) {
      fs.writeFileSync(filePath, content);
      console.log(`✅ Fixed: ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`❌ Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Function to find all TypeScript/TSX files
function findTsxFiles(dir) {
  const files = [];
  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
      files.push(...findTsxFiles(fullPath));
    } else if (item.endsWith('.tsx') || item.endsWith('.ts')) {
      files.push(fullPath);
    }
  }
  
  return files;
}

// Main execution
try {
  const appDir = path.join(__dirname, '..', 'app');
  const files = findTsxFiles(appDir);
  
  console.log(`📁 Found ${files.length} TypeScript files to process...\n`);
  
  let fixedCount = 0;
  files.forEach(file => {
    if (fixFile(file)) {
      fixedCount++;
    }
  });
  
  console.log(`\n🎉 Fixed ${fixedCount} files successfully!`);
  console.log('\n✨ JSX syntax fixes completed!');
  
} catch (error) {
  console.error('❌ Error during JSX syntax fixes:', error.message);
  process.exit(1);
}