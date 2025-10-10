#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Common patterns to fix
const fixes = [
  // Fix broken import statements
  {
    pattern: /import Footer from '\.\.\/components$/gm,
    replacement: "import Footer from '../components/Footer';"
  },
  {
    pattern: /import Navigation from '\.\.\/components$/gm,
    replacement: "import Navigation from '../components/Navigation';"
  },
  // Fix unterminated string literals in meta tags
  {
    pattern: /<meta name="description" content="[^"]*$/gm,
    replacement: (match) => {
      const content = match.match(/content="([^"]*)$/)?.[1] || '';
      return `<meta name="description" content="${content}" />`;
    }
  },
  {
    pattern: /<meta name="keywords" content="[^"]*$/gm,
    replacement: (match) => {
      const content = match.match(/content="([^"]*)$/)?.[1] || '';
      return `<meta name="keywords" content="${content}" />`;
    }
  },
  // Fix unterminated title tags
  {
    pattern: /<title>[^<]*$/gm,
    replacement: (match) => {
      const title = match.replace('<title>', '').trim();
      return `<title>${title}</title>`;
    }
  },
  // Fix missing semicolons after imports
  {
    pattern: /from 'lucide-react'$/gm,
    replacement: "from 'lucide-react';"
  },
  // Fix broken component declarations
  {
    pattern: /const PagePage: React\.FC = \(\) => \{const features = \[/gm,
    replacement: "const PagePage: React.FC = () => {\n  const features = ["
  },
  // Fix missing closing braces
  {
    pattern: /^\s*const features = \[[\s\S]*?^\s*\];\s*$/gm,
    replacement: (match) => {
      if (!match.includes('];')) {
        return match.replace(/\]\s*$/, '];');
      }
      return match;
    }
  },
  // Fix broken JSX closing tags
  {
    pattern: /<div[^>]*>\s*$/gm,
    replacement: (match) => {
      if (!match.includes('/>')) {
        return match.replace('>', '>');
      }
      return match;
    }
  }
];

function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    fixes.forEach(fix => {
      if (typeof fix.replacement === 'function') {
        const newContent = content.replace(fix.pattern, fix.replacement);
        if (newContent !== content) {
          content = newContent;
          modified = true;
        }
      } else {
        const newContent = content.replace(fix.pattern, fix.replacement);
        if (newContent !== content) {
          content = newContent;
          modified = true;
        }
      }
    });
    
    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
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
  
  function traverse(currentDir) {
    const items = fs.readdirSync(currentDir);
    
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        traverse(fullPath);
      } else if (item.endsWith('.tsx')) {
        files.push(fullPath);
      }
    }
  }
  
  traverse(dir);
  return files;
}

// Main execution
console.log('Starting syntax error fixes...');

const appDir = path.join(__dirname, 'app');
const tsxFiles = findTsxFiles(appDir);

console.log(`Found ${tsxFiles.length} .tsx files`);

let fixedCount = 0;
for (const file of tsxFiles) {
  if (fixFile(file)) {
    fixedCount++;
  }
}

console.log(`Fixed ${fixedCount} files`);

// Also fix the main App.tsx
const appTsxPath = path.join(__dirname, 'App.tsx');
if (fs.existsSync(appTsxPath)) {
  if (fixFile(appTsxPath)) {
    console.log('Fixed: App.tsx');
    fixedCount++;
  }
}

console.log(`Total files fixed: ${fixedCount}`);