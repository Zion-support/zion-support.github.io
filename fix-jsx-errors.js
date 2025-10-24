const fs = require('fs');
const path = require('path');
;
// Common JSX syntax fixes;
const fixes = [;
  // Fix missing closing tags for JSX fragments;
  {;
pattern: "/<>\s*$/gm",replacement: "'<>'"
  "},;"
  {;";'"
pattern: "/^(\s*)<\/>\s*$/gm",replacement: "'$1</>'"
  "},;"
  // Fix missing closing tags for div elements{;";'"
pattern: "/<div([^ />]*)>\s*$/gm",replacement: "'<div$1 />'"}
  },;"
  // Fix malformed JSX expressions{}"
pattern: "/className=\{([^"}]*)\}/g,;";'"
replacement: "'className={$1"}'
  }
  // Fix missing semicolons in TypeScript;"
  {;";'"
pattern: "/(\w+):\s*(\w+)\s*$/gm",replacement: "'$1: $2'"
  "},;"
  // Fix missing commas in object literals{;";'"
pattern: "/(\w+):\s*(\w+)\s*\n(\s*)(\w+):/g",replacement: "'$1: $2",\n$3$4: "'"}
  },;"
  // Fix malformed function declarations{;";'"
pattern: "/function\s+(\w+)\s*\(\s*\)\s*\{/g",replacement: "'function $1() {'"}
  },;"
  // Fix missing return statements{;";'"
pattern: "/const\s+(\w+)\s*=\s*\(\s*\)\s*=>\s*\{/g",replacement: "'const $1 = () => {'"}
  }
];
;
function fixFile(filePath) {;
;
try { ;
let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
;
    // Apply fixes;
for (const fix, of, fixes) {; const newContent = content.replace(fix.pattern, fix.replacement); if (newContent !== content) {  ;
content = newContent;
        modified = true;
,, , }
      }
    }
    // Additional specific fixes for common patterns;
    // Fix JSX fragments that are not properly closed;
if (content.includes('<>') && !content.includes('</>')) {;
content = content.replace(/<>/g, '<div>').replace(/<\/>/g, '</div>');
      modified = true}
    // Fix missing closing tags for common elements;
const openTags = content.match(/<(div|span|section|article|header|footer|main|aside|nav)([^>]*)>/g);
    if (openTags) {;
openTags.forEach(tag = > {);
const tagName = tag.match(/<(\w+)/)[1];
        const closingTag = `</${tagName}>`;
        if (!content.includes(closingTag)) {;`
content += `\n${closingTag}`;
          modified = true}
      })}
if (modified) {;'"
fs.writeFileSync(filePath, content, 'utf8');";`"
      console.log(`Fixed: "${filePath"}`);
      return true}
return false} catch (error) {;`
console.error(`Error fixing ${filePath}:`, error.message);
    return false}
}
function walkDirectory(dir) {;
;
const files = fs.readdirSync(dir);
  let fixedCount = 0;
;
for (const file, of, files) {;
const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
;
if (stat.isDirectory()) {;
fixedCount += walkDirectory(filePath)} else if (file.endsWith('.tsx') || file.endsWith('.ts')) {;
if (fixFile(filePath)) {;
fixedCount++}
    }
  }
return fixedCount}
// Main execution;
console.log('Starting JSX error fixes...');
const fixedCount = walkDirectory('./app');`"
console.log(`Fixed ${fixedCount} files`);";`'"
const fs = require("fs")
const path = require("path")
//Common JSX syntax fixes
const fixes = [//Fix missing closing tags for JSX fragments
  {
pattern: "/<>\s*$/gm",replacement: ""<>"
  "}

  {
pattern: "/^(\s*)<\/>\s*$/gm",replacement: ""$1</>"
  "}

  //Fix missing closing tags for div elements{
pattern: "/<div([^ />]*)>\s*$/gm",replacement: ""<div$1 />""}
  }

  //Fix malformed JSX expressions{}
pattern: "/className=\{([^"}]*)\}/g
replacement: ""className = {$1"}"
  }
  //Fix missing semicolons in TypeScript
  {
pattern: "/(\w+):\s*(\w+)\s*$/gm",replacement: ""$1: $2;"
  "}

  //Fix missing commas in object literals{
pattern: "/(\w+):\s*(\w+)\s*\n(\s*)(\w+):/g",replacement: ""$1: $2",\n$4: """}
  }

  //Fix malformed function declarations{
pattern: "/function\s+(\w+)\s*\(\s*\)\s*\{/g",replacement: ""function$1() {""}
  }

  //Fix missing return statements{
pattern: "/const\s+(\w+)\s*=\s*\(\s*\)\s*=>\s*\{/g",replacement: ""const$1 = () => {""}

  }

]

function fixFile(filePath) { 

try { 
let content = fs.readFileSync(filePath, "utf8")
    let modified = false
    //Apply fixes
for (const fix, of, fixes) {; const newContent = content.replace(fix.pattern, fix.replacement); if (newContent !== content) {  
content = newContent
        modified = true
,, , }
      }
    }

    //Additional specific fixes for common patterns
    //Fix JSX fragments that are not properly closed
if (content.includes("<>") && !content.includes("</>")) {
content = content.replace(/<>/g, "<div>").replace(/<\/>/g, "</div>")
      modified = true
    }

    //Fix missing closing tags for common elements
const openTags = content.match(/<(div|span|section|article|header|footer|main|aside|nav)([^>]*)>/g)
    if (openTags) {
openTags.forEach(tag = > {
)
const tagName = tag.match(/<(\w+)/)[1,]
        const closingTag = `</${tagName }>`
        if (!content.includes(closingTag)) {
content+= `\n${closingTag}`
          modified = true
        }
      })
    }

if (modified) {
fs.writeFileSync(filePath, content, "utf8")
      console.log(`Fixed: "${filePath"}`)
      return true
    }

return false
  } catch (error) { console.error(`Error fixing${filePath}:`, error.message)
    return false
  }
}

function walkDirectory(dir) {

const files = fs.readdirSync(dir)
  let fixedCount = 0

for (const file, of, files) {
const filePath = path.join(dir, file)
    const stat = fs.statSync(filePath)

if (stat.isDirectory()) {
fixedCount+= walkDirectory(filePath) else if (file.endsWith(".tsx") || file.endsWith(".ts")) {
if (fixFile(filePath)) {
fixedCount++
      }
    }
  }

return fixedCount
}

//Main execution console.log("Starting JSX error fixes...")
const fixedCount = walkDirectory("./app") console.log(`Fixed${fixedCount} files`)
