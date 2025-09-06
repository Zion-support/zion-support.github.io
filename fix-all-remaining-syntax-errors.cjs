#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('🔧 Starting comprehensive syntax error fixes...');

// Function to fix common syntax errors
function fixSyntaxErrors(content) {
  // Fix semicolons in object properties and function parameters
  content = content.replace(/;\s*([a-zA-Z_$][a-zA-Z0-9_$]*\s*[:=])/g, ',\n  $1');
  content = content.replace(/;\s*([a-zA-Z_$][a-zA-Z0-9_$]*\s*[=:])/g, ',\n  $1');
  
  // Fix semicolons in object literals
  content = content.replace(/([a-zA-Z_$][a-zA-Z0-9_$]*\s*[:=][^,}]+);\s*([a-zA-Z_$])/g, '$1,\n  $2');
  
  // Fix malformed interface declarations
  content = content.replace(/export interface\s+([a-zA-Z_$][a-zA-Z0-9_$]*)\s*{\s*([^}]+)}\s*export const\s+([A-Z_]+):\s*([a-zA-Z_$][a-zA-Z0-9_$]*)\s*\[\]\s*=\s*\[\]/g, (match, interfaceName, interfaceBody, constName, typeName) => {
    const fixedInterfaceBody = interfaceBody
      .replace(/;\s*/g, ';\n  ')
      .replace(/\s*:\s*/g, ': ')
      .replace(/\s*\[\]/g, '[]')
      .replace(/\s*\?/g, '?');
    
    return `export interface ${interfaceName} {\n  ${fixedInterfaceBody}\n}\n\nexport const ${constName}: ${typeName}[] = [];`;
  });
  
  // Fix malformed object literals
  content = content.replace(/\{\s*([^}]+);\s*\}/g, (match, body) => {
    const fixedBody = body.replace(/;\s*/g, ',\n  ');
    return `{\n  ${fixedBody}\n}`;
  });
  
  // Fix malformed function parameters
  content = content.replace(/\(\s*([^)]+);\s*\)/g, (match, params) => {
    const fixedParams = params.replace(/;\s*/g, ',\n  ');
    return `(\n  ${fixedParams}\n)`;
  });
  
  // Fix HTML entities
  content = content.replace(/&apos;/g, "'");
  content = content.replace(/&quot;/g, '"');
  content = content.replace(/&lt;/g, '<');
  content = content.replace(/&gt;/g, '>');
  
  // Fix malformed imports
  content = content.replace(/import\s+([^;]+);\s*import/g, 'import $1;\nimport');
  
  // Fix malformed exports
  content = content.replace(/export\s+([^;]+);\s*export/g, 'export $1;\nexport');
  
  // Fix trailing commas in arrays and objects
  content = content.replace(/,(\s*[}\]])/g, '$1');
  
  // Fix malformed string literals
  content = content.replace(/'([^']*)'([^']*)'/g, "'$1$2'");
  content = content.replace(/"([^"]*)"([^"]*)"/g, '"$1$2"');
  
  return content;
}

// Function to fix specific file types
function fixFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const fixedContent = fixSyntaxErrors(content);
    
    if (content !== fixedContent) {
      fs.writeFileSync(filePath, fixedContent);
      console.log(`✅ Fixed: ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {
    console.log(`❌ Error fixing ${filePath}: ${error.message}`);
    return false;
  }
}

// Get all TypeScript and JavaScript files
const files = execSync('find . -name "*.ts" -o -name "*.tsx" -o -name "*.js" -o -name "*.jsx" | grep -v node_modules | grep -v .next', { encoding: 'utf8' })
  .split('\n')
  .filter(file => file.trim() && fs.existsSync(file));

let fixedCount = 0;
let errorCount = 0;

// Fix each file
files.forEach(file => {
  if (fixFile(file)) {
    fixedCount++;
  }
});

console.log(`\n🎉 Comprehensive syntax fixes completed!`);
console.log(`📊 Fixed: ${fixedCount} files`);
console.log(`❌ Errors: ${errorCount} files`);

// Run ESLint fix
console.log('\n🔧 Running ESLint fix...');
try {
  execSync('npm run lint:fix', { stdio: 'pipe' });
  console.log('✅ ESLint fix completed');
} catch (error) {
  console.log('⚠️ ESLint fix failed, continuing...');
}

// Run TypeScript check
console.log('\n🔧 Running TypeScript check...');
try {
  execSync('npm run type-check', { stdio: 'pipe' });
  console.log('✅ TypeScript check passed');
} catch (error) {
  console.log('⚠️ TypeScript check failed, continuing...');
}

console.log('\n🎯 All syntax fixes completed!');