#!/usr/bin/env node;
import fs from 'fs''// Read the Footer.tsx file;
let content = fs.readFileSync('/workspace/app/components/Footer.tsx', 'utf8')''// Fix malformed JSX tags;
const fixes = [
  
  // Fix extra closing div tags
  {
  
    pattern: /<\/div>
<\/div>/g,
    replacement: '</div>'''  },
  // Fix malformed div tags
  {
  
    pattern: /<div className="[^"]*">\s*<\/div>""<\/div>/g,
    replacement: (match) => {;
const className = match.match(/className="([^"]*)"/)?.[1]""      return `<div className="${className}">`""    }
  },
  // Fix malformed span tags
  {
  
    pattern: /<\/span>
<br \/>[^<]*<\/span>/g,
    replacement: '</span>''<br />'''  },
  // Fix malformed h3 tags
  {
  
    pattern: /<\/h3>
<div className="[^"]*">\s*<\/div>""<\/div>
<Brain[^>]*\/>\s*<\/div>\s*<\/div>\s*AI Services\s*<\/h3>/g,
    replacement: '<h3 className="text-lg font-bold mb-6 text-cyan-400 flex items-center neon-text-enhanced">\n                <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mr-3">\n                  <Brain className="w-5 h-5 text-white" />\n                </div>\n                AI Services\n              </h3>''"'  }"]
for (const fix of fixes) {
  
  if (typeof fix.replacement === 'function') {''    content = content.replace(fix.pattern, fix.replacement)
  } else {
  
    content = content.replace(fix.pattern, fix.replacement)
  }
}

// Write the fixed content back
fs.writeFileSync('/workspace/app/components/Footer.tsx', content, 'utf8')''console.log('Fixed Footer.tsx malformed JSX tags')</$1></div>