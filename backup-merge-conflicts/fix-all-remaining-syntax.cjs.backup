<<<<<<< HEAD
const fs = require("fs");"const path = require("path");function fixSyntaxErrors(filePath) { try {" let content = fs.readFileSync(filePath, "utf8"); let modified = false; / Fix common syntax errors const fixes = [/ Fix malformed style objects { pattern: /style=\{\{\s*([^}]+)\s*\}\}/g, replacement: (match, styleContent) => { / Fix missing commas in style objects"" const fixed = styleContent.replace(/(\w+):\s*([^}]+)\s+(\w+):/g, "$1: $2,\n $3: "); return `style={{\n ${fixed}\n }}`}}, / Fix malformed variable names"" { pattern: /\bmaxWidth\b/g, replacement: "maxWidth" },"" { pattern: /\bfontWeight\b/g, replacement: "fontWeight" },"" { pattern: /\btextAlign\b/g, replacement: "textAlign" },"" { pattern: /\blineHeight\b/g, replacement: "lineHeight" },"" { pattern: /\bcolor\b/g, replacement: "color" }, / Fix malformed arrays"" { pattern: /const\s+(\w+)\s*=\s*\[\s*;\s*/g, replacement: "const $1 = [" },"" { pattern: /\[\s*,\s*/g, replacement: "[" },"" { pattern: /,\s*\]/g, replacement: "]" }, / Fix malformed objects"" { pattern: /\{\s*,/g, replacement: "{" },"" { pattern: /,\s*\}/g, replacement: "}" }, / Fix malformed function parameters"" { pattern: /\(\s*,\s*/g, replacement: "(" },"" { pattern: /,\s*\)/g, replacement: ")" }, / Fix malformed template literals"" { pattern: /"\s*;\s*"/g, replacement: """" }, / Fix malformed JSX"" { pattern: /<\s*\/\s*>\s*;/g, replacement: "</>" }, / Fix malformed return statements"" { pattern: /return\s*\(\s*;\s*\)/g, replacement: "return null" }, / Fix malformed string concatenation"" { pattern: /"\s*;\s*"/g, replacement: """" },"" { pattern: /"\s*;\s*"/g, replacement: """" }, / Fix specific patterns"" { pattern: /padding:\s*maxWidth,\s*1200,\s*margin: \s*"0 auto"/g, replacement: "padding: "20px", maxWidth: 1200, margin: "0 auto"" },"" { pattern: /fontSize:\s*fontWeight,\s*700,\s*marginBottom: \s*textAlign,\s*"center"/g, replacement: "fontSize: "2rem", fontWeight: 700, marginBottom: "20px", textAlign: "center"" },"" { pattern: /fontSize:\s*lineHeight,\s*1\.6,\s*textAlign: \s*color,\s*"#ccc"/g, replacement: "fontSize: "1.1rem", lineHeight: 1.6, textAlign: "center", color: "#ccc"" }, ]; fixes.forEach(fix => { if (fix.pattern.test(content)) { content = content.replace(fix.pattern, fix.replacement); modified = true} }); if (modified) {" fs.writeFileSync(filePath, content, "utf8");"` console.log(`Fixed syntax errors in: ${filePath}`); return true} return false} catch (error) {` console.error(`Error processing ${filePath}:`, error.message); return false}}/ Get all TypeScript/JavaScript files in pages directory"function getAllFiles(dir, extensions = [".ts", ".tsx", ".js", ".jsx"]) { let files = []; const items = fs.readdirSync(dir); for (const item of items) { const fullPath = path.join(dir, item); const stat = fs.statSync(fullPath); " if (stat.isDirectory() && !item.startsWith(".") && item !== "node_modules") { files = files.concat(getAllFiles(fullPath, extensions))} else if (extensions.some(ext => item.endsWith(ext))) { files.push(fullPath)} } return files}/ Main execution"const pagesFiles = getAllFiles("./pages");let fixedCount = 0;"console.log("Starting comprehensive syntax error fixes.");pagesFiles.forEach(file => { if (fixSyntaxErrors(file)) { fixedCount++}});`console.log(`Fixed syntax errors in ${fixedCount} files.`);'"`'"`
=======
const fs = require('fs');
const path = require('path');

function fixSyntaxErrors(filePath) {}
  try {}
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Fix common syntax errors;
    const fixes = [// Fix malformed style objects;]
      { "pattern": /style=\{\{\s*([^}]+)\s*\}\}/g, "replacement": (match, styleContent) => {}
        // Fix missing commas in style objects;
        const fixed = styleContent.replace(/(\w+):\s*([^}]+)\s+(\w+):/g, '$"1": $2,\n            $"3": ');
        return `style={{\n            ${fixed}\n          }}`}},`
      
      // Fix malformed variable names;
      { "pattern": /\bmaxWidth\b/g, "replacement": 'maxWidth' },
      { "pattern": /\bfontWeight\b/g, "replacement": 'fontWeight' },
      { "pattern": /\btextAlign\b/g, "replacement": 'textAlign' },
      { "pattern": /\blineHeight\b/g, "replacement": 'lineHeight' },
      { "pattern": /\bcolor\b/g, "replacement": 'color' },
      
      // Fix malformed arrays;
      { "pattern": /const\s+(\w+)\s*=\s*\[\s*;\s*/g, "replacement": 'const $1 = [' },]
      { "pattern": /\[\s*,\s*/g, "replacement": '[' },]
      { "pattern": /,\s*\]/g, "replacement": ']' },
      
      // Fix malformed objects;
      { "pattern": /\{\s*,/g, "replacement": '{' },
      { "pattern": /,\s*\}/g, "replacement": '}' },
      
      // Fix malformed function parameters;
      { "pattern": /\(\s*,\s*/g, "replacement": '(' },)
      { "pattern": /,\s*\)/g, "replacement": ')' },
      
      // Fix malformed template literals;
      { "pattern": /"\s*;\s*"/g, "replacement": '""' },
      
      // Fix malformed JSX;
      { "pattern": /<\s*\/\s*>\s*;/g, "replacement": '</>' },
      
      // Fix malformed return statements;
      { "pattern": /return\s*\(\s*;\s*\)/g, "replacement": 'return null' },
      
      // Fix malformed string concatenation;
      { "pattern": /"\s*;\s*"/g, "replacement": '""' },
      { "pattern": /'\s*;\s*'/g, "replacement": "''" },
      
      // Fix specific patterns;
      { "pattern": /padding:\s*maxWidth,\s*1200,\s*"margin": \s*'0 auto'/g, "replacement": "padding: '20px', "maxWidth": 1200, "margin": '0 auto'" },
      { "pattern": /fontSize:\s*fontWeight,\s*700,\s*"marginBottom": \s*textAlign,\s*'center'/g, "replacement": "fontSize: '2rem', "fontWeight": 700, "marginBottom": '20px', "textAlign": 'center'" },
      { "pattern": /fontSize:\s*lineHeight,\s*1\.6,\s*"textAlign": \s*color,\s*'#ccc'/g, "replacement": "fontSize: '1.1rem', "lineHeight": 1.6, "textAlign": 'center', "color": '#ccc'" },
    ];

    fixes.forEach(fix => {})
      if (fix.pattern.test(content)) {}
        content = content.replace(fix.pattern, fix.replacement);
        modified = true};
    }
});

    if (modified) {}
      fs.writeFileSync(filePath, content, 'utf8');
<<<<<<< HEAD
      
      return true}
    return false} catch (error) {
=======
      console.log(`Fixed syntax errors "in": ${filePath}`);
      return true};
    return false} catch (error) {}
>>>>>>> main
    console.error(`Error processing ${filePath}:`, error.message);
    return false};
};
// Get all TypeScript/JavaScript files in pages directory;
function getAllFiles(dir, extensions = ['.ts', '.tsx', '.js', '.jsx']) {}
  let files = [];
  const items = fs.readdirSync(dir);
  
  for (const item of items) {}
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {}
      files = files.concat(getAllFiles(fullPath, extensions))} else if (extensions.some(ext => item.endsWith(ext))) {}
      files.push(fullPath)};
  };
  return files};
// Main execution;
const pagesFiles = getAllFiles('./pages');
let fixedCount = 0;



pagesFiles.forEach(file => {})
  if (fixSyntaxErrors(file)) {}
    fixedCount++};
}
});

<<<<<<< HEAD
=======
console.log(`Fixed syntax errors in ${fixedCount} files.`);
>>>>>>> main
>>>>>>> main
