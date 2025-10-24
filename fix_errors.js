const fs = require('fs');
const path = require('path');

// Function to fix unescaped entities
function fixUnescapedEntities(content) {
  // Fix specific patterns
  content = content.replace(/Let's/g, 'Let&apos;s');
  content = content.replace(/We're/g, 'We&apos;re');
  content = content.replace(/don't/g, 'don&apos;t');
  content = content.replace(/can't/g, 'can&apos;t');
  content = content.replace(/won't/g, 'won&apos;t');
  content = content.replace(/it's/g, 'it&apos;s');
  content = content.replace(/you're/g, 'you&apos;re');
  content = content.replace(/they're/g, 'they&apos;re');
  content = content.replace(/I'm/g, 'I&apos;m');
  content = content.replace(/I'll/g, 'I&apos;ll');
  content = content.replace(/I've/g, 'I&apos;ve');
  content = content.replace(/I'd/g, 'I&apos;d');
  
  return content;
}

// Function to fix missing imports
function fixMissingImports(content) {
  const commonIcons = [
    'Send', 'BarChart3', 'Shield', 'DollarSign', 'Clock', 'Star', 'Mail', 'CheckCircle',
    'Zap', 'TrendingUp', 'Brain', 'Target', 'Globe', 'Database', 'Users', 'Settings',
    'ChevronLeft', 'ChevronRight', 'ArrowRight', 'Activity', 'Lock', 'FileText',
    'CreditCard', 'Sparkles', 'PieChart', 'Cloud', 'BarChart'
  ];
  
  // Check if lucide-react is imported
  if (content.includes("from 'lucide-react'")) {
    const importMatch = content.match(/import\s*{\s*([^}]+)\s*}\s*from\s*['"]lucide-react['"]/);
    if (importMatch) {
      const existingImports = importMatch[1].split(',').map(imp => imp.trim());
      const missingImports = [];
      
      // Find missing icons in the content
      commonIcons.forEach(icon => {
        if (content.includes(`<${icon}`) && !existingImports.includes(icon)) {
          missingImports.push(icon);
        }
      });
      
      if (missingImports.length > 0) {
        const newImports = [...existingImports, ...missingImports].join(', ');
        content = content.replace(
          /import\s*{\s*[^}]+\s*}\s*from\s*['"]lucide-react['"]/,
          `import { ${newImports} } from 'lucide-react'`
        );
      }
    }
  }
  
  return content;
}

// Function to fix merge conflict markers
function fixMergeConflicts(content) {
  // Remove merge conflict markers and keep the HEAD version
  content = content.replace(/<<<<<<< HEAD\n([\s\S]*?)=======[\s\S]*?>>>>>>> [^\n]+/g, '$1');
  content = content.replace(/=======[\s\S]*?>>>>>>> [^\n]+/g, '');
  
  return content;
}

// Main function to process files
function processFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    const originalContent = content;
    
    // Apply fixes
    content = fixMergeConflicts(content);
    content = fixUnescapedEntities(content);
    content = fixMissingImports(content);
    
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed: ${filePath}`);
      modified = true;
    }
    
    return modified;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Find all TypeScript/TSX files
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

// Process all files
const files = findTsxFiles('./app');
let fixedCount = 0;

console.log('Starting error fixes...');

files.forEach(file => {
  if (processFile(file)) {
    fixedCount++;
  }
});

console.log(`Fixed ${fixedCount} files`);
