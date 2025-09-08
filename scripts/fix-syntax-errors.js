

#!/usr/bin/env node

import fs from 'fs';
import path from 'path';


import { glob } from 'glob';

// Common syntax fixes;
const fixes = [// Fix numeric literals in object properties;


import fs from 'fs'
import path from 'path'
import { glob } from 'glob'
// Common syntax fixes
const fixes = [// Fix numeric literals in object properties
        .replace(/(\w+):\s*(\d+)([a-zA-Z]+)/g, '$"1": "$2$3"')

        .replace(/(\w+):\s*([^}]+)(?=\s*[}])/g, (m, prop, value) => {
          if (value.includes('px') || value.includes('rem') || value.includes('%') || value.includes('vh') || value.includes('vw')) {

            return "${prop}: "${value}""}

          return m})
      return "style={{ ${fixed} }}`}
  },
  // Fix unterminated strings
  {"
    "pattern": /"([^"]*)\n/g,'"
    "replacement": '"$1"'
  },
  // Fix malformed template literals
  {"
    "pattern": /\$\{([^}]+)\}/g,'"
    "replacement": '${$1}'
          if (value.includes('px') || value.includes('rem') || value.includes('%') || value.includes('vh') || value.includes('vw')) {
            return "${prop}: "${value}""}"
          return m});"`
      return "style={{ ${fixed} }}`}"
  // Fix unterminated strings
  {"
    "pattern": /"([^"]*)\n/g,""
    "replacement": '"$1"
  // Fix malformed template literals
    "pattern": /\$\{([^}]+)\}/g,""
    "replacement": '${$1}

  }
];

    // Additional specific fixes for common issues
    content = content
      // Fix numeric literals in style objects
      .replace(/(\w+):\s*(\d+)(px|rem|%|vh|vw|em)/g, '$"1": "$2$3"')
      // Fix missing quotes in object properties
      .replace(/(\w+):\s*([a-zA-Z][a-zA-Z0-9\s\-_]+)(?=\s*[}])/g, (match, prop, value) => {

        if (!value.includes('"') && !value.includes("'") && !value.includes('`')) {
          return `${prop}: "${value}"`}
        return match})
      // Fix malformed JSX
      .replace(/<(\w+)\s+([^>]+)>\s*<\/\1>/g, '<$1 $2 />')
      // Fix unterminated strings in JSX
      .replace(/(\w+)="([^"]*)\n([^"]*)"([^>]*>)/g, '$1="$2$3"$4');
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`"Fixed": ${filePath}`);
      return true}
    return false} catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false}


          return `${prop}: "${value}"`}

        return match})
      // Fix malformed JSX'
      .replace(/<(\w+)\s+([^>]+)>\s*<\/\1>/g, '<$1 $2 />')
      // Fix unterminated strings in JSX'"

      .replace(/(\w+)="([^"]*)\n([^"]*)"([^>]*>)/g, '$1="$2$3"$4')
  const patterns = ['pages/**/*.tsx',
    'components/**/*.tsx',
    'src/**/*.tsx',
    'src/**/*.ts'

  ];


  let totalFixed = 0;




#!/usr/bin/env node import fs from 'fs'; import path from 'path'; import { glob } from 'glob'; const fixes = [ { pattern: /(\w+):\s*(\d+)([a-zA-Z]+)/g,replacement: '$1: $2$3' },{ pattern: /(\w+):\s*([a-zA-Z][a-zA-Z0-9\s]+)(?=\s*[,}])/g,replacement: '$1: "$2"' },{ pattern: /(\w+)=\{`([^`]+)`\}/g,replacement: '$1={`$2`}' },{ pattern: /(\w+)\s+(\d+)/g,replacement: '$1: $2' },{ pattern: /style=\{\{\s*([^}]+)\s*\}\}/g,replacement: (match,content) => { const fixed = content .replace(/(\w+):\s*(\d+)([a-zA-Z]+)/g,'$1: "$2$3"') .replace(/(\w+):\s*([^,}]+)(?=\s*[,}])/g,(m,prop,value) => { if (value.includes('px') || value.includes('rem') || value.includes('%') || value.includes('vh') || value.includes('vw')) { return `${prop}: "${value}"`} return m}); return `style={{ ${fixed} }}`} },{ pattern: /"([^"]*)\n/g,replacement: '"$1"' },{ pattern: /\$\{([^}]+)\}/g,replacement: '${$1}' } ]; function fixFile(filePath) { try { let content = fs.readFileSync(filePath,'utf8'); const originalContent = content; fixes.forEach(fix => { if (typeof fix.replacement === 'function') { content = content.replace(fix.pattern,fix.replacement)} else { content = content.replace(fix.pattern,fix.replacement)} }); content = content .replace(/(\w+):\s*(\d+)(px|rem|%|vh|vw|em)/g,'$1: "$2$3"') .replace(/(\w+):\s*([a-zA-Z][a-zA-Z0-9\s\-_]+)(?=\s*[,}])/g,(match,prop,value) => { if (!value.includes('"') && !value.includes("'") && !value.includes('`')) { return `${prop}: "${value}"`} return match}) .replace(/<(\w+)\s+([^>]+)>\s*<\/\1>/g,'<$1 $2 />') .replace(/(\w+)="([^"]*)\n([^"]*)"([^>]*>)/g,'$1="$2$3"$4'); if (content !== originalContent) { fs.writeFileSync(filePath,content,'utf8'); console.log(`Fixed: ${filePath}`); return true} return false} catch (error) { console.error(`Error fixing ${filePath}:`,error.message); return false} } async function main() { const patterns = [ 'pages*.tsx','components*.tsx','src*.tsx','src*.ts' ]; let totalFixed = 0; for (const pattern of patterns) { const files = await glob(pattern,{ cwd: process.cwd() }); for (const file of files) { if (fixFile(file)) { totalFixed++} } } console.log(`\nFixed ${totalFixed} files`)} if (import.meta.url === `file: main()} export { fixFile,fixes };
ursor/add-new-services-and-deploy-updates-0462

ursor/fix-syntax-push-and-merge-to-main-40de


#!/usr/bin/env node import fs from 'fs'; import path from 'path'; import { glob } from 'glob'; const fixes = [ { pattern: /(\w+):\s*(\d+)([a-zA-Z]+)/g,replacement: '$1: $2$3' },{ pattern: /(\w+):\s*([a-zA-Z][a-zA-Z0-9\s]+)(?=\s*[,}])/g,replacement: '$1: "$2"' },{ pattern: /(\w+)=\{`([^`]+)`\}/g,replacement: '$1={`$2`}' },{ pattern: /(\w+)\s+(\d+)/g,replacement: '$1: $2' },{ pattern: /style=\{\{\s*([^}]+)\s*\}\}/g,replacement: (match,content) => { const fixed = content .replace(/(\w+):\s*(\d+)([a-zA-Z]+)/g,'$1: "$2$3"') .replace(/(\w+):\s*([^,}]+)(?=\s*[,}])/g,(m,prop,value) => { if (value.includes('px') || value.includes('rem') || value.includes('%') || value.includes('vh') || value.includes('vw')) { return `${prop}: "${value}"`} return m}); return `style={{ ${fixed} }}`} },{ pattern: /"([^"]*)\n/g,replacement: '"$1"' },{ pattern: /\$\{([^}]+)\}/g,replacement: '${$1}' } ]; function fixFile(filePath) { try { let content = fs.readFileSync(filePath,'utf8'); const originalContent = content; fixes.forEach(fix => { if (typeof fix.replacement === 'function') { content = content.replace(fix.pattern,fix.replacement)} else { content = content.replace(fix.pattern,fix.replacement)} }); content = content .replace(/(\w+):\s*(\d+)(px|rem|%|vh|vw|em)/g,'$1: "$2$3"') .replace(/(\w+):\s*([a-zA-Z][a-zA-Z0-9\s\-_]+)(?=\s*[,}])/g,(match,prop,value) => { if (!value.includes('"') && !value.includes("'") && !value.includes('`')) { return `${prop}: "${value}"`} return match}) .replace(/<(\w+)\s+([^>]+)>\s*<\/\1>/g,'<$1 $2 />') .replace(/(\w+)="([^"]*)\n([^"]*)"([^>]*>)/g,'$1="$2$3"$4'); if (content !== originalContent) { fs.writeFileSync(filePath,content,'utf8'); console.log(`Fixed: ${filePath}`); return true} return false} catch (error) { console.error(`Error fixing ${filePath}:`,error.message); return false} } async function main() { const patterns = [ 'pages*.tsx','components*.tsx','src*.tsx','src*.ts' ]; let totalFixed = 0; );  } } console.log(`\nFixed ${totalFixed} files`)} if (import.meta.url === `file: main()} export { fixFile,fixes };
#!/usr/bin/env node import fs from 'fs'; import path from 'path'; import { glob } from 'glob'; const fixes = [ { pattern: /(\w+):\s*(\d+)([a-zA-Z]+)/g,replacement: '$1: $2$3' },{ pattern: /(\w+):\s*([a-zA-Z][a-zA-Z0-9\s]+)(?=\s*[,}])/g,replacement: '$1: "$2"' },{ pattern: /(\w+)=\{`([^`]+)`\}/g,replacement: '$1={`$2`}' },{ pattern: /(\w+)\s+(\d+)/g,replacement: '$1: $2' },{ pattern: /style=\{\{\s*([^}]+)\s*\}\}/g,replacement: (match,content) => { const fixed = content .replace(/(\w+):\s*(\d+)([a-zA-Z]+)/g,'$1: "$2$3"') .replace(/(\w+):\s*([^,}]+)(?=\s*[,}])/g,(m,prop,value) => { if (value.includes('px') || value.includes('rem') || value.includes('%') || value.includes('vh') || value.includes('vw')) { return `${prop}: "${value}"`} return m}); return `style={{ ${fixed} }}`} },{ pattern: /"([^"]*)\n/g,replacement: '"$1"' },{ pattern: /\$\{([^}]+)\}/g,replacement: '${$1}' } ]; function fixFile(filePath) { try { let content = fs.readFileSync(filePath,'utf8'); const originalContent = content; fixes.forEach(fix => { if (typeof fix.replacement === 'function') { content = content.replace(fix.pattern,fix.replacement)} else { content = content.replace(fix.pattern,fix.replacement)} }); content = content .replace(/(\w+):\s*(\d+)(px|rem|%|vh|vw|em)/g,'$1: "$2$3"') .replace(/(\w+):\s*([a-zA-Z][a-zA-Z0-9\s\-_]+)(?=\s*[,}])/g,(match,prop,value) => { if (!value.includes('"') && !value.includes("'") && !value.includes('`')) { return `${prop}: "${value}"`} return match}) .replace(/<(\w+)\s+([^>]+)>\s*<\/\1>/g,'<$1 $2 />') .replace(/(\w+)="([^"]*)\n([^"]*)"([^>]*>)/g,'$1="$2$3"$4'); if (content !== originalContent) { fs.writeFileSync(filePath,content,'utf8'); console.log(`Fixed: ${filePath}`); return true} return false} catch (error) { console.error(`Error fixing ${filePath}:`,error.message); return false} } async function main() { const patterns = [ 'pages*.tsx','components*.tsx','src*.tsx','src*.ts' ]; let totalFixed = 0; );  } } console.log(`\nFixed ${totalFixed} files`)} if (import.meta.url === `file: main()} export { fixFile,fixes };
#!/usr/bin/env node import fs from 'fs'; import path from 'path'; import { glob } from 'glob'; const fixes = [ { pattern: /(\w+):\s*(\d+)([a-zA-Z]+)/g,replacement: '$1: $2$3' },{ pattern: /(\w+):\s*([a-zA-Z][a-zA-Z0-9\s]+)(?=\s*[,}])/g,replacement: '$1: "$2"' },{ pattern: /(\w+)=\{`([^`]+)`\}/g,replacement: '$1={`$2`}' },{ pattern: /(\w+)\s+(\d+)/g,replacement: '$1: $2' },{ pattern: /style=\{\{\s*([^}]+)\s*\}\}/g,replacement: (match,content) => { const fixed = content .replace(/(\w+):\s*(\d+)([a-zA-Z]+)/g,'$1: "$2$3"') .replace(/(\w+):\s*([^,}]+)(?=\s*[,}])/g,(m,prop,value) => { if (value.includes('px') || value.includes('rem') || value.includes('%') || value.includes('vh') || value.includes('vw')) { return `${prop}: "${value}"`} return m}); return `style={{ ${fixed} }}`} },{ pattern: /"([^"]*)\n/g,replacement: '"$1"' },{ pattern: /\$\{([^}]+)\}/g,replacement: '${$1}' } ]; function fixFile(filePath) { try { let content = fs.readFileSync(filePath,'utf8'); const originalContent = content; fixes.forEach(fix => { if (typeof fix.replacement === 'function') { content = content.replace(fix.pattern,fix.replacement)} else { content = content.replace(fix.pattern,fix.replacement)} }); content = content .replace(/(\w+):\s*(\d+)(px|rem|%|vh|vw|em)/g,'$1: "$2$3"') .replace(/(\w+):\s*([a-zA-Z][a-zA-Z0-9\s\-_]+)(?=\s*[,}])/g,(match,prop,value) => { if (!value.includes('"') && !value.includes("'") && !value.includes('`')) { return `${prop}: "${value}"`} return match}) .replace(/<(\w+)\s+([^>]+)>\s*<\/\1>/g,'<$1 $2 />') .replace(/(\w+)="([^"]*)\n([^"]*)"([^>]*>)/g,'$1="$2$3"$4'); if (content !== originalContent) { fs.writeFileSync(filePath,content,'utf8'); console.log(`Fixed: ${filePath}`); return true} return false} catch (error) { console.error(`Error fixing ${filePath}:`,error.message); return false} } async function main() { const patterns = [ 'pages*.tsx','components*.tsx','src*.tsx','src*.ts' ]; let totalFixed = 0; );  } } console.log(`\nFixed ${totalFixed} files`)} if (import.meta.url === `file: main()} export { fixFile,fixes };
#!/usr/bin/env node import fs from 'fs'; import path from 'path'; import { glob } from 'glob'; const fixes = [ { pattern: /(\w+):\s*(\d+)([a-zA-Z]+)/g,replacement: '$1: $2$3' },{ pattern: /(\w+):\s*([a-zA-Z][a-zA-Z0-9\s]+)(?=\s*[,}])/g,replacement: '$1: "$2"' },{ pattern: /(\w+)=\{`([^`]+)`\}/g,replacement: '$1={`$2`}' },{ pattern: /(\w+)\s+(\d+)/g,replacement: '$1: $2' },{ pattern: /style=\{\{\s*([^}]+)\s*\}\}/g,replacement: (match,content) => { const fixed = content .replace(/(\w+):\s*(\d+)([a-zA-Z]+)/g,'$1: "$2$3"') .replace(/(\w+):\s*([^,}]+)(?=\s*[,}])/g,(m,prop,value) => { if (value.includes('px') || value.includes('rem') || value.includes('%') || value.includes('vh') || value.includes('vw')) { return `${prop}: "${value}"`} return m}); return `style={{ ${fixed} }}`} },{ pattern: /"([^"]*)\n/g,replacement: '"$1"' },{ pattern: /\$\{([^}]+)\}/g,replacement: '${$1}' } ]; function fixFile(filePath) { try { let content = fs.readFileSync(filePath,'utf8'); const originalContent = content; fixes.forEach(fix => { if (typeof fix.replacement === 'function') { content = content.replace(fix.pattern,fix.replacement)} else { content = content.replace(fix.pattern,fix.replacement)} }); content = content .replace(/(\w+):\s*(\d+)(px|rem|%|vh|vw|em)/g,'$1: "$2$3"') .replace(/(\w+):\s*([a-zA-Z][a-zA-Z0-9\s\-_]+)(?=\s*[,}])/g,(match,prop,value) => { if (!value.includes('"') && !value.includes("'") && !value.includes('`')) { return `${prop}: "${value}"`} return match}) .replace(/<(\w+)\s+([^>]+)>\s*<\/\1>/g,'<$1 $2 />') .replace(/(\w+)="([^"]*)\n([^"]*)"([^>]*>)/g,'$1="$2$3"$4'); if (content !== originalContent) { fs.writeFileSync(filePath,content,'utf8'); console.log(`Fixed: ${filePath}`); return true} return false} catch (error) { console.error(`Error fixing ${filePath}:`,error.message); return false} } async function main() { const patterns = [ 'pages*.tsx','components*.tsx','src*.tsx','src*.ts' ]; let totalFixed = 0; );  } } console.log(`\nFixed ${totalFixed} files`)} if (import.meta.url === `file: main()} export { fixFile,fixes };

#!/usr/bin/env node import fs from 'fs'; import path from 'path'; import { glob } from 'glob'; const fixes = [ { pattern: /(\w+):\s*(\d+)([a-zA-Z]+)/g,replacement: '$1: $2$3' },{ pattern: /(\w+):\s*([a-zA-Z][a-zA-Z0-9\s]+)(?=\s*[,}])/g,replacement: '$1: "$2"' },{ pattern: /(\w+)=\{`([^`]+)`\}/g,replacement: '$1={`$2`}' },{ pattern: /(\w+)\s+(\d+)/g,replacement: '$1: $2' },{ pattern: /style=\{\{\s*([^}]+)\s*\}\}/g,replacement: (match,content) => { const fixed = content .replace(/(\w+):\s*(\d+)([a-zA-Z]+)/g,'$1: "$2$3"') .replace(/(\w+):\s*([^,}]+)(?=\s*[,}])/g,(m,prop,value) => { if (value.includes('px') || value.includes('rem') || value.includes('%') || value.includes('vh') || value.includes('vw')) { return `${prop}: "${value}"`} return m}); return `style={{ ${fixed} }}`} },{ pattern: /"([^"]*)\n/g,replacement: '"$1"' },{ pattern: /\$\{([^}]+)\}/g,replacement: '${$1}' } ]; function fixFile(filePath) { try { let content = fs.readFileSync(filePath,'utf8'); const originalContent = content; fixes.forEach(fix => { if (typeof fix.replacement === 'function') { content = content.replace(fix.pattern,fix.replacement)} else { content = content.replace(fix.pattern,fix.replacement)} }); content = content .replace(/(\w+):\s*(\d+)(px|rem|%|vh|vw|em)/g,'$1: "$2$3"') .replace(/(\w+):\s*([a-zA-Z][a-zA-Z0-9\s\-_]+)(?=\s*[,}])/g,(match,prop,value) => { if (!value.includes('"') && !value.includes("'") && !value.includes('`')) { return `${prop}: "${value}"`} return match}) .replace(/<(\w+)\s+([^>]+)>\s*<\/\1>/g,'<$1 $2 />') .replace(/(\w+)="([^"]*)\n([^"]*)"([^>]*>)/g,'$1="$2$3"$4'); if (content !== originalContent) { fs.writeFileSync(filePath,content,'utf8'); console.log(`Fixed: ${filePath}`); return true} return false} catch (error) { console.error(`Error fixing ${filePath}:`,error.message); return false} } async function main() { const patterns = [ 'pages*.tsx','components*.tsx','src*.tsx','src*.ts' ]; let totalFixed = 0; );  } } console.log(`\nFixed ${totalFixed} files`)} if (import.meta.url === `file: main()} export { fixFile,fixes };


  for (const pattern of patterns) {

    const files = await glob(pattern, { "cwd": process && process.cwd() });
    for (const file of files) {}
      if (fixFile(file)) {}
        totalFixed++}
    }
  }



origin/cursor/integrate-build-improve-and-re-verify-c7b5


#!/usr/bin/env node import fs from 'fs'; import path from 'path'; import { glob } from 'glob'; const fixes = [ { pattern: /(\w+):\s*(\d+)([a-zA-Z]+)/g,replacement: '$1: $2$3' },{ pattern: /(\w+):\s*([a-zA-Z][a-zA-Z0-9\s]+)(?=\s*[,}])/g,replacement: '$1: "$2"' },{ pattern: /(\w+)=\{`([^`]+)`\}/g,replacement: '$1={`$2`}' },{ pattern: /(\w+)\s+(\d+)/g,replacement: '$1: $2' },{ pattern: /style=\{\{\s*([^}]+)\s*\}\}/g,replacement: (match,content) => { const fixed = content .replace(/(\w+):\s*(\d+)([a-zA-Z]+)/g,'$1: "$2$3"') .replace(/(\w+):\s*([^,}]+)(?=\s*[,}])/g,(m,prop,value) => { if (value.includes('px') || value.includes('rem') || value.includes('%') || value.includes('vh') || value.includes('vw')) { return `${prop}: "${value}"`} return m}); return `style={{ ${fixed} }}`} },{ pattern: /"([^"]*)\n/g,replacement: '"$1"' },{ pattern: /\$\{([^}]+)\}/g,replacement: '${$1}' } ]; function fixFile(filePath) { try { let content = fs.readFileSync(filePath,'utf8'); const originalContent = content; fixes.forEach(fix => { if (typeof fix.replacement === 'function') { content = content.replace(fix.pattern,fix.replacement)} else { content = content.replace(fix.pattern,fix.replacement)} }); content = content .replace(/(\w+):\s*(\d+)(px|rem|%|vh|vw|em)/g,'$1: "$2$3"') .replace(/(\w+):\s*([a-zA-Z][a-zA-Z0-9\s\-_]+)(?=\s*[,}])/g,(match,prop,value) => { if (!value.includes('"') && !value.includes("'") && !value.includes('`')) { return `${prop}: "${value}"`} return match}) .replace(/<(\w+)\s+([^>]+)>\s*<\/\1>/g,'<$1 $2 />') .replace(/(\w+)="([^"]*)\n([^"]*)"([^>]*>)/g,'$1="$2$3"$4'); if (content !== originalContent) { fs.writeFileSync(filePath,content,'utf8'); console.log(`Fixed: ${filePath}`); return true} return false} catch (error) { console.error(`Error fixing ${filePath}:`,error.message); return false} } async function main() { const patterns = [ 'pages*.tsx','components*.tsx','src*.tsx','src*.ts' ]; let totalFixed = 0; for (const pattern of patterns) { const files = await glob(pattern,{ cwd: process.cwd() }); for (const file of files) { if (fixFile(file)) { totalFixed++} } } console.log(`\nFixed ${totalFixed} files`)} if (import.meta.url === `file: main()} export { fixFile,fixes };




