#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Function to fix a single file
function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Fix missing closing braces at the end of files
    if (content.match(/^\s*\}\s*$/m) && !content.includes('export default')) {
      // Add export default if missing
      if (!content.includes('export default')) {
        content = content.replace(/(\s*\}\s*)$/m, '$1\n\nexport default ComponentName;');
        modified = true;
      }
    }
    
    // Fix missing closing braces in JSX
    content = content.replace(/(<div[^>]*>)([^<]*<h1[^>]*>.*<\/h1>)([^<]*<p[^>]*>.*<\/p>)([^<]*<\/div>)([^<]*<\/div>)([^<]*<\/section>)([^<]*<\/div>)([^<]*<\/>)([^<]*\}\);)/gm, 
      '$1$2$3$4$5$6$7$8$9');
    
    // Fix missing function declarations
    if (content.includes('return (<div') && !content.includes('const ') && !content.includes('function ')) {
      content = 'const ComponentName = () => {\n' + content;
      modified = true;
    }
    
    // Fix missing closing braces for functions
    if (content.includes('</div>') && !content.includes('};') && !content.includes('export default')) {
      content = content.replace(/(<\/div>\s*<\/>\s*)(\s*)$/gm, '$1\n  );\n};\n\nexport default ComponentName;');
      modified = true;
    }
    
    // Fix specific patterns for AI service pages
    if (filePath.includes('ai-') && filePath.includes('page.tsx')) {
      // Fix missing closing braces
      content = content.replace(/(\s+)(<\/div>\s*<\/section>\s*<\/div>\s*<\/>\s*)(\s*)(\}\);)/gm, '$1$2$3$4');
      
      // Fix missing function declarations
      if (content.includes('return (<div') && !content.includes('const ')) {
        content = 'const ComponentName = () => {\n' + content;
        modified = true;
      }
    }
    
    // Fix blockchain-web3 specific issues
    if (filePath.includes('blockchain-web3')) {
      content = content.replace(/(\s+)(<div[^>]*>)(\s*)(<h1[^>]*>.*<\/h1>)(\s*)(<p[^>]*>.*<\/p>)(\s*)(<\/div>)(\s*)(<\/div>)(\s*)(<\/section>)(\s*)(<\/div>)(\s*)(<\/>)(\s*)(\}\);)/gm, 
        '$1$2$3$4$5$6$7$8$9$10$11$12$13$14$15$16$17');
    }
    
    // Fix careers page specific issues
    if (filePath.includes('careers')) {
      content = content.replace(/(\s+)(<div[^>]*>)(\s*)(<h1[^>]*>.*<\/h1>)(\s*)(<p[^>]*>.*<\/p>)(\s*)(<\/div>)(\s*)(<\/div>)(\s*)(<\/section>)(\s*)(<\/div>)(\s*)(<\/>)(\s*)(\}\);)/gm, 
        '$1$2$3$4$5$6$7$8$9$10$11$12$13$14$15$16$17');
    }
    
    // Fix cloud-infrastructure-management specific issues
    if (filePath.includes('cloud-infrastructure-management')) {
      content = content.replace(/(\s+)(<div[^>]*>)(\s*)(<h1[^>]*>.*<\/h1>)(\s*)(<p[^>]*>.*<\/p>)(\s*)(<\/div>)(\s*)(<\/div>)(\s*)(<\/section>)(\s*)(<\/div>)(\s*)(<\/>)(\s*)(\}\);)/gm, 
        '$1$2$3$4$5$6$7$8$9$10$11$12$13$14$15$16$17');
    }
    
    // Fix community page specific issues
    if (filePath.includes('community')) {
      content = content.replace(/(\s+)(<div[^>]*>)(\s*)(<h1[^>]*>.*<\/h1>)(\s*)(<p[^>]*>.*<\/p>)(\s*)(<\/div>)(\s*)(<\/div>)(\s*)(<\/section>)(\s*)(<\/div>)(\s*)(<\/>)(\s*)(\}\);)/gm, 
        '$1$2$3$4$5$6$7$8$9$10$11$12$13$14$15$16$17');
    }
    
    // Fix compliance page specific issues
    if (filePath.includes('compliance')) {
      content = content.replace(/(\s+)(<div[^>]*>)(\s*)(<h1[^>]*>.*<\/h1>)(\s*)(<p[^>]*>.*<\/p>)(\s*)(<\/div>)(\s*)(<\/div>)(\s*)(<\/section>)(\s*)(<\/div>)(\s*)(<\/>)(\s*)(\}\);)/gm, 
        '$1$2$3$4$5$6$7$8$9$10$11$12$13$14$15$16$17');
    }
    
    if (modified || content !== fs.readFileSync(filePath, 'utf8')) {
      fs.writeFileSync(filePath, content);
      console.log(`Fixed: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Function to find all TypeScript/JavaScript files
function findFiles(dir, extensions = ['.tsx', '.ts', '.jsx', '.js']) {
  const files = [];
  
  function traverse(currentDir) {
    const items = fs.readdirSync(currentDir);
    
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        if (!['node_modules', '.git', 'dist', 'build', '.next'].includes(item)) {
          traverse(fullPath);
        }
      } else if (extensions.some(ext => item.endsWith(ext))) {
        files.push(fullPath);
      }
    }
  }
  
  traverse(dir);
  return files;
}

// Main execution
console.log('Starting remaining error fixes...');

const appDir = path.join(__dirname, 'app');
const files = findFiles(appDir);

let fixedCount = 0;
let errorCount = 0;

files.forEach(file => {
  try {
    if (fixFile(file)) {
      fixedCount++;
    }
  } catch (error) {
    console.error(`Error processing ${file}:`, error.message);
    errorCount++;
  }
});

console.log(`\nFixed ${fixedCount} files`);
console.log(`Errors in ${errorCount} files`);

// Run type check to see remaining errors
console.log('\nRunning type check...');
try {
  execSync('pnpm run type-check', { stdio: 'inherit' });
} catch (error) {
  console.log('Type check completed with errors (expected)');
}