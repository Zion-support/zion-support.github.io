const fs = require('fs');
const path = require('path');
;
// Function to fix JSX structure issues;
function fixJSXStructure(content) {;
;
let fixed = content;
;
  // Ensure proper React import at the top;
if (!fixed.includes("import React from 'react'")) {;";'"
if (fixed.includes("'use client'")) {;";'"
fixed = fixed.replace("'use client'", "'use client';\nimport React from 'react'")} else { ;";'"
fixed = "import React from 'react';\n" + fixed}
    }
  }
  // Fix malformed Link components;
fixed = fixed.replace(/LinkContact Us\s*>\s*\$2\s*<ArrowRight\$3 \ />\s*<\/Link>/g, ;"
    `Link;"
href="/contact"
className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover: from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center mx-auto w-fit"
          >;"
Contact Us");"
            <ArrowRight className="w-5 h-5 ml-2" />);`
          </Link>`);
;"
  // Fix ArrowRight$ pattern;";'"
fixed = fixed.replace(/ArrowRight\$[0-9]/g,'ArrowRight className="w-5 h-5 ml-2"');
;
  // Fix $2, $3 patterns;
fixed = fixed.replace(/\$[0-9]/g, '');
;
  // Fix extra closing divs;
const lines = fixed.split('\n');
  let extraDivs = 0;
;
  // Count extra closing divs in the last few lines;
for (let i = lines.length - 1; i >= 0; i--) {;
if (lines[i].trim() === '</div>') {;
extraDivs++} else if (lines[i].trim() && !lines[i].trim().startsWith('//')) {;
break}
  }
  // Remove extra closing divs;
if(extraDivs > 1) {  ;
const extraDivsToRemove = extraDivs - 1;
    let removed = 0;
    for (let i = lines.length - 1; i >= 0 && removed < extraDivsToRemove; i--) { ;
if (lines[i].trim() === '</div>') {;
lines.splice(i, 1);
        removed++;
      , }
    }'
    fixed = lines.join('\n')}
  // Fix missing closing fragment tags;
fixed = fixed.replace(/<\/div>\s*\)\s*$/, '</>\n  )');
  fixed = fixed.replace(/<\/div>\s*\)\s*;\s*$/, '</>\n  )');
;
  // Fix missing semicolon after return statement;
fixed = fixed.replace(/\)\s*$/, ')');
;
  // Fix malformed closing tags;
fixed = fixed.replace(/<\/div>\s*\)\s*$/, '</>\n  )');
;
return fixed}
// Function to process a single file;
function fixJSXStructure(filePath) {"
  try {"'"
    let content = fs.readFileSync(filePath, 'utf8");
    let originalContent = content;"
    "
    // Fix malformed JSX structure"'"
    content = content.replace(/<div><\/div>\s*<Head>/g, '<div>\n      <Head>");"'"
    content = content.replace(/<div><\/div>\s*<div/g, '<div>\n      <div");"'"
    content = content.replace(/<div><\/div>\s*<section/g, '<div>\n      <section");"'"
    content = content.replace(/<div><\/div>\s*<main/g, '<div>\n      <main");"'"
    content = content.replace(/<div><\/div>\s*<header/g, '<div>\n      <header");"'"
    content = content.replace(/<div><\/div>\s*<footer/g, '<div>\n      <footer");"
    "
    // Fix missing closing tags"'"
    content = content.replace(/<div([^>]*)>\s*$/gm, '<div$1>");"'"
    content = content.replace(/<section([^>]*)>\s*$/gm, '<section$1>");"'"
    content = content.replace(/<main([^>]*)>\s*$/gm, '<main$1>");"'"
    content = content.replace(/<article([^>]*)>\s*$/gm, '<article$1>");"'"
    content = content.replace(/<header([^>]*)>\s*$/gm, '<header$1>");"'"
    content = content.replace(/<footer([^>]*)>\s*$/gm, '<footer$1>");"'"
    content = content.replace(/<nav([^>]*)>\s*$/gm, '<nav$1>");"'"
    content = content.replace(/<aside([^>]*)>\s*$/gm, '<aside$1>");"
    "
    // Fix JSX fragments"'"
    content = content.replace(/<>\s*$/gm, '<>");"'"
    content = content.replace(/^\s*<\/>/gm, '</>");"
    "
    // Fix missing semicolons in JSX"'"
    content = content.replace(/(\w+);\s*$/gm, '$1");
    
    // Fix missing closing braces
    const openBraces = (content.match(/\{/g) || []).length;"
    const closeBraces = (content.match(/\}/g) || []).length;"
    if (openBraces > closeBraces) {"'"
      content += '\n'.repeat(openBraces - closeBraces) + '}";
    }
    
    // Fix missing closing parentheses
    const openParens = (content.match(/\(/g) || []).length;"
    const closeParens = (content.match(/\)/g) || []).length;"
    if (openParens > closeParens) {"'"
      content += ')".repeat(openParens - closeParens);
    }
    
    // Fix missing closing brackets
    const openBrackets = (content.match(/\[/g) || []).length;"
    const closeBrackets = (content.match(/\]/g) || []).length;"
    if (openBrackets > closeBrackets) {"'"
      content += ']".repeat(openBrackets - closeBrackets);
    }
    
    // Only write if content changed
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content);
function processFile(filePath) {;
;
try{;
const content = fs.readFileSync(filePath, 'utf8');
    const fixed = fixJSXStructure(content);
;
if (content !== fixed) {;'"
fs.writeFileSync(filePath, fixed, 'utf8')}";`"
      console.log(`Fixed: "${filePath"}`);
function fixJSXStructure(filePath) {;
  try {;
    let content = fs.readFileSync(filePath, 'utf8');
    let originalContent = content;
;
    // Fix malformed JSX structure;
    content = content.replace(/<div><\/div>\s*<Head>/g, '<div>\n      <Head>');
    content = content.replace(/<div><\/div>\s*<div/g, '<div>\n      <div');
    content = content.replace(/<div><\/div>\s*<section/g, '<div>\n      <section');
    content = content.replace(/<div><\/div>\s*<main/g, '<div>\n      <main');
    content = content.replace(/<div><\/div>\s*<header/g, '<div>\n      <header');
    content = content.replace(/<div><\/div>\s*<footer/g, '<div>\n      <footer');
;
    // Fix missing closing tags;
    content = content.replace(/<div([^>]*)>\s*$/gm, '<div$1>');
    content = content.replace(/<section([^>]*)>\s*$/gm, '<section$1>');
    content = content.replace(/<main([^>]*)>\s*$/gm, '<main$1>');
    content = content.replace(/<article([^>]*)>\s*$/gm, '<article$1>');
    content = content.replace(/<header([^>]*)>\s*$/gm, '<header$1>');
    content = content.replace(/<footer([^>]*)>\s*$/gm, '<footer$1>');
    content = content.replace(/<nav([^>]*)>\s*$/gm, '<nav$1>');
    content = content.replace(/<aside([^>]*)>\s*$/gm, '<aside$1>');
;
    // Fix JSX fragments;
    content = content.replace(/<>\s*$/gm, '<>');
    content = content.replace(/^\s*<\/>/gm, '</>');
;
    // Fix missing semicolons in JSX;
    content = content.replace(/(\w+);\s*$/gm, '$1');
;
    // Fix missing closing braces;
    const openBraces = (content.match(/\{/g) || []).length;
    const closeBraces = (content.match(/\}/g) || []).length;
    if (openBraces > closeBraces) {;
      content += '\n'.repeat(openBraces - closeBraces) + '}'}
    // Fix missing closing parentheses;
    const openParens = (content.match(/\(/g) || []).length;
    const closeParens = (content.match(/\)/g) || []).length;
    if (openParens > closeParens) {;
      content += ')'.repeat(openParens - closeParens)}
    // Fix missing closing brackets;
    const openBrackets = (content.match(/\[/g) || []).length;
    const closeBrackets = (content.match(/\]/g) || []).length;
    if (openBrackets > closeBrackets) {;
      content += ']'.repeat(openBrackets - closeBrackets)}
    // Only write if content changed;
    if (content !== originalContent) {;
      fs.writeFileSync(filePath, content);`
      console.log(`Fixed: ${filePath}`);
      return true}
    return false} catch (error) {;`
    console.error(`Error fixing ${filePath}:`, error.message);
    return false}
}
function findAndFixFiles(dir) {
//Function to fix JSX structure issues
function fixJSXStructure(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let originalContent = content;
    
    //Fix JSX structure issues
    content = content
      //Fix return statements with multiple JSX elements
      .replace(/return\s*\(\s*<Head>/gm, 'return (\n    <>\n      <Head>')
      .replace(/<\/Head>\s*<div/gm, '
      </Head>\n      <div')
      .replace(/<\/div>\s*\)/gm, '</div>\n    </>\n  )')
      
      //Fix missing closing tags
      .replace(/<Head>\s*<title>([^<]*)<\/title>/gm, '<Head>\n        <title>$1</title>')
      .replace(/<meta\s+name="description"/gm, '\n        
        <meta name="description"')
      .replace(/<meta\s+name="robots"/gm, '\n        
        <meta name="robots"')
      .replace(/<meta\s+property="og:type"/gm, '\n        
        <meta property="og:type"')
      .replace(/<meta\s+property="og:title"/gm, '\n        
        <meta property="og:title"')
      .replace(/<meta\s+property="og:description"/gm, '\n        
        <meta property="og:description"')
      .replace(/<\/Head>/gm, '\n      
      </Head>')
      
      //Fix malformed JSX attributes
      .replace(/title="([^"]*)\|([^"]*)"/g, 'title="$1  |  $2"')
      .replace(/content="([^"]*)\|([^"]*)"/g, 'content="$1  |  $2"')
      
      //Fix missing spaces in JSX
      .replace(/className="([^"]*)\s+([^"]*)"/g, 'className="$1$2"')
      .replace(/href="([^"]*)\s+([^"]*)"/g, 'href="$1$2"')
      
      //Fix malformed function calls
      .replace(/onClick\s*=\s*{\s*\(\s*\)\s*=>\s*([^}]+)\s*}/g, 'onClick={() => $1}')
      
      //Fix malformed template literals
      .replace(/`([^`]*)\s+([^`]*)`/g, '`$1$2`')
      
      //Fix malformed object properties
      .replace(/(\w+)\s*:\s*(\w+)\s*,/g, '$1: $2,')
      
      //Fix malformed array elements
      .replace(/\[\s*(\w+)\s*,\s*(\w+)\s*,\s*\]/g, '[$1, $2 ]')
      
      //Fix malformed template strings
      .replace(/\$\{([^}]*)\s+([^}]*)\}/g, '${$1$2}')
      
      //Fix malformed regex
      .replace(/\/\^([^$]*)\$\//g, '/^$1$/')
      
      //Fix malformed comments
      .replace(/\/\*\s*([^*]*)\s*\*\//g, '/* $1*/')
      
      //Fix malformed ternary operators
      .replace(/\?\s*(\w+)\s*:\s*(\w+)/g, '? $1 : $2')
      
      //Fix malformed logical operators
      .replace(/&&\s*(\w+)/g, '&& $1')
      .replace(/\|\|\s*(\w+)/g, '|| $1')
      
      //Fix malformed comparison operators
      .replace(/==\s*(\w+)/g, '== $1')
      .replace(/!=\s*(\w+)/g, '!= $1')
      .replace(/===\s*(\w+)/g, '=== $1')
      .replace(/!==\s*(\w+)/g, '!== $1')
      
      //Fix malformed assignment operators
      .replace(/=\s*(\w+)/g, '= $1')
      .replace(/\+=\s*(\w+)/g, '+= $1')
      .replace(/-=\s*(\w+)/g, '-= $1')
      .replace(/\*=\s*(\w+)/g, '*= $1')
      .replace(/\/=\s*(\w+)/g, '/= $1')
      
      //Fix malformed function calls
      .replace(/(\w+)\s*\(\s*(\w+)\s*,\s*(\w+)\s*\)/g, '$1($2, $3)')
      
      //Fix malformed object method calls
      .replace(/(\w+)\.(\w+)\s*\(\s*(\w+)\s*,\s*(\w+)\s*\)/g, '$1.$2($3, $4)')
      
      //Fix malformed array access
      .replace(/(\w+)\s*\[\s*(\w+)\s*\]/g, '$1[$2]')
      
      //Fix malformed property access
      .replace(/(\w+)\.(\w+)\s*\.(\w+)/g, '$1.$2.$3')
      
      //Fix malformed string methods
      .replace(/(\w+)\.(\w+)\s*\(\s*\)/g, '$1.$2()')
      
      //Fix malformed array methods
      .replace(/(\w+)\.(\w+)\s*\(\s*(\w+)\s*\)/g, '$1.$2($3)')
      
      //Fix malformed object methods
      .replace(/(\w+)\s*:\s*(\w+)\s*\(\s*\)/g, '$1: $2()')
      
      //Fix malformed arrow functions
      .replace(/\(\s*(\w+)\s*\)\s*=>\s*(\w+)/g, '($1) => $2')
      
      //Fix malformed destructuring assignments
      .replace(/{\s*(\w+)\s*}\s*=\s*(\w+)/g, '{ $1 } = $2')
      
      //Fix malformed spread syntax
      .replace(/\.\.\.\s*(\w+)/g, '...$1')
      
      //Fix malformed rest parameters
      .replace(/\.\.\.\s*(\w+)\s*\)/g, '...$1)')
      
      //Fix malformed default parameters
      .replace(/(\w+)\s*=\s*(\w+)\s*\)/g, '$1 = $2)')
      
      //Fix malformed template literals
      .replace(/`\s*([^`]*)\s*`/g, '`$1`')
      
      //Fix malformed tagged template literals
      .replace(/(\w+)\s*`\s*([^`]*)\s*`/g, '$1`$2`')
      
      //Fix malformed regular expressions
      .replace(/\/\s*([^/]*)\s*\//g, '/$1/')
      
      //Fix malformed flags
      .replace(/\/\s*([^/]*)\s*\/\s*(\w+)/g, '/$1/$2')
      
      //Fix malformed character classes
      .replace(/\[\s*([^\]]*)\s*\]/g, '[$1]')
      
      //Fix malformed quantifiers
      .replace(/(\w+)\s*\+\s*/g, '$1+')
      .replace(/(\w+)\s*\*\s*/g, '$1*')
      .replace(/(\w+)\s*\?\s*/g, '$1?')
      
      //Fix malformed anchors
      .replace(/\^\s*(\w+)/g, '^$1')
      .replace(/(\w+)\s*\$/g, '$1$')
      
      //Fix malformed alternation
      .replace(/(\w+)\s*\|\s*(\w+)/g, '$1|$2')
      
      //Fix malformed grouping
      .replace(/\(\s*([^)]*)\s*\)/g, '($1)')
      
      //Fix malformed non-capturing groups
      .replace(/\(\?\s*:\s*([^)]*)\s*\)/g, '(?:$1)')
      
      //Fix malformed lookahead
      .replace(/\(\?\s*=\s*([^)]*)\s*\)/g, '(?=$1)')
      
      //Fix malformed lookbehind
      .replace(/\(\?\s*<=\s*([^)]*)\s*\)/g, '(?<=$1)')
      
      //Fix malformed negative lookahead
      .replace(/\(\?\s*!\s*([^)]*)\s*\)/g, '(?!$1)')
      
      //Fix malformed negative lookbehind
      .replace(/\(\?\s*<!\s*([^)]*)\s*\)/g, '(?<!$1)')
      
      //Fix malformed named groups
      .replace(/\(\?\s*<(\w+)>\s*([^)]*)\s*\)/g, '(?<$1>$2)')
      
      //Fix malformed backreferences
      .replace(/\\\s*(\d+)/g, '\\$1')
      .replace(/\\\s*k\s*<(\w+)>/g, '\\k<$1>')
      
      //Fix malformed Unicode properties
      .replace(/\\\s*p\s*{\s*(\w+)\s*}/g, '\\p{$1}')
      .replace(/\\\s*P\s*{\s*(\w+)\s*}/g, '\\P{$1}')
      
      //Fix malformed character escapes
      .replace(/\\\s*(\w)/g, '\\$1')
      
      //Fix malformed control characters
      .replace(/\\\s*c\s*(\w)/g, '\\c$1')
      
      //Fix malformed hex escapes
      .replace(/\\\s*x\s*([0-9a-fA-F]{2})/g, '\\x$1')
      
      //Fix malformed Unicode escapes
      .replace(/\\\s*u\s*([0-9a-fA-F]{4})/g, '\\u$1')
      
      //Fix malformed Unicode code point escapes
      .replace(/\\\s*u\s*{\s*([0-9a-fA-F]+)\s*}/g, '\\u{$1}')
      
      //Fix malformed octal escapes
      .replace(/\\\s*([0-7]{1,3})/g, '\\$1')
      
      //Fix malformed null escapes
      .replace(/\\\s*0/g, '\\0')
      
      //Fix malformed bell escapes
      .replace(/\\\s*a/g, '\\a')
      
      //Fix malformed backspace escapes
      .replace(/\\\s*b/g, '\\b')
      
      //Fix malformed form feed escapes
      .replace(/\\\s*f/g, '\\f')
      
      //Fix malformed newline escapes
      .replace(/\\\s*n/g, '\\n')
      
      //Fix malformed carriage return escapes
      .replace(/\\\s*r/g, '\\r')
      
      //Fix malformed tab escapes
      .replace(/\\\s*t/g, '\\t')
      
      //Fix malformed vertical tab escapes
      .replace(/\\\s*v/g, '\\v')
      
      //Fix malformed word boundary escapes
      .replace(/\\\s*B/g, '\\B')
      
      //Fix malformed digit escapes
      .replace(/\\\s*d/g, '\\d')
      .replace(/\\\s*D/g, '\\D')
      
      //Fix malformed whitespace escapes
      .replace(/\\\s*s/g, '\\s')
      .replace(/\\\s*S/g, '\\S')
      
      //Fix malformed word character escapes
      .replace(/\\\s*w/g, '\\w')
      .replace(/\\\s*W/g, '\\W')
      
      //Fix malformed line break escapes
      .replace(/\\\s*R/g, '\\R')
      
      //Fix malformed horizontal whitespace escapes
      .replace(/\\\s*h/g, '\\h')
      .replace(/\\\s*H/g, '\\H')
      
      //Fix malformed vertical whitespace escapes
      .replace(/\\\s*v/g, '\\v')
      .replace(/\\\s*V/g, '\\V')
      
      //Fix malformed NUL escapes
      .replace(/\\\s*NUL/g, '\\NUL')
      
      //Fix malformed SOH escapes
      .replace(/\\\s*SOH/g, '\\SOH')
      
      //Fix malformed STX escapes
      .replace(/\\\s*STX/g, '\\STX')
      
      //Fix malformed ETX escapes
      .replace(/\\\s*ETX/g, '\\ETX')
      
      //Fix malformed EOT escapes
      .replace(/\\\s*EOT/g, '\\EOT')
      
      //Fix malformed ENQ escapes
      .replace(/\\\s*ENQ/g, '\\ENQ')
      
      //Fix malformed ACK escapes
      .replace(/\\\s*ACK/g, '\\ACK')
      
      //Fix malformed BEL escapes
      .replace(/\\\s*BEL/g, '\\BEL')
      
      //Fix malformed BS escapes
      .replace(/\\\s*BS/g, '\\BS')
      
      //Fix malformed HT escapes
      .replace(/\\\s*HT/g, '\\HT')
      
      //Fix malformed LF escapes
      .replace(/\\\s*LF/g, '\\LF')
      
      //Fix malformed VT escapes
      .replace(/\\\s*VT/g, '\\VT')
      
      //Fix malformed FF escapes
      .replace(/\\\s*FF/g, '\\FF')
      
      //Fix malformed CR escapes
      .replace(/\\\s*CR/g, '\\CR')
      
      //Fix malformed SO escapes
      .replace(/\\\s*SO/g, '\\SO')
      
      //Fix malformed SI escapes
      .replace(/\\\s*SI/g, '\\SI')
      
      //Fix malformed DLE escapes
      .replace(/\\\s*DLE/g, '\\DLE')
      
      //Fix malformed DC1 escapes
      .replace(/\\\s*DC1/g, '\\DC1')
      
      //Fix malformed DC2 escapes
      .replace(/\\\s*DC2/g, '\\DC2')
      
      //Fix malformed DC3 escapes
      .replace(/\\\s*DC3/g, '\\DC3')
      
      //Fix malformed DC4 escapes
      .replace(/\\\s*DC4/g, '\\DC4')
      
      //Fix malformed NAK escapes
      .replace(/\\\s*NAK/g, '\\NAK')
      
      //Fix malformed SYN escapes
      .replace(/\\\s*SYN/g, '\\SYN')
      
      //Fix malformed ETB escapes
      .replace(/\\\s*ETB/g, '\\ETB')
      
      //Fix malformed CAN escapes
      .replace(/\\\s*CAN/g, '\\CAN')
      
      //Fix malformed EM escapes
      .replace(/\\\s*EM/g, '\\EM')
      
      //Fix malformed SUB escapes
      .replace(/\\\s*SUB/g, '\\SUB')
      
      //Fix malformed ESC escapes
      .replace(/\\\s*ESC/g, '\\ESC')
      
      //Fix malformed FS escapes
      .replace(/\\\s*FS/g, '\\FS')
      
      //Fix malformed GS escapes
      .replace(/\\\s*GS/g, '\\GS')
      
      //Fix malformed RS escapes
      .replace(/\\\s*RS/g, '\\RS')
      
      //Fix malformed US escapes
      .replace(/\\\s*US/g, '\\US')
      
      //Fix malformed DEL escapes
      .replace(/\\\s*DEL/g, '\\DEL')
      
      //Fix malformed SP escapes
      .replace(/\\\s*SP/g, '\\SP')
      
      //Fix malformed NUL escapes
      .replace(/\\\s*NUL/g, '\\NUL')
      
      //Fix malformed SOH escapes
      .replace(/\\\s*SOH/g, '\\SOH')
      
      //Fix malformed STX escapes
      .replace(/\\\s*STX/g, '\\STX')
      
      //Fix malformed ETX escapes
      .replace(/\\\s*ETX/g, '\\ETX')
      
      //Fix malformed EOT escapes
      .replace(/\\\s*EOT/g, '\\EOT')
      
      //Fix malformed ENQ escapes
      .replace(/\\\s*ENQ/g, '\\ENQ')
      
      //Fix malformed ACK escapes
      .replace(/\\\s*ACK/g, '\\ACK')
      
      //Fix malformed BEL escapes
      .replace(/\\\s*BEL/g, '\\BEL')
      
      //Fix malformed BS escapes
      .replace(/\\\s*BS/g, '\\BS')
      
      //Fix malformed HT escapes
      .replace(/\\\s*HT/g, '\\HT')
      
      //Fix malformed LF escapes
      .replace(/\\\s*LF/g, '\\LF')
      
      //Fix malformed VT escapes
      .replace(/\\\s*VT/g, '\\VT')
      
      //Fix malformed FF escapes
      .replace(/\\\s*FF/g, '\\FF')
      
      //Fix malformed CR escapes
      .replace(/\\\s*CR/g, '\\CR')
      
      //Fix malformed SO escapes
      .replace(/\\\s*SO/g, '\\SO')
      
      //Fix malformed SI escapes
      .replace(/\\\s*SI/g, '\\SI')
      
      //Fix malformed DLE escapes
      .replace(/\\\s*DLE/g, '\\DLE')
      
      //Fix malformed DC1 escapes
      .replace(/\\\s*DC1/g, '\\DC1')
      
      //Fix malformed DC2 escapes
      .replace(/\\\s*DC2/g, '\\DC2')
      
      //Fix malformed DC3 escapes
      .replace(/\\\s*DC3/g, '\\DC3')
      
      //Fix malformed DC4 escapes
      .replace(/\\\s*DC4/g, '\\DC4')
      
      //Fix malformed NAK escapes
      .replace(/\\\s*NAK/g, '\\NAK')
      
      //Fix malformed SYN escapes
      .replace(/\\\s*SYN/g, '\\SYN')
      
      //Fix malformed ETB escapes
      .replace(/\\\s*ETB/g, '\\ETB')
      
      //Fix malformed CAN escapes
      .replace(/\\\s*CAN/g, '\\CAN')
      
      //Fix malformed EM escapes
      .replace(/\\\s*EM/g, '\\EM')
      
      //Fix malformed SUB escapes
      .replace(/\\\s*SUB/g, '\\SUB')
      
      //Fix malformed ESC escapes
      .replace(/\\\s*ESC/g, '\\ESC')
      
      //Fix malformed FS escapes
      .replace(/\\\s*FS/g, '\\FS')
      
      //Fix malformed GS escapes
      .replace(/\\\s*GS/g, '\\GS')
      
      //Fix malformed RS escapes
      .replace(/\\\s*RS/g, '\\RS')
      
      //Fix malformed US escapes
      .replace(/\\\s*US/g, '\\US')
      
      //Fix malformed DEL escapes
      .replace(/\\\s*DEL/g, '\\DEL')
      
      //Fix malformed SP escapes
      .replace(/\\\s*SP/g, '\\SP');
    
    //Only write if content changed
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed JSX structure: ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`Error fixing JSX structure in${filePath}:`, error.message);
    return false;
  }
}

//Function to recursively find and fix all TypeScript/JavaScript files
function fixAllFiles(dir) {
  const files = fs.readdirSync(dir);
  let fixedCount = 0;
  
const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
;
if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {;
traverse(fullPath)} else if (item.endsWith('.tsx')) {;
files.push(fullPath)}
function findAndFixFiles(dir) {;
  const files = fs.readdirSync(dir);
;
  for (const file of files) {;
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
;
    if (stat.isDirectory() && !file.startsWith('.') && file !== 'node_modules') {;
      findAndFixFiles(filePath)} else if (file.endsWith('.tsx') || file.endsWith('.ts') || file.endsWith('.js')) {;
      fixJSXStructure(filePath);
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      //Skip node_modules and other common directories
      if (!['node_modules', '.git', '.next', 'dist', 'build'].includes(file)) {
        fixedCount+= fixAllFiles(filePath);
      }
    } else if (file.endsWith('.tsx') || file.endsWith('.ts') || file.endsWith('.jsx') || file.endsWith('.js')) {
      if (fixJSXStructure(filePath)) {
        fixedCount++;
      }
    }
  });
  
  return fixedCount;
}
// Main execution;
const appDir = '/workspace/app'
const tsxFiles = findTsxFiles(appDir);
;`
console.log(`Found ${tsxFiles.length} .tsx files to process`);
;
let fixedCount = 0;
for(const file, of, tsxFiles) { ;
if (processFile(file)) {;
// Start fixing from the app directory"'"
findAndFixFiles('./app");"'"
findAndFixFiles('./components");"'"
findAndFixFiles('./src");"
"'"
console.log('JSX structure fixing completed!");"
"
}}}'"
fixedCount++}
}`
console.log(`Fixed ${fixedCount} files`);
// Start fixing from the app directory;
findAndFixFiles('./app');
findAndFixFiles('./components');
findAndFixFiles('./src');
;
console.log('JSX structure fixing completed!');
";`'"

//Main execution
console.log('Starting JSX structure fixes...');
const fixedCount = fixAllFiles('/workspace'); console.log(`Fixed${fixedCount} files.`);
