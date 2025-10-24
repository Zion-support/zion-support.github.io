const fs = require('fs');
const path = require('path');

function fixAllRemainingJSX(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let originalContent = content;
    
    // Fix the broken JSX structure pattern that's causing build errors
    // Pattern: <div className="...">\n          <h1>...</h1>\n          <p>...</p>\n          <Link>...</Link>\n        </div>\n      </div>\n    </>)\n  );\n}
    // Should become: <div className="...">\n        <div className="...">\n          <h1>...</h1>\n          <p>...</p>\n          <Link>...</Link>\n        </div>\n      </div>\n    </>\n  );\n}
    
    content = content
      // Fix the specific pattern where there's missing proper div structure
      .replace(
        /<div className="min-h-screen[^>]*>\s*\n\s*<h1[^>]*>([^<]*)<\/h1>\s*\n\s*<p[^>]*>([^<]*)<\/p>\s*\n\s*<Link[^>]*>([^<]*)<\/Link>\s*\n\s*<\/div>\s*\n\s*<\/>/g,
        '<div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">\n        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">\n          <h1 className="text-4xl font-bold text-white mb-6">$1</h1>\n          <p className="text-lg text-gray-300 mb-8">$2</p>\n          <Link href="/contact" className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center mx-auto w-fit">$3</Link>\n        </div>\n      </div>\n    </>'
      )
      
      // Fix patterns with just h1 and p
      .replace(
        /<div className="min-h-screen[^>]*>\s*\n\s*<h1[^>]*>([^<]*)<\/h1>\s*\n\s*<p[^>]*>([^<]*)<\/p>\s*\n\s*<\/div>\s*\n\s*<\/>/g,
        '<div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">\n        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">\n          <h1 className="text-4xl font-bold text-white mb-6">$1</h1>\n          <p className="text-lg text-gray-300 mb-8">$2</p>\n        </div>\n      </div>\n    </>'
      )
      
      // Fix patterns with just h1
      .replace(
        /<div className="min-h-screen[^>]*>\s*\n\s*<h1[^>]*>([^<]*)<\/h1>\s*\n\s*<\/div>\s*\n\s*<\/>/g,
        '<div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">\n        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">\n          <h1 className="text-4xl font-bold text-white mb-6">$1</h1>\n        </div>\n      </div>\n    </>'
      )
      
      // Fix patterns with different background colors
      .replace(
        /<div className="min-h-screen bg-gray-50[^>]*>\s*\n\s*<h1[^>]*>([^<]*)<\/h1>\s*\n\s*<p[^>]*>([^<]*)<\/p>\s*\n\s*<\/div>\s*\n\s*<\/>/g,
        '<div className="min-h-screen bg-gray-50">\n        <div className="container mx-auto px-4 py-16">\n          <div className="text-center">\n            <h1 className="text-4xl font-bold text-gray-900 mb-6">$1</h1>\n            <p className="text-lg text-gray-600 mb-8">$2</p>\n          </div>\n        </div>\n      </div>\n    </>'
      )
      
      // Fix trailing spaces in className attributes
      .replace(/className="([^"]*)\s+"/g, 'className="$1"')
      
      // Fix missing closing tags for fragments
      .replace(/<>\s*([^<]*(?:<[^>]*>[^<]*)*?)\s*$/gm, (match, content) => {
        if (!content.includes('</>')) {
          return `<>${content}</>`;
        }
        return match;
      });
    
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed all remaining JSX: ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`Error fixing all remaining JSX in ${filePath}:`, error.message);
    return false;
  }
}

function walkDirectory(dir) {
  const files = fs.readdirSync(dir);
  let fixedCount = 0;
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory() && !file.startsWith('.') && file !== 'node_modules') {
      fixedCount += walkDirectory(filePath);
    } else if (file.endsWith('.tsx') || file.endsWith('.jsx')) {
      if (fixAllRemainingJSX(filePath)) {
        fixedCount++;
      }
    }
  });
  
  return fixedCount;
}

console.log('Starting comprehensive fix for all remaining JSX issues...');
const fixedCount = walkDirectory('./app');
console.log(`Fixed all remaining JSX in ${fixedCount} files in app directory`);

const srcFixedCount = walkDirectory('./src');
console.log(`Fixed all remaining JSX in ${srcFixedCount} files in src directory`);

console.log('Comprehensive fix for all remaining JSX issues completed!');