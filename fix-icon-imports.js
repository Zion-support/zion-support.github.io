const fs = require('fs');
const path = require('path');

// Function to fix icon imports and usage
function fixIconImports(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Check if file has data arrays with string icon names
    if (content.includes("icon: 'Users'") || content.includes("icon: 'Clock'") || content.includes("icon: 'Zap'")) {
      // Get all unique icon names from the data arrays
      const iconMatches = content.match(/icon: '([^']+)'/g);
      if (iconMatches) {
        const iconNames = [...new Set(iconMatches.map(match => match.match(/icon: '([^']+)'/)[1]))];
        
        // Add missing icon imports
        const currentLucideImport = content.match(/import { [^}]+ } from 'lucide-react';/);
        if (currentLucideImport) {
          const currentImports = currentLucideImport[0].match(/{ ([^}]+) }/)[1];
          const newImports = currentImports + ', ' + iconNames.join(', ');
          content = content.replace(currentLucideImport[0], `import { ${newImports} } from 'lucide-react';`);
        } else {
          content = content.replace(
            /import { ArrowRight[^}]* } from 'lucide-react';/,
            `import { ArrowRight, ${iconNames.join(', ')} } from 'lucide-react';`
          );
        }

        // Replace string icon names with actual icon components
        iconNames.forEach(iconName => {
          const iconComponent = iconName.charAt(0).toUpperCase() + iconName.slice(1);
          content = content.replace(new RegExp(`icon: '${iconName}'`, 'g'), `icon: ${iconComponent}`);
        });

        modified = true;
      }
    }

    // Add Footer import if missing
    if (content.includes('<Footer') && !content.includes("import Footer from")) {
      content = content.replace(
        /import { [^}]+ } from 'lucide-react';/,
        `import { ${content.match(/import { ([^}]+) } from 'lucide-react';/)[1]} } from 'lucide-react';\nimport Footer from '@/components/Footer';`
      );
      modified = true;
    }

    // Fix missing closing tags
    if (content.includes('<Footer') && !content.includes('</>')) {
      content = content.replace(/(<Footer[^>]*\/>)\s*$/, '$1\n    </>');
      modified = true;
    }

    if (modified) {
      fs.writeFileSync(filePath, content);
      console.log(`Fixed: ${filePath}`);
      return true;
    }
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
  return false;
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
const appDir = '/workspace/app';
const tsxFiles = findTsxFiles(appDir);

console.log(`Found ${tsxFiles.length} .tsx files to check`);

let fixedCount = 0;
for (const file of tsxFiles) {
  if (fixIconImports(file)) {
    fixedCount++;
  }
}

console.log(`Fixed ${fixedCount} files`);