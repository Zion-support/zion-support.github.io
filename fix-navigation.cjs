const fs = require('fs');

// Read the Navigation component
let content = fs.readFileSync('/workspace/app/components/Navigation.tsx', 'utf8');

// Fix all unclosed Link tags
const fixes = [
  // Fix unclosed Link tags
  { pattern: /<Link \/>\s*([^<]+)\s*<\/Link>/g, replacement: '<Link to="/" className="block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-gray-700">$1</Link>' },
  { pattern: /<Link \/>\s*([^<]+)\s*<ChevronDown \/>/g, replacement: '<Link to="/" className="block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-gray-700">$1<ChevronDown className="w-4 h-4 ml-1" /></Link>' },
  { pattern: /<Link \/>\s*([^<]+)\s*$/gm, replacement: '<Link to="/" className="block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-gray-700">$1</Link>' },
  
  // Fix specific navigation items
  { pattern: /<Link \/>\s*AI Automation\s*<\/Link>/g, replacement: '<Link to="/ai-automation" className="block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-gray-700">AI Automation</Link>' },
  { pattern: /<Link \/>\s*Content Generation\s*<\/Link>/g, replacement: '<Link to="/content-generation" className="block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-gray-700">Content Generation</Link>' },
  { pattern: /<Link \/>\s*About\s*<\/Link>/g, replacement: '<Link to="/about" className="text-gray-300 hover:text-white transition-colors">About</Link>' },
  { pattern: /<Link \/>\s*Contact\s*<\/Link>/g, replacement: '<Link to="/contact" className="text-gray-300 hover:text-white transition-colors">Contact</Link>' },
  { pattern: /<Link \/>\s*Blog\s*<\/Link>/g, replacement: '<Link to="/blog" className="text-gray-300 hover:text-white transition-colors">Blog</Link>' },
];

// Apply fixes
fixes.forEach(fix => {
  content = content.replace(fix.pattern, fix.replacement);
});

// Write the fixed content back
fs.writeFileSync('/workspace/app/components/Navigation.tsx', content);
console.log('Fixed Navigation component');