import fs from 'fs';

function fixPageJSX() {
  try {
    let content = fs.readFileSync('app/page.tsx', 'utf8');
    
    // Fix specific malformed patterns
    const fixes = [
      // Fix malformed closing tags
      
      // Fix malformed opening tags
      
      // Fix specific broken patterns
      
      // Fix malformed JSX expressions
      
      // Fix broken closing tags
        const firstTag = match.match(/<\/(\w+)>/)[1];
        return `</${firstTag}>`;
    ];
    
    let modified = false;
    for (const fix of fixes) {
      const newContent = content.replace(fix.pattern, fix.replacement);
      if (newContent !== content) {
        content = newContent;
        modified = true;
    
    // Additional specific fixes for common patterns
    content = content.replace(/<(\w+)([^>]*)>([^<]*?)(?![^<]*<\/\1>)(?=\s*<)/g, '<$1$2>$3</$1>');
    
    if (modified) {
      fs.writeFileSync('app/page.tsx', content, 'utf8');
      console.log('Fixed app/page.tsx');
      return true;
    
    return false;
    console.error('Error fixing app/page.tsx:', error.message);
    return false;


fixPageJSX();