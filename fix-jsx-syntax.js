const fs = require('fs');
const path = require('path');

<<<<<<< HEAD
// Function to fix JSX syntax issues
function fixJsxSyntax(content) {
  // Fix malformed JSX attributes with mixed quotes
  content = content.replace(/className="([^"]*)"\n/g, 'className="$1"\n');
  content = content.replace(/className='([^']*)'\n/g, "className='$1'\n");
  
  // Fix unterminated JSX attributes
  content = content.replace(/className="([^"]*)\n/g, 'className="$1"\n');
  content = content.replace(/className='([^']*)\n/g, "className='$1'\n");
  
  // Fix malformed JSX closing tags
  content = content.replace(/<\/h1>''\n/g, '</h1>\n');
  content = content.replace(/<\/h1>""\n/g, '</h1>\n');
  content = content.replace(/<\/div>''\n/g, '</div>\n');
  content = content.replace(/<\/div>""\n/g, '</div>\n');
  content = content.replace(/<\/p>''\n/g, '</p>\n');
  content = content.replace(/<\/p>""\n/g, '</p>\n');
  
  // Fix malformed JSX text content
  content = content.replace(/>([^<]*);''\n/g, '>$1\n');
  content = content.replace(/>([^<]*);""\n/g, '>$1\n');
  
  // Fix stray quotes in JSX
  content = content.replace(/>''\n/g, '>\n');
  content = content.replace(/>""\n/g, '>\n');
  
  // Fix malformed object properties in JSX
  content = content.replace(/(\w+):\s*"([^"]*)',/g, '$1: "$2",');
  content = content.replace(/(\w+):\s*'([^']*)",/g, "$1: '$2',");
  
  return content;
}

// Function to recursively find and fix files
function fixFilesInDirectory(dirPath) {
  const files = fs.readdirSync(dirPath);
  
  files.forEach(file => {
    const filePath = path.join(dirPath, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory() && !file.startsWith('.') && file !== 'node_modules') {
      fixFilesInDirectory(filePath);
    } else if (file.endsWith('.tsx') || file.endsWith('.ts') || file.endsWith('.jsx') || file.endsWith('.js')) {
      try {
        let content = fs.readFileSync(filePath, 'utf8');
        const originalContent = content;
        
        content = fixJsxSyntax(content);
        
        if (content !== originalContent) {
          fs.writeFileSync(filePath, content, 'utf8');
          console.log(`Fixed: ${filePath}`);
        }
      } catch (error) {
        console.error(`Error processing ${filePath}:`, error.message);
      }
    }
  });
}

// Start fixing from the workspace root
console.log('Starting JSX syntax fixes...');
fixFilesInDirectory('/workspace');
console.log('JSX syntax fixes completed!');
=======
// Function to fix JSX syntax issues in a file
function fixJSXSyntax(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Fix LinkContact Us pattern
    if (content.includes('LinkContact Us')) {
      content = content.replace(
        /<LinkContact Us\s*>\s*\$\d+\s*<ArrowRight\$\d+ \/>\s*<\/Link>/g,
        `<Link
            href="/contact"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-200"
          >
            Contact Us
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>`
      );
      modified = true;
    }

    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed: ${filePath}`);
      return true;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  return false;

// Function to recursively find all .tsx files
function findTSXFiles(dir) {
  const files = [];
  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
      files.push(...findTSXFiles(fullPath));
    } else if (item.endsWith('.tsx')) {
      files.push(fullPath);
  
  return files;

// Main execution
console.log('Starting JSX syntax fixes...');
const appDir = path.join(__dirname, 'app');
const tsxFiles = findTSXFiles(appDir);

let fixedCount = 0;
for (const file of tsxFiles) {
  if (fixJSXSyntax(file)) {
    fixedCount++;

console.log(`\nFixed ${fixedCount} files out of ${tsxFiles.length} total .tsx files`);
>>>>>>> origin/main
