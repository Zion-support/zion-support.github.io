const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Find all TypeScript/TSX files
const files = glob.sync('src/**/*.{ts,tsx}', { ignore: ['src/**/*.d.ts'] });

console.log(`Found ${files.length} files to process`);

let totalFixed = 0;

files.forEach(file => {
  try {
    let content = fs.readFileSync(file, 'utf8');
    let modified = false;
    
    // Check for duplicate Link imports
    const lucideLinkRegex = /import\s*{\s*([^}]*Link[^}]*)\s*}\s*from\s*['"]lucide-react['"];?/g;
    const routerLinkRegex = /import\s*{\s*([^}]*Link[^}]*)\s*}\s*from\s*['"]react-router-dom['"];?/g;
    
    const lucideMatches = content.match(lucideLinkRegex);
    const routerMatches = content.match(routerLinkRegex);
    
    if (lucideMatches && routerMatches) {
      // Both imports exist, need to merge them
      const lucideIcons = lucideMatches[0].match(/\{([^}]+)\}/)[1].split(',').map(icon => icon.trim());
      const routerIcons = routerMatches[0].match(/\{([^}]+)\}/)[1].split(',').map(icon => icon.trim());
      
      // Remove Link from lucide-react imports
      const filteredLucideIcons = lucideIcons.filter(icon => icon !== 'Link');
      
      // Create new imports
      let newContent = content;
      
      if (filteredLucideIcons.length > 0) {
        newContent = newContent.replace(lucideLinkRegex, `import { ${filteredLucideIcons.join(', ')} } from 'lucide-react';`);
      } else {
        newContent = newContent.replace(lucideLinkRegex, '');
      }
      
      // Keep the react-router-dom import as is
      modified = true;
      content = newContent;
    }
    
    // Fix the pricingPlans issue in ai-workflow-automation
    if (file.includes('ai-workflow-automation')) {
      content = content.replace(
        /const pricing = pricingPlans;\s*\n\s*const pricingPlans = \[/,
        'const pricingPlans = ['
      );
      modified = true;
    }
    
    // Fix Navigate import from lucide-react (should be from react-router-dom)
    if (content.includes("import { Navigate } from 'lucide-react'")) {
      content = content.replace(
        /import\s*{\s*([^}]*Navigate[^}]*)\s*}\s*from\s*['"]lucide-react['"];?/g,
        ''
      );
      if (!content.includes("import { Navigate } from 'react-router-dom'")) {
        content = content.replace(
          /import\s*{\s*([^}]*)\s*}\s*from\s*['"]react-router-dom['"];?/,
          (match, imports) => {
            const importList = imports.split(',').map(imp => imp.trim());
            if (!importList.includes('Navigate')) {
              importList.push('Navigate');
            }
            return `import { ${importList.join(', ')} } from 'react-router-dom';`;
          }
        );
      }
      modified = true;
    }
    
    if (modified) {
      fs.writeFileSync(file, content, 'utf8');
      console.log(`Fixed duplicate imports in: ${file}`);
      totalFixed++;
    }
  } catch (error) {
    console.error(`Error processing ${file}:`, error.message);
  }
});

console.log(`Fixed duplicate imports in ${totalFixed} files`);