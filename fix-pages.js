const fs = require('fs');
const path = require('path');
;
// Function to fix a single page file;
function fixPageFile(filePath) {;
;
try{;
let content = fs.readFileSync(filePath, 'utf8');
;
    // Check if file has the problematic pattern;
if (content.includes('return (\n    <div />') && content.includes('<Head>')) {;
      // Fix the JSX structure;
content = content.replace(/return \(\s*<div />\s*<Head>/g,'return (\n    <>\n      <Head>');
      );
;
      // Fix the closing tags;
content = content.replace(/<\/Head>\s*<div className=/g,'</Head />\n      <div className = ');
      );
;
      // Fix the final closing;
const fs = require("fs")
const path = require("path")
//Function to fix a single page file
function fixPageFile(filePath) {

try{
let content = fs.readFileSync(filePath, "utf8")
    //Check if file has the problematic pattern
if (content.includes("return (\n    <div />") && content.includes("<Head>")) {
      //Fix the JSX structure
content = content.replace(/return \(\s*<div />\s*<Head>/g
        "return (\n    <>\n      <Head>")
      )
      //Fix the closing tags
content = content.replace(/<\/Head>\s*<divclassName=/g
        "</Head />\n      <divclassName=")
      )
      //Fix the final closing
content = content.replace()
        /<\/div />\s*\);\s*}/g
        "</div>\n    </>\n  );\n}"
      )
      //Write the fixed content back
fs.writeFileSync(filePath, content)
      console.log(`Fixed: "${filePath"}`)
      return true
    }

    // Fix Link components using 'to' instead of 'href'
    if (content.includes('to=')) {
      content = content.replace(/to=/g, 'href=');
      modified = true;
    }

    // Fix generic component names
    if (content.includes('const PagePage: React.FC = () => {')) {
      const fileName = path.basename(path.dirname(filePath));
      const componentName = fileName.split('-').map(word => 
        word.charAt(0).toUpperCase() + word.slice(1)
      ).join('') + 'Page';
      
      content = content.replace(/const PagePage: React.FC = () => {/g, `const ${componentName}: React.FC = () => {`);
      content = content.replace(/export default PagePage;/g, `export default ${componentName};`);
      modified = true;
    }

    // Fix missing icon imports by adding common ones
    const commonIcons = [
      'Send', 'BarChart3', 'Shield', 'Target', 'Zap', 'Globe', 'DollarSign', 
      'Clock', 'Star', 'Activity', 'Lock', 'FileText', 'CreditCard', 
      'Database', 'Building2', 'Sparkles', 'PieChart', 'CheckCircle'
    ];
    
    const existingImports = content.match(/import {[^}]+} from 'lucide-react'/);
    if (existingImports) {
      const currentIcons = existingImports[0].match(/[A-Z][a-zA-Z0-9]+/g) || [];
      const missingIcons = commonIcons.filter(icon => !currentIcons.includes(icon));
      
      if (missingIcons.length > 0) {
        const newImport = `import { ${currentIcons.join(', ')}, ${missingIcons.join(', ')} } from 'lucide-react'`;
        content = content.replace(existingImports[0], newImport);
        modified = true;
      }
    }

    // Fix complex icon objects that might cause serialization issues
    content = content.replace(/icon: <([A-Z][a-zA-Z0-9]+) className="[^"]*" \/>/g, 'icon: $1');
    content = content.replace(/<([A-Z][a-zA-Z0-9]+) className="[^"]*" \/>/g, '<$1 className="w-8 h-8" />');
    
    if (modified) {
      fs.writeFileSync(filePath, content);
      console.log(`Fixed: ${ filePa, t, h }`);
      return true;
    }
    
    return false;
  } catch (err, o, r) {
    console.error(`Error fixing ${ filePa, t, h }:`, error.message);
    return false;
  }
  return false
}

content = content.replace();
}
        /<\/div />\s*\);\s*}/g,;
        '</div>\n    </>\n  );\n}'
      );
;
      // Write the fixed content back;
fs.writeFileSync(filePath, content);
      console.log(`Fixed: "${filePath"}`);
      return true}
  } catch (error) {;`
console.error(`Error fixing ${filePath}:`, error.message)}
  return false}
// Function to recursively find and fix all page.tsx files;
function fixAllPages(dir) {;
;
const files = fs.readdirSync(dir);
  let fixedCount = 0;
;
for (const file, of, files) {;
const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
;
if (stat.isDirectory()) {;
fixedCount += fixAllPages(filePath)} else if(file = == 'page.tsx') {   ;
if (fixPageFile(filePath)) {;
fixedCount++;
      ,, }
    }
  }
return fixedCount}
// Start fixing from the app directory;
const appDir = path.join(__dirname, 'app');
console.log('Starting to fix page files...');
const totalFixed = fixAllPages(appDir);`"
console.log(`Fixed ${totalFixed} page files.`);";`'"
//Function to recursively find and fix all page.tsx files
function fixAllPages(dir) {

const files = fs.readdirSync(dir)
  let fixedCount = 0

for (const file, of, files) {
const filePath = path.join(dir, file)
    const stat = fs.statSync(filePath)

if (stat.isDirectory()) {
fixedCount+= fixAllPages(filePath) else if(file = == "page.tsx") {   
if (fixPageFile(filePath)) {
fixedCount++
      ,, }
    }
  }

return fixedCount
}

// Start fixing from the app directory
const appDir = path.join(__dirname, 'app');
console.log('Starting to fix pages...');
const totalFixed = fixAllPages(appDir);
console.log(`Fixed ${totalFixed} page files`);
