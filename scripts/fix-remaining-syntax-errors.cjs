const fs = require('fs');
const path = require('path');



const filesToFix = [
  '/workspace/components/Footer.tsx',
  '/workspace/pages/about.tsx',
  '/workspace/pages/ai-services.tsx',
  '/workspace/pages/index.tsx',
  '/workspace/pages/it-services.tsx'
];

let totalFixes = 0;

filesToFix.forEach(filePath => {
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Fix line breaks in className attributes
    content = content.replace(/className="([^"]*)\n\s*([^"]*)"/g, 'className="$1 $2"');
    
    // Fix any remaining unterminated strings
    content = content.replace(/className="([^"]*)\n\s*([^"]*)"\s*>/g, 'className="$1 $2">');
    
    // Fix missing closing tags
    content = content.replace(/<div([^>]*)\s*>\s*$/gm, '<div$1>');
    
    // Fix any remaining syntax issues
    content = content.replace(/\s+\n\s*>/g, '>');
    
    if (content !== fs.readFileSync(filePath, 'utf8')) {
      fs.writeFileSync(filePath, content);
      }`);
      totalFixes++;
      modified = true;
    }
  }
});




