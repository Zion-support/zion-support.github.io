const fs = require('fs');

// Read the file
let content = fs.readFileSync('app/page.tsx', 'utf8');

// Comprehensive JSX fixes
const fixes = [
  // Fix malformed div tags with emojis
  { pattern: /<div className="text-4xl[^>]*>([^<]+)<\/div>/g, replacement: '<div className="text-4xl sm:text-5xl mb-4 sm:mb-6 text-center cyber-scan-line">$1</div>' },
  
  // Fix malformed h3 tags
  { pattern: /<h3([^>]*)>([^<]+)<\/h3>/g, replacement: '<h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 text-center neon-text">$2</h3>' },
  
  // Fix malformed p tags
  { pattern: /<p([^>]*)>([^<]+)<\/p>/g, replacement: '<p className="text-gray-300 mb-4 sm:mb-6 text-center leading-relaxed text-sm sm:text-base">$2</p>' },
  
  // Fix malformed a tags
  { pattern: /<a([^>]*)>([^<]+)<\/a>/g, replacement: '<a href="$1" className="text-cyan-400 hover:text-cyan-300 font-medium text-sm sm:text-base transition-all duration-300 hover:neon-glow">$2</a>' },
  
  // Fix specific patterns
  { pattern: /<div className="text-lg[^>]*>([^<]+)<\/div>/g, replacement: '<div className="text-lg sm:text-2xl font-bold text-cyan-400 mb-2 neon-text">$1</div>' },
  
  // Fix broken JSX structure patterns
  { pattern: /<div className="text-4xl([^>]*)>([^<]+)<\/div>/g, replacement: '<div className="text-4xl sm:text-5xl mb-4 sm:mb-6 text-center cyber-scan-line">$2</div>' },
  { pattern: /<h3([^>]*)>([^<]+)<\/h3>/g, replacement: '<h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 text-center neon-text">$2</h3>' },
  { pattern: /<p([^>]*)>([^<]+)<\/p>/g, replacement: '<p className="text-gray-300 mb-4 sm:mb-6 text-center leading-relaxed text-sm sm:text-base">$2</p>' },
  
  // Fix content outside tags
  { pattern: /<div className="text-4xl[^>]*>([^<]+)<\/div>([^<]+)<\/div>/g, replacement: '<div className="text-4xl sm:text-5xl mb-4 sm:mb-6 text-center cyber-scan-line">$1</div>' },
  { pattern: /<h3[^>]*>([^<]+)<\/h3>([^<]+)<\/h3>/g, replacement: '<h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 text-center neon-text">$1</h3>' },
  { pattern: /<p[^>]*>([^<]+)<\/p>([^<]+)<\/p>/g, replacement: '<p className="text-gray-300 mb-4 sm:mb-6 text-center leading-relaxed text-sm sm:text-base">$1</p>' },
  { pattern: /<a[^>]*>([^<]+)<\/a>([^<]+)<\/a>/g, replacement: '<a href="$1" className="text-cyan-400 hover:text-cyan-300 font-medium text-sm sm:text-base transition-all duration-300 hover:neon-glow">$2</a>' },
  
  // Fix specific broken patterns
  { pattern: /<div className="text-4xl([^>]*)>([^<]+)<\/div>/g, replacement: '<div className="text-4xl sm:text-5xl mb-4 sm:mb-6 text-center cyber-scan-line">$2</div>' },
  { pattern: /<h3([^>]*)>([^<]+)<\/h3>/g, replacement: '<h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 text-center neon-text">$2</h3>' },
  { pattern: /<p([^>]*)>([^<]+)<\/p>/g, replacement: '<p className="text-gray-300 mb-4 sm:mb-6 text-center leading-relaxed text-sm sm:text-base">$2</p>' },
  { pattern: /<a([^>]*)>([^<]+)<\/a>/g, replacement: '<a href="$1" className="text-cyan-400 hover:text-cyan-300 font-medium text-sm sm:text-base transition-all duration-300 hover:neon-glow">$2</a>' },
  
  // Fix broken JSX patterns
  { pattern: /<div className="text-4xl([^>]*)>([^<]+)<\/div>/g, replacement: '<div className="text-4xl sm:text-5xl mb-4 sm:mb-6 text-center cyber-scan-line">$2</div>' },
  { pattern: /<h3([^>]*)>([^<]+)<\/h3>/g, replacement: '<h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 text-center neon-text">$2</h3>' },
  { pattern: /<p([^>]*)>([^<]+)<\/p>/g, replacement: '<p className="text-gray-300 mb-4 sm:mb-6 text-center leading-relaxed text-sm sm:text-base">$2</p>' },
  { pattern: /<a([^>]*)>([^<]+)<\/a>/g, replacement: '<a href="$1" className="text-cyan-400 hover:text-cyan-300 font-medium text-sm sm:text-base transition-all duration-300 hover:neon-glow">$2</a>' },
];

// Apply fixes
fixes.forEach(fix => {
  content = content.replace(fix.pattern, fix.replacement);
});

// Write the fixed content back
fs.writeFileSync('app/page.tsx', content);
console.log('Fixed comprehensive JSX issues in app/page.tsx');