<<<<<<< HEAD
#!/usr/bin/env node

const fs = require('fs');
const path = require('path');




const filesToFix = ['pages/api/docs.ts',
  'pages/api/health.ts', 
  'components/ContactForm.tsx',
  'components/ErrorBoundary.tsx',
  'pages/docs/api-quick-start.tsx'
];

const fixes = [// Fix malformed string types in interfaces
  {
    "pattern": /(\w+):\s*'string;/g,
    "replacement": '$1: string;'
  },
  {
    "pattern": /(\w+):\s*'ReactNode;/g,
    "replacement": '$1: ReactNode;'
  },
  {
    "pattern": /(\w+):\s*'boolean;/g,
    "replacement": '$1: boolean;'
  },
  {
    "pattern": /(\w+):\s*'number;/g,
    "replacement": '$1: number;'
  },
  // Fix malformed closing braces
  {
    "pattern": /;\s*'\s*}\s*}/g,
    "replacement": ';\n}'
  },
  // Fix malformed string literals in JSX
  {
    "pattern": /"([^"]*?)\$\{([^}]*?)\}([^"]*?)"\s*"}/g,
    "replacement": '"$1${$2}$3"'
  },
  // Fix broken template literals
  {
    "pattern": /"([^"]*?)\\\\"\s*([^"]*?)"/g,
    "replacement": '"$1\\\\\n  $2"'
  }
];

filesToFix.forEach(filePath => {
  try {
    
    
    if (!fs.existsSync(filePath)) {
      
      return}
    
    let content = fs.readFileSync(filePath, 'utf8');
    let originalContent = content;
    let fixesApplied = 0;
    
    fixes.forEach((fix, index) => {
      const beforeLength = content.length;
      content = content.replace(fix.pattern, fix.replacement);
      const afterLength = content.length;
      
      if (beforeLength !== afterLength) {
        fixesApplied++;
        }
    });
    
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content, 'utf8');
      } else {
      }
    
  } catch (error) {
    }
});

=======
<<<<<<< HEAD
#!/usr/bin/env node/usr/bin/env nodeconst fs = require("fs");"const path = require("path");"console.log(" Fixing String Quote Issues.");"console.log("================================");"const filesToFix = ["pages/api/docs.ts"," "pages/api/health.ts", " "components/ContactForm.tsx"," "components/ErrorBoundary.tsx"," "pages/docs/api-quick-start.tsx"];const fixes = [/ Fix malformed string types in interfaces {" pattern: /(\w+):\s*"string;/g,"" replacement: "$1: string;" }, {"" pattern: /(\w+):\s*"ReactNode;/g,"" replacement: "$1: ReactNode;" }, {"" pattern: /(\w+):\s*"boolean;/g,"" replacement: "$1: boolean;" }, {"" pattern: /(\w+):\s*"number;/g,"" replacement: "$1: number;" }, / Fix malformed closing braces {"" pattern: /;\s*"\s*}\s*}/g,"" replacement: ";\n}" }, / Fix malformed string literals in JSX {" pattern: /"([^"]*?)\$\{([^}]*?)\}([^"]*?)"\s*"}/g,"" replacement: ""$1${$2}$3"" }, / Fix broken template literals {" pattern: /"([^"]*?)\"\s*([^"]*?)"/g,"" replacement: ""$1\n $2"" }];filesToFix.forEach(filePath => { try {" console.log(`\n Fixing: ${filePath}`); if (!fs.existsSync(filePath)) {"` console.log(` File not found: ${filePath}`); return} " let content = fs.readFileSync(filePath, "utf8"); let originalContent = content; let fixesApplied = 0; fixes.forEach((fix, index) => { const beforeLength = content.length; content = content.replace(fix.pattern, fix.replacement); const afterLength = content.length; if (beforeLength !== afterLength) { fixesApplied++;` console.log(` Applied fix ${index + 1}`)} }); if (content !== originalContent) {" fs.writeFileSync(filePath, content, "utf8");` console.log(` Applied ${fixesApplied} fixes to ${filePath}`)} else {` console.log(` No fixes needed for ${filePath}`)} } catch (error) {` console.log(` Error fixing ${filePath}: ${error.message}`)}});"console.log("\n String quote fixes completed!");'"`'"`
=======
#!/usr/bin/env node;
const fs = require('fs')
const path = require('path')
// console.log(' Fixing String Quote Issues...')
console.log('====')
const filesToFix = ['pages/api/docs.ts']
  'pages/api/health.ts'
  'components/ContactForm.tsx'
  'components/ErrorBoundary.tsx'
  'pages/docs/api-quick-start.tsx'
    "pattern"
    "replacement"
    "pattern"
    "replacement"
    "pattern"
    "replacement"
    "pattern"
    "replacement"
    "pattern"
    "replacement"
    "replacement": '"$1${$2}$3"
    "replacement": '"$1\\\\\n  $2"
>>>>>>> main
>>>>>>> main
