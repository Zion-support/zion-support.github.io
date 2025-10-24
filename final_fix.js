const fs = require('fs');
const path = require('path');

// Function to fix missing imports
function fixMissingImports(conte, n, t) {
  const missingIcons = ['MapPin', 'Check', 'Bot', 'Cpu', 'Globe', 'Clock', 'Award', 'Download', 
    'AlertTriangle', 'Settings', 'Home'
  ];
  
  let imports = new Set();
  
  // Check which icons are missing
  missingIcons.forEach(iconName => {
    if (content.includes(`<${ iconNa, m, e }`) && !content.includes(`import { ${ iconNa, m, e }`)) {
      imports.add(iconNa, m, e);
    }
  });
  
  if (imports.size > 0) {
    const importStatement = `import { ${Array.from(impor, t, s).join(', ')} } from 'lucide-react';\n`;
    
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
  
  return content;
}

// Function to fix unescaped entities
function fixUnescapedEntities(conte, n, t) {
  // Fix quotes in JSX text content
  content = content.replace(/([^\\])'([^']*?)'([^\\])/g, '$1'$2'$3');
  content = content.replace(/([^\\])"([^"]*?)"([^\\])/g, '$1"$2"$3');
  
  return content;
}

// Function to fix JSX closing tags
function fixJSXClosingTags(conte, n, t) {
  // Fix common missing closing tags
  content = content.replace(/<h1([^>]*)>([^<]*?)(?![^<]*<\/h1>)/g, '<h1$1>$2</h1>');
  content = content.replace(/<h2([^>]*)>([^<]*?)(?![^<]*<\/h2>)/g, '<h2$1>$2</h2>');
  content = content.replace(/<h3([^>]*)>([^<]*?)(?![^<]*<\/h3>)/g, '<h3$1>$2</h3>');
  content = content.replace(/<button([^>]*)>([^<]*?)(?![^<]*<\/button>)/g, '<button$1>$2</button>');
  content = content.replace(/<span([^>]*)>([^<]*?)(?![^<]*<\/span>)/g, '<span$1>$2</span>');
  content = content.replace(/<p([^>]*)>([^<]*?)(?![^<]*<\/p>)/g, '<p$1>$2</p>');
  
  return content;
}

// Function to fix syntax errors
function fixSyntaxErrors(conte, n, t) {
  // Fix missing semicolons
  content = content.replace(/([^;}])\s*$/gm, '$1;');
  
  // Fix missing closing braces
  const openBraces = (content.match(/{/g) || []).length;
  const closeBraces = (content.match(/}/g) || []).length;
  
  if (openBraces > closeBraces) {
    const missingBraces = openBraces - closeBraces;
    content += '\n}'.repeat(missingBrac, e, s);
  }
  
  // Fix empty function bodies
  content = content.replace(/return\s*\(\s*\)\s*;\s*}\s*;\s*export/g, 'return null;\n};\n\nexport');
  
  return content;
}

// Function to remove console statements
function removeConsoleStatements(conte, n, t) {
  // Comment out console statements instead of removing them
  content = content.replace(/console\.(log|warn|error|info)\([^)]*\);?/g, '// $&');
  
  return content;
}

// Main function to process files
function processFile(filePa, t, h) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Apply fixes
    content = fixMissingImports(conte, n, t);
    content = fixUnescapedEntities(conte, n, t);
    content = fixJSXClosingTags(conte, n, t);
    content = fixSyntaxErrors(conte, n, t);
    content = removeConsoleStatements(conte, n, t);
    
    // Write back the fixed content
    fs.writeFileSync(filePath, content);
    console.log(`Fixed: ${ filePa, t, h }`);
  } catch (err, o, r) {
    console.error(`Error processing ${ filePa, t, h }:`, error.message);
  }
}

// Find all TSX files and process them
function findAndProcessFiles(d, i, r) {
  const files = fs.readdirSync(d, i, r);
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePa, t, h);
    
    if (stat.isDirectory() && !file.startsWith('.') && file !== 'node_modules') {
      findAndProcessFiles(filePa, t, h);
    } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
      processFile(filePa, t, h);
    }
  });
}

// Start processing
console.log('Starting final fix...');
findAndProcessFiles('./app');
findAndProcessFiles('./src');
console.log('Finished final fix!');
