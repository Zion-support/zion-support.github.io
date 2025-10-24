const fs = require('fs');
const path = require('path');

function fixJSXStructure(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let fixed = false;
    
    // Fix malformed JSX structure: <><Navigation /></Navigation>
    if (content.includes('<><Navigation /></Navigation>')) {
      content = content.replace(/<><Navigation \/><\/Navigation>/g, '<>\n      <Navigation />');
      fixed = true;
    }
    
    // Fix malformed JSX structure: <><Footer /></Footer>
    if (content.includes('<><Footer /></Footer>')) {
      content = content.replace(/<><Footer \/><\/Footer>/g, '<>\n      <Footer />');
      fixed = true;
    }
    
    // Fix missing closing tags for div elements
    content = content.replace(/<div className='min-h-screen[^>]*>([^<]*)<\/div>\s*$/gm, '<div className=\'min-h-screen bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-900\'>\n        $1\n      </div>');
    
    // Fix missing closing tags for section elements
    content = content.replace(/<section className='[^']*'><\/section>/g, '<section className=\'relative py-20 px-4 overflow-hidden\'>\n          <div className=\'absolute inset-0 bg-gradient-to-r from-emerald-600/20 to-blue-600/20\'></div>\n          <div className=\'relative max-w-7xl mx-auto text-center\'>\n            <h1 className=\'text-5xl md:text-7xl font-bold text-white mb-6 leading-tight\'>\n              AI Solutions\n            </h1>\n            <p className=\'text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed\'>\n              Advanced AI solutions for modern businesses.\n            </p>\n            <div className=\'flex flex-col sm:flex-row gap-4 justify-center\'>\n              <button className=\'bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center\'>\n                Get Started\n                <ArrowRight className="ml-2 h-5 w-5" />\n              </button>\n              <button className=\'border border-emerald-400 text-emerald-400 hover:bg-emerald-400 hover:text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200\'>\n                Learn More\n              </button>\n            </div>\n          </div>\n        </section>');
    
    // Fix missing closing tags for the main div
    if (content.includes('<div className=\'min-h-screen') && !content.includes('</div>')) {
      content = content.replace(/(<div className='min-h-screen[^>]*>.*?)(<\/>)/s, '$1\n      </div>\n    </>');
    }
    
    if (fixed || content !== fs.readFileSync(filePath, 'utf8')) {
      fs.writeFileSync(filePath, content);
      console.log(`Fixed JSX structure in: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

function findTsxFiles(dir) {
  const files = [];
  
  function traverse(currentDir) {
    const items = fs.readdirSync(currentDir);
    
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
        traverse(fullPath);
      } else if (item.endsWith('.tsx') || item.endsWith('.ts')) {
        files.push(fullPath);
      }
    }
  }
  
  traverse(dir);
  return files;
}

// Main execution
const appDir = './app';
const files = findTsxFiles(appDir);

console.log(`Found ${files.length} TypeScript files to process...`);

let fixedCount = 0;
for (const file of files) {
  if (fixJSXStructure(file)) {
    fixedCount++;
  }
}

console.log(`Fixed JSX structure in ${fixedCount} files.`);