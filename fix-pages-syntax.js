const fs = require('fs');
const path = require('path');

// Function to fix page syntax
function fixPageSyntax(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Fix missing spaces in titles
    content = content.replace(/<title>([^|]+)\|([^<]+)<\/title>/g, '<title>$1 | $2</title>');
    
    // Fix JSX syntax issues - add proper spacing and formatting
    content = content.replace(/export default function ServicePage\(\) \{\n\n  return \(<>\n      <Head>/g, 
      'export default function ServicePage() {\n  return (\n    <>\n      <Head>');
    
    // Fix missing closing tags and malformed JSX
    content = content.replace(/      <\/Head>\n      \n      <div className=/g, '      </Head>\n      \n      <div className=');
    
    // Fix the specific pattern we're seeing
    content = content.replace(/  return \(<>\n      <Head>/g, '  return (\n    <>\n      <Head>');
    
    fs.writeFileSync(filePath, content);
    console.log(`Fixed: ${filePath}`);
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

// Function to find all page.tsx files
function findPageFiles(dir) {
  const files = [];
  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      files.push(...findPageFiles(fullPath));
    } else if (item === 'page.tsx') {
      files.push(fullPath);
    }
  }
  
  return files;
}

// Find and fix all page files
const appDir = path.join(__dirname, 'app');
const pageFiles = findPageFiles(appDir);

console.log(`Found ${pageFiles.length} page files to fix`);

pageFiles.forEach(fixPageSyntax);

console.log('All pages fixed!');