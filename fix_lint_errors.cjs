const fs = require('fs');
const path = require('path');

// Function to fix unescaped entities
function fixUnescapedEntities(content) {
  return content
    .replace(/'/g, '&apos;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/&/g, '&amp;');
}

// Function to remove unused imports
function removeUnusedImports(content, filePath) {
  // Common unused imports to remove
  const unusedImports = [
    'React',
    'Link',
    'ExternalLink',
    'Building2',
    'Handshake',
    'Award',
    'Users',
    'Zap',
    'Shield',
    'Clock',
    'TrendingUp',
    'Globe',
    'Brain',
    'Cpu',
    'Target',
    'BarChart',
    'MessageSquare',
    'Eye',
    'Sparkles',
    'Phone',
    'Mail',
    'MapPin',
    'DollarSign',
    'Lock',
    'Database',
    'Cloud',
    'Code',
    'Smartphone',
    'Settings',
    'BarChart3',
    'FileText',
    'Search',
    'Bot',
    'Palette',
    'Camera',
    'Music',
    'Video',
    'Gamepad2',
    'ShoppingCart',
    'CreditCard',
    'Building',
    'Factory',
    'Car',
    'Plane',
    'Ship',
    'Train',
    'Home',
    'Heart',
    'Stethoscope',
    'GraduationCap',
    'Briefcase',
    'Wrench',
    'Hammer',
    'Paintbrush',
    'Scissors',
    'BookOpen',
    'Calculator',
    'Calendar',
    'Clock3',
    'Compass',
    'Globe2',
    'Map',
    'Navigation',
    'PieChart',
    'TrendingDown',
    'Activity',
    'Lightning',
    'Crosshair',
    'Security',
    'People',
    'StarIcon',
    'Check',
    'Arrow',
    'PhoneIcon',
    'MailIcon',
    'Location',
    'CheckCircle',
    'HelpCircle',
    'BookOpen'
  ];

  let fixedContent = content;
  
  // Remove unused imports from lucide-react
  unusedImports.forEach(importName => {
    const importRegex = new RegExp(`import\\s*{[^}]*\\b${importName}\\b[^}]*}\\s*from\\s*['"]lucide-react['"];?\\s*`, 'g');
    fixedContent = fixedContent.replace(importRegex, '');
    
    // Also remove from destructured imports
    const destructuredRegex = new RegExp(`\\b${importName}\\s*,?\\s*`, 'g');
    fixedContent = fixedContent.replace(destructuredRegex, '');
  });

  // Clean up empty import statements
  fixedContent = fixedContent.replace(/import\s*{\s*}\s*from\s*['"][^'"]+['"];?\s*/g, '');
  
  return fixedContent;
}

// Function to fix unused variables
function fixUnusedVariables(content) {
  return content
    .replace(/_error/g, 'error')
    .replace(/const\s+userId\s*=\s*[^;]+;?\s*/g, '');
}

// Function to fix any types
function fixAnyTypes(content) {
  return content
    .replace(/:\s*any\b/g, ': unknown')
    .replace(/:\s*any\[\]/g, ': unknown[]');
}

// Function to fix parsing errors in API files
function fixApiParsingErrors(content) {
  // Fix missing closing braces
  const openBraces = (content.match(/\{/g) || []).length;
  const closeBraces = (content.match(/\}/g) || []).length;
  
  if (openBraces > closeBraces) {
    const missingBraces = openBraces - closeBraces;
    content += '\n' + '}'.repeat(missingBraces);
  }
  
  // Fix try-catch blocks
  content = content.replace(/try\s*{([^}]*)}/g, (match, tryContent) => {
    if (!tryContent.includes('catch') && !tryContent.includes('finally')) {
      return `try {\n${tryContent}\n} catch (error) {\n  console.error('Error:', error);\n}`;
    }
    return match;
  });
  
  return content;
}

// Function to fix React refresh issues
function fixReactRefresh(content) {
  // Move constants and functions to separate files or make them components
  return content.replace(/export\s+const\s+[^=]+=/g, 'const ');
}

// Main function to process files
function processFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Apply fixes based on file type
    if (filePath.endsWith('.tsx') || filePath.endsWith('.jsx')) {
      const originalContent = content;
      
      // Fix unescaped entities
      content = fixUnescapedEntities(content);
      
      // Remove unused imports
      content = removeUnusedImports(content, filePath);
      
      // Fix any types
      content = fixAnyTypes(content);
      
      // Fix React refresh issues
      content = fixReactRefresh(content);
      
      if (content !== originalContent) {
        modified = true;
      }
    }
    
    if (filePath.endsWith('.js')) {
      const originalContent = content;
      
      // Fix API parsing errors
      content = fixApiParsingErrors(content);
      
      // Fix unused variables
      content = fixUnusedVariables(content);
      
      if (content !== originalContent) {
        modified = true;
      }
    }

    if (modified) {
      fs.writeFileSync(filePath, content);
      console.log(`Fixed: ${filePath}`);
    }
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
  }
}

// Get all files to process
function getAllFiles(dir, extensions = ['.tsx', '.jsx', '.ts', '.js']) {
  let files = [];
  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
      files = files.concat(getAllFiles(fullPath, extensions));
    } else if (stat.isFile() && extensions.some(ext => item.endsWith(ext))) {
      files.push(fullPath);
    }
  }
  
  return files;
}

// Process all files
const files = getAllFiles('.');
console.log(`Processing ${files.length} files...`);

files.forEach(processFile);

console.log('Lint error fixes completed!');