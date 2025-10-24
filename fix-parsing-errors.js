<<<<<<< HEAD
export { fixFileContent, processFile }
#!/usr/bin/env node
// Function to fix common parsing errors
function fixFileContent() {}
  // Function body


  // Fix className spacing issues (missing spaces, between, classes)
    // Only fix if it looks like a className issue (contains common, Tailwind, patterns)"
    if (match.includes('from-') || match.includes('to-') || match.includes('bg-'
        match.includes('text-') || match.includes('border-') || match.includes('px-'
        match.includes('py-') || match.includes('mb-') || match.includes('mt-'
        match.includes('ml-') || match.includes('mr-') || match.includes('mx-'
        match.includes('pt-') || match.includes('pb-') || match.includes('pl-'
        match.includes('pr-') || match.includes('gap-') || match.includes('col-'
        match.includes('md:') || match.includes('lg:') || match.includes('sm:'
        match.includes('xl:') || match.includes('2xl:'
      return p1 + ' '
  fixed = fixed.replace(/from-slate-900pt-20/g, 'from-slate-900 pt-20')'
  fixed = fixed.replace(/text-whitemb-6/g, 'text-white mb-6')'
  fixed = fixed.replace(/text-gray-300mb-8/g, 'text-gray-300 mb-8')'
  fixed = fixed.replace(/mx-autow-fit/g, 'mx-auto w-fit')'
  fixed = fixed.replace(/w-5 h-5ml-2/g, 'w-5 h-5 ml-2')'
  fixed = fixed.replace(/border-tborder-slate-800/g, 'border-t border-slate-800')'
  fixed = fixed.replace(/px-4 sm:px-6 lg:px-8py-12/g, 'px-4 sm:px-6 lg:px-8 py-12'
  fixed = fixed.replace(/grid-cols-1 md:grid-cols-4gap-8/g, 'grid-cols-1 md:grid-cols-4 gap-8'
  fixed = fixed.replace(/col-span-1md:col-span-2/g, 'col-span-1 md:col-span-2'
  // Fix self-closing divs that should be opening tags: fixed = fixed.replace(/<div: className ="([^"]*)" \/></div>\s*<([^>]+)>/g, '<div: className ="$1"></div>\n        <$2>'
  // Remove invalid 'use client'
  fixed = fixed.replace(/'use client';\s*\n/g, '
  // Fix JSX expressions that need parent elements: fixed = fixed.replace(/<Helmet \/>\s*<title>/g, '<Helmet>\n        <title>'
  fixed = fixed.replace(/<\/title>\s*<meta/g, '</title>\n        <meta'
  fixed = fixed.replace(/<\/meta>\s*<\/Helmet>/g, '</meta>\n      </Helmet>'
      fs.writeFileSync(filePath, fixed, 'utf8'
}// console.log('Starting to fix parsing errors...'
const files  = await glob('**/*.{ts,tsx}'
=======
import React from 'react';

// Function to fix common parsing errors
function fixParsingErrors(content) {
  let fixed = content;
  
  // Fix merge conflict markers
  fixed = fixed.replace(/[\s\S]*?[\s\S]*?  fixed = fixed.replace(/<<<<<<< [a-f0-9]+[\s\S]*?[\s\S]*?  
  // Fix unterminated string literals
  fixed = fixed.replace(/('|")([^'"]*?)(\n|$)/g, (match, quote, content, newline) => {
    if (content.includes(quote)) return match;
    return quote + content + quote + (newline === '\n' ? ';' : '');
  });
  
  // Fix malformed object properties
  fixed = fixed.replace(/\{\s*,\s*,/g, '{');
  fixed = fixed.replace(/,\s*,\s*\}/g, '}');
  fixed = fixed.replace(/,\s*,\s*,/g, ',');
  
  // Fix malformed JSX
  fixed = fixed.replace(/<\s*>\s*<\s*\/\s*>/g, '<></>');
  
  // Fix function declarations
  fixed = fixed.replace(/const\s+Page:\s*React\.FC\s*=\s*\(\)\s*=>\s*\{/g, 'const PageComponent: React.FC = () => {');
  fixed = fixed.replace(/export\s+default\s+Page;/g, 'export default PageComponent;');
  
  // Fix missing semicolons
  fixed = fixed.replace(/([^;}])\s*\n\s*([a-zA-Z_$])/g, '$1;\n$2');
  
  // Fix malformed return statements
  fixed = fixed.replace(/return\s*\(\s*\)\s*;/g, 'return null;');
  
  // Fix malformed JSX expressions
  fixed = fixed.replace(/\{\s*;\s*\}/g, '');
  fixed = fixed.replace(/\{\s*,\s*\}/g, '');
  
  // Fix malformed array/object syntax
  fixed = fixed.replace(/\[\s*,\s*\]/g, '[]');
  fixed = fixed.replace(/\{\s*,\s*\}/g, '{}');
  
  // Fix malformed template literals
  fixed = fixed.replace(/`([^`]*?)\n([^`]*?)`/g, '`$1$2`');
  
  // Fix malformed class names
  fixed = fixed.replace(/className\s*=\s*['"]([^'"]*?)\s*,\s*([^'"]*?)['"]/g, 'className="$1 $2"');
  
  // Fix malformed function calls
  fixed = fixed.replace(/\(\s*,\s*\)/g, '()');
  fixed = fixed.replace(/\(\s*,\s*,/g, '(');
  fixed = fixed.replace(/,\s*,\s*\)/g, ')');
  
  return fixed;
}

export default FixParsingErrors.jsPage;
>>>>>>> origin/main
