#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

function fixImports(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Fix import paths for ai-services subdirectory
    content = content.replace(
      "import Navigation from '../components/Navigation';",
      "import Navigation from '../../components/Navigation';"
    );
    content = content.replace(
      "import Footer from '../components/Footer';",
      "import Footer from '../../components/Footer';"
    );
    
    fs.writeFileSync(filePath, content);
    console.log(`✅ Fixed imports in ${filePath}`);
    return true;
  } catch (error) {
    console.log(`❌ Error fixing ${filePath}: ${error.message}`);
    return false;
  }
}

function main() {
  console.log('🔧 Fixing all import paths...');
  
  const aiServicesDirs = fs.readdirSync('./app/ai-services').filter(dir => 
    fs.statSync(`./app/ai-services/${dir}`).isDirectory()
  );
  
  let fixedCount = 0;
  
  for (const dir of aiServicesDirs) {
    const pagePath = `./app/ai-services/${dir}/page.tsx`;
    if (fs.existsSync(pagePath)) {
      if (fixImports(pagePath)) {
        fixedCount++;
      }
    }
  }
  
  console.log(`\n📊 Summary:`);
  console.log(`✅ Fixed: ${fixedCount} files`);
  console.log(`❌ Failed: ${aiServicesDirs.length - fixedCount} files`);
  
  console.log('\n🎉 Import paths fix completed!');
}

main();