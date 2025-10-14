import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Comprehensive CSS class fixes
const fixes = [
  // Fix missing spaces in CSS classes
  {
    pattern: /className="([^"]*?)([a-z])([A-Z])([^"]*?)"/g,
    replacement: (match, before, lower, upper, after) => {
      return `className="${before}${lower} ${upper}${after}"`;
    }
  },
  {
    pattern: /className="([^"]*?)([a-z])([0-9])([^"]*?)"/g,
    replacement: (match, before, letter, number, after) => {
      return `className="${before}${letter} ${number}${after}"`;
    }
  },
  {
    pattern: /className="([^"]*?)([0-9])([a-z])([^"]*?)"/g,
    replacement: (match, before, number, letter, after) => {
      return `className="${before}${number} ${letter}${after}"`;
    }
  },
  {
    pattern: /className="([^"]*?)([a-z])([a-z])([A-Z])([^"]*?)"/g,
    replacement: (match, before, l1, l2, upper, after) => {
      return `className="${before}${l1}${l2} ${upper}${after}"`;
    }
  },
  // Fix specific common patterns
  {
    pattern: /text-centermb-/g,
    replacement: 'text-center mb-'
  },
  {
    pattern: /text-3xlfont-bold/g,
    replacement: 'text-3xl font-bold'
  },
  {
    pattern: /text-gray-90\s+0/g,
    replacement: 'text-gray-900'
  },
  {
    pattern: /text-xltext-gray-/g,
    replacement: 'text-xl text-gray-'
  },
  {
    pattern: /ml-2w-/g,
    replacement: 'ml-2 w-'
  },
  {
    pattern: /w-5h-/g,
    replacement: 'w-5 h-'
  },
  {
    pattern: /bg-emerald-6\s+0\s+0/g,
    replacement: 'bg-emerald-600'
  },
  {
    pattern: /hover:bg-emerald-7\s+0\s+0/g,
    replacement: 'hover:bg-emerald-700'
  },
  {
    pattern: /text-whitefont-semibold/g,
    replacement: 'text-white font-semibold'
  },
  {
    pattern: /py-4px-/g,
    replacement: 'py-4 px-'
  },
  {
    pattern: /rounded-lgtransition-colors/g,
    replacement: 'rounded-lg transition-colors'
  }
];

function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Apply fixes
    fixes.forEach(fix => {
      const originalContent = content;
      if (typeof fix.replacement === 'function') {
        content = content.replace(fix.pattern, fix.replacement);
      } else {
        content = content.replace(fix.pattern, fix.replacement);
      }
      if (content !== originalContent) {
        modified = true;
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
  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
      files.push(...findTsxFiles(fullPath));
    } else if (item.endsWith('.tsx') || item.endsWith('.ts')) {
      files.push(fullPath);
    }
  }
  
  return files;
}

// Find all TSX files in the app directory
const appDir = path.join(__dirname, 'app');
const tsxFiles = findTsxFiles(appDir);

console.log(`Found ${tsxFiles.length} TSX files to check`);

let fixedCount = 0;
tsxFiles.forEach(file => {
  if (fixFile(file)) {
    fixedCount++;
  }
});

console.log(`Fixed ${fixedCount} files`);