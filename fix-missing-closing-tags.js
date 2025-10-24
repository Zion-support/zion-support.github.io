const fs = require('fs');
const path = require('path');

function fixMissingClosingTags(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let originalContent = content;
    
    // Fix missing closing div tags
    content = content
      // Fix the pattern where there's a missing closing div
      .replace(
        /<div className="min-h-screen[^>]*>\s*\n\s*<h1[^>]*>([^<]*)<\/h1>\s*\n\s*<p[^>]*>([^<]*)<\/p>\s*\n\s*<Link[^>]*>([^<]*)<\/Link>\s*\n\s*<\/div>\s*\n\s*<\/>/g,
        '<div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">\n          <h1 className="text-4xl font-bold text-white mb-6">$1</h1>\n          <p className="text-lg text-gray-300 mb-8">$2</p>\n          <Link href="/contact" className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center mx-auto w-fit">$3</Link>\n        </div>\n      </>'
      )
      
      // Fix simpler patterns
      .replace(
        /<div className="min-h-screen[^>]*>\s*\n\s*<h1[^>]*>([^<]*)<\/h1>\s*\n\s*<p[^>]*>([^<]*)<\/p>\s*\n\s*<Link[^>]*>([^<]*)<\/Link>\s*\n\s*<\/>/g,
        '<div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">\n          <h1 className="text-4xl font-bold text-white mb-6">$1</h1>\n          <p className="text-lg text-gray-300 mb-8">$2</p>\n          <Link href="/contact" className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center mx-auto w-fit">$3</Link>\n        </div>\n      </>'
      )
      
      // Fix patterns with just h1 and p
      .replace(
        /<div className="min-h-screen[^>]*>\s*\n\s*<h1[^>]*>([^<]*)<\/h1>\s*\n\s*<p[^>]*>([^<]*)<\/p>\s*\n\s*<\/>/g,
        '<div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">\n          <h1 className="text-4xl font-bold text-white mb-6">$1</h1>\n          <p className="text-lg text-gray-300 mb-8">$2</p>\n        </div>\n      </>'
      )
      
      // Fix patterns with just h1
      .replace(
        /<div className="min-h-screen[^>]*>\s*\n\s*<h1[^>]*>([^<]*)<\/h1>\s*\n\s*<\/>/g,
        '<div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">\n          <h1 className="text-4xl font-bold text-white mb-6">$1</h1>\n        </div>\n      </>'
      );
    
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed missing closing tags: ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`Error fixing missing closing tags in ${filePath}:`, error.message);
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
      if (fixMissingClosingTags(filePath)) {
        fixedCount++;
      }
    }
  });
  
  return fixedCount;
}

console.log('Starting missing closing tags fixes...');
const fixedCount = walkDirectory('./app');
console.log(`Fixed missing closing tags in ${fixedCount} files in app directory`);

const srcFixedCount = walkDirectory('./src');
console.log(`Fixed missing closing tags in ${srcFixedCount} files in src directory`);

console.log('Missing closing tags fixes completed!');