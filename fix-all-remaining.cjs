const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Get all files with linting errors
function getFilesWithErrors() {
  try {
    const output = execSync('pnpm run lint 2>&1', { encoding: 'utf8' });
    const lines = output.split('\n');
    const files = new Set();
    
    lines.forEach(line => {
      if (line.includes('.tsx') && line.includes('warning')) {
        const match = line.match(/\/workspace\/(src\/[^:]+\.tsx)/);
        if (match) {
          files.add(match[1]);
        }
      }
    });
    
    return Array.from(files);
  } catch (error) {
    console.error('Error getting files with errors:', error.message);
    return [];
  }
}

// Function to get actually used imports from a file
function getUsedImports(content) {
  const usedImports = new Set();
  
  // Common patterns for icon usage
  const patterns = [
    /icon:\s*(\w+)/g,  // icon: IconName
    /<(\w+)\s+className/g,  // <IconName className
    /<(\w+)\s+[^>]*>/g,  // <IconName ...>
    /(\w+)\s+className/g,  // IconName className
    /<(\w+)\s*\/>/g  // <IconName />
  ];
  
  patterns.forEach(pattern => {
    let match;
    while ((match = pattern.exec(content)) !== null) {
      usedImports.add(match[1]);
    }
  });
  
  return Array.from(usedImports);
}

// Function to fix a single file
function fixFile(filePath) {
  try {
    const fullPath = path.join(process.cwd(), filePath);
    if (!fs.existsSync(fullPath)) {
      return;
    }
    
    let content = fs.readFileSync(fullPath, 'utf8');
    let modified = false;
    
    // Get used imports
    const usedImports = getUsedImports(content);
    
    // Fix lucide-react imports
    const lucideImportMatch = content.match(/import\s*{\s*([^}]+)\s*}\s*from\s*['"]lucide-react['"];?/);
    if (lucideImportMatch) {
      const currentImports = lucideImportMatch[1].split(',').map(imp => imp.trim());
      const filteredImports = currentImports.filter(imp => usedImports.includes(imp));
      
      if (filteredImports.length !== currentImports.length && filteredImports.length > 0) {
        const newImportLine = `import { ${filteredImports.join(', ')} } from 'lucide-react';`;
        content = content.replace(lucideImportMatch[0], newImportLine);
        modified = true;
      } else if (filteredImports.length === 0) {
        // Remove the entire import if no icons are used
        content = content.replace(lucideImportMatch[0], '');
        modified = true;
      }
    }
    
    // Remove unused Navigation and Footer imports
    if (content.includes('import Navigation') && !content.includes('<Navigation')) {
      content = content.replace(/import\s+Navigation\s+from\s+['"][^'"]+['"];?\s*\n?/g, '');
      modified = true;
    }
    
    if (content.includes('import Footer') && !content.includes('<Footer')) {
      content = content.replace(/import\s+Footer\s+from\s+['"][^'"]+['"];?\s*\n?/g, '');
      modified = true;
    }
    
    // Add export if missing
    if (content.includes('const ') && content.includes('Page: React.FC') && !content.includes('export default')) {
      const componentName = content.match(/const\s+(\w+Page):\s+React\.FC/)?.[1];
      if (componentName) {
        content += `\n\nexport default ${componentName};`;
        modified = true;
      }
    }
    
    if (modified) {
      fs.writeFileSync(fullPath, content);
      console.log(`Fixed ${filePath}`);
    }
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

// Get all files with errors and fix them
const files = getFilesWithErrors();
console.log(`Found ${files.length} files with errors`);

files.forEach(fixFile);
console.log('Done fixing all remaining imports');