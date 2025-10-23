const fs = require('fs');
const path = require('path');

// Function to fix merge conflicts
function fixMergeConflicts(content) {
  const lines = content.split('\n');
  let result = [];
  let skipUntil = null;
  
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    
    if (line.includes('<<<<<<< HEAD')) {
      skipUntil = '=======';
      continue;
    }
    
    if (line.includes('=======')) {
      skipUntil = '>>>>>>>';
      continue;
    }
    
    if (line.includes('>>>>>>>')) {
      skipUntil = null;
      continue;
    }
    
    if (skipUntil === null) {
      result.push(line);
    }
  }
  
  return result.join('\n');
}

// Function to fix common JSX issues
function fixJSXIssues(content) {
  // Fix unescaped entities
  content = content.replace(/'/g, '&apos;');
  content = content.replace(/"/g, '&quot;');
  
  return content;
}

// Function to add missing imports
function addMissingImports(content) {
  const missingImports = [
    'CheckCircle', 'Star', 'Phone', 'Mail', 'Camera', 'Zap', 'Brain', 'Eye', 'BarChart',
    'DollarSign', 'Shield', 'TrendingUp', 'Target', 'Users', 'Heart', 'Database',
    'Code', 'Cloud', 'Palette', 'Music', 'Video', 'Calendar', 'PhoneIcon', 'MailIcon',
    'ArrowRight', 'Helmet'
  ];
  
  let imports = new Set();
  
  // Check which imports are missing
  missingImports.forEach(importName => {
    if (content.includes(`<${importName}`) && !content.includes(`import { ${importName}`)) {
      imports.add(importName);
    }
  });
  
  if (imports.size > 0) {
    const importStatement = `import { ${Array.from(imports).join(', ')} } from 'lucide-react';\n`;
    
    // Find the last import statement
    const lines = content.split('\n');
    let lastImportIndex = -1;
    
    for (let i = 0; i < lines.length; i++) {
      if (lines[i].startsWith('import ')) {
        lastImportIndex = i;
      }
    }
    
    if (lastImportIndex >= 0) {
      lines.splice(lastImportIndex + 1, 0, importStatement);
      return lines.join('\n');
    } else {
      return importStatement + content;
    }
  }
  
  return content;
}

// Main function to process files
function processFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Apply fixes
    content = fixMergeConflicts(content);
    content = fixJSXIssues(content);
    content = addMissingImports(content);
    
    // Write back the fixed content
    fs.writeFileSync(filePath, content);
    console.log(`Fixed: ${filePath}`);
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
  }
}

// Find all TSX files and process them
function findAndProcessFiles(dir) {
  const files = fs.readdirSync(dir);
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory() && !file.startsWith('.') && file !== 'node_modules') {
      findAndProcessFiles(filePath);
    } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
      processFile(filePath);
    }
  });
}

// Start processing
console.log('Starting to fix all TSX files...');
findAndProcessFiles('./app');
findAndProcessFiles('./src');
console.log('Finished fixing files!');
