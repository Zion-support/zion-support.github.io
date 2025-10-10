const fs = require('fs');

// Read the file
let content = fs.readFileSync('/workspace/app/page.tsx', 'utf8');

// Fix all malformed JSX tags systematically
// Pattern: <tag className="..."></tag>content</tag>
const tags = ['div', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'span', 'button', 'a', 'li', 'ul', 'ol', 'form', 'input', 'textarea', 'select', 'option', 'label', 'section', 'article', 'header', 'footer', 'main', 'nav', 'aside'];

tags.forEach(tag => {
  // Fix pattern: <tag className="..."></tag>content</tag>
  content = content.replace(new RegExp(`<${tag}([^>]*)><\\/${tag}>([^<]+)<\\/${tag}>`, 'g'), `<${tag}$1>$2</${tag}>`);
  
  // Fix pattern: <tag className="..."></t>content</tag>
  content = content.replace(new RegExp(`<${tag}([^>]*)><\\/t>([^<]+)<\\/${tag}>`, 'g'), `<${tag}$1>$2</${tag}>`);
  
  // Fix pattern: <tag className="..."></di>content</tag>
  content = content.replace(new RegExp(`<${tag}([^>]*)><\\/di>([^<]+)<\\/${tag}>`, 'g'), `<${tag}$1>$2</${tag}>`);
  
  // Fix pattern: <tag className="..."></h>content</tag>
  content = content.replace(new RegExp(`<${tag}([^>]*)><\\/h>([^<]+)<\\/${tag}>`, 'g'), `<${tag}$1>$2</${tag}>`);
  
  // Fix pattern: <tag className="..."></p>content</tag>
  content = content.replace(new RegExp(`<${tag}([^>]*)><\\/p>([^<]+)<\\/${tag}>`, 'g'), `<${tag}$1>$2</${tag}>`);
  
  // Fix pattern: <tag className="..."></span>content</tag>
  content = content.replace(new RegExp(`<${tag}([^>]*)><\\/span>([^<]+)<\\/${tag}>`, 'g'), `<${tag}$1>$2</${tag}>`);
  
  // Fix pattern: <tag className="..."></button>content</tag>
  content = content.replace(new RegExp(`<${tag}([^>]*)><\\/button>([^<]+)<\\/${tag}>`, 'g'), `<${tag}$1>$2</${tag}>`);
  
  // Fix pattern: <tag className="..."></a>content</tag>
  content = content.replace(new RegExp(`<${tag}([^>]*)><\\/a>([^<]+)<\\/${tag}>`, 'g'), `<${tag}$1>$2</${tag}>`);
  
  // Fix pattern: <tag className="..."></li>content</tag>
  content = content.replace(new RegExp(`<${tag}([^>]*)><\\/li>([^<]+)<\\/${tag}>`, 'g'), `<${tag}$1>$2</${tag}>`);
  
  // Fix pattern: <tag className="..."></optio>content</tag>
  content = content.replace(new RegExp(`<${tag}([^>]*)><\\/optio>([^<]+)<\\/${tag}>`, 'g'), `<${tag}$1>$2</${tag}>`);
});

// Write the fixed content back
fs.writeFileSync('/workspace/app/page.tsx', content);

console.log('Fixed all malformed JSX tags in page.tsx');