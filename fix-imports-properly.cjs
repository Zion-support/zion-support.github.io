const fs = require('fs');
const path = require('path');

// Common icons used across the project
const commonIcons = [
  'CheckCircle', 'Phone', 'Mail', 'Star', 'Camera', 'Zap', 'Brain', 'Eye', 
  'BarChart', 'Database', 'Target', 'Users', 'Shield', 'TrendingUp', 
  'DollarSign', 'Heart', 'Palette', 'Music', 'Code', 'Cloud', 'Calendar', 
  'ArrowRight', 'PhoneIcon', 'MailIcon', 'Video', 'Helmet', 'BarChart3',
  'Globe', 'Award', 'Sparkles', 'Smartphone', 'DollarSign', 'TrendingUp',
  'Database', 'Target', 'Users', 'Shield', 'Zap', 'Brain', 'Eye', 'BarChart',
  'Phone', 'Mail', 'Star', 'Camera', 'CheckCircle', 'Heart', 'Palette',
  'Music', 'Code', 'Cloud', 'Calendar', 'ArrowRight', 'PhoneIcon', 'MailIcon',
  'Video', 'Helmet', 'BarChart3', 'Globe', 'Award', 'Sparkles', 'Smartphone'
];

// Function to check if an icon is used in the file
function hasIconUsage(content, icon) {
  return new RegExp(`<${icon}[\\s>]`).test(content);
}

// Function to get existing lucide-react imports
function getExistingImports(content) {
  const importMatch = content.match(/import\s*{\s*([^}]+)\s*}\s*from\s*['"]lucide-react['"]/);
  if (importMatch) {
    return importMatch[1].split(',').map(imp => imp.trim());
  }
  return [];
}

// Function to fix HTML entities back to normal quotes
function fixHTMLEntities(content) {
  return content
    .replace(/&quot;/g, '"')
    .replace(/&apos;/g, "'")
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&amp;/g, '&');
}

// Function to add missing imports
function addMissingImports(content) {
  const existingImports = getExistingImports(content);
  const usedIcons = commonIcons.filter(icon => hasIconUsage(content, icon));
  const missingIcons = usedIcons.filter(icon => !existingImports.includes(icon));
  
  if (missingIcons.length === 0) {
    return content;
  }
  
  // Add missing icons to existing import or create new import
  if (existingImports.length > 0) {
    const allImports = [...existingImports, ...missingIcons];
    const newImport = `import { ${allImports.join(', ')} } from 'lucide-react';`;
    return content.replace(
      /import\s*{\s*[^}]+\s*}\s*from\s*['"]lucide-react['"]/,
      newImport
    );
  } else {
    // Find the first import statement and add lucide-react import before it
    const firstImportMatch = content.match(/^import\s+.*$/m);
    if (firstImportMatch) {
      const newImport = `import { ${missingIcons.join(', ')} } from 'lucide-react';\n`;
      return content.replace(firstImportMatch[0], newImport + firstImportMatch[0]);
    } else {
      // Add at the beginning of the file
      return `import { ${missingIcons.join(', ')} } from 'lucide-react';\n` + content;
    }
  }
}

// Function to remove console statements
function removeConsoleStatements(content) {
  return content.replace(/console\.(log|warn|error|info)\([^)]*\);?\s*/g, '');
}

// Function to fix merge conflict markers
function fixMergeConflicts(content) {
  return content.replace(/<<<<<<< HEAD[\s\S]*?=======[\s\S]*?>>>>>>> [^\n]+/g, '');
}

// Function to fix prefer-const issues
function fixPreferConst(content) {
  return content.replace(/let\s+(\w+)\s*=\s*[^;]+;\s*\/\/\s*never\s+reassigned/g, (match, varName) => {
    return match.replace(/let/, 'const');
  });
}

// Main function to process files
function processFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Fix HTML entities first
    const contentWithEntities = fixHTMLEntities(content);
    if (contentWithEntities !== content) {
      content = contentWithEntities;
      modified = true;
    }
    
    // Fix merge conflicts
    const contentWithoutConflicts = fixMergeConflicts(content);
    if (contentWithoutConflicts !== content) {
      content = contentWithoutConflicts;
      modified = true;
    }
    
    // Add missing imports
    const contentWithImports = addMissingImports(content);
    if (contentWithImports !== content) {
      content = contentWithImports;
      modified = true;
    }
    
    // Remove console statements
    const contentWithoutConsole = removeConsoleStatements(content);
    if (contentWithoutConsole !== content) {
      content = contentWithoutConsole;
      modified = true;
    }
    
    // Fix prefer-const issues
    const contentWithConst = fixPreferConst(content);
    if (contentWithConst !== content) {
      content = contentWithConst;
      modified = true;
    }
    
    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Function to recursively find all .tsx files
function findTsxFiles(dir) {
  const files = [];
  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
      files.push(...findTsxFiles(fullPath));
    } else if (item.endsWith('.tsx')) {
      files.push(fullPath);
    }
  }
  
  return files;
}

// Main execution
const srcDir = path.join(__dirname, 'src');
const appDir = path.join(__dirname, 'app');

let totalFixed = 0;

// Process src directory
if (fs.existsSync(srcDir)) {
  const srcFiles = findTsxFiles(srcDir);
  console.log(`Processing ${srcFiles.length} files in src directory...`);
  
  for (const file of srcFiles) {
    if (processFile(file)) {
      totalFixed++;
    }
  }
}

// Process app directory
if (fs.existsSync(appDir)) {
  const appFiles = findTsxFiles(appDir);
  console.log(`Processing ${appFiles.length} files in app directory...`);
  
  for (const file of appFiles) {
    if (processFile(file)) {
      totalFixed++;
    }
  }
}

console.log(`\nTotal files fixed: ${totalFixed}`);