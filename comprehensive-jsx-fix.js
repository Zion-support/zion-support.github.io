import fs from 'fs';

function fixJSXComprehensively() {
  try {
    let content = fs.readFileSync('app/page.tsx', 'utf8');
    
    // Comprehensive JSX fixes
    const fixes = [
      // Fix malformed closing tags
      { pattern: /<\/di><\/div>/g, replacement: '</div>' },
      { pattern: /<\/di>/g, replacement: '</div>' },
      { pattern: /<\/h1><\/h>/g, replacement: '</h1>' },
      { pattern: /<\/h2><\/h>/g, replacement: '</h2>' },
      { pattern: /<\/h3><\/h>/g, replacement: '</h3>' },
      { pattern: /<\/p><\/p>/g, replacement: '</p>' },
      { pattern: /<\/span><\/span>/g, replacement: '</span>' },
      { pattern: /<\/a><\/a>/g, replacement: '</a>' },
      { pattern: /<\/button><\/button>/g, replacement: '</button>' },
      { pattern: /<\/ul><\/ul>/g, replacement: '</ul>' },
      { pattern: /<\/li><\/li>/g, replacement: '</li>' },
      { pattern: /<\/main><\/main>/g, replacement: '</main>' },
      { pattern: /<\/footer><\/footer>/g, replacement: '</footer>' },
      { pattern: /<\/section><\/section>/g, replacement: '</section>' },
      { pattern: /<\/Navigation><\/Navigation>/g, replacement: '</Navigation>' },
      
      // Fix malformed opening tags
      { pattern: /<h1><\/h1>/g, replacement: '<h1></h1>' },
      { pattern: /<h2><\/h2>/g, replacement: '<h2></h2>' },
      { pattern: /<h3><\/h3>/g, replacement: '<h3></h3>' },
      { pattern: /<div><\/div>/g, replacement: '<div></div>' },
      { pattern: /<section><\/section>/g, replacement: '<section></section>' },
      { pattern: /<p><\/p>/g, replacement: '<p></p>' },
      { pattern: /<span><\/span>/g, replacement: '<span></span>' },
      { pattern: /<a><\/a>/g, replacement: '<a></a>' },
      { pattern: /<button><\/button>/g, replacement: '<button></button>' },
      { pattern: /<ul><\/ul>/g, replacement: '<ul></ul>' },
      { pattern: /<li><\/li>/g, replacement: '<li></li>' },
      { pattern: /<main><\/main>/g, replacement: '<main></main>' },
      { pattern: /<footer><\/footer>/g, replacement: '<footer></footer>' },
      
      // Fix specific broken patterns
      { pattern: /<\/<</g, replacement: '</' },
      { pattern: /<</g, replacement: '<' },
      { pattern: />>/g, replacement: '>' },
      { pattern: /<<</g, replacement: '<' },
      { pattern: />>>/g, replacement: '>' },
      { pattern: /<\/\w+><\/\w+>/g, replacement: (match) => {
        const firstTag = match.match(/<\/(\w+)>/)[1];
        return `</${firstTag}>`;
      }},
      
      // Fix malformed JSX expressions
      { pattern: /<(\w+)><\/\1>/g, replacement: '<$1></$1>' },
      
      // Fix broken closing tags
      { pattern: /<\/\w+><\/\w+>/g, replacement: (match) => {
        const firstTag = match.match(/<\/(\w+)>/)[1];
        return `</${firstTag}>`;
      }},
      
      // Fix specific patterns
      { pattern: /<\/h><\/h1>/g, replacement: '</h1>' },
      { pattern: /<\/h><\/h2>/g, replacement: '</h2>' },
      { pattern: /<\/h><\/h3>/g, replacement: '</h3>' },
      { pattern: /<\/div><\/div>/g, replacement: '</div>' },
      { pattern: /<\/section><\/section>/g, replacement: '</section>' },
      { pattern: /<\/p><\/p>/g, replacement: '</p>' },
      { pattern: /<\/span><\/span>/g, replacement: '</span>' },
      { pattern: /<\/a><\/a>/g, replacement: '</a>' },
      { pattern: /<\/button><\/button>/g, replacement: '</button>' },
      { pattern: /<\/ul><\/ul>/g, replacement: '</ul>' },
      { pattern: /<\/li><\/li>/g, replacement: '</li>' },
      { pattern: /<\/main><\/main>/g, replacement: '</main>' },
      { pattern: /<\/footer><\/footer>/g, replacement: '</footer>' },
      
      // Fix malformed JSX structure
      { pattern: /<(\w+)([^>]*)>([^<]*?)(?![^<]*<\/\1>)(?=\s*<)/g, replacement: '<$1$2>$3</$1>' },
      
      // Fix broken closing tags
      { pattern: /<\/\w+><\/\w+>/g, replacement: (match) => {
        const firstTag = match.match(/<\/(\w+)>/)[1];
        return `</${firstTag}>`;
      }}
    ];
    
    let modified = false;
    for (const fix of fixes) {
      const newContent = content.replace(fix.pattern, fix.replacement);
      if (newContent !== content) {
        content = newContent;
        modified = true;
      }
    }
    
    // Additional specific fixes for common patterns
    content = content.replace(/<(\w+)([^>]*)>([^<]*?)(?![^<]*<\/\1>)(?=\s*<)/g, '<$1$2>$3</$1>');
    
    if (modified) {
      fs.writeFileSync('app/page.tsx', content, 'utf8');
      console.log('Fixed app/page.tsx comprehensively');
      return true;
    }
    
    return false;
  } catch (error) {
    console.error('Error fixing app/page.tsx:', error.message);
    return false;
  }
}

fixJSXComprehensively();