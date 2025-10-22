#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Common patterns that need fixing
const fixes = [
  // Fix unclosed <a> tags in button sections
  {
    pattern: /(<a\s+href="[^"]*"\s+className="[^"]*"[^>]*>\s*[^<]+\s*<\/a>\s*<a\s+href="[^"]*"\s+className="[^"]*"[^>]*>\s*[^<]+\s*)(<\/div>)/g,
    replacement: '$1</a>$2'
  },
  // Fix missing closing </a> tags
  {
    pattern: /(<a\s+href="[^"]*"\s+className="[^"]*"[^>]*>\s*[^<]+)\s*(<\/div>)/g,
    replacement: '$1</a>$2'
  },
  // Fix missing closing tags for sections
  {
    pattern: /(<section[^>]*>[\s\S]*?)(<\/div>\s*<\/div>\s*<\/div>)/g,
    replacement: '$1</section>$2'
  },
  // Fix malformed object definitions
  {
    pattern: /(\s+description:\s*'[^']*'\s*)\s+description:\s*'[^']*'\s*\}\s*\]/g,
    replacement: '$1\n  }];'
  },
  // Fix missing closing tags in React.Fragment
  {
    pattern: /(<React\.Fragment>[\s\S]*?)(<\/div>\s*<\/div>\s*<\/div>)/g,
    replacement: '$1</React.Fragment>$2'
  }
];

function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Apply all fixes
    fixes.forEach(fix => {
      const newContent = content.replace(fix.pattern, fix.replacement);
      if (newContent !== content) {
        content = newContent;
        modified = true;
      }
    });
    
    // Additional specific fixes for common patterns
    // Fix missing closing </a> tags in button groups
    content = content.replace(
      /(<a\s+href="[^"]*"\s+className="[^"]*"[^>]*>\s*[^<]+\s*)\s*(<\/div>\s*<\/div>\s*<\/section>)/g,
      '$1</a>$2'
    );
    
    // Fix missing closing tags in grid layouts
    content = content.replace(
      /(<div\s+key={[^}]+}\s+className="[^"]*"[^>]*>[\s\S]*?<p[^>]*>[^<]+<\/p>)\s*(<\/div>\s*\)\s*\)\s*<\/div>\s*<\/section>)/g,
      '$1</div>$2'
    );
    
    // Fix malformed array definitions
    content = content.replace(
      /(\s+description:\s*'[^']*'\s*)\s+description:\s*'[^']*'\s*\}\s*\]/g,
      '$1\n  }];'
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
console.log('Starting JSX error fixes...');

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