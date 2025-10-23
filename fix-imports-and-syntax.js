const fs = require('fs');
const path = require('path');

// Common Lucide React icons used in the project
const commonIcons = [
  'Phone', 'Mail', 'CheckCircle', 'Star', 'ArrowRight', 'Camera', 'Zap', 'Brain', 'Eye', 'BarChart',
  'DollarSign', 'Shield', 'TrendingUp', 'Target', 'Users', 'Heart', 'Database', 'Code', 'Cloud',
  'Calendar', 'Music', 'Palette', 'PhoneIcon', 'MailIcon', 'Helmet'
];

// Function to fix missing imports
function fixMissingImports(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Check if file uses lucide-react icons but doesn't import them
    const hasLucideUsage = commonIcons.some(icon => 
      content.includes(`<${icon}`) || content.includes(`<${icon}Icon`)
    );
    
    if (hasLucideUsage) {
      // Find existing lucide-react import
      const lucideImportMatch = content.match(/import\s*{\s*([^}]+)\s*}\s*from\s*['"]lucide-react['"]/);
      
      if (lucideImportMatch) {
        // Add missing icons to existing import
        const existingIcons = lucideImportMatch[1].split(',').map(icon => icon.trim());
        const usedIcons = commonIcons.filter(icon => 
          content.includes(`<${icon}`) || content.includes(`<${icon}Icon`)
        );
        const missingIcons = usedIcons.filter(icon => !existingIcons.includes(icon));
        
        if (missingIcons.length > 0) {
          const newImport = `import { ${existingIcons.concat(missingIcons).join(', ')} } from 'lucide-react';`;
          content = content.replace(lucideImportMatch[0], newImport);
          modified = true;
        }
      } else {
        // Add new lucide-react import
        const usedIcons = commonIcons.filter(icon => 
          content.includes(`<${icon}`) || content.includes(`<${icon}Icon`)
        );
        
        if (usedIcons.length > 0) {
          const importStatement = `import { ${usedIcons.join(', ')} } from 'lucide-react';\n`;
          // Add import after React import
          const reactImportMatch = content.match(/import\s+React[^;]+;/);
          if (reactImportMatch) {
            content = content.replace(reactImportMatch[0], reactImportMatch[0] + '\n' + importStatement);
            modified = true;
          }
        }
      }
    }
    
    // Fix common JSX syntax errors
    // Fix malformed closing tags like </h1>h1>
    content = content.replace(/(<\/[^>]+>)[^<]+/g, '$1');
    
    // Fix missing function declarations
    if (content.includes('return (') && !content.includes('function ') && !content.includes('=>')) {
      content = content.replace(/return \(/, 'export default function Page() {\n  return (');
      content = content.replace(/\);$/, '  );\n}');
      modified = true;
    }
    
    // Remove unnecessary loading="lazy" attributes
    content = content.replace(/\s+loading="lazy"/g, '');
    
    // Fix unescaped entities
    content = content.replace(/'/g, '&apos;');
    content = content.replace(/"/g, '&quot;');
    
    if (modified) {
      fs.writeFileSync(filePath, content);
      console.log(`Fixed: ${filePath}`);
    }
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

// Function to recursively find and fix all TypeScript/TSX files
function fixAllFiles(dir) {
  const files = fs.readdirSync(dir);
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory() && !file.startsWith('.') && file !== 'node_modules') {
      fixAllFiles(filePath);
    } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
      fixMissingImports(filePath);
    }
  });
}

// Start fixing from the workspace root
console.log('Starting to fix imports and syntax errors...');
fixAllFiles('/workspace');
console.log('Finished fixing imports and syntax errors.');