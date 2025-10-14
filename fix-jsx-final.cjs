const fs = require('fs');
const { glob } = require('glob');

async function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let originalContent = content;
    
    // Fix broken JSX attributes and elements
    content = content
      // Fix meta tags with missing name attribute
      .replace(/<meta="([^"]*)"\s+content="([^"]*)"\s*\/>/g, '<meta name="$1" content="$2" />')
      
      // Fix broken className attributes
      .replace(/<(\w+)className="([^"]*)"([^>]*)>/g, '<$1 className="$2"$3>')
      .replace(/<(\w+)className="([^"]*)"([^>]*)>/g, '<$1 className="$2"$3>')
      
      // Fix broken JSX elements with missing spaces
      .replace(/<(\w+)className/g, '<$1 className')
      .replace(/<(\w+)id/g, '<$1 id')
      .replace(/<(\w+)src/g, '<$1 src')
      .replace(/<(\w+)alt/g, '<$1 alt')
      .replace(/<(\w+)href/g, '<$1 href')
      .replace(/<(\w+)to/g, '<$1 to')
      .replace(/<(\w+)onClick/g, '<$1 onClick')
      .replace(/<(\w+)onChange/g, '<$1 onChange')
      .replace(/<(\w+)onSubmit/g, '<$1 onSubmit')
      
      // Fix broken className values
      .replace(/className="([^"]*?)([a-z])([A-Z])([^"]*?)"/g, 'className="$1$2 $3$4"')
      .replace(/className="([^"]*?)([a-z])([0-9])([^"]*?)"/g, 'className="$1$2 $3$4"')
      .replace(/className="([^"]*?)([0-9])([a-zA-Z])([^"]*?)"/g, 'className="$1$2 $3$4"')
      
      // Fix specific broken patterns
      .replace(/min-h-screenbg-gradient-to-brfrom-slate-900/g, 'min-h-screen bg-gradient-to-br from-slate-900')
      .replace(/container mx-autopx-4py-16/g, 'container mx-auto px-4 py-16')
      .replace(/text-4xlfont-boldtext-white/g, 'text-4xl font-bold text-white')
      .replace(/text-xltext-gray-300/g, 'text-xl text-gray-300')
      .replace(/gridmd:grid-cols-2/g, 'grid md:grid-cols-2')
      .replace(/lg:grid-cols-3/g, 'lg:grid-cols-3')
      .replace(/gap-8 mt-12/g, 'gap-8 mt-12')
      .replace(/bg-blue-50 border/g, 'bg-blue-50 border')
      .replace(/border-blue-200 rounded-lg/g, 'border-blue-200 rounded-lg')
      .replace(/rounded-lg p-6/g, 'rounded-lg p-6')
      .replace(/text-lg font-semibold/g, 'text-lg font-semibold')
      .replace(/text-blue-900mb-2/g, 'text-blue-900 mb-2')
      .replace(/text-blue-700/g, 'text-blue-700')
      .replace(/text-center/g, 'text-center')
      .replace(/mb-8/g, 'mb-8')
      .replace(/mt-12/g, 'mt-12')
      .replace(/gap-8/g, 'gap-8')
      .replace(/px-4 py-16/g, 'px-4 py-16')
      .replace(/via-purple-900/g, 'via-purple-900')
      .replace(/to-slate-900/g, 'to-slate-900')
      .replace(/from-slate-900/g, 'from-slate-900')
      .replace(/bg-gradient-to-br/g, 'bg-gradient-to-br')
      .replace(/min-h-screen/g, 'min-h-screen')
      
      // Fix broken closing tags
      .replace(/<\/(\w+)className/g, '</$1')
      .replace(/<\/(\w+)id/g, '</$1')
      .replace(/<\/(\w+)src/g, '</$1')
      .replace(/<\/(\w+)alt/g, '</$1')
      .replace(/<\/(\w+)href/g, '</$1')
      .replace(/<\/(\w+)to/g, '</$1')
      .replace(/<\/(\w+)onClick/g, '</$1')
      .replace(/<\/(\w+)onChange/g, '</$1')
      .replace(/<\/(\w+)onSubmit/g, '</$1');
    
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