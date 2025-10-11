#!/usr/bin/env node

import fs from 'fs';

// Fix Navigation component JSX structure
function fixNavigation(content) {
  let fixed = content;
  
  // Fix malformed JSX structure
  fixed = fixed.replace(/}\s*`}>\s*<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">\s*<\/div><\/div><div className="flex items-center justify-between h-20">/g, '}`}>\n      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">\n        <div className="flex items-center justify-between h-20">');
  
  // Fix malformed closing tags
  fixed = fixed.replace(/<\/div><\/div><div className="flex-shrink-0">/g, '\n          <div className="flex-shrink-0">');
  
  // Fix malformed Link structure
  fixed = fixed.replace(/<\/div><\/div><Link to="\/" className="flex items-center space-x-3 group">/g, '\n            <Link to="/" className="flex items-center space-x-3 group">');
  
  // Fix malformed div structure
  fixed = fixed.replace(/<\/div><\/div><Brain className="w-6 h-6 text-white" \/>/g, '\n                <Brain className="w-6 h-6 text-white" />');
  
  // Fix malformed span structure
  fixed = fixed.replace(/<\/div><\/div><span className="text-2xl font-bold text-white neon-text-enhanced group-hover:glow">Zion Tech Group<\/span><\/span><\/span>/g, '\n                <span className="text-2xl font-bold text-white neon-text-enhanced group-hover:glow">Zion Tech Group</span>');
  
  // Fix malformed span structure
  fixed = fixed.replace(/<span className="text-xs text-cyan-400 font-medium tracking-wider">AI & IT SOLUTIONS<\/span><\/span><\/span>/g, '\n                <span className="text-xs text-cyan-400 font-medium tracking-wider">AI & IT SOLUTIONS</span>');
  
  // Fix malformed closing tags
  fixed = fixed.replace(/<\/div><\/div><\/div>/g, '\n              </div>\n            </Link>\n          </div>');
  
  // Fix malformed closing tags
  fixed = fixed.replace(/<\/div><\/div><\/div>/g, '\n        </div>\n      </div>\n    </nav>');
  
  // Fix malformed JSX structure
  fixed = fixed.replace(/}\s*`}>\s*<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">\s*<\/div><\/div><div className="flex items-center justify-between h-20">/g, '}`}>\n      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">\n        <div className="flex items-center justify-between h-20">');
  
  // Fix malformed closing tags
  fixed = fixed.replace(/<\/div><\/div><div className="flex-shrink-0">/g, '\n          <div className="flex-shrink-0">');
  
  // Fix malformed Link structure
  fixed = fixed.replace(/<\/div><\/div><Link to="\/" className="flex items-center space-x-3 group">/g, '\n            <Link to="/" className="flex items-center space-x-3 group">');
  
  // Fix malformed div structure
  fixed = fixed.replace(/<\/div><\/div><Brain className="w-6 h-6 text-white" \/>/g, '\n                <Brain className="w-6 h-6 text-white" />');
  
  // Fix malformed span structure
  fixed = fixed.replace(/<\/div><\/div><span className="text-2xl font-bold text-white neon-text-enhanced group-hover:glow">Zion Tech Group<\/span><\/span><\/span>/g, '\n                <span className="text-2xl font-bold text-white neon-text-enhanced group-hover:glow">Zion Tech Group</span>');
  
  // Fix malformed span structure
  fixed = fixed.replace(/<span className="text-xs text-cyan-400 font-medium tracking-wider">AI & IT SOLUTIONS<\/span><\/span><\/span>/g, '\n                <span className="text-xs text-cyan-400 font-medium tracking-wider">AI & IT SOLUTIONS</span>');
  
  // Fix malformed closing tags
  fixed = fixed.replace(/<\/div><\/div><\/div>/g, '\n              </div>\n            </Link>\n          </div>');
  
  // Fix malformed closing tags
  fixed = fixed.replace(/<\/div><\/div><\/div>/g, '\n        </div>\n      </div>\n    </nav>');
  
  return fixed;
}

// Read and fix the Navigation component
const filePath = '/workspace/app/components/Navigation.tsx';
const content = fs.readFileSync(filePath, 'utf8');
const fixed = fixNavigation(content);

if (content !== fixed) {
  fs.writeFileSync(filePath, fixed, 'utf8');
  console.log('Fixed Navigation.tsx');
} else {
  console.log('No changes needed for Navigation.tsx');
}