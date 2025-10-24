const fs = require('fs');
const path = require('path');

// Function to fix JSX syntax errors
function fixJSXSyntax(content) {
  let fixed = content;

  // Fix malformed Head tags
  fixed = fixed.replace(/<Head>title>/g, '<Head>\n        <title>');</title>
  fixed = fixed.replace(/title>meta name=/g, '</title>\n        <meta name=');
  fixed = fixed.replace(/content=\"([^"]*)\" \/>/g, 'content="$1" />');
  fixed = fixed.replace(/<\/Head>div className=/g, '</Head>\n      <div className=');
  
  // Fix missing opening tags
  fixed = fixed.replace(/(<div className="[^"]*">)/g, (match) => {
    if (!match.includes('<div')) {
      return '<div ' + match;
    }
    return match;
  });
  
  // Fix malformed JSX elements
  fixed = fixed.replace(/(\w+)>\s*</g, '$1>');
  fixed = fixed.replace(/(\w+)\s*>\s*</g, '$1>');
  
  // Fix missing closing tags
  fixed = fixed.replace(/(<div[^>]*>)(?!.*<\/div>)/g, '$1');
  
  // Fix malformed attributes
  fixed = fixed.replace(/className="([^"]*)"\s*>/g, 'className="$1">');
  fixed = fixed.replace(/className='([^']*)'\s*>/g, "className=\"$1\">");
  
  // Fix missing spaces in JSX
  fixed = fixed.replace(/(\w+)><(\w+)/g, '$1> <$2');
  fixed = fixed.replace(/(\w+)><\/(\w+)/g, '$1></$2');
  
  // Fix malformed closing tags
  fixed = fixed.replace(/(\w+)>\s*<\/(\w+)>/g, '$1></$2>');
  
  // Fix missing semicolons
  fixed = fixed.replace(/(\w+)\s*}\s*const/g, '$1};\nconst');
  fixed = fixed.replace(/(\w+)\s*]\s*const/g, '$1];\nconst');
  
  // Fix malformed return statements
  fixed = fixed.replace(/return\s*\(\s*<>\s*<Head>/g, 'return (\n    <>\n      <Head>');
  fixed = fixed.replace(/<\/Head>\s*<div/g, '</Head>\n      <div');
  
  // Fix missing spaces in JSX attributes
  fixed = fixed.replace(/(\w+)="([^"]*)"(\w+)/g, '$1="$2" $3');
  
  // Fix malformed JSX fragments
  fixed = fixed.replace(/<>\s*<Head>/g, '<>\n      <Head>');
  fixed = fixed.replace(/<\/Head>\s*<div/g, '</Head>\n      <div');
  
  // Fix missing closing brackets
  fixed = fixed.replace(/(\w+)\s*}\s*$/g, '$1}');
  
  return fixed;
}

// Function to process all TypeScript/TSX files
function processFiles(dir) {
  const files = fs.readdirSync(dir);
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      processFiles(filePath);
    } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
      try {
        const content = fs.readFileSync(filePath, 'utf8');
        const fixed = fixJSXSyntax(content);
        
        if (content !== fixed) {
          fs.writeFileSync(filePath, fixed);
          console.log(`Fixed JSX: ${filePath}`);
        }
      } catch (error) {
        console.error(`Error processing ${filePath}:`, error.message);
      }
    }
  });
</div>
      </div></div>}

// Process app directory
console.log('Fixing JSX syntax errors in app directory...');
processFiles('./app');

// Process src directory
console.log('Fixing JSX syntax errors in src directory...');
processFiles('./src');

// Process components directory
console.log('Fixing JSX syntax errors in components directory...');
processFiles('./components');

console.log('JSX syntax fixes completed!');
      </Head>
      </Head>
      </div>
      </Head>