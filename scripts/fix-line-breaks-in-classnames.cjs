const fs = require('fs');
const path = require('path');
const filesToFix = [
  '/workspace/pages/about.tsx',
  '/workspace/pages/ai-services.tsx',
  '/workspace/pages/index.tsx',
  '/workspace/pages/it-services.tsx',
  '/workspace/pages/micro-saas.tsx'
];
let totalFixes = 0;
filesToFix.forEach(filePath => {
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    // Fix line breaks in className attributes - more comprehensive approach
    content = content.replace(/className="([^"]*)\n\s*([^"]*)"/g, (match, part1, part2) => {
      return `className="${part1.trim()} ${part2.trim()}"`;
    });
    // Fix missing closing quotes in className
    content = content.replace(/className="([^"]*)\n\s*([^"]*)"\s*>/g, (match, part1, part2) => {
      return `className="${part1.trim()} ${part2.trim()}">`;
    });
    // Fix specific patterns that are causing issues
    content = content.replace(/className="([^"]*)\n\s*([^"]*)"\s*>/g, (match, part1, part2) => {
      return `className="${part1.trim()} ${part2.trim()}">`;
    });
    // Fix missing closing quotes in h1 tags
    content = content.replace(/<h1 className="([^"]*)\n\s*([^"]*)\s*>/g, (match, part1, part2) => {
      return `<h1 className="${part1.trim()} ${part2.trim()}">`;
    });
    if (content !== fs.readFileSync(filePath, 'utf8')) {
      fs.writeFileSync(filePath, content);
      }`);
      totalFixes++;
      modified = true;
    }
  }
});
const fs = require("fs");"const path = require("path");"console.log(" Fixing line breaks in className attributes.");const filesToFix = [" "/workspace/pages/about.tsx"," "/workspace/pages/ai-services.tsx"," "/workspace/pages/index.tsx"," "/workspace/pages/it-services.tsx"," "/workspace/pages/micro-saas.tsx"];let totalFixes = 0;filesToFix.forEach(filePath => { if (fs.existsSync(filePath)) {" let content = fs.readFileSync(filePath, "utf8"); let modified = false; / Fix line breaks in className attributes - more comprehensive approach content = content.replace(/className="([^"]*)\n\s*([^"]*)"/g, (match, part1, part2) => {" return `className="${part1.trim()} ${part2.trim()}"`; }); / Fix missing closing quotes in className" content = content.replace(/className="([^"]*)\n\s*([^"]*)"\s*>/g, (match, part1, part2) => {"` return `className="${part1.trim()} ${part2.trim()}">`; }); / Fix specific patterns that are causing issues" content = content.replace(/className="([^"]*)\n\s*([^"]*)"\s*>/g, (match, part1, part2) => {"` return `className="${part1.trim()} ${part2.trim()}">`; }); / Fix missing closing quotes in h1 tags" content = content.replace(/<h1 className="([^"]*)\n\s*([^"]*)\s*>/g, (match, part1, part2) => {"` return `<h1 className="${part1.trim()} ${part2.trim()}">`; }); " if (content !== fs.readFileSync(filePath, "utf8")) { fs.writeFileSync(filePath, content);"` console.log(` Fixed: ${path.relative("/workspace", filePath)}`); totalFixes++; modified = true; } }});`console.log(`\n Summary:`);`console.log(` Files processed: ${filesToFix.length}`);`console.log(` Files fixed: ${totalFixes}`);"console.log(" Line break fixes completed!");""`"`
const fs = require('fs')
const path = require('path')
console.log(' Fixing line breaks in className attributes...')
  '/workspace/pages/about.tsx'
  '/workspace/pages/ai-services.tsx'
  '/workspace/pages/index.tsx'
  '/workspace/pages/it-services.tsx'
  '/workspace/pages/micro-saas.tsx'
    let content = fs.readFileSync(filePath, 'utf8')
    if (content !== fs.readFileSync(filePath, 'utf8')
// console.log(` Fixed: ${path.relative('/workspace'`})
console.log('✨ Line break fixes completed!')
console.log('✨ Line break fixes completed!')
