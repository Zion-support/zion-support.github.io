const fs = require('fs');
const path = require('path');

function fixAllJSXFinal(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let originalContent = content;
    
    // Fix all JSX structure issues comprehensively
    content = content
      // Fix return statement spacing
      .replace(/return\s*\(<>/g, 'return (<>')
      .replace(/return\s*\(<div/g, 'return (<div')
      .replace(/return\s*\(<section/g, 'return (<section')
      .replace(/return\s*\(<main/g, 'return (<main')
      .replace(/return\s*\(<article/g, 'return (<article')
      .replace(/return\s*\(<header/g, 'return (<header')
      .replace(/return\s*\(<footer/g, 'return (<footer')
      .replace(/return\s*\(<nav/g, 'return (<nav')
      .replace(/return\s*\(<aside/g, 'return (<aside')
      
      // Fix broken JSX structure where content is outside divs
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
      
      // Fix self-closing divs that should contain content
      .replace(/<div([^>]*)\s*>\s*<\/div>\s*\n\s*<([^>]*)>/g, '<div$1>\n          <$2>')
      .replace(/<\/div>\s*<\/div>\s*<\/div>\s*<\/div>/g, '</div>\n        </div>\n      </div>\n    </div>')
      
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
      console.log(`Fixed all JSX final: ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`Error fixing all JSX final in ${filePath}:`, error.message);
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
      if (fixAllJSXFinal(filePath)) {
        fixedCount++;
      }
    }
  });
  
  return fixedCount;
}

console.log('Starting comprehensive final JSX fixes...');
const fixedCount = walkDirectory('./app');
console.log(`Fixed all JSX final in ${fixedCount} files in app directory`);

const componentsResolvedCount = walkDirectory('./components');
console.log(`Fixed all JSX final in ${componentsResolvedCount} files in components directory`);

const srcResolvedCount = walkDirectory('./src');
console.log(`Fixed all JSX final in ${srcResolvedCount} files in src directory`);

console.log('Comprehensive final JSX fixes completed!');