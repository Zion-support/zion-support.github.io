<<<<<<< HEAD
<<<<<<< HEAD
#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
<<<<<<< HEAD

=======
<<<<<<< HEAD
<<<<<<< HEAD

=======
=======
=======
>>>>>>> 6f37999110c5d0bd56901bd8a1becc376a5bbb23
=======
>>>>>>> 43b43566c4674ad4aea00a6e4be20bc929909b52
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
// Final targeted fixes for remaining syntax errors
const fixes = [// Fix missing semicolons in import statements
  {
    "pattern": /import\s*{\s*([^}]+)\s*}\s*from\s*'([^']+)'\s*$/gm,
    "replacement": 'import { $1 } from \'$2\';'
  },
<<<<<<< HEAD
=======
  
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
  // Fix malformed import statements
  {
    "pattern": /import\s*{\s*([^}]+)\s*}\s*from\s*'([^']+)'\s*export\s*default\s*function/g,
    "replacement": 'import { $1 } from \'$2\';\n\nexport default function'
  },
<<<<<<< HEAD
=======
  
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
  // Fix missing semicolons after import statements
  {
    "pattern": /import\s+([^]+)\s*$/gm,
    "replacement": 'import $1;'
  },
<<<<<<< HEAD
=======
  
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
  // Fix unterminated string literals
  {
    "pattern": /'([^']*)\s*$/gm,
    "replacement": '\'$1\';'
  },
<<<<<<< HEAD
=======
  
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
  // Fix malformed function declarations
  {
    "pattern": /export\s*default\s*function\s*(\w+)\s*\(\s*\)\s*{\s*$/gm,
    "replacement": 'export default function $1() {\n  return ('
  },
<<<<<<< HEAD
=======
  
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
  // Fix missing closing brackets and parentheses
  {
    "pattern": /return\s*\(\s*<div[^>]*>\s*$/gm,
    "replacement": 'return (\n    <div className="min-h-screen bg-white">'
  },
<<<<<<< HEAD
=======
  
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
  // Fix malformed JSX attributes
  {
    "pattern": /className="([^"]*);\s*"/g,
    "replacement": 'className="$1"'
  },
<<<<<<< HEAD
=======
  
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
  // Fix missing semicolons in object properties
  {
    "pattern": /(\w+):\s*'([^']*)',\s*;/g,
    "replacement": '$1: \'$2\','
  },
<<<<<<< HEAD
=======
  
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
  // Fix malformed return statements
  {
    "pattern": /return\s*\(\s*<div";"/g,
    "replacement": 'return (\n    <div className="min-h-screen bg-white">'
  },
<<<<<<< HEAD
=======
  
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
  // Fix duplicated content (remove duplicate lines)
  {
    "pattern": /^(.*)\n\1$/gm,
    "replacement": '$1'
  },
<<<<<<< HEAD
=======
  
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
  // Fix missing closing brackets in arrays
  {
    "pattern": /(\[.*?);\s*\]\s*},/g,
    "replacement": '$1\n  ]\n},'
  },
<<<<<<< HEAD
=======
  
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
  // Fix malformed JSX closing tags
  {
    "pattern": /<\/div>\s*\)\s*}\s*$/gm,
    "replacement": '    </div>\n  );\n}'
  }
<<<<<<< HEAD
>>>>>>> cursor/add-new-services-and-deploy-updates-0462
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-40de
=======
<<<<<<< HEAD
>>>>>>> c017c2ce201787a72821f9d4b2713514bd3cdb3a
=======
>>>>>>> 6f37999110c5d0bd56901bd8a1becc376a5bbb23
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
console.log('🔧 Fixing final syntax errors...');

// Fix specific files with known issues
const filesToFix = [
    'src/components/SEO.tsx',
    'src/components/talent/TalentCard.jsx',
    'src/components/ui/card.tsx',
    'src/components/ui/textarea.tsx',
    'src/components/ui/use-toast.ts'
>>>>>>> d200903062be89cd2962b930112f6c17412cdf5b
=======
];

function fixFile(filePath) {
    if (!fs.existsSync(filePath)) {
<<<<<<< HEAD
<<<<<<< HEAD
        console.log(`File not found: ${filePath}`);
        return 0;
=======
<<<<<<< HEAD
        console.log(`File not found: ${filePath}`);
        return 0;
=======
        return;
>>>>>>> cursor/add-new-services-and-deploy-updates-0462
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-40de
=======
<<<<<<< HEAD
<<<<<<< HEAD
        console.log(`File not found: ${filePath}`);
        return 0;
=======
=======
        
>>>>>>> 43b43566c4674ad4aea00a6e4be20bc929909b52
        return;
>>>>>>> 6f37999110c5d0bd56901bd8a1becc376a5bbb23
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
    }

    let content = fs.readFileSync(filePath, 'utf8');
<<<<<<< HEAD
    let fixes = 0;

=======
<<<<<<< HEAD
<<<<<<< HEAD
    let fixes = 0;

=======
    let modified = false;
=======
    let modified = false;
    
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
    fixes.forEach(fix => {
      const newContent = content.replace(fix.pattern, fix.replacement);
      if (newContent !== content) {
        content = newContent;
        modified = true}
    });
<<<<<<< HEAD
    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
=======
    
    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
      return true}
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message)}
  return false}
<<<<<<< HEAD
function walkDirectory(dir) {
  let fixedCount = 0;
  try {
    const files = fs.readdirSync(dir);
    for (const file of files) {
      const filePath = path.join(dir, file);
      const stat = fs.statSync(filePath);
=======

function walkDirectory(dir) {
  let fixedCount = 0;
  
  try {
    const files = fs.readdirSync(dir);
    
    for (const file of files) {
      const filePath = path.join(dir, file);
      const stat = fs.statSync(filePath);
      
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
      if (stat.isDirectory()) {
        fixedCount += walkDirectory(filePath)} else if (file.endsWith('.tsx') || file.endsWith('.ts') || file.endsWith('.jsx') || file.endsWith('.js')) {
        if (fixFile(filePath)) {
          fixedCount++}
      }
    }
  } catch (error) {
    console.error(`Error reading directory ${dir}:`, error.message)}
<<<<<<< HEAD
  return fixedCount}
    let fixes = 0;
>>>>>>> cursor/add-new-services-and-deploy-updates-0462
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-40de
=======
  
  return fixedCount}
    let fixes = 0;
<<<<<<< HEAD
>>>>>>> 6f37999110c5d0bd56901bd8a1becc376a5bbb23
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
    // Fix textarea.tsx
    if (filePath.includes('textarea.tsx')) {
        // Fix malformed className
        content = content.replace(/className=\{`flex min-h-\[80px\] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder: tex t-muted-foreground focus-visible: outlin e-none focus-visible: rin g-2 focus-visible: rin g-ring focus-visible: rin g-offset-2 disabled: curso r-not-allowed disabled: opacit y-50 \$\{className\}`\}/g, 'className={`flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${className}`}');
    }

    // Fix use-toast.ts
    if (filePath.includes('use-toast.ts')) {
        // Fix malformed interface
        content = content.replace(/position\?\: "top-right" \| "top-center" \| "top-left" \| "bottom-right" \| "bottom-center" \| "bottom-left"\}\s*$/g, 'position?: "top-right" | "top-center" | "top-left" | "bottom-right" | "bottom-center" | "bottom-left";\n}');
        
        // Fix malformed function
        content = content.replace(/const showToast = \(message: string, options\?\: ToastOptions\)\s*=> \{\s*return toast\(message, options\)\s*return \{ showToast \};\s*\};\s*$/g, 'const showToast = (message: string, options?: ToastOptions) => {\n    return toast(message, options);\n  };\n\n  return { showToast };\n}');
    }

    // General fixes
    content = content.replace(/"""/g, '');
    content = content.replace(/""""/g, '');
    content = content.replace(/'"`/g, '');
    content = content.replace(/`"/g, '');
    content = content.replace(/`\s*$/gm, '');
    content = content.replace(/^\s*`\s*$/gm, '');

    // Count fixes
    const originalContent = fs.readFileSync(filePath, 'utf8');
    if (content !== originalContent) {
        fixes = (originalContent.match(/"""/g) || []).length + 
                (originalContent.match(/""""/g) || []).length +
                (originalContent.match(/'"`/g) || []).length +
                (originalContent.match(/`"/g) || []).length;
    }

    if (fixes > 0) {
        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`✅ Fixed ${fixes} issues in ${filePath}`);
    } else {
        console.log(`✨ No issues found in ${filePath}`);
    }

    return fixes;
}

// Process all files
let totalFixes = 0;
filesToFix.forEach(file => {
    totalFixes += fixFile(file);
});
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-40de
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5

=======
>>>>>>> 6f37999110c5d0bd56901bd8a1becc376a5bbb23
=======





>>>>>>> 43b43566c4674ad4aea00a6e4be20bc929909b52
console.log(`\n📊 Summary:`);
console.log(`   Files processed: ${filesToFix.length}`);
console.log(`   Total fixes applied: ${totalFixes}`);

if (totalFixes > 0) {
<<<<<<< HEAD
    console.log('\n✅ Final syntax error fixing completed!');
} else {
    console.log('\n✨ No syntax errors found to fix.');
<<<<<<< HEAD
<<<<<<< HEAD
}
=======
}
=======
console.log(`\n📊 Summary:`);
console.log(`   Files processed: ${filesToFix.length}`);
console.log(`   Total fixes applied: ${totalFixes}`);
if (totalFixes > 0) {
} else {
}
#!/usr/bin/env node/usr/bin/env nodeconst fs = require("fs");"const path = require("path");/ Final targeted fixes for remaining syntax errorsconst fixes = [/ Fix missing semicolons in import statements {" pattern: /import\s*{\s*([^}]+)\s*}\s*from\s*"([^"]+)"\s*$/gm,"" replacement: "import { $1 } from \"$2\";" }, / Fix malformed import statements {"" pattern: /import\s*{\s*([^}]+)\s*}\s*from\s*"([^"]+)"\s*export\s*default\s*function/g,"" replacement: "import { $1 } from \"$2\";\n\nexport default function" }, / Fix missing semicolons after import statements {" pattern: /import\s+([^]+)\s*$/gm,"" replacement: "import $1;" }, / Fix unterminated string literals {"" pattern: /"([^"]*)\s*$/gm,"" replacement: "\"$1\";" }, / Fix malformed function declarations {" pattern: /export\s*default\s*function\s*(\w+)\s*\(\s*\)\s*{\s*$/gm,"" replacement: "export default function $1() {\n return (" }, / Fix missing closing brackets and parentheses {" pattern: /return\s*\(\s*<div[^>]*>\s*$/gm,"" replacement: "return (\n <div className="min-h-screen bg-white">" }, / Fix malformed JSX attributes {" pattern: /className="([^"]*);\s*"/g,"" replacement: "className="$1"" }, / Fix missing semicolons in object properties {"" pattern: /(\w+):\s*"([^"]*)",\s*;/g,"" replacement: "$1: \"$2\"," }, / Fix malformed return statements {" pattern: /return\s*\(\s*<div";"/g,"" replacement: "return (\n <div className="min-h-screen bg-white">" }, / Fix duplicated content (remove duplicate lines) {" pattern: /^(.*)\n\1$/gm,"" replacement: "$1" }, / Fix missing closing brackets in arrays {" pattern: /(\[.*?);\s*\]\s*},/g,"" replacement: "$1\n ]\n}," }, / Fix malformed JSX closing tags {" pattern: /<\/div>\s*\)\s*}\s*$/gm,"" replacement: " </div>\n );\n}" }];function fixFile(filePath) { if (!fs.existsSync(filePath)) {" console.log(` File not found: ${filePath}`); return; }" let content = fs.readFileSync(filePath, "utf8"); let modified = false; fixes.forEach(fix => { const newContent = content.replace(fix.pattern, fix.replacement); if (newContent !== content) { content = newContent; modified = true} }); if (modified) {" fs.writeFileSync(filePath, content, "utf8");"` console.log(`Fixed: ${filePath}`); return true} } catch (error) {` console.error(`Error fixing ${filePath}:`, error.message)} return false}function walkDirectory(dir) { let fixedCount = 0; try { const files = fs.readdirSync(dir); for (const file of files) { const filePath = path.join(dir, file); const stat = fs.statSync(filePath); if (stat.isDirectory()) {" fixedCount += walkDirectory(filePath)} else if (file.endsWith(".tsx") | file.endsWith(".ts") | file.endsWith(".jsx") | file.endsWith(".js")) { if (fixFile(filePath)) { fixedCount++} } } } catch (error) {` console.error(`Error reading directory ${dir}:`, error.message)} return fixedCount}"console.log("\n Summary: ");`console.log(` Files processed: ${filesToFix.length}`);"`console.log(` Total fixes applied: ${totalFixes}`);if (totalFixes > 0) {" console.log("\n Final syntax error fixing completed!");} else {" console.log("\n No syntax errors found to fix.");}""`"`
=======
}
=======
        
        return;
    }

    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    fixes.forEach(fix => {
      const newContent = content.replace(fix.pattern, fix.replacement);
      if (newContent !== content) {
        content = newContent;
        modified = true}
    });
    
    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      
      return true}
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message)}
  return false}

function walkDirectory(dir) {
  let fixedCount = 0;
  
  try {
    const files = fs.readdirSync(dir);
    
    for (const file of files) {
      const filePath = path.join(dir, file);
      const stat = fs.statSync(filePath);
      
      if (stat.isDirectory()) {
        fixedCount += walkDirectory(filePath)} else if (file.endsWith('.tsx') || file.endsWith('.ts') || file.endsWith('.jsx') || file.endsWith('.js')) {
        if (fixFile(filePath)) {
          fixedCount++}
      }
    }
  } catch (error) {
    console.error(`Error reading directory ${dir}:`, error.message)}
  
  return fixedCount}
    let fixes = 0;
=======





if (totalFixes > 0) {
    
} else {
    
}
=======
=======
    
} else {
    
}
>>>>>>> 43b43566c4674ad4aea00a6e4be20bc929909b52
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
#!/usr/bin/env node;
const fs = require('fs')
const path = require('path')
    "pattern"
    "replacement"
    "pattern"
    "replacement"
    "replacement": 'return (\n    <div className="min-h-screen bg-white")
    "replacement": 'className="$1"
    "pattern"
    "replacement"
    "replacement": 'return (\n    <div className="min-h-screen bg-white")
    "replacement"
    "replacement"
<<<<<<< HEAD
    "replacement"
>>>>>>> cursor/add-new-services-and-deploy-updates-0462
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-40de
=======
<<<<<<< HEAD
<<<<<<< HEAD
    "replacement"
>>>>>>> c017c2ce201787a72821f9d4b2713514bd3cdb3a
=======
    "replacement"
>>>>>>> 6f37999110c5d0bd56901bd8a1becc376a5bbb23
=======
    "replacement"
>>>>>>> 43b43566c4674ad4aea00a6e4be20bc929909b52
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
