#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('🔧 Fixing HTML entities in import statements...\n');

// Function to fix a single file
function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Fix HTML entities in import statements only
    content = content.replace(/from &apos;([^&]+)&apos;/g, "from '$1'");
    content = content.replace(/from &quot;([^"]+)&quot;/g, 'from "$1"');
    
    // Fix className attributes
    content = content.replace(/className=&quot;([^"]+)&quot;/g, 'className="$1"');
    
    // Fix other common attributes
    content = content.replace(/role=&quot;([^"]+)&quot;/g, 'role="$1"');
    content = content.replace(/aria-label=&quot;([^"]+)&quot;/g, 'aria-label="$1"');
    content = content.replace(/id=&quot;([^"]+)&quot;/g, 'id="$1"');
    content = content.replace(/href=&quot;([^"]+)&quot;/g, 'href="$1"');
    content = content.replace(/src=&quot;([^"]+)&quot;/g, 'src="$1"');
    content = content.replace(/alt=&quot;([^"]+)&quot;/g, 'alt="$1"');
    content = content.replace(/title=&quot;([^"]+)&quot;/g, 'title="$1"');
    
    // Fix text content (but not in import statements)
    content = content.replace(/(?<!import.*)&apos;/g, "'");
    content = content.replace(/(?<!import.*)&quot;/g, '"');

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
  console.log('\n✨ HTML entity fixes completed!');
  
} catch (error) {
  console.error('❌ Error during HTML entity fixes:', error.message);
  process.exit(1);
}