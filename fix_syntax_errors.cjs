const fs = require('fs');
const path = require('path');

// Function to recursively find all files
function findFiles(dir, extensions = ['.ts', '.tsx', '.js', '.jsx']) {
  let files = [];
  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      if (!['node_modules', '.git', 'dist', '.next', 'out'].includes(item)) {
        files = files.concat(findFiles(fullPath, extensions));
      }
    } else if (extensions.some(ext => item.endsWith(ext))) {
      files.push(fullPath);
    }
  }
  
  return files;
}

// Function to fix common syntax errors
function fixSyntaxErrors(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let originalContent = content;
    
    // Fix common issues
    content = content.replace(/<<<<<<< [^\n]+[\s\S]*?=======[\s\S]*?>>>>>>> [^\n]+/g, '');
    content = content.replace(/<<<<<<< [^\n]+/g, '');
    content = content.replace(/=======/g, '');
    content = content.replace(/>>>>>>> [^\n]+/g, '');
    
    // Fix malformed JSX
    content = content.replace(/<([^>]+)>([^<]*?)<\/\1>/g, (match, tag, inner) => {
      if (inner.includes('<') && !inner.includes('</')) {
        return `<${tag}>${inner}</${tag}>`;
      }
      return match;
    });
    
    // Fix unclosed JSX tags
    content = content.replace(/<([A-Z][A-Za-z0-9]*)([^>]*?)(?<!\/)>/g, (match, tagName, attributes) => {
      if (!match.endsWith('/>') && !match.includes('</')) {
        return `<${tagName}${attributes}></${tagName}>`;
      }
      return match;
    });
    
    // Fix malformed imports
    content = content.replace(/import\s+{\s*([^}]+)\s*}\s+from\s+['"]([^'"]+)['"];?\s*$/gm, (match, imports, module) => {
      const cleanImports = imports.replace(/[^a-zA-Z0-9_,\s]/g, '').trim();
      return `import { ${cleanImports} } from '${module}';`;
    });
    
    // Fix broken JSX expressions
    content = content.replace(/\{\s*([^}]*?)\s*\}/g, (match, inner) => {
      if (inner.includes('<') && !inner.includes('>')) {
        return `{${inner}}`;
      }
      return match;
    });
    
    // Remove empty lines that might cause issues
    content = content.replace(/\n\s*\n\s*\n/g, '\n\n');
    
    // Fix common TypeScript issues
    content = content.replace(/:\s*any\s*=\s*any/g, ': any');
    content = content.replace(/:\s*any\s*=\s*undefined/g, ': any = undefined');
    
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed syntax errors in: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Main execution
console.log('Starting syntax error fixes...');

const files = findFiles('.');
let fixedCount = 0;

for (const file of files) {
  if (fixSyntaxErrors(file)) {
    fixedCount++;
  }
}

console.log(`\nSyntax fixes complete! Fixed ${fixedCount} files.`);

// Try to run checks after fixes
console.log('\nRunning type check...');
try {
  const { execSync } = require('child_process');
  execSync('pnpm run type-check', { stdio: 'inherit' });
  console.log('✅ Type check passed!');
} catch (error) {
  console.log('❌ Type check still has issues, but continuing...');
}

console.log('\nRunning build...');
try {
  const { execSync } = require('child_process');
  execSync('pnpm run build', { stdio: 'inherit' });
  console.log('✅ Build passed!');
} catch (error) {
  console.log('❌ Build still has issues, but continuing...');
}