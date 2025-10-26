import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Function to fix common build errors in React/Next.js files
function fixBuildErrors(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Fix Head usage - replace with metadata export
    if (content.includes('<Head>') && !content.includes('import Head')) {
      // Extract title and description from Head
      const titleMatch = content.match(/<title>(.*?)<\/title>/);
      const descMatch = content.match(/<meta name="description" content="(.*?)" \/>/);
      
      if (titleMatch || descMatch) {
        // Remove Head usage
        content = content.replace(/<Head>[\s\S]*?<\/Head>/g, '');
        
        // Add metadata export at the top
        const metadata = {
          title: titleMatch ? titleMatch[1] : 'Zion Tech Group',
          description: descMatch ? descMatch[1] : 'Professional AI solutions and services'
        };
        
        const metadataExport = `export const metadata = {
  title: '${metadata.title}',
  description: '${metadata.description}'
};

`;
        
        // Insert metadata export after imports
        const importEnd = content.lastIndexOf('import');
        if (importEnd !== -1) {
          const nextLine = content.indexOf('\n', importEnd);
          content = content.slice(0, nextLine + 1) + metadataExport + content.slice(nextLine + 1);
        } else {
          content = metadataExport + content;
        }
        modified = true;
      }
    }

    // Fix missing icon imports
    const iconRegex = /from 'lucide-react'/;
    if (content.includes('lucide-react') && !content.match(iconRegex)) {
      // Extract all icon names used in the file
      const iconNames = [];
      const iconPatterns = [
        /<(\w+Icon)\s/g,
        /icon:\s*(\w+)/g,
        /{(\w+)}/g
      ];
      
      iconPatterns.forEach(pattern => {
        const matches = content.matchAll(pattern);
        for (const match of matches) {
          const iconName = match[1];
          if (iconName && iconName !== 'icon' && iconName !== 'Icon') {
            iconNames.push(iconName);
          }
        }
      });
      
      // Common icons that might be used
      const commonIcons = ['Zap', 'Shield', 'Eye', 'BarChart', 'Globe', 'Leaf', 'CheckCircle', 'Phone', 'Mail', 'MapPin', 'Clock'];
      const usedIcons = commonIcons.filter(icon => content.includes(icon));
      
      if (usedIcons.length > 0) {
        const iconImport = `import { ${usedIcons.join(', ')} } from 'lucide-react';\n`;
        
        // Add import after other imports
        const lastImport = content.lastIndexOf('import');
        if (lastImport !== -1) {
          const nextLine = content.indexOf('\n', lastImport);
          content = content.slice(0, nextLine + 1) + iconImport + content.slice(nextLine + 1);
        } else {
          content = iconImport + content;
        }
        modified = true;
      }
    }

    // Fix 'use client' directive issues
    if (content.includes('useState') || content.includes('useEffect') || content.includes('onClick')) {
      if (!content.includes("'use client'") && !content.includes('"use client"')) {
        content = "'use client';\n\n" + content;
        modified = true;
      }
    }

    // Fix react-helmet-async issues by removing it
    if (content.includes('react-helmet-async')) {
      content = content.replace(/import.*react-helmet-async.*\n/g, '');
      content = content.replace(/<Helmet>[\s\S]*?<\/Helmet>/g, '');
      modified = true;
    }

    // Fix Navigation component import issues
    if (content.includes('Navigation') && !content.includes('import Navigation')) {
      content = content.replace(/import Navigation from '\.\.\/components\/Navigation'/g, '// Navigation component removed - using Header instead');
      content = content.replace(/<Navigation \/>/g, '');
      modified = true;
    }

    if (modified) {
      fs.writeFileSync(filePath, content);
      console.log(`Fixed: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Function to recursively find and fix all .tsx files
function fixAllFiles(dir) {
  const files = fs.readdirSync(dir);
  let fixedCount = 0;
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory() && !file.startsWith('.') && file !== 'node_modules') {
      fixedCount += fixAllFiles(filePath);
    } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
      if (fixBuildErrors(filePath)) {
        fixedCount++;
      }
    }
  });
  
  return fixedCount;
}

// Run the fix
console.log('Starting build error fixes...');
const fixedCount = fixAllFiles('./app');
console.log(`Fixed ${fixedCount} files`);