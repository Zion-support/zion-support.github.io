#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Fix missing imports - add common missing icons
    const missingImports = ['Crown', 'Building', 'MousePointer', 'Volume2', 'Target', 'BarChart'];
    const importLine = content.match(/import.*from 'lucide-react';/);
    if (importLine) {
      const currentImports = importLine[0];
      const missingIcons = missingImports.filter(icon => !currentImports.includes(icon));
      if (missingIcons.length > 0) {
        const newImport = currentImports.replace(
          /} from 'lucide-react';/,
          `, ${missingIcons.join(', ')} } from 'lucide-react';`
        );
        content = content.replace(currentImports, newImport);
        modified = true;
      }
    }
    
    // Fix malformed object definitions with duplicate description
    const duplicateDescPattern = /(\s+description:\s*'[^']*'\s*)\s+description:\s*'[^']*'\s*\}\s*\]/g;
    if (duplicateDescPattern.test(content)) {
      content = content.replace(duplicateDescPattern, '$1\n  }];');
      modified = true;
    }
    
    // Fix missing closing tags in React.Fragment
    const fragmentPattern = /(<React\.Fragment>[\s\S]*?)(<\/div>\s*<\/div>\s*<\/div>)/g;
    if (fragmentPattern.test(content)) {
      content = content.replace(fragmentPattern, '$1</React.Fragment>$2');
      modified = true;
    }
    
    // Fix missing closing tags for sections
    const sectionPattern = /(<section[^>]*>[\s\S]*?)(<\/div>\s*<\/div>\s*<\/div>)/g;
    if (sectionPattern.test(content)) {
      content = content.replace(sectionPattern, '$1</section>$2');
      modified = true;
    }
    
    // Fix missing closing tags in grid layouts
    const gridPattern = /(<div\s+key={[^}]+}\s+className="[^"]*"[^>]*>[\s\S]*?<p[^>]*>[^<]+<\/p>)\s*(<\/div>\s*\)\s*\)\s*<\/div>\s*<\/section>)/g;
    if (gridPattern.test(content)) {
      content = content.replace(gridPattern, '$1</div>$2');
      modified = true;
    }
    
    // Fix specific syntax errors in object definitions
    content = content.replace(
      /(\s+description:\s*'[^']*'\s*)\s+description:\s*'[^']*'\s*\}\s*\]/g,
      '$1\n  }];'
    );
    
    // Fix missing closing tags for sections
    content = content.replace(
      /(<section[^>]*>[\s\S]*?)(<\/div>\s*<\/div>\s*<\/div>)/g,
      '$1</section>$2'
    );
    
    // Fix React.Fragment closing
    content = content.replace(
      /(<React\.Fragment>[\s\S]*?)(<\/div>\s*<\/div>\s*<\/div>)/g,
      '$1</React.Fragment>$2'
    );
    
    // Fix malformed JSX structure with missing closing tags
    content = content.replace(
      /(<div\s+key={[^}]+}\s+className="[^"]*"[^>]*>[\s\S]*?<p[^>]*>[^<]+<\/p>)\s*(<\/div>\s*\)\s*\)\s*<\/div>\s*<\/section>)/g,
      '$1</div>$2'
    );
    
    // Fix missing closing tags in button groups
    content = content.replace(
      /(<a\s+href="[^"]*"\s+className="[^"]*"[^>]*>\s*[^<]+\s*)\s*(<\/div>\s*<\/div>\s*<\/section>)/g,
      '$1</a>$2'
    );
    
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

function findTsxFiles(dir) {
  const files = [];
  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      files.push(...findTsxFiles(fullPath));
    } else if (item.endsWith('.tsx')) {
      files.push(fullPath);
    }
  }
  
  return files;
}

// Main execution
console.log('Starting comprehensive error fixes...');

const appDir = path.join(__dirname, 'app');
const tsxFiles = findTsxFiles(appDir);

let fixedCount = 0;
for (const file of tsxFiles) {
  if (fixFile(file)) {
    fixedCount++;
  }
}

console.log(`Fixed ${fixedCount} files`);

// Run type check to see remaining errors
console.log('\nRunning type check...');
try {
  execSync('npm run type-check', { stdio: 'inherit' });
} catch (error) {
  console.log('Type check completed with errors (this is expected)');
}