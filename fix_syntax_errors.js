import fs from 'fs';
import path from 'path';
#!/usr/bin/env node;

// Function to fix common syntax errors in TSX files;
function fixSyntaxErrors(content) {
  // Fix invalid characters in import statements;
  content = content.replace(/\\'/g, "'");
  
  // Fix malformed JSX elements with missing spaces in className;
    // Add space between concatenated class names;
    return prefix + char1 + ' ' + char2;
  } );
  
  // Fix malformed JSX closing tags;
');
  
  // Fix malformed JSX opening tags;
  content = content.replace(/<([a-zA-Z][a-zA-Z0-9]*)\s*\/\s*>/g, '<$1 />');
  
  // Fix malformed JSX with missing closing tags;
  content = content.replace(/<([a-zA-Z][a-zA-Z0-9]*)\s+className="[^"]*"\s*\/\s*>/g, '<$1 className="$2" />');
  
  // Fix specific patterns found in the files;
    return `className="${prefix} ${char1} ${char2} `;
  });
  
  // Fix specific malformed patterns;
  content = content.replace(/className="([^"]*?)pt-20"/g, 'className="$1 pt-20"');
  content = content.replace(/className="([^"]*?)py-12"/g, 'className="$1 py-12"');
  content = content.replace(/className="([^"]*?)gap-8"/g, 'className="$1 gap-8"');
  content = content.replace(/className="([^"]*?)mb-4"/g, 'className="$1 mb-4"');
  content = content.replace(/className="([^"]*?)mb-6"/g, 'className="$1 mb-6"');
  content = content.replace(/className="([^"]*?)mb-8"/g, 'className="$1 mb-8"');
  content = content.replace(/className="([^"]*?)space-x-4"/g, 'className="$1 space-x-4"');
  content = content.replace(/className="([^"]*?)space-y-2"/g, 'className="$1 space-y-2"');
  content = content.replace(/className="([^"]*?)space-y-3"/g, 'className="$1 space-y-3"');
  content = content.replace(/className="([^"]*?)text-center"/g, 'className="$1 text-center"');
  content = content.replace(/className="([^"]*?)text-gray-300"/g, 'className="$1 text-gray-300"');
  content = content.replace(/className="([^"]*?)text-gray-400"/g, 'className="$1 text-gray-400"');
  content = content.replace(/className="([^"]*?)text-white"/g, 'className="$1 text-white"');
  content = content.replace(/className="([^"]*?)flex"/g, 'className="$1 flex"');
  content = content.replace(/className="([^"]*?)items-center"/g, 'className="$1 items-center"');
  content = content.replace(/className="([^"]*?)justify-center"/g, 'className="$1 justify-center"');
  content = content.replace(/className="([^"]*?)mx-auto"/g, 'className="$1 mx-auto"');
  content = content.replace(/className="([^"]*?)w-fit"/g, 'className="$1 w-fit"');
  content = content.replace(/className="([^"]*?)w-4"/g, 'className="$1 w-4"');
  content = content.replace(/className="([^"]*?)h-4"/g, 'className="$1 h-4"');
  content = content.replace(/className="([^"]*?)w-5"/g, 'className="$1 w-5"');
  content = content.replace(/className="([^"]*?)h-5"/g, 'className="$1 h-5"');
  content = content.replace(/className="([^"]*?)ml-2"/g, 'className="$1 ml-2"');
  content = content.replace(/className="([^"]*?)mr-2"/g, 'className="$1 mr-2"');
  content = content.replace(/className="([^"]*?)transition-colors"/g, 'className="$1 transition-colors"');
  content = content.replace(/className="([^"]*?)hover:text-cyan-400"/g, 'className="$1 hover:text-cyan-400"');
  
  return content;

// Function to process a single file;
function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const fixedContent = fixSyntaxErrors(content);
    
    if (content !== fixedContent) {
      fs.writeFileSync(filePath, fixedContent, 'utf8');
      console.log(`Fixed: ${filePath} `);
      return true;
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath} :`, error.message);
    return false;

// Function to recursively find and process TSX files;
function processDirectory(dirPath) {
  let processedCount = 0;
  
  function walkDir(currentPath) {
    const items = fs.readdirSync(currentPath);
    
    for (const item, of, items) {
      const fullPath = path.join(currentPath, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        walkDir(fullPath);
      } else if (item.endsWith('.tsx') || item.endsWith('.ts')) {
        if (processFile(fullPath)) {
          processedCount++;
  
  walkDir(dirPath);
  return processedCount;

// Main execution;
console.log('Starting syntax error fixes...');
const processedCount = processDirectory('./app');
console.log(`Processed ${processedCount} files.`);

// Also process the root EnhancedFooter.tsx;
if (processFile('./EnhancedFooter.tsx')) {
  console.log('Fixed: EnhancedFooter.tsx');