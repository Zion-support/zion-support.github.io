import fs from 'fs';
import path from 'path';
#!/usr/bin/env node;

// Function to fix remaining JSX issues;
function fixRemainingJSXIssues(content) {
  // Fix missing closing div tags - look for the pattern where we have:
  // </Link>
  // </div>
  // );
  // }
  // But missing the outer div closing tag;
  content = content.replace()
    /(\s*<\/Link>\s*<\/div>\s*\);\s*})/g,
    '\n        </Link>\n      </div>\n    </div>\n  );\n}'
  );
  
  // Fix any remaining issues with extra whitespace in Link elements;
  content = content.replace()
    /(\s*Contact Us\s*\n\s*
    '\n          Contact Us\n;)
  );
  
  return content;

// Function to process a single file;
function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const fixedContent = fixRemainingJSXIssues(content);
    
    if (content !== fixedContent) {
      fs.writeFileSync(filePath, fixedContent, 'utf8');
      console.log(`Fixed remaining JSX issues: ${filePath}`);
      return true;
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
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
console.log('Starting remaining JSX fixes...');
const processedCount = processDirectory('./app');
console.log(`Processed ${processedCount} files.`);