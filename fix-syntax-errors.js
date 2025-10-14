#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Find all .tsx files with syntax errors
function findProblematicFiles() {
  try {
    const result = execSync('find app -name "*.tsx" -exec grep -l "\\';$" {} \\;', { encoding: 'utf8' });
    return result.trim().split('\n').filter(file => file.length > 0);
  } catch (error) {
    console.error('Error finding files:', error.message);
    return [];
  }
}

// Fix syntax errors in a file
function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Fix import statements with trailing semicolons and quotes
    content = content.replace(/import\s+([^;]+);'/g, "import $1;");
    
    // Fix string literals with trailing semicolons and quotes
    content = content.replace(/'([^']+)';/g, "'$1';");
    content = content.replace(/"([^"]+)";/g, '"$1";');
    
    // Fix JSX attributes with malformed quotes
    content = content.replace(/className="([^"]+)"/g, 'className="$1"');
    content = content.replace(/className='([^']+)'/g, "className='$1'");
    
    // Fix malformed JSX closing tags
    content = content.replace(/<\/[^>]+>"/g, (match) => match.replace('"', ''));
    content = content.replace(/<\/[^>]+>';/g, (match) => match.replace("';", ''));
    
    // Fix malformed JSX opening tags
    content = content.replace(/<([^>]+)>"/g, (match) => match.replace('"', ''));
    content = content.replace(/<([^>]+)>';/g, (match) => match.replace("';", ''));
    
    // Fix malformed JSX self-closing tags
    content = content.replace(/\/>"/g, '/>');
    content = content.replace(/\/>';/g, '/>');
    
    // Fix malformed JSX fragments
    content = content.replace(/<>"/g, '<>');
    content = content.replace(/<>';/g, '<>');
    content = content.replace(/<\/>"/g, '</>');
    content = content.replace(/<\/>';/g, '</>');
    
    // Fix malformed object properties
    content = content.replace(/(\w+):\s*'([^']+)';/g, "$1: '$2',");
    content = content.replace(/(\w+):\s*"([^"]+)";/g, '$1: "$2",');
    
    // Fix malformed array elements
    content = content.replace(/(\w+):\s*<([^>]+)>"/g, '$1: <$2>');
    content = content.replace(/(\w+):\s*<([^>]+)>';/g, '$1: <$2>');
    
    // Fix malformed function calls
    content = content.replace(/(\w+)\(([^)]+)\)"/g, '$1($2)');
    content = content.replace(/(\w+)\(([^)]+)\)';/g, '$1($2)');
    
    // Fix malformed template literals
    content = content.replace(/`([^`]+)`"/g, '`$1`');
    content = content.replace(/`([^`]+)`';/g, '`$1`');
    
    // Fix malformed JSX expressions
    content = content.replace(/\{([^}]+)\}"/g, '{$1}');
    content = content.replace(/\{([^}]+)\}';/g, '{$1}');
    
    // Fix malformed comments
    content = content.replace(/\/\*([^*]+)\*\/"/g, '/*$1*/');
    content = content.replace(/\/\*([^*]+)\*\/';/g, '/*$1*/');
    
    // Fix malformed return statements
    content = content.replace(/return\s+\(([^)]+)\)"/g, 'return ($1)');
    content = content.replace(/return\s+\(([^)]+)\)';/g, 'return ($1)');
    
    // Fix malformed export statements
    content = content.replace(/export\s+default\s+([^;]+);'/g, 'export default $1;');
    
    // Fix malformed React.lazy calls
    content = content.replace(/React\.lazy\(\(\)\s*=>\s*import\('([^']+)'\)\);'/g, "React.lazy(() => import('$1'));");
    
    // Write the fixed content back
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Fixed: ${filePath}`);
    return true;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Main function
function main() {
  console.log('Finding files with syntax errors...');
  const problematicFiles = findProblematicFiles();
  
  if (problematicFiles.length === 0) {
    console.log('No files with syntax errors found.');
    return;
  }
  
  console.log(`Found ${problematicFiles.length} files with syntax errors.`);
  
  let fixedCount = 0;
  for (const file of problematicFiles) {
    if (fixFile(file)) {
      fixedCount++;
    }
  }
  
  console.log(`Fixed ${fixedCount} out of ${problematicFiles.length} files.`);
}

main();