import fs from 'fs';

const filesToFix = [
  {
    file: 'app/micro-saas/page.tsx',
    removeHelmet: true,
    addImports: ['CheckCircle', 'Zap', 'Users', 'Shield', 'BarChart', 'Star', 'Heart']
  },
  {
    file: 'app/ai-mobile-app-development/page.tsx',
    removeHelmet: true,
    addImports: ['CheckCircle', 'Code', 'Smartphone', 'Zap', 'Shield', 'Users', 'BarChart']
  },
  {
    file: 'app/robotics/page.tsx',
    removeHelmet: true,
    addImports: ['CheckCircle', 'Bot', 'Cpu', 'Zap', 'Shield', 'Users', 'BarChart']
  },
  {
    file: 'app/sitemap-page/page.tsx',
    removeHelmet: true,
    addImports: ['CheckCircle', 'Globe', 'Map', 'Search', 'FileText', 'Link']
  },
  {
    file: 'app/it-infrastructure/page.tsx',
    removeHelmet: true,
    addImports: ['CheckCircle', 'Server', 'Cloud', 'Shield', 'Zap', 'Users', 'BarChart']
  }
];

function fixFile(filePath, removeHelmet, addImports) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Remove Helmet imports and usage
    if (removeHelmet) {
      content = content.replace(/import\s*{\s*Helmet\s*}\s*from\s*['"]react-helmet-async['"];\s*\n?/g, '');
      content = content.replace(/<>\s*<Helmet>[\s\S]*?<\/Helmet>\s*/g, '');
      content = content.replace(/\s*<\/>\s*$/gm, '');
    }
    
    // Add missing imports
    if (addImports && addImports.length > 0) {
      const importMatch = content.match(/import\s*{\s*([^}]+)\s*}\s*from\s*['"]lucide-react['"];/);
      
      if (importMatch) {
        const existingImports = importMatch[1].split(',').map(imp => imp.trim());
        const allImports = [...new Set([...existingImports, ...addImports])];
        content = content.replace(
          /import\s*{\s*[^}]+\s*}\s*from\s*['"]lucide-react['"];/,
          `import { ${allImports.join(', ')} } from 'lucide-react';`
        );
      } else {
        const newImport = `import { ${addImports.join(', ')} } from 'lucide-react';\n`;
        content = newImport + content;
      }
    }
    
    // Clean up any remaining empty lines
    content = content.replace(/\n\s*\n\s*\n/g, '\n\n');
    
    fs.writeFileSync(filePath, content);
    console.log(`Fixed: ${filePath}`);
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

// Fix all files
filesToFix.forEach(({ file, removeHelmet, addImports }) => {
  fixFile(file, removeHelmet, addImports);
});

console.log('All remaining issues fixed!');