#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
// Final targeted fixes for remaining syntax errors;
const fixes = [
  // Fix missing semicolons in import statements;
  {]
    pattern: /import\s*{\s*([^}]+)\s*}\s*from\s*([^]+)\s*$/gm,
    replacement: import { $1 } from \'$2\';
  },
  
  // Fix malformed import statements;
  {
    pattern: /import\s*{\s*([^}]+)\s*}\s*from\s*([^]+)\s*export\s*default\s*function/g,
    replacement: import { $1 } from \'$2\';\n\nexport default function
  },
  
  // Fix missing semicolons after import statements;
  {
    pattern: /import\s+([^]+)\s*$/gm,
    replacement: import $1;
  },
  {
    pattern: /export\s+([^]+)\s*$/gm,
    replacement: export $1;
  },
  {
    pattern: /const\s+([^=]+)\s*=\s*([^;]+)\s*$/gm,
    replacement: const $1 = $2;
  },
  {
    pattern: /function\s+([^(]+)\s*\([^)]*\)\s*{\s*$/gm,
    replacement: function $1() {\n
  },
  {
    pattern: /const\s+([^=]+)\s*=\s*\([^)]*\)\s*=>\s*([^;]+)\s*$/gm,
    replacement: const $1 = () => $2;
  },
  
  // Fix missing semicolons in object properties;
  {
    pattern: /(\w+):\s*([^}]+)\s*$/gm,
    replacement: $1: $2,
  },
  {
    pattern: /(\w+)\s*$/gm,
    replacement: $1,
  },
  {
    pattern: /return\s+([^;]+)\s*$/gm,
    replacement: return $1;
  },
  {
    pattern: /if\s*\([^)]+\)\s*{\s*$/gm,
    replacement: if (condition) {\n
  },
  {
    pattern: /for\s*\([^)]+\)\s*{\s*$/gm,
    replacement: for (let i = 0; i < length; i++) {\n
  },
  // Fix missing semicolons in while loops;
  {
    pattern: /while\s*\([^)]+\)\s*{\s*$/gm,
    replacement: while (condition) {\n
  },
  // Fix missing semicolons in switch statements;
  {
    pattern: /switch\s*\([^)]+\)\s*{\s*$/gm,
    replacement: switch (value) {\n
  },
  // Fix missing semicolons in try-catch blocks;
  {
    pattern: /try\s*{\s*$/gm,
    replacement: try {\n
  },
  // Fix missing semicolons in catch blocks;
  {
    pattern: /catch\s*\([^)]+\)\s*{\s*$/gm,
    replacement: catch (error) {\n
  },
  // Fix missing semicolons in finally blocks;
  {
    pattern: /finally\s*{\s*$/gm,
    replacement: finally {\n
  },
  // Fix missing semicolons in class methods;
  {
    pattern: /(\w+)\s*\([^)]*\)\s*{\s*$/gm,
    replacement: $1() {\n
  },
  // Fix missing semicolons in class properties;
  {
    pattern: /(\w+)\s*:\s*([^;]+)\s*$/gm,
    replacement: $1: $2;
  },
  // Fix missing semicolons in interface properties;
  {
    pattern: /(\w+)\s*:\s*([^;]+)\s*$/gm,
    replacement: $1: $2;
  },
  // Fix missing semicolons in type definitions;
  {
    pattern: /type\s+(\w+)\s*=\s*([^;]+)\s*$/gm,
    replacement: type $1 = $2;
  },
  // Fix missing semicolons in interface definitions;
  {
    pattern: /interface\s+(\w+)\s*{\s*$/gm,
    replacement: interface $1 {\n
  },
  // Fix missing semicolons in enum definitions;
  {
    pattern: /enum\s+(\w+)\s*{\s*$/gm,
    replacement: enum $1 {\n
  },
  // Fix missing semicolons in namespace definitions;
  {
    pattern: /namespace\s+(\w+)\s*{\s*$/gm,
    replacement: namespace $1 {\n
  },
  // Fix missing semicolons in module definitions;
  {
    pattern: /module\s+(\w+)\s*{\s*$/gm,
    replacement: module $1 {\n
  },
  // Fix missing semicolons in declare statements;
  {
    pattern: /declare\s+([^;]+)\s*$/gm,
    replacement: declare $1;
  },
  // Fix missing semicolons in export statements;
  {
    pattern: /export\s+([^;]+)\s*$/gm,
    replacement: export $1;
  },
  // Fix missing semicolons in import statements;
  {
    pattern: /import\s+([^;]+)\s*$/gm,
    replacement: import $1;
  }
// Final targeted fixes for remaining syntax errors;
const fixes = [// Fix missing semicolons in import statements;
  {]
    "pattern": /import\s*{\s*([^}]+)\s*}\s*from\s*([^]+)\s*$/gm,
    "replacement": import { $1 } from \'$2\';
  },
  
  // Fix malformed import statements;
  {
    "pattern": /import\s*{\s*([^}]+)\s*}\s*from\s*([^]+)\s*export\s*default\s*function/g,
    "replacement": import { $1 } from \'$2\';\n\nexport default function
  },
  
  // Fix missing semicolons after import statements;
  {
    "pattern": /import\s+([^]+)\s*$/gm,
    "replacement": import $1;
  },
  
  // Fix unterminated string literals;
  {
    "pattern": /([^]*)\s*$/gm,
    "replacement": \'$1\';
  },
  
  // Fix malformed function declarations;
  {
    "pattern": /export\s*default\s*function\s*(\w+)\s*\(\s*\)\s*{\s*$/gm,
    "replacement": export default function $1() {\n  return (
  },
  
  // Fix missing closing brackets and parentheses;
  {
    "pattern": /return\s*\(\s*<div[^>]*>\s*$/gm,"
</div>"
    "replacement": return (\n    <div className="min-h-screen bg-white">
</div>'
    "pattern": /return\s*\(\s*<div";"/g,
    "replacement": return (\n    <div className="min-h-screen bg-white">
</div>)
    "pattern": /<\/div>\s*\)\s*}\s*$/gm,
    "replacement":     </div>\n  );\n}
    "pattern": /return\s*\(\s*<div[^>]*>\s*$/gm,"
</div>"
    "replacement": return (\n    <div className="min-h-screen bg-white">
</div>'
    "pattern": /return\s*\(\s*<div";"/g,
    "replacement": return (\n    <div className="min-h-screen bg-white">
</div>)
    "pattern": /<\/div>\s*\)\s*}\s*$/gm,
    "replacement":     </div>\n  );\n}
#!/usr/bin/env node/usr/bin/env nodeconst fs = require("fs");"const path = require("path");/ Final targeted fixes for remaining syntax errorsconst fixes = [/ Fix missing semicolons in import statements {" pattern: /import\s*{\s*([^}]+)\s*}\s*from\s*"([^"]+)"\s*$/gm, replacement: "import { $1 } from \"$2\";" }, / Fix malformed import statements { pattern: /import\s*{\s*([^}]+)\s*}\s*from\s*"([^"]+)"\s*export\s*default\s*function/g, replacement: "import { $1 } from \"$2\";\n\nexport default function" }, / Fix missing semicolons after import statements {" pattern: /import\s+([^]+)\s*$/gm, replacement: "import $1;" }, / Fix unterminated string literals { pattern: /"([^"]*)\s*$/gm, replacement: "\"$1\";" }, / Fix malformed function declarations {" pattern: /export\s*default\s*function\s*(\w+)\s*\(\s*\)\s*{\s*$/gm, replacement: "export default function $1() {\n return (" }, / Fix missing closing brackets and parentheses {" pattern: /return\s*\(\s*<div[^>]*>\s*$/gm, replacement: "return (\n <div className="min-h-screen bg-white">" }, / Fix malformed JSX attributes {" pattern: /className="([^"]*);\s*"/g, replacement: "className="$1 }, / Fix missing semicolons in object properties { pattern: /(\w+):\s*"([^"]*)",\s*;/g, replacement: "$1: \"$2\"," }, / Fix malformed return statements {" pattern: /return\s*\(\s*<div";"/g, replacement: "return (\n <div className="min-h-screen bg-white">" }, / Fix duplicated content (remove duplicate lines) {" pattern: /^(.*)\n\1$/gm, replacement: "$1" }, / Fix missing closing brackets in arrays {" pattern: /(\[.*?);\s*\]\s*},/g, replacement: "$1\n ]\n}," }, / Fix malformed JSX closing tags {" pattern: /<\/div>\s*\)\s*}\s*$/gm, replacement: " </div>\n );\n}" }];function fixFile(filePath) { if (!fs.existsSync(filePath)) {" console.log(` File not found: ${filePath}); return; }" let content = fs.readFileSync(filePath, "utf8"); let modified = false; fixes.forEach(fix => { const newContent = content.replace(fix.pattern, fix.replacement); if (newContent !== content) { content = newContent; modified = true} }); if (modified) {" fs.writeFileSync(filePath, content, "utf8");"` console.log(`Fixed: ${filePath}); return true} } catch (error) {` console.error(`Error fixing ${filePath}:`, error.message)} return false}function walkDirectory(dir) { let fixedCount = 0; try { const files = fs.readdirSync(dir); for (const file of files) { const filePath = path.join(dir, file); const stat = fs.statSync(filePath); if (stat.isDirectory()) {" fixedCount += walkDirectory(filePath)} else if (file.endsWith(".tsx") | file.endsWith(".ts") | file.endsWith(".jsx") | file.endsWith(".js")) { if (fixFile(filePath)) { fixedCount++} } } } catch (error) {` console.error(`Error reading directory ${dir}:`, error.message)} return fixedCount}"console.log("\n Summary: ");`console.log(` Files processed: ${filesToFix.length});"`console.log(` Total fixes applied: ${totalFixes});if (totalFixes > 0) {" console.log("\n Final syntax error fixing completed!");} else {" console.log("\n No syntax errors found to fix.");}`"`
    "replacement": return (\n    <div className="min-h-screen bg-white")
    "replacement": className="$1"
    "pattern"
    "replacement"
    "replacement": return (\n    <div className="min-h-screen bg-white")
    "replacement"
    "replacement"
    "replacement"
    "replacement
    return false;
  } catch (error) {
    console.error(`❌ Error fixing ${filePath}: ${error.message});
    return false;
  }
}

function findFiles(dir, extensions) {
  const files = [];
  
  function traverse(currentDir) {
    const items = fs.readdirSync(currentDir);
    
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        // Skip node_modules and other directories;"
        if (![node_modules,.git,.next,dist,build].includes(item)) {
          traverse(fullPath);
        }
      } else if (stat.isFile()) {
        const ext = path.extname(item);
        if (extensions.includes(ext)) {
          files.push(fullPath);
        }
      }
    }
  }
  
  traverse(dir);
  return files;
}

function main() {
  console.log('🔧 Starting final syntax fixes...);
  const extensions = [.ts,.tsx,.js,.jsx,.cjs,.mjs];
  const files = findFiles(process.cwd(), extensions);
  
  let fixedCount = 0;
  
  for (const file of files) {
    if (fixFile(file)) {
      fixedCount++;
    }
  }
  
  console.log(`✅ Fixed syntax in ${fixedCount} files`);
  console.log('🎉 Final syntax fixes completed!);
}

if (require.main === module) {
  main();
}

module.exports = { fixFile, findFiles };
    "replacement"
    "replacement"
    "replacement"