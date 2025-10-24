const fs = require('fs');

function fixFooterStructure() {
  try {
    let content = fs.readFileSync('./app/components/Footer.tsx', 'utf8');
    
    // Fix the broken JSX structure in Footer
    content = content
      // Fix the main structure
      .replace(
        /<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">\s*{\/\* Company Info \*\/}\s*<\/div>\s*<div className="space-y-4"><\/div>\s*<div className="flex items-center space-x-2"><\/div>/g,
        '<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">\n        {/* Company Info */}\n        <div className="space-y-4">\n          <div className="flex items-center space-x-2">'
      )
      
      // Fix the social links structure
      .replace(
        /<div className="flex space-x-4"><\/div>\s*<a href="#"[^>]*>\s*<Github[^>]*\/>\s*<\/a>\s*<a href="#"[^>]*>\s*<Linkedin[^>]*\/>\s*<\/a>\s*<a href="#"[^>]*>\s*<Twitter[^>]*\/>\s*<\/a>\s*<\/div>/g,
        '<div className="flex space-x-4">\n              <a href="#" className="text-gray-400 hover:text-white transition-colors">\n                <Github className="w-5 h-5" />\n              </a>\n              <a href="#" className="text-gray-400 hover:text-white transition-colors">\n                <Linkedin className="w-5 h-5" />\n              </a>\n              <a href="#" className="text-gray-400 hover:text-white transition-colors">\n                <Twitter className="w-5 h-5" />\n              </a>\n            </div>'
      )
      
      // Fix other similar patterns
      .replace(/<div([^>]*)><\/div>\s*<([^>]*)>/g, '<div$1>\n            <$2>')
      .replace(/<\/div>\s*<\/div>\s*<div([^>]*)><\/div>/g, '</div>\n          </div>\n        <div$1>')
      .replace(/<\/div>\s*<\/div>\s*<\/div>\s*<\/div>/g, '</div>\n        </div>\n      </div>\n    </div>');
    
    fs.writeFileSync('./app/components/Footer.tsx', content, 'utf8');
    console.log('Fixed Footer structure');
    return true;
  } catch (error) {
    console.error('Error fixing Footer structure:', error.message);
    return false;
  }
}

fixFooterStructure();