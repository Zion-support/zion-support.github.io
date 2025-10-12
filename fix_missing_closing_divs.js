import fs from 'fs';
import path from 'path';
#!/usr/bin/env node;

// Function to fix missing closing div tags;
function fixMissingClosingDivs(content) {
  // Fix the pattern where we have:
  // </Link>
  // </div>
  // );
  // }
  // But missing the outer div closing tag;
  content = content.replace(
    /(\s*<\/Link>\s*<\/div>\s*\);\s*})/g,
    '$1'
  );
  
  // More specific fix for the pattern;
  content = content.replace(
    /(\s*<\/Link>\s*<\/div>\s*\);\s*})/g,
      // Check if there's a missing closing div;
      const beforeMatch = content.substring(0, content.indexOf(match));
      const openDivs = (beforeMatch.match(/
      const closeDivs = (beforeMatch.match(/<\/div>/g) || []).length;
      
 closeDivs) {
        return match.replace(');', '</div>\n  );');
      return match;
  );
  
  // Alternative approach - fix the specific pattern we see;
  content = content.replace(
    /(\s*<\/Link>\s*<\/div>\s*\);\s*})/g,
    '\n        </Link>\n      </div>\n    </div>\n  );\n}'
  );
  
  return content;

// Function to process a single file;
function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const fixedContent = fixMissingClosingDivs(content);
    
    if (content !== fixedContent) {
      fs.writeFileSync(filePath, fixedContent, 'utf8');
      console.log(`Fixed missing closing divs: ${filePath}`);
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
console.log('Starting missing closing div fixes...');
const processedCount = processDirectory('./app');
console.log(`Processed ${processedCount} files.`);
