<<<<<<< HEAD

=======
>>>>>>> cursor/website-audit-and-update-with-deployment-2b79
#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function fixHtmlEntities(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
<<<<<<< HEAD

    
    // Fix common HTML entities
    const fixes = [

=======
// Fix common HTML entities
    const fixes = [
>>>>>>> cursor/website-audit-and-update-with-deployment-2b79
      { from: /&apos;/g, to: "'" },
      { from: /&quot;/g, to: '"' },
      { from: /&lt;/g, to: '<' },
      { from: /&gt;/g, to: '>' },
      { from: /&amp;/g, to: '&' },
<<<<<<< HEAD

      { from: /&rbrace;/g, to: '}' },
=======
{ from: /&rbrace;/g, to: '}' },
>>>>>>> cursor/website-audit-and-update-with-deployment-2b79
      { from: /&lbrace;/g, to: '{' }
    ];
    
    let hasChanges = false;
    fixes.forEach(fix => {
      if (fix.from.test(content)) {
        content = content.replace(fix.from, fix.to);
        hasChanges = true;
      }
    });
    
    if (hasChanges) {
<<<<<<< HEAD

=======
>>>>>>> cursor/website-audit-and-update-with-deployment-2b79
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed HTML entities in: ${filePath}`);
      return true;
    }
<<<<<<< HEAD

    

=======
>>>>>>> cursor/website-audit-and-update-with-deployment-2b79
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

function findTsxFiles(dir) {
  const files = [];
  
  function traverse(currentDir) {
    const items = fs.readdirSync(currentDir);
    
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
        traverse(fullPath);
      } else if (item.endsWith('.tsx') || item.endsWith('.ts')) {
        files.push(fullPath);
      }
    }
  }
  
  traverse(dir);
  return files;
}

// Main execution
const appDir = path.join(__dirname, 'app');
const files = findTsxFiles(appDir);

console.log(`Found ${files.length} TypeScript files to process...`);

let fixedCount = 0;
files.forEach(file => {
  if (fixHtmlEntities(file)) {
    fixedCount++;
  }
});

console.log(`Fixed HTML entities in ${fixedCount} files.`);
<<<<<<< HEAD

=======
>>>>>>> cursor/website-audit-and-update-with-deployment-2b79
