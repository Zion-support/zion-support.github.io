<<<<<<< HEAD
#!/usr/bin/env node/usr/bin/env nodeconst fs = require("fs");"const path = require("path");/ Function to fix remaining syntax errorsfunction fixRemainingErrors(content) { / Fix incomplete object properties" content = content.replace(/(\w+):\s*$/gm, "$1: \"\""); / Fix missing commas in object literals"" content = content.replace(/(\w+):\s*["""][^"""]*["""]\s*\n\s*(\w+):/g, "$1: \"value\",\n $2: "); / Fix missing semicolons after function declarations" content = content.replace(/(\w+)\s*\(\s*\)\s*=>\s*\{[^}]*\}\s*\n\s*return/g, "$1() => {\n / .\n };\n return"); / Fix missing closing braces" content = content.replace(/(\w+)\s*\(\s*\)\s*=>\s*\{[^}]*\}\s*$/gm, "$1() => {\n / .\n };"); / Fix missing commas in arrays" content = content.replace(/(\w+)\s*\n\s*(\w+)/g, "$1,\n $2"); / Fix missing commas in function parameters"" content = content.replace(/(\w+)\s*\n\s*(\w+):/g, "$1,\n $2: "); return content}/ Function to process a filefunction processFile(filePath) { try {" const content = fs.readFileSync(filePath, "utf8"); const fixedContent = fixRemainingErrors(content); if (content !== fixedContent) { fs.writeFileSync(filePath, fixedContent);" console.log("Fixed: ${filePath}")} } catch (error) {" console.error("Error processing ${filePath}:`, error.message)}}/ Function to recursively find and process filesfunction processDirectory(dirPath) { const files = fs.readdirSync(dirPath); for (const file of files) { const filePath = path.join(dirPath, file); const stat = fs.statSync(filePath); " if (stat.isDirectory() && !file.startsWith(".") && file !== "node_modules") {" processDirectory(filePath)} else if (file.endsWith(".tsx") | file.endsWith(".ts") | file.endsWith(".jsx") | file.endsWith(".js")) { processFile(filePath)} }}/ Start processing from the current directory"console.log("Fixing remaining syntax errors.");"processDirectory(".");"console.log("Done!");'"`'"`
=======
const fs = require('fs');
const path = require('path');

// Function to fix specific syntax issues;
function fixSyntaxIssues(content) {}
  // Fix indentation issues in JSX;
  content = content.replace(/^      \{\/\* Blog Posts Section \*\/\}/gm, '      {/* Blog Posts Section */}');
  content = content.replace(/^        <section className="py-20">/gm, '      <section className="py-20">');
  
  // Fix any remaining corrupted text;
  content = content.replace(/ursor\/add-new-services-and-deploy-updates-1b90/g, '');
  
  // Fix common JSX syntax issues;
  content = content.replace(/hover: text-/g, 'hover:text-');
  content = content.replace(/hover: bg-/g, 'hover:bg-');
  content = content.replace(/hover: shadow-/g, 'hover:shadow-');
  
  return content;
};
// Files to fix;
const filesToFix = []
  'pages/blog.tsx',
  'pages/privacy.tsx', 
  'pages/terms.tsx'
];

<<<<<<< HEAD
// Function to process a file
function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const fixedContent = fixRemainingErrors(content);
    
    if (content !== fixedContent) {
      fs.writeFileSync(filePath, fixedContent);
      }
  } catch (error) {
    console.error("Error processing ${filePath}:`, error.message)}
=======
let fixedCount = 0;

filesToFix.forEach(filePath => {})
  try {}
    if (fs.existsSync(filePath)) {}
      const content = fs.readFileSync(filePath, 'utf8');
      const fixedContent = fixSyntaxIssues(content);
      
      if (content !== fixedContent) {}
        fs.writeFileSync(filePath, fixedContent, 'utf8');
        console.log(`Fixed: ${filePath}`);
        fixedCount++;
      };
    };
  } catch (error) {}
    console.error(`Error processing ${filePath}:`, error.message);
  };
>>>>>>> main
}
});

<<<<<<< HEAD
// Function to recursively find and process files
function processDirectory(dirPath) {
  const files = fs.readdirSync(dirPath);
  
  for (const file of files) {
    const filePath = path.join(dirPath, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory() && !file.startsWith('.') && file !== 'node_modules') {
      processDirectory(filePath)} else if (file.endsWith('.tsx') || file.endsWith('.ts') || file.endsWith('.jsx') || file.endsWith('.js')) {
      processFile(filePath)}
  }
}

// Start processing from the current directory

processDirectory('.');
=======
console.log(`\nFixed ${fixedCount} files`);
>>>>>>> main
>>>>>>> main
