

<<<<<<< HEAD
<<<<<<< HEAD
=======
main

>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d
#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
<<<<<<< HEAD

<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d





<<<<<<< HEAD

main

>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-dbb7
// Final targeted fixes for remaining syntax errors
const fixes = [
  // Fix missing semicolons in import statements
  {
    pattern: /import\s*{\s*([^}]+)\s*}\s*from\s*'([^']+)'\s*$/gm,
    replacement: 'import { $1 } from \'$2\';'
  },

<<<<<<< HEAD
  
<<<<<<< HEAD
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d

=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-dbb7
  // Fix malformed import statements
  {
    pattern: /import\s*{\s*([^}]+)\s*}\s*from\s*'([^']+)'\s*export\s*default\s*function/g,
    replacement: 'import { $1 } from \'$2\';\n\nexport default function'
  },
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
  
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-dbb7
  // Fix missing semicolons after import statements
  {
    pattern: /import\s+([^]+)\s*$/gm,
    replacement: 'import $1;'
  },
<<<<<<< HEAD
<<<<<<< HEAD

  // Fix unterminated string literals

  // Fix unterminated string literals
=======
  
  // Fix missing semicolons after export statements

  // Fix missing semicolons after export statements

  // Fix unterminated string literals
main
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
=======

<<<<<<< HEAD
  


  // Fix unterminated string literals

  // Fix missing semicolons after export statements


  // Fix unterminated string literals

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d

=======
  // Fix unterminated string literals

  // Fix unterminated string literals

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-dbb7
  {
    pattern: /export\s+([^]+)\s*$/gm,
    replacement: 'export $1;'
  },
<<<<<<< HEAD
<<<<<<< HEAD

  // Fix malformed function declarations

  // Fix malformed function declarations
=======
  
  // Fix missing semicolons in variable declarations

  // Fix missing semicolons in variable declarations

  // Fix malformed function declarations
main
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
=======

<<<<<<< HEAD
  

  // Fix malformed function declarations

  // Fix missing semicolons in variable declarations


  // Fix malformed function declarations

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d

=======
  // Fix malformed function declarations

  // Fix malformed function declarations

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-dbb7
  {
    pattern: /const\s+([^=]+)\s*=\s*([^;]+)\s*$/gm,
    replacement: 'const $1 = $2;'
  },
<<<<<<< HEAD
<<<<<<< HEAD

  // Fix missing closing brackets and parentheses

  // Fix missing closing brackets and parentheses
=======
  
  // Fix missing semicolons in function declarations

  // Fix missing semicolons in function declarations

  // Fix missing closing brackets and parentheses
main
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
=======

<<<<<<< HEAD
  

  // Fix missing closing brackets and parentheses

  // Fix missing semicolons in function declarations


  // Fix missing closing brackets and parentheses

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d

=======
  // Fix missing closing brackets and parentheses

  // Fix missing closing brackets and parentheses

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-dbb7
  {
    pattern: /function\s+([^(]+)\s*\([^)]*\)\s*{\s*$/gm,
    replacement: 'function $1() {\n'
  },
<<<<<<< HEAD
<<<<<<< HEAD

  // Fix malformed JSX attributes

  // Fix malformed JSX attributes
=======
  
  // Fix missing semicolons in arrow functions

  // Fix missing semicolons in arrow functions

  // Fix malformed JSX attributes
main
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
=======

<<<<<<< HEAD
  

  // Fix malformed JSX attributes

  // Fix missing semicolons in arrow functions


  // Fix malformed JSX attributes

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d

=======
  // Fix malformed JSX attributes

  // Fix malformed JSX attributes

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-dbb7
  {
    pattern: /const\s+([^=]+)\s*=\s*\([^)]*\)\s*=>\s*([^;]+)\s*$/gm,
    replacement: 'const $1 = () => $2;'
  },

<<<<<<< HEAD
  
<<<<<<< HEAD
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d

=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-dbb7
  // Fix missing semicolons in object properties
  {
    pattern: /(\w+):\s*([^,}]+)\s*$/gm,
    replacement: '$1: $2,'
  },
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-dbb7

  // Fix malformed return statements

  // Fix malformed return statements
<<<<<<< HEAD
=======
  
=======
  // Fix malformed return statements

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d
  // Fix missing semicolons in array elements

  // Fix missing semicolons in array elements

<<<<<<< HEAD
  // Fix malformed return statements
main
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
=======

  // Fix malformed return statements

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-dbb7

  {
    pattern: /(\w+)\s*$/gm,
    replacement: '$1,'
  },
<<<<<<< HEAD
<<<<<<< HEAD

  // Fix duplicated content (remove duplicate lines)

  // Fix duplicated content (remove duplicate lines)
=======
  
  // Fix missing semicolons in return statements

  // Fix missing semicolons in return statements

  // Fix duplicated content (remove duplicate lines)
main
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
=======

<<<<<<< HEAD
  

  // Fix duplicated content (remove duplicate lines)

  // Fix missing semicolons in return statements


  // Fix duplicated content (remove duplicate lines)

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d

=======
  // Fix duplicated content (remove duplicate lines)

  // Fix duplicated content (remove duplicate lines)

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-dbb7
  {
    pattern: /return\s+([^;]+)\s*$/gm,
    replacement: 'return $1;'
  },
<<<<<<< HEAD
<<<<<<< HEAD

  // Fix missing closing brackets in arrays

  // Fix missing closing brackets in arrays
=======
  
  // Fix missing semicolons in if statements

  // Fix missing semicolons in if statements

  // Fix missing closing brackets in arrays
main
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
=======

<<<<<<< HEAD
  

  // Fix missing closing brackets in arrays

  // Fix missing semicolons in if statements


  // Fix missing closing brackets in arrays

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d

=======
  // Fix missing closing brackets in arrays

  // Fix missing closing brackets in arrays

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-dbb7
  {
    pattern: /if\s*\([^)]+\)\s*{\s*$/gm,
    replacement: 'if (condition) {\n'
  },
<<<<<<< HEAD
<<<<<<< HEAD

  // Fix malformed JSX closing tags

  // Fix malformed JSX closing tags
=======
  
  // Fix missing semicolons in for loops

  // Fix missing semicolons in for loops

  // Fix malformed JSX closing tags
main
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
=======

<<<<<<< HEAD
  

  // Fix malformed JSX closing tags

  // Fix missing semicolons in for loops


  // Fix malformed JSX closing tags

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d

=======
  // Fix malformed JSX closing tags

  // Fix malformed JSX closing tags

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-dbb7
  {
    pattern: /for\s*\([^)]+\)\s*{\s*$/gm,
    replacement: 'for (let i = 0; i < length; i++) {\n'
  },
  
  // Fix missing semicolons in while loops
  {
    pattern: /while\s*\([^)]+\)\s*{\s*$/gm,
    replacement: 'while (condition) {\n'
  },
  
  // Fix missing semicolons in switch statements
  {
    pattern: /switch\s*\([^)]+\)\s*{\s*$/gm,
    replacement: 'switch (value) {\n'
  },
  
  // Fix missing semicolons in try-catch blocks
  {
    pattern: /try\s*{\s*$/gm,
    replacement: 'try {\n'
  },
  
  // Fix missing semicolons in catch blocks
  {
    pattern: /catch\s*\([^)]+\)\s*{\s*$/gm,
    replacement: 'catch (error) {\n'
  },
  
  // Fix missing semicolons in finally blocks
  {
    pattern: /finally\s*{\s*$/gm,
    replacement: 'finally {\n'
  },
  
  // Fix missing semicolons in class methods
  {
    pattern: /(\w+)\s*\([^)]*\)\s*{\s*$/gm,
    replacement: '$1() {\n'
  },
  
  // Fix missing semicolons in class properties
  {
    pattern: /(\w+)\s*:\s*([^;]+)\s*$/gm,
    replacement: '$1: $2;'
  },
  
  // Fix missing semicolons in interface properties
  {
    pattern: /(\w+)\s*:\s*([^;]+)\s*$/gm,
    replacement: '$1: $2;'
  },
  
  // Fix missing semicolons in type definitions
  {
    pattern: /type\s+(\w+)\s*=\s*([^;]+)\s*$/gm,
    replacement: 'type $1 = $2;'
  },
  
  // Fix missing semicolons in interface definitions
  {
    pattern: /interface\s+(\w+)\s*{\s*$/gm,
    replacement: 'interface $1 {\n'
  },
  
  // Fix missing semicolons in enum definitions
  {
    pattern: /enum\s+(\w+)\s*{\s*$/gm,
    replacement: 'enum $1 {\n'
  },
  
  // Fix missing semicolons in namespace definitions
  {
    pattern: /namespace\s+(\w+)\s*{\s*$/gm,
    replacement: 'namespace $1 {\n'
  },
  
  // Fix missing semicolons in module definitions
  {
    pattern: /module\s+(\w+)\s*{\s*$/gm,
    replacement: 'module $1 {\n'
  },
  
  // Fix missing semicolons in declare statements
  {
    pattern: /declare\s+([^;]+)\s*$/gm,
    replacement: 'declare $1;'
  },
  
  // Fix missing semicolons in export statements
  {
    pattern: /export\s+([^;]+)\s*$/gm,
    replacement: 'export $1;'
  },
  
  // Fix missing semicolons in import statements
  {
    pattern: /import\s+([^;]+)\s*$/gm,
    replacement: 'import $1;'
  }

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-dbb7
console.log('🔧 Fixing final syntax errors...');

console.log('🔧 Fixing final syntax errors...');

<<<<<<< HEAD
=======



console.log('🔧 Fixing final syntax errors...');






main

console.log('🔧 Fixing final syntax errors...');


>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
=======
console.log('🔧 Fixing final syntax errors...');
console.log('🔧 Fixing final syntax errors...');








console.log('🔧 Fixing final syntax errors...');


>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-dbb7
// Fix specific files with known issues
const filesToFix = [
    'src/components/SEO.tsx',
    'src/components/talent/TalentCard.jsx',
    'src/components/ui/card.tsx',
    'src/components/ui/textarea.tsx',
    'src/components/ui/use-toast.ts'

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======



main

>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
=======



>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-dbb7
];

function fixFile(filePath) {
    if (!fs.existsSync(filePath)) {
<<<<<<< HEAD
<<<<<<< HEAD

    }

        return;

        return;

    }

=======

<<<<<<< HEAD
        console.log(`File not found: ${filePath}`);
        return 0;
    }
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d
    let content = fs.readFileSync(filePath, 'utf8');

    let modified = false;
<<<<<<< HEAD
=======
        return;

        
        return;

    }
        return;

        
        return;
main
        
        return;


    }

    let content = fs.readFileSync(filePath, 'utf8');
=======
        
        return;

        
        return;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d
    }

    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
<<<<<<< HEAD

main

    let modified = false;
    
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
=======
    }

    let content = fs.readFileSync(filePath, 'utf8');
    let fixes = 0;



    let modified = false;
    
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d
=======
    }

        return;

        return;

    }

    let content = fs.readFileSync(filePath, 'utf8');

    let modified = false;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-dbb7

    fixes.forEach(fix => {
      const newContent = content.replace(fix.pattern, fix.replacement);
      if (newContent !== content) {
        content = newContent;
        modified = true}
    });
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
    
    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc

=======
    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-dbb7
      return true}
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message)}
  return false}
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
=======
function walkDirectory(dir) {
  let fixedCount = 0;
  
  try {
    const files = fs.readdirSync(dir);
    
    for (const file of files) {
      const filePath = path.join(dir, file);
      const stat = fs.statSync(filePath);
      

>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
=======
function walkDirectory(dir) {
  let fixedCount = 0;
  try {
    const files = fs.readdirSync(dir);
    for (const file of files) {
      const filePath = path.join(dir, file);
      const stat = fs.statSync(filePath);
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-dbb7
      if (stat.isDirectory()) {
        fixedCount += walkDirectory(filePath)} else if (file.endsWith('.tsx') || file.endsWith('.ts') || file.endsWith('.jsx') || file.endsWith('.js')) {
        if (fixFile(filePath)) {
          fixedCount++}
      }
    }
  } catch (error) {
    console.error(`Error reading directory ${dir}:`, error.message)}
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
    let fixes = 0;
=======
  return fixedCount}
    let fixes = 0;


  
  return fixedCount}
    let fixes = 0;



        console.log(`File not found: ${filePath}`);
        return 0;        return;
        console.log(`File not found: ${filePath}`);
        return 0;
    }

    let content = fs.readFileSync(filePath, 'utf8');
    let fixes = 0;
    let fixes = 0;




>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d

=======

    let fixes = 0;

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-dbb7
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
];

function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let originalContent = content;
    
    // Apply all fixes
    for (const fix of fixes) {
      content = content.replace(fix.pattern, fix.replacement);
    }
    
    // Only write if content changed
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content);
      console.log(`✅ Fixed syntax in ${filePath}`);
      return true;
    }

    if (fixes > 0) {
        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`✅ Fixed ${fixes} issues in ${filePath}`);
    } else {
        console.log(`✨ No issues found in ${filePath}`);
    }
<<<<<<< HEAD
<<<<<<< HEAD
=======
    let content = fs.readFileSync(filePath, 'utf8');

    let fixes = 0;

  
  return fixedCount}
    let fixes = 0;

        console.log(`File not found: ${filePath}`);
        return 0;        return;
        console.log(`File not found: ${filePath}`);
        return 0;
    }

    let content = fs.readFileSync(filePath, 'utf8');
    let fixes = 0;
    let fixes = 0;


>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
=======
    return fixes;
}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-dbb7

    return fixes;
}

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-dbb7
// Process all files
let totalFixes = 0;
filesToFix.forEach(file => {
    totalFixes += fixFile(file);
});
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======


>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d






>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-dbb7

console.log(`\n📊 Summary:`);
console.log(`   Files processed: ${filesToFix.length}`);
console.log(`   Total fixes applied: ${totalFixes}`);


if (totalFixes > 0) {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
}
console.log(`\n📊 Summary:`);
console.log(`   Files processed: ${filesToFix.length}`);
console.log(`   Total fixes applied: ${totalFixes}`);

    let fixes = 0;










console.log(`\n📊 Summary:`);
console.log(`   Files processed: ${filesToFix.length}`);
console.log(`   Total fixes applied: ${totalFixes}`);



if (totalFixes > 0) {
=======
} else {
}
#!/usr/bin/env node/usr/bin/env nodeconst fs = require("fs");"const path = require("path");/ Final targeted fixes for remaining syntax errorsconst fixes = [/ Fix missing semicolons in import statements {" pattern: /import\s*{\s*([^}]+)\s*}\s*from\s*"([^"]+)"\s*$/gm,"" replacement: "import { $1 } from \"$2\";" }, / Fix malformed import statements {"" pattern: /import\s*{\s*([^}]+)\s*}\s*from\s*"([^"]+)"\s*export\s*default\s*function/g,"" replacement: "import { $1 } from \"$2\";\n\nexport default function" }, / Fix missing semicolons after import statements {" pattern: /import\s+([^]+)\s*$/gm,"" replacement: "import $1;" }, / Fix unterminated string literals {"" pattern: /"([^"]*)\s*$/gm,"" replacement: "\"$1\";" }, / Fix malformed function declarations {" pattern: /export\s*default\s*function\s*(\w+)\s*\(\s*\)\s*{\s*$/gm,"" replacement: "export default function $1() {\n return (" }, / Fix missing closing brackets and parentheses {" pattern: /return\s*\(\s*<div[^>]*>\s*$/gm,"" replacement: "return (\n <div className="min-h-screen bg-white">" }, / Fix malformed JSX attributes {" pattern: /className="([^"]*);\s*"/g,"" replacement: "className="$1"" }, / Fix missing semicolons in object properties {"" pattern: /(\w+):\s*"([^"]*)",\s*;/g,"" replacement: "$1: \"$2\"," }, / Fix malformed return statements {" pattern: /return\s*\(\s*<div";"/g,"" replacement: "return (\n <div className="min-h-screen bg-white">" }, / Fix duplicated content (remove duplicate lines) {" pattern: /^(.*)\n\1$/gm,"" replacement: "$1" }, / Fix missing closing brackets in arrays {" pattern: /(\[.*?);\s*\]\s*},/g,"" replacement: "$1\n ]\n}," }, / Fix malformed JSX closing tags {" pattern: /<\/div>\s*\)\s*}\s*$/gm,"" replacement: " </div>\n );\n}" }];function fixFile(filePath) { if (!fs.existsSync(filePath)) {" console.log(` File not found: ${filePath}`); return; }" let content = fs.readFileSync(filePath, "utf8"); let modified = false; fixes.forEach(fix => { const newContent = content.replace(fix.pattern, fix.replacement); if (newContent !== content) { content = newContent; modified = true} }); if (modified) {" fs.writeFileSync(filePath, content, "utf8");"` console.log(`Fixed: ${filePath}`); return true} } catch (error) {` console.error(`Error fixing ${filePath}:`, error.message)} return false}function walkDirectory(dir) { let fixedCount = 0; try { const files = fs.readdirSync(dir); for (const file of files) { const filePath = path.join(dir, file); const stat = fs.statSync(filePath); if (stat.isDirectory()) {" fixedCount += walkDirectory(filePath)} else if (file.endsWith(".tsx") | file.endsWith(".ts") | file.endsWith(".jsx") | file.endsWith(".js")) { if (fixFile(filePath)) { fixedCount++} } } } catch (error) {` console.error(`Error reading directory ${dir}:`, error.message)} return fixedCount}"console.log("\n Summary: ");`console.log(` Files processed: ${filesToFix.length}`);"`console.log(` Total fixes applied: ${totalFixes}`);if (totalFixes > 0) {" console.log("\n Final syntax error fixing completed!");} else {" console.log("\n No syntax errors found to fix.");}""`"`
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d









console.log(`\n📊 Summary:`);
console.log(`   Files processed: ${filesToFix.length}`);
console.log(`   Total fixes applied: ${totalFixes}`);

if (totalFixes > 0) {
}
console.log(`\n📊 Summary:`);
console.log(`   Files processed: ${filesToFix.length}`);
console.log(`   Total fixes applied: ${totalFixes}`);
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-dbb7

<<<<<<< HEAD
main

>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d
if (totalFixes > 0) {
} else {
}
#!/usr/bin/env node/usr/bin/env nodeconst fs = require("fs");"const path = require("path");/ Final targeted fixes for remaining syntax errorsconst fixes = [/ Fix missing semicolons in import statements {" pattern: /import\s*{\s*([^}]+)\s*}\s*from\s*"([^"]+)"\s*$/gm,"" replacement: "import { $1 } from \"$2\";" }, / Fix malformed import statements {"" pattern: /import\s*{\s*([^}]+)\s*}\s*from\s*"([^"]+)"\s*export\s*default\s*function/g,"" replacement: "import { $1 } from \"$2\";\n\nexport default function" }, / Fix missing semicolons after import statements {" pattern: /import\s+([^]+)\s*$/gm,"" replacement: "import $1;" }, / Fix unterminated string literals {"" pattern: /"([^"]*)\s*$/gm,"" replacement: "\"$1\";" }, / Fix malformed function declarations {" pattern: /export\s*default\s*function\s*(\w+)\s*\(\s*\)\s*{\s*$/gm,"" replacement: "export default function $1() {\n return (" }, / Fix missing closing brackets and parentheses {" pattern: /return\s*\(\s*<div[^>]*>\s*$/gm,"" replacement: "return (\n <div className="min-h-screen bg-white">" }, / Fix malformed JSX attributes {" pattern: /className="([^"]*);\s*"/g,"" replacement: "className="$1"" }, / Fix missing semicolons in object properties {"" pattern: /(\w+):\s*"([^"]*)",\s*;/g,"" replacement: "$1: \"$2\"," }, / Fix malformed return statements {" pattern: /return\s*\(\s*<div";"/g,"" replacement: "return (\n <div className="min-h-screen bg-white">" }, / Fix duplicated content (remove duplicate lines) {" pattern: /^(.*)\n\1$/gm,"" replacement: "$1" }, / Fix missing closing brackets in arrays {" pattern: /(\[.*?);\s*\]\s*},/g,"" replacement: "$1\n ]\n}," }, / Fix malformed JSX closing tags {" pattern: /<\/div>\s*\)\s*}\s*$/gm,"" replacement: " </div>\n );\n}" }];function fixFile(filePath) { if (!fs.existsSync(filePath)) {" console.log(` File not found: ${filePath}`); return; }" let content = fs.readFileSync(filePath, "utf8"); let modified = false; fixes.forEach(fix => { const newContent = content.replace(fix.pattern, fix.replacement); if (newContent !== content) { content = newContent; modified = true} }); if (modified) {" fs.writeFileSync(filePath, content, "utf8");"` console.log(`Fixed: ${filePath}`); return true} } catch (error) {` console.error(`Error fixing ${filePath}:`, error.message)} return false}function walkDirectory(dir) { let fixedCount = 0; try { const files = fs.readdirSync(dir); for (const file of files) { const filePath = path.join(dir, file); const stat = fs.statSync(filePath); if (stat.isDirectory()) {" fixedCount += walkDirectory(filePath)} else if (file.endsWith(".tsx") | file.endsWith(".ts") | file.endsWith(".jsx") | file.endsWith(".js")) { if (fixFile(filePath)) { fixedCount++} } } } catch (error) {` console.error(`Error reading directory ${dir}:`, error.message)} return fixedCount}"console.log("\n Summary: ");`console.log(` Files processed: ${filesToFix.length}`);"`console.log(` Total fixes applied: ${totalFixes}`);if (totalFixes > 0) {" console.log("\n Final syntax error fixing completed!");} else {" console.log("\n No syntax errors found to fix.");}""`"`
}
        
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

if (totalFixes > 0) {
    
} else {
    
}
    
} else {
    
}

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======


main

>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
=======



>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-dbb7
#!/usr/bin/env node;
    console.log('\n✅ Final syntax error fixing completed!');
} else {
    console.log('\n✨ No syntax errors found to fix.');
}#!/usr/bin/env node;
}
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
<<<<<<< HEAD
<<<<<<< HEAD
=======
    "replacement"

    console.log('\n✅ Final syntax error fixing completed!');
} else {
    console.log('\n✨ No syntax errors found to fix.');
}


    "replacement"

    "replacement"
    "replacement"
main
    "replacement"
    "replacement"


=======
    "replacement"




    "replacement"
    "replacement"

    "replacement"
    "replacement"

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d
    "replacement"


=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-dbb7

<<<<<<< HEAD
main
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d
