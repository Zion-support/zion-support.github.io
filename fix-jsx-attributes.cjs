const fs = require('fs');
const { glob } = require('glob');

async function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let originalContent = content;
    
    // Fix broken JSX attributes
    content = content
      // Fix class Name -> className
      .replace(/class\s+Name/g, 'className')
      .replace(/class\s+name/g, 'className')
      
      // Fix other common JSX attributes that got broken
      .replace(/for\s+Name/g, 'htmlFor')
      .replace(/for\s+name/g, 'htmlFor')
      
      // Fix broken attribute names with spaces
      .replace(/(\w+)\s+Name\s*=/g, '$1=')
      .replace(/(\w+)\s+name\s*=/g, '$1=')
      
      // Fix broken element names with spaces
      .replace(/<(\w+)\s+(\d+)/g, '<$1$2')
      .replace(/<(\w+)\s+(\w+)/g, '<$1$2')
      
      // Fix broken className values with spaces
      .replace(/className="([^"]*?)\s+([^"]*?)"/g, 'className="$1$2"')
      
      // Fix broken JSX elements
      .replace(/<(\w+)\s+(\w+)\s*>/g, '<$1$2>')
      .replace(/<\/(\w+)\s+(\w+)\s*>/g, '</$1$2>')
      
      // Fix broken attribute values
      .replace(/="([^"]*?)\s+([^"]*?)"/g, '="$1$2"')
      
      // Fix specific patterns
      .replace(/containermx-auto/g, 'container mx-auto')
      .replace(/text-4\s+xlfont-bold/g, 'text-4xl font-bold')
      .replace(/text-xltext-gray-300/g, 'text-xl text-gray-300')
      .replace(/gridmd:grid-cols-2/g, 'grid md:grid-cols-2')
      .replace(/bg-blue-50\s+border/g, 'bg-blue-50 border')
      .replace(/border-blue-200\s+rounded-lg/g, 'border-blue-200 rounded-lg')
      .replace(/rounded-lg\s+p-6/g, 'rounded-lg p-6')
      .replace(/text-lg\s+font-semibold/g, 'text-lg font-semibold')
      .replace(/text-blue-900mb-2/g, 'text-blue-900 mb-2')
      .replace(/text-blue-700/g, 'text-blue-700')
      .replace(/text-center/g, 'text-center')
      .replace(/min-h-screen/g, 'min-h-screen')
      .replace(/bg-gradient-to-br/g, 'bg-gradient-to-br')
      .replace(/from-slate-900/g, 'from-slate-900')
      .replace(/via-purple-900/g, 'via-purple-900')
      .replace(/to-slate-900/g, 'to-slate-900')
      .replace(/px-4\s+py-16/g, 'px-4 py-16')
      .replace(/mb-8/g, 'mb-8')
      .replace(/mt-12/g, 'mt-12')
      .replace(/gap-8/g, 'gap-8')
      .replace(/lg:grid-cols-3/g, 'lg:grid-cols-3')
      .replace(/md:grid-cols-2/g, 'md:grid-cols-2');
    
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed: ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

async function main() {
  try {
    const files = await glob('app/**/*.{ts,tsx,js,jsx}', { cwd: process.cwd() });
    
    console.log(`Found ${files.length} files to process...`);
    
    let fixedCount = 0;
    for (const file of files) {
      if (await fixFile(file)) {
        fixedCount++;
      }
    }
    
    console.log(`Fixed ${fixedCount} files.`);
  } catch (error) {
    console.error('Error:', error);
  }
}

main();