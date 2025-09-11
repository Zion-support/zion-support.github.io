const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Common syntax error patterns and their fixes
const syntaxFixes = [
  // Fix extra semicolons and commas in type definitions
  {
    pattern: /,\s*;/g,
    replacement: ';'
  },
  {
    pattern: /;\s*;/g,
    replacement: ';'
  },
  {
    pattern: /export\s+type\s+(\w+)\s*=\s*([^;]+),\s*;/g,
    replacement: 'export type $1 = $2;'
  },
  {
    pattern: /export\s+type\s+(\w+)\s*=\s*{([^}]+)},\s*;/g,
    replacement: 'export type $1 = {$2};'
  },
  // Fix function declarations
  {
    pattern: /export\s+async\s+function\s+(\w+)\s*\([^)]*\)\s*{\s*;/g,
    replacement: 'export async function $1() {'
  },
  // Fix object properties
  {
    pattern: /(\w+):\s*([^,;]+),\s*;/g,
    replacement: '$1: $2;'
  },
  // Fix array types
  {
    pattern: /(\w+)\[\],\s*;/g,
    replacement: '$1[];'
  },
  // Fix union types
  {
    pattern: /\|\s*'([^']+)';\s*;/g,
    replacement: "| '$1';"
  },
  // Fix generic types
  {
    pattern: /Pick<\s*(\w+),\s*([^>]+)\s*>\s*&\s*{([^}]+)},\s*;/g,
    replacement: 'Pick<$1, $2> & {$3};'
  },
  // Fix Omit types
  {
    pattern: /Omit<(\w+)\s+'([^']+)'\s*>\s*&\s*{([^}]+)},\s*;/g,
    replacement: "Omit<$1, '$2'> & {$3};"
  },
  // Fix Record types
  {
    pattern: /Record<string\s+any>/g,
    replacement: 'Record<string, any>'
  },
  // Fix fetch options
  {
    pattern: /body:\s*JSON\.stringify\([^)]+\);\s*keepalive:\s*true\s+as\s+any\}/g,
    replacement: 'body: JSON.stringify($1),\n      keepalive: true as any\n    }'
  }
];

function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let originalContent = content;
    
    // Apply all syntax fixes
    syntaxFixes.forEach(fix => {
      content = content.replace(fix.pattern, fix.replacement);
    });
    
    // Additional specific fixes
    content = content
      .replace(/,\s*$/gm, '') // Remove trailing commas
      .replace(/;\s*$/gm, ';') // Ensure proper semicolons
      .replace(/\{\s*;\s*\}/g, '{}') // Fix empty objects with semicolons
      .replace(/\}\s*;\s*$/gm, '}') // Fix closing braces
      .replace(/\{\s*$/gm, '{') // Fix opening braces
      .replace(/\}\s*,\s*$/gm, '}') // Fix closing braces with commas
      .replace(/\{\s*;\s*([^}]+)\s*\}/g, '{$1}') // Fix objects with semicolons inside
      .replace(/\|\s*$/gm, '') // Remove trailing pipes
      .replace(/\|\s*\|\s*/g, '|') // Fix double pipes
      .replace(/\s+$/gm, '') // Remove trailing whitespace
      .replace(/\n\s*\n\s*\n/g, '\n\n'); // Fix multiple newlines
    
=======
console.log('🔧 Starting syntax error fixes...');

function fixSyntaxErrors(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    const originalContent = content;

    // Fix common syntax errors
    content = content.replace(/<<<<<<< HEAD[\s\S]*?=======[\s\S]*?>>>>>>> [^\n]+/g, '');
    content = content.replace(/<<<<<<< HEAD[\s\S]*?>>>>>>> [^\n]+/g, '');
    content = content.replace(/=======[\s\S]*?>>>>>>> [^\n]+/g, '');
    
    // Fix missing semicolons in imports
    content = content.replace(/import\s+([^;]+)\s*$/gm, 'import $1;');
    
    // Fix missing semicolons in exports
    content = content.replace(/export\s+([^;]+)\s*$/gm, 'export $1;');
    
    // Fix JSX syntax errors
    content = content.replace(/<([^>]+)>\s*$/gm, '<$1>');
    
    // Fix TypeScript interface syntax
    content = content.replace(/interface\s+(\w+)\s*\{\s*\}/g, 'interface $1 {}');
    
    // Fix missing closing braces
    const openBraces = (content.match(/\{/g) || []).length;
    const closeBraces = (content.match(/\}/g) || []).length;
    if (openBraces > closeBraces) {
      content += '\n}'.repeat(openBraces - closeBraces);
    }
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`✅ Fixed: ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {
<<<<<<< HEAD
function findFiles(dir, extensions) {
  const files = [];
  
  function traverse(currentDir) {
    try {
      const items = fs.readdirSync(currentDir);
      
      for (const item of items) {
        const fullPath = path.join(currentDir, item);
        const stat = fs.statSync(fullPath);
        
        if (stat.isDirectory()) {
          // Skip certain directories
          if (!['node_modules', '.git', 'dist', 'build', '.next', 'cache'].includes(item)) {
            traverse(fullPath);
          }
        } else if (stat.isFile()) {
          const ext = path.extname(item);
          if (extensions.includes(ext)) {
            files.push(fullPath);
          }
        }
=======
function processDirectory(dir) {
  const files = fs.readdirSync(dir);
  let fixedCount = 0;
  
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory() && !file.startsWith('.') && file !== 'node_modules') {
      fixedCount += processDirectory(filePath);
    } else if (file.match(/\.(ts|tsx|js|jsx)$/)) {
      if (fixSyntaxErrors(filePath)) {
        fixedCount++;      }
    } catch (error) {
      // Skip directories we can't read
    }
  }
  
  traverse(dir);
  return files;
}

console.log(`📁 Scanning ${targetDir} for files with extensions: ${extensions.join(', ')}`);

const files = findFiles(targetDir, extensions);
console.log(`📄 Found ${files.length} files to check`);

let fixedCount = 0;
let errorCount = 0;

for (const file of files) {
  try {
    if (fixFile(file)) {
      fixedCount++;
    }
  } catch (error) {
    console.error(`❌ Error processing ${file}:`, error.message);
    errorCount++;
  }
}

console.log(`\n🎉 Syntax fix complete!`);
console.log(`✅ Fixed: ${fixedCount} files`);
console.log(`❌ Errors: ${errorCount} files`);

// Run linter to check remaining issues
console.log('\n🔍 Running linter to check remaining issues...');
try {
  execSync('npm run lint', { stdio: 'inherit' });
} catch (error) {
  console.log('⚠️  Linter found remaining issues (this is expected)');
}
=======
const fixedCount = processDirectory('/workspace');
console.log(`🎉 Fixed ${fixedCount} files with syntax errors`);