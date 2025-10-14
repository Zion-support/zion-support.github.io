import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Common fixes for syntax errors
const fixes = [
  // Fix broken CSS classes with missing spaces
  {
    pattern: /from-slate-9\s+00via-purple-9\s+0\s+0to-slate-9\s+0\s+0/g,
    replacement: 'from-slate-900 via-purple-900 to-slate-900'
  },
  {
    pattern: /from-emerald-90\s+0to-teal-9\s+0\s+0/g,
    replacement: 'from-emerald-900 to-teal-900'
  },
  {
    pattern: /text-whitepy-2\s+0/g,
    replacement: 'text-white py-20'
  },
  {
    pattern: /containermx-autopx-4/g,
    replacement: 'container mx-auto px-4'
  },
  {
    pattern: /max-w-4xlmx-autotext-center/g,
    replacement: 'max-w-4xl mx-auto text-center'
  },
  {
    pattern: /text-4xlmd:text-6xlfont-boldmb-6/g,
    replacement: 'text-4xl md:text-6xl font-bold mb-6'
  },
  {
    pattern: /text-xlmd:text-2xlmb-8text-emerald-10\s+0/g,
    replacement: 'text-xl md:text-2xl mb-8 text-emerald-100'
  },
  {
    pattern: /min-h-screenbg-gray-50/g,
    replacement: 'min-h-screen bg-gray-50'
  },
  {
    pattern: /bg-gradient-to-rfrom-emerald-90\s+0to-teal-9\s+0\s+0text-whitepy-2\s+0/g,
    replacement: 'bg-gradient-to-r from-emerald-900 to-teal-900 text-white py-20'
  },
  // Fix broken array syntax
  {
    pattern: /const\s+services\s*=\s*\[\s*\{/g,
    replacement: 'const services = [\n    {'
  },
  {
    pattern: /,\s*;\s*title:/g,
    replacement: ',\n    {\n      title:'
  },
  {
    pattern: /,\s*title:/g,
    replacement: ',\n    {\n      title:'
  },
  // Fix broken JSX structure
  {
    pattern: /className="[^"]*\[[^\]]*\]"[^>]*>/g,
    replacement: (match) => {
      // Remove broken regex patterns in className
      return match.replace(/\[[^\]]*\]/g, '');
    }
  },
  {
    pattern: /className="[^"]*"[^>]*>\s*<\/h3>/g,
    replacement: (match) => {
      // Fix empty h3 tags
      return match.replace(/>\s*<\/h3>/, '>Service Title</h3>');
    }
  },
  // Fix missing spaces in class names
  {
    pattern: /text-blue-900mb-2/g,
    replacement: 'text-blue-900 mb-2'
  },
  {
    pattern: /bg-green-50border/g,
    replacement: 'bg-green-50 border'
  },
  {
    pattern: /border-green-20\s+0rounded-lgp-6/g,
    replacement: 'border-green-200 rounded-lg p-6'
  },
  {
    pattern: /rounded-lgp-6/g,
    replacement: 'rounded-lg p-6'
  },
  // Fix broken closing tags
  {
    pattern: /<div[^>]*>\s*;\s*<div[^>]*>/g,
    replacement: (match) => {
      return match.replace(/;\s*/, '\n              ');
    }
  }
];

function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
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