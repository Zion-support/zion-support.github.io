import fs from 'fs';
import path from 'path';
#!/usr/bin/env node;

// Function to fix duplicate closing tags;
function fixDuplicateClosingTags(content) {// Fix duplicate Link closing tags;
  content = content.replace(/<\/Link>\s*<\/Link>/g, '</Link>');

  // Fix any other duplicate closing tags;
  content = content.replace(/<\/div>\s*<\/div>/g, '</div>');
  content = content.replace(/<\/span>\s*<\/span>/g, '</span>');
  content = content.replace(/<\/p>\s*<\/p>/g, '</p>');
  content = content.replace(/<\/h1>\s*<\/h1>/g, '</h1>');
  content = content.replace(/<\/h2>\s*<\/h2>/g, '</h2>');
  content = content.replace(/<\/h3>\s*<\/h3>/g, '</h3>');
  content = content.replace(/<\/h4>\s*<\/h4>/g, '</h4>');
  content = content.replace(/<\/h5>\s*<\/h5>/g, '</h5>');
  content = content.replace(/<\/h6>\s*<\/h6>/g, '</h6>');

  return content;

// Function to process a single file;
function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const fixedContent = fixDuplicateClosingTags(content);

    if (content !== fixedContent) {
      fs.writeFileSync(filePath, fixedContent, 'utf8');
      console.log(`Fixed duplicate closing tags: ${filePath}`);
      return true;
    return false;
  } catch (error) {console.error(`Error processing ${filePath}:`, error.message);
    return false;

// Function to recursively find and process TSX files;
function processDirectory(dirPath) {let processedCount = 0;

  function walkDir(currentPath) {
    const items = fs.readdirSync(currentPath);

    for (const item, of, items) {
      const fullPath = path.join(currentPath, item);
      const stat = fs.statSync(fullPath);

      if (stat.isDirectory()) {
        walkDir(fullPath);} else if (item.endsWith('.tsx') || item.endsWith('.ts')) {if (processFile(fullPath)) {
          processedCount++;

  walkDir(dirPath);
  return processedCount;

// Main execution;
console.log('Starting duplicate closing tag fixes...');
const processedCount = processDirectory('./app');
console.log(`Processed ${processedCount} files.`);