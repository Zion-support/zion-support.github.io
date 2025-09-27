const fs = require('fs');
const path = require('path');

// Files to fix
const filesToFix = [
  'pages/dashboard.tsx',
  'pages/faq.tsx', 
  'pages/index.tsx',
  'pages/portfolio.tsx',
  'pages/privacy-policy.tsx'
];

function fixFile(filePath) {
  console.log(`Fixing ${filePath}...`);
  
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Fix common JSX syntax issues
  content = content
    // Fix missing closing parentheses for JSX fragments
    .replace(/return \(\s*<>\s*<Head>/g, 'return (\n    <>\n      <Head>')
    .replace(/<>\s*<Head>/g, '<>\n      <Head>')
    // Fix indentation issues
    .replace(/\n\t\t\t<div className="min-h-screen/g, '\n      <div className="min-h-screen')
    .replace(/\n\t\t\t<div className="container/g, '\n        <div className="container')
    // Fix missing closing tags
    .replace(/(\s*)<\/div>\s*\);\s*};/g, '$1  </div>\n    );\n  };')
    // Fix className spacing issues
    .replace(/className="([^"]*)\s+([^"]*)"/g, 'className="$1$2"')
    // Fix max-w spacing
    .replace(/max-w-(\d+)\s+xl/g, 'max-w-$1xl')
    .replace(/max-w-(\d+)\s+sm/g, 'max-w-$1sm')
    .replace(/max-w-(\d+)\s+md/g, 'max-w-$1md')
    .replace(/max-w-(\d+)\s+lg/g, 'max-w-$1lg')
    // Fix text spacing
    .replace(/text-(\d+)\s+xl/g, 'text-$1xl')
    .replace(/text-(\d+)\s+sm/g, 'text-$1sm')
    .replace(/text-(\d+)\s+md/g, 'text-$1md')
    .replace(/text-(\d+)\s+lg/g, 'text-$1lg')
    // Fix px spacing
    .replace(/px-(\d+)\s+sm/g, 'px-$1sm')
    .replace(/px-(\d+)\s+md/g, 'px-$1md')
    .replace(/px-(\d+)\s+lg/g, 'px-$1lg')
    // Fix py spacing
    .replace(/py-(\d+)\s+sm/g, 'py-$1sm')
    .replace(/py-(\d+)\s+md/g, 'py-$1md')
    .replace(/py-(\d+)\s+lg/g, 'py-$1lg')
    // Fix hover spacing
    .replace(/hover:\s+text/g, 'hover:text')
    .replace(/hover:\s+bg/g, 'hover:bg')
    // Fix sm: spacing
    .replace(/sm:\s+px/g, 'sm:px')
    .replace(/sm:\s+py/g, 'sm:py')
    .replace(/sm:\s+text/g, 'sm:text')
    .replace(/sm:\s+bg/g, 'sm:bg')
    // Fix lg: spacing
    .replace(/lg:\s+px/g, 'lg:px')
    .replace(/lg:\s+py/g, 'lg:py')
    .replace(/lg:\s+text/g, 'lg:text')
    .replace(/lg:\s+bg/g, 'lg:bg');
  
  fs.writeFileSync(filePath, content);
  console.log(`Fixed ${filePath}`);
}

// Fix all files
filesToFix.forEach(fixFile);

console.log('All files fixed!');