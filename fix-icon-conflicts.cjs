const fs = require('fs');
const path = require('path');

// Find all TypeScript files that might have icon conflicts
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

function fixFile(filePath) {
  try {
    if (!fs.existsSync(filePath)) {
      return;
    }

    let content = fs.readFileSync(filePath, 'utf8');
    
    // Check if file has both lucide-react imports and local SVG components
    const hasLucideImport = content.includes("from 'lucide-react'");
    const hasLocalComponents = content.includes('const ArrowLeft = ({ className })') || 
                              content.includes('const Calendar = ({ className })') ||
                              content.includes('const Clock = ({ className })');
    
    if (hasLucideImport && hasLocalComponents) {
      // Remove lucide-react import
      content = content.replace(/import\s*{\s*[^}]+}\s*from\s*['"]lucide-react['"];?\s*\n?/g, '');
      
      // Add missing Tag component if needed
      if (content.includes('<Tag ') && !content.includes('const Tag = ({ className })')) {
        const tagComponent = `const Tag = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" width="24" height="24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
  </svg>
);

`;
        
        // Find the last const component and add Tag after it
        const lastConstMatch = content.match(/const\s+\w+\s*=\s*\(\s*{\s*className\s*}\s*:\s*{\s*className\?\s*:\s*string\s*}\s*\)\s*=>\s*\([^)]+\)\s*\)\s*;?\s*$/gm);
        if (lastConstMatch) {
          const lastConst = lastConstMatch[lastConstMatch.length - 1];
          content = content.replace(lastConst, lastConst + '\n' + tagComponent);
        }
      }
      
      fs.writeFileSync(filePath, content);
      console.log(`Fixed conflicts in ${filePath}`);
    }
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

// Find and fix all TypeScript files
const tsxFiles = findTsxFiles('./app');
console.log(`Found ${tsxFiles.length} TypeScript files to check`);

let fixedCount = 0;
tsxFiles.forEach(file => {
  const beforeContent = fs.readFileSync(file, 'utf8');
  fixFile(file);
  const afterContent = fs.readFileSync(file, 'utf8');
  if (beforeContent !== afterContent) {
    fixedCount++;
  }
});

console.log(`Fixed ${fixedCount} files with icon conflicts`);