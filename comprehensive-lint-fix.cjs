const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Get all src files
const srcFiles = glob.sync('src/**/*.{ts,tsx}', { 
  ignore: ['src/components/**', 'src/pages/**', 'src/content/**', 'src/data/**', 'src/hooks/**', 'src/types/**', 'src/utils/**', 'src/config/**'] 
});

console.log(`Processing ${srcFiles.length} files...`);

srcFiles.forEach(filePath => {
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Remove unused imports from lucide-react
    const lucideImportMatch = content.match(/import\s*{([^}]+)}\s*from\s*['"]lucide-react['"]/);
    if (lucideImportMatch) {
      const imports = lucideImportMatch[1].split(',').map(imp => imp.trim());
      const usedImports = [];
      
      // Check which imports are actually used in the file
      for (const imp of imports) {
        const cleanImp = imp.replace(/\s+as\s+\w+/, '').trim();
        // Check if the import is used in the file (not just in comments)
        const regex = new RegExp(`\\b${cleanImp}\\b`, 'g');
        const matches = content.match(regex);
        if (matches && matches.length > 1) { // More than just the import itself
          usedImports.push(imp);
        }
      }
      
      if (usedImports.length !== imports.length) {
        if (usedImports.length > 0) {
          content = content.replace(
            /import\s*{[^}]+}\s*from\s*['"]lucide-react['"]/,
            `import {${usedImports.join(', ')}} from 'lucide-react'`
          );
        } else {
          content = content.replace(/import\s*{[^}]+}\s*from\s*['"]lucide-react['"];\n?/, '');
        }
        modified = true;
      }
    }
    
    // Remove unused imports from react-router-dom
    if (content.includes("from 'react-router-dom'")) {
      const routerImportMatch = content.match(/import\s*{([^}]+)}\s*from\s*['"]react-router-dom['"]/);
      if (routerImportMatch) {
        const imports = routerImportMatch[1].split(',').map(imp => imp.trim());
        const usedImports = [];
        
        for (const imp of imports) {
          const cleanImp = imp.replace(/\s+as\s+\w+/, '').trim();
          const regex = new RegExp(`\\b${cleanImp}\\b`, 'g');
          const matches = content.match(regex);
          if (matches && matches.length > 1) {
            usedImports.push(imp);
          }
        }
        
        if (usedImports.length !== imports.length) {
          if (usedImports.length > 0) {
            content = content.replace(
              /import\s*{[^}]+}\s*from\s*['"]react-router-dom['"]/,
              `import {${usedImports.join(', ')}} from 'react-router-dom'`
            );
          } else {
            content = content.replace(/import\s*{[^}]+}\s*from\s*['"]react-router-dom['"];\n?/, '');
          }
          modified = true;
        }
      }
    }
    
    // Remove unused component imports
    const componentImports = ['Navigation', 'Footer', 'Helmet', 'Phone', 'Link', 'Star'];
    for (const comp of componentImports) {
      if (content.includes(`import ${comp}`) && !content.includes(`<${comp}`) && !content.includes(`${comp}.`)) {
        content = content.replace(new RegExp(`import\\s+${comp}\\s+from[^;]+;\\n?`, 'g'), '');
        modified = true;
      }
    }
    
    // Remove unused variable assignments that start with underscore
    content = content.replace(/const\s+_\w+\s*=\s*[^;]+;/g, '');
    
    // Remove unused function declarations that are assigned but never used
    content = content.replace(/const\s+\w+Page\s*=\s*\(\)\s*=>\s*{[^}]*};\s*\/\/\s*unused/gi, '');
    content = content.replace(/const\s+\w+Page\s*=\s*\(\)\s*=>\s*{[^}]*};\s*$/gm, '');
    
    // Remove unused variable assignments
    const unusedVars = ['pricingPlans', 'stats', 'benefits', 'emailTypes', 'pricing', '_services'];
    for (const varName of unusedVars) {
      const regex = new RegExp(`const\\s+${varName}\\s*=\\s*[^;]+;\\n?`, 'g');
      content = content.replace(regex, '');
    }
    
    // Clean up multiple empty lines
    content = content.replace(/\n\s*\n\s*\n/g, '\n\n');
    
    if (modified) {
      fs.writeFileSync(filePath, content);
      console.log(`Fixed ${filePath}`);
    }
  }
});

console.log('Comprehensive lint fixes completed!');