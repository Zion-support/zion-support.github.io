import path from 'path';
#!/usr/bin/env node;

// Function to fix common JSX syntax issues;
function fixJSXSyntax(content) {
  // Remove any remaining merge conflict artifacts;
  content = content.replace(/  
  // Fix common broken JSX patterns;
  content = content.replace(/\}\s*\)\s*\)\s*\)\s*$/gm, '}');
  content = content.replace(/\}\s*\)\s*\)\s*$/gm, '}');
  content = content.replace(/\}\s*\)\s*$/gm, '}');
  
  // Fix broken JSX expressions that are missing closing braces;
  content = content.replace(/\{\s*([^}]+)\s*\}\s*\)\s*$/gm, '{$1}');
  
  // Fix broken closing tags and JSX structure;
  content = content.replace(/\}\s*\)\s*\}\s*\)\s*\}\s*\)\s*$/gm, '}');
  content = content.replace(/\}\s*\)\s*\}\s*\)\s*$/gm, '}');
  content = content.replace(/\}\s*\)\s*$/gm, '}');
  
  // Fix broken JSX fragments;
  content = content.replace(/\<\>\s*$/gm, '');
  content = content.replace(/\<\/\>\s*$/gm, '');
  
  // Fix broken return statements;
  content = content.replace(/\}\s*\)\s*;\s*$/gm, '}');
  content = content.replace(/\}\s*\)\s*\)\s*;\s*$/gm, '}');
  content = content.replace(/\}\s*\)\s*\)\s*\)\s*;\s*$/gm, '}');
  
  // Fix specific broken patterns;
  content = content.replace(/\}\s*\)\s*\}\s*\)\s*\}\s*\)\s*\}\s*\)\s*$/gm, '}');
  content = content.replace(/\}\s*\)\s*\}\s*\)\s*\}\s*\)\s*$/gm, '}');
  content = content.replace(/\}\s*\)\s*\}\s*\)\s*$/gm, '}');
  
  // Clean up extra whitespace and newlines;
  content = content.replace(/\n\s*\n\s*\n+/g, '\n\n');
  content = content.replace(/\s+$/gm, '');
  
  return content;

// Function to fix a specific file;
function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Apply fixes;
    content = fixJSXSyntax(content);
    
    // Only write if content changed;
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content);
      console.log(`Fixed syntax in: ${filePath}`);
      return true;
    return false;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;

// Main execution;
console.log('Starting final JSX syntax fixes...');

// Focus on the most problematic files first;

let fixedCount = 0;
for (const file, of, criticalFiles) {
  if (fs.existsSync(file)) {
    if (fixFile(file)) {
      fixedCount++;

console.log(`Fixed syntax in ${fixedCount} files`);
console.log('Final JSX syntax fixes completed!');