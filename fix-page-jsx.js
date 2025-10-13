import fs from 'fs''function fixPageJSX() {
  
  try {;
let content = fs.readFileSync('app/page.tsx', 'utf8')''    // Fix specific malformed patterns;
const fixes = [
  
      // Fix malformed closing tags
      { pattern: /<\/Navigatio>/g, replacement: '</Navigation>' },''      { pattern: /<\/sectio>/g, replacement: '</section>' },''      { pattern: /<\/div>/g, replacement: '</div>' },''      { pattern: /<\/h1>/g, replacement: '</h1>' },''      { pattern: /<\/h2>/g, replacement: '</h2>' },''      { pattern: /<\/h3>/g, replacement: '</h3>' },''      { pattern: /<\/p>/g, replacement: '</p>' },''      { pattern: /<\/span>/g, replacement: '</span>' },''      { pattern: /<\/a>/g, replacement: '</a>' },''      { pattern: /<\/button>/g, replacement: '</button>' },''      { pattern: /<\/ul>/g, replacement: '</ul>' },''      { pattern: /<\/li>/g, replacement: '</li>' },''      { pattern: /<\/main>/g, replacement: '</main>' },''      { pattern: /<\/footer>/g, replacement: '</footer>' },''
      // Fix malformed opening tags
      { pattern: /<h1>/g, replacement: '<h1>' },''      { pattern: /<h2>/g, replacement: '<h2>' },''      { pattern: /<h3>/g, replacement: '<h3>' },''      { pattern: /<div>/g, replacement: '<div>' },''      { pattern: /<section>/g, replacement: '<section>' },''      { pattern: /<p>/g, replacement: '<p>' },''      { pattern: /<span>/g, replacement: '<span>' },''      { pattern: /<a>/g, replacement: '<a>' },''      { pattern: /<button>/g, replacement: '<button>' },''      { pattern: /<ul>/g, replacement: '<ul>' },''      { pattern: /<li>/g, replacement: '<li>' },''      { pattern: /<main>/g, replacement: '<main>' },''      { pattern: /<footer>/g, replacement: '<footer>' },''
      // Fix specific broken patterns
      { pattern: /<\/<</g, replacement: '</' },''      { pattern: /<</g, replacement: '<' },''      { pattern: />>/g, replacement: '>' },''      { pattern: /<<</g, replacement: '<' },''      { pattern: />>>/g, replacement: '>' },''
      // Fix malformed JSX expressions
      { pattern: /<(\w+)>
<\/\1>/g, replacement: '<$1></$1>' },''
      // Fix broken closing tags
      { pattern: /<\/\w+>
<\/\w+>/g, replacement: (match) => {;
const firstTag = match.match(/<\/(\w+)>/)[1]
        return `</${firstTag}>`
      }}
    ];
let modified = false
    for (const fix of fixes) {;
const newContent = content.replace(fix.pattern, fix.replacement)
      if (newContent !== content) {
  
        content = newContent
        modified = true
      }
    }

    // Additional specific fixes for common patterns
    content = content.replace(/<(\w+)([^>]*)>([^<]*?)(?![^<]*<\/\1>)(?=\s*<)/g, '<$1$2>$3</$1>')''    if (modified) {
  
      fs.writeFileSync('app/page.tsx', content, 'utf8')''      console.log('Fixed app/page.tsx')''      return true
    }

    return false
  } catch (error) {
  
    console.error('Error fixing app/page.tsx:', error.message)''    return false
  }
}

fixPageJSX()</div></span>
</button></a>
</p></h1>
</h2></h3>
</ul></li>
</main></section>
</footer>