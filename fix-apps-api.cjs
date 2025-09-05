const fs = require('fs');

function fixAppsApi() {
  const filePath = 'apps.backup/api/src/index.ts';
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Fix all the syntax issues
  content = content.replace(/_'/g, "'"); // Remove underscores from strings
  content = content.replace(/_(\w+)/g, '$1'); // Remove underscores from variable names
  content = content.replace(/(\w+)\s*{(\w+)/g, '$1 {\n  $2'); // Add proper formatting
  content = content.replace(/(\w+)\s*}(\w+)/g, '$1\n}\n$2'); // Add proper formatting
  content = content.replace(/(\w+)\s*{(\w+)\s*}/g, '$1 {\n  $2\n}'); // Fix single line objects
  content = content.replace(/(\w+)\s*{(\w+)\s*,\s*(\w+)\s*}/g, '$1 {\n  $2,\n  $3\n}'); // Fix multi-line objects
  content = content.replace(/(\w+)\s*{(\w+)\s*,\s*(\w+)\s*,\s*(\w+)\s*}/g, '$1 {\n  $2,\n  $3,\n  $4\n}'); // Fix larger objects
  
  // Fix missing semicolons
  content = content.replace(/(\w+)\s*$/gm, '$1;');
  content = content.replace(/;\s*;/g, ';'); // Remove double semicolons
  
  // Fix missing commas in objects
  content = content.replace(/(\w+)\s*\n\s*(\w+)/g, '$1,\n$2');
  
  // Fix function calls
  content = content.replace(/app\.post\((\w+),/g, 'app.post($1,');
  
  // Clean up extra whitespace
  content = content.replace(/\n\s*\n\s*\n/g, '\n\n');
  
  fs.writeFileSync(filePath, content);
  console.log('Fixed apps.backup/api/src/index.ts');
}

fixAppsApi();