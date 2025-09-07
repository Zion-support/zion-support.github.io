#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

console.log('🔧 Fixing syntax errors in all TypeScript/JavaScript files...');

// Function to fix common syntax errors
function fixSyntaxErrors(content) {
  // Fix malformed import statements
  content = content.replace(/import\s+([^"]*)\s+from\s+"([^"]*)"\s*;/g, (match, imports, module) => {
    return `import ${imports} from '${module}';`;
  });
  
  // Fix malformed string literals
  content = content.replace(/"([^"]*)"\s*;/g, (match, str) => {
    return `'${str}';`;
  });
  
  // Fix malformed JSX
  content = content.replace(/<([^>]*)\s*\/>/g, (match, tag) => {
    return `<${tag} />`;
  });
  
  // Fix malformed function declarations
  content = content.replace(/const\s+(\w+)\s*=\s*\(\s*const\s+/g, 'const $1 = (');
  
  // Fix malformed object destructuring
  content = content.replace(/useState<string\s*\|\s*null\s*\/>/g, 'useState<string | null>');
  
  // Fix malformed try-catch blocks
  content = content.replace(/}\s*catch\s*\([^)]*\)\s*{\s*}/g, '} catch (e) {');
  
  // Fix malformed JSX closing tags
  content = content.replace(/<([^>]*)\s*\/>/g, (match, tag) => {
    return `<${tag} />`;
  });
  
  // Fix malformed Head component
  content = content.replace(/<Head\s*\/>\s*<title\s*\/>/g, '<Head><title>');
  
  // Fix malformed closing tags
  content = content.replace(/<\/title>\s*<\/Head>/g, '</title></Head>');
  
  return content;
}

// Function to process a file
function processFile(filePath) {
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
    console.error(`❌ Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Function to recursively find and process files
function processDirectory(dirPath) {
  const files = fs.readdirSync(dirPath);
  let fixedCount = 0;
  
  for (const file of files) {
    const filePath = path.join(dirPath, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      // Skip node_modules and other common directories
      if (!['node_modules', '.next', 'dist', 'out'].includes(file)) {
        fixedCount += processDirectory(filePath);
      }
    } else if (file.endsWith('.tsx') || file.endsWith('.ts') || file.endsWith('.jsx') || file.endsWith('.js')) {
      if (processFile(filePath)) {
        fixedCount++;
      }
    }
  }
  
  return fixedCount;
}

// Process the workspace
const workspacePath = process.cwd();
console.log(`📁 Processing workspace: ${workspacePath}`);

const fixedCount = processDirectory(workspacePath);
console.log(`🎉 Fixed ${fixedCount} files with syntax errors`);

// Also fix specific known problematic files
const specificFiles = [
  'pages/design-map.tsx',
  'pages/pricing.tsx',
  'pages/privacy.tsx',
  'pages/space-tech.tsx'
];

for (const file of specificFiles) {
  const filePath = path.join(workspacePath, file);
  if (fs.existsSync(filePath)) {
    processFile(filePath);
  }
}

console.log('✨ Syntax error fixing completed!');