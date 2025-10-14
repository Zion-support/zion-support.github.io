import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// More comprehensive fixes for remaining syntax errors
const fixes = [
  // Fix missing spaces in CSS classes
  {
    pattern: /bg-gradient-to-rfrom-/g,
    replacement: 'bg-gradient-to-r from-'
  },
  {
    pattern: /w-8h-8/g,
    replacement: 'w-8 h-8'
  },
  {
    pattern: /text-white py-20/g,
    replacement: 'text-white py-20'
  },
  
  // Fix array syntax issues
  {
    pattern: /const\s+services\s*=\s*\[\s*\{/g,
    replacement: 'const services = [\n    {'
  },
  {
    pattern: /const\s+services\s*=\s*\[\s*$/gm,
    replacement: 'const services = [\n    {'
  },
  
  // Fix missing closing braces in objects
  {
    pattern: /icon:\s*<[^>]+>,\s*\{/g,
    replacement: (match) => {
      return match.replace(/,\s*\{/, ',\n      title:')
    }
  },
  
  // Fix malformed array structure
  {
    pattern: /const\s+services\s*=\s*\[\s*\]\s*\{/g,
    replacement: 'const services = [\n    {'
  },
  
  // Fix missing closing braces and brackets
  {
    pattern: /description:\s*'[^']*',\s*\{/g,
    replacement: (match) => {
      return match.replace(/,\s*\{/, ',\n    },\n    {')
    }
  },
  
  // Fix duplicate imports
  {
    pattern: /import\s*{\s*([^}]+)\s*}\s*from\s*'[^']+';\s*import\s*{\s*\1\s*}\s*from\s*'[^']+';/g,
    replacement: (match, imports) => {
      return `import { ${imports} } from 'lucide-react';`
    }
  },
  
  // Fix missing closing tags
  {
    pattern: /<section[^>]*>\s*<div[^>]*>\s*<div[^>]*>\s*<h1[^>]*>[^<]*<\/h1>\s*<p[^>]*>[^<]*<\/p>\s*<Link[^>]*>[^<]*<\/Link>\s*<\/div>\s*<\/div>\s*$/gm,
    replacement: (match) => {
      return match + '\n      </section>'
    }
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
    
    // Additional specific fixes for common patterns
    // Fix missing closing braces in services arrays
    if (content.includes('const services = [')) {
      const servicesMatch = content.match(/const services = \[([\s\S]*?)\]/);
      if (servicesMatch) {
        let servicesContent = servicesMatch[1];
        // Count opening and closing braces
        const openBraces = (servicesContent.match(/\{/g) || []).length;
        const closeBraces = (servicesContent.match(/\}/g) || []).length;
        
        if (openBraces > closeBraces) {
          // Add missing closing braces
          const missingBraces = openBraces - closeBraces;
          servicesContent += '\n  }'.repeat(missingBraces);
          content = content.replace(/const services = \[([\s\S]*?)\]/g, `const services = [${servicesContent}]`);
          modified = true;
        }
      }
    }
    
    // Fix missing closing brackets
    if (content.includes('const services = [') && !content.includes('const services = [\n    {')) {
      content = content.replace(/const services = \[\s*\]\s*\{/g, 'const services = [\n    {');
      modified = true;
    }
    
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