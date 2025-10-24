#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

function fixImports(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let changed = false;
    
    // Fix import paths for subdirectories
    if (filePath.includes('/micro-saas-services/') || 
        filePath.includes('/micro-saas/') ||
        filePath.includes('/it-services/') ||
        filePath.includes('/ai-services/')) {
      
      if (content.includes("import Navigation from '../components/Navigation';")) {
        content = content.replace(
          "import Navigation from '../components/Navigation';",
          "import Navigation from '../../components/Navigation';"
        );
        changed = true;
      }
      
      if (content.includes("import Footer from '../components/Footer';")) {
        content = content.replace(
          "import Footer from '../components/Footer';",
          "import Footer from '../../components/Footer';"
        );
        changed = true;
      }
    }
    
    if (changed) {
      fs.writeFileSync(filePath, content);
      console.log(`✅ Fixed imports in ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.log(`❌ Error fixing ${filePath}: ${error.message}`);
    return false;
  }
}

function findAllPages(dir) {
  const files = [];
  
  function searchDirectory(currentDir) {
    const items = fs.readdirSync(currentDir);
    
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules' && item !== 'components') {
        searchDirectory(fullPath);
      } else if (item === 'page.tsx') {
        files.push(fullPath);
      }
    }
  }
  
  searchDirectory(dir);
  return files;
}

function main() {
  console.log('🔧 Fixing all remaining import paths...');
  
  const files = findAllPages('./app');
  console.log(`Found ${files.length} page files to check`);
  
  let fixedCount = 0;
  
  for (const filePath of files) {
    if (fixImports(filePath)) {
      fixedCount++;
    }
  }
  
  console.log(`\n📊 Summary:`);
  console.log(`✅ Fixed: ${fixedCount} files`);
  console.log(`❌ Failed: ${files.length - fixedCount} files`);
  
  console.log('\n🎉 Import paths fix completed!');
}

main();