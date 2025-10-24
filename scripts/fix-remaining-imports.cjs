#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('🔧 Fixing remaining import issues...\n');

// Function to fix a single file
function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Fix all &apos; and &quot; in import statements
    content = content.replace(/&apos;/g, "'");
    content = content.replace(/&quot;/g, '"');
    
    // Fix specific import patterns
    content = content.replace(/from &apos;([^&]+)&apos;/g, "from '$1'");
    content = content.replace(/from &quot;([^"]+)&quot;/g, 'from "$1"');
    
    // Fix any remaining HTML entities in imports
    content = content.replace(/import \{([^}]+)\} from &apos;([^&]+)&apos;/g, "import { $1 } from '$2'");
    content = content.replace(/import \{([^}]+)\} from &quot;([^"]+)&quot;/g, 'import { $1 } from "$2"');
    content = content.replace(/import ([^{][^}]+) from &apos;([^&]+)&apos;/g, "import $1 from '$2'");
    content = content.replace(/import ([^{][^}]+) from &quot;([^"]+)&quot;/g, 'import $1 from "$2"');

    // Remove empty import statements
    content = content.replace(/import \{\s*\} from '[^']+';?\n?/g, '');
    content = content.replace(/import \{\s*\} from "[^"]+";?\n?/g, '');

    // Remove unused React import if no JSX or React usage
    if (content.includes("import React from 'react'") && !content.includes('<') && !content.includes('React.')) {
      content = content.replace(/import React from 'react';\n?/g, '');
      modified = true;
    }

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
  console.log('\n✨ Import fixes completed!');
  
} catch (error) {
  console.error('❌ Error during import fixes:', error.message);
  process.exit(1);
}