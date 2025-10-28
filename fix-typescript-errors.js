import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

// Function to fix common TypeScript errors in a file
function fixFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let modified = false;

  // Fix unused variable declarations by removing them or making them default exports
  const patterns = [
    // Fix function declarations that should be default exports
    {
      regex: /^function\s+(\w+)\s*\(\s*\)\s*\{/gm,
      replacement: (match, funcName) => {
        // Check if this function is used as default export
        if (content.includes(`export default ${funcName}`) || content.includes(`export default function ${funcName}`)) {
          return match;
        }
        // If it's the main function and not already exported, make it default
        if (funcName === 'Home' || funcName === 'Page' || funcName === 'PagePage' || funcName.match(/^[A-Z]/)) {
          return `export default function ${funcName}() {`;
        }
        return match;
      }
    },
    // Remove unused variable declarations
    {
      regex: /^const\s+(\w+)\s*=\s*[^;]+;$/gm,
      replacement: (match, varName) => {
        // Check if variable is used elsewhere in the file
        const usageCount = (content.match(new RegExp(`\\b${varName}\\b`, 'g')) || []).length;
        if (usageCount <= 1) {
          modified = true;
          return `// ${match}`;
        }
        return match;
      }
    },
    // Fix import statements that import unused variables
    {
      regex: /^import\s+.*?\{([^}]+)\}\s+from\s+['"][^'"]+['"];?$/gm,
      replacement: (match, imports) => {
        const importList = imports.split(',').map(imp => imp.trim());
        const usedImports = importList.filter(imp => {
          const varName = imp.replace(/\s+as\s+\w+/, '').trim();
          const usageCount = (content.match(new RegExp(`\\b${varName}\\b`, 'g')) || []).length;
          return usageCount > 1; // More than just the import declaration
        });
        
        if (usedImports.length === 0) {
          modified = true;
          return `// ${match}`;
        } else if (usedImports.length < importList.length) {
          modified = true;
          return match.replace(imports, usedImports.join(', '));
        }
        return match;
      }
    }
  ];

  patterns.forEach(pattern => {
    if (pattern.replacement instanceof Function) {
      content = content.replace(pattern.regex, pattern.replacement);
    } else {
      content = content.replace(pattern.regex, pattern.replacement);
    }
  });

  // Fix specific common issues
  if (content.includes('function Home()') && !content.includes('export default Home')) {
    content = content.replace('function Home()', 'export default function Home()');
    modified = true;
  }
  
  if (content.includes('function Page()') && !content.includes('export default Page')) {
    content = content.replace('function Page()', 'export default function Page()');
    modified = true;
  }
  
  if (content.includes('function PagePage()') && !content.includes('export default PagePage')) {
    content = content.replace('function PagePage()', 'export default function PagePage()');
    modified = true;
  }

  // Remove duplicate export default statements
  const exportDefaultMatches = content.match(/export default function/g) || [];
  if (exportDefaultMatches.length > 1) {
    // Keep only the first one
    const lines = content.split('\n');
    let foundFirst = false;
    content = lines.map(line => {
      if (line.includes('export default function') && !foundFirst) {
        foundFirst = true;
        return line;
      } else if (line.includes('export default function') && foundFirst) {
        return line.replace('export default function', 'function');
      }
      return line;
    }).join('\n');
    modified = true;
  }

  if (modified) {
    fs.writeFileSync(filePath, content);
    console.log(`Fixed: ${filePath}`);
  }
}

// Main function to process files
async function main() {
  // Find all TypeScript/TSX files in the app directory
  const files = await glob('app/**/*.{ts,tsx}');

  console.log(`Found ${files.length} TypeScript files to process...`);

  let fixedCount = 0;
  files.forEach(file => {
    try {
      fixFile(file);
      fixedCount++;
    } catch (error) {
      console.error(`Error processing ${file}:`, error.message);
    }
  });

  console.log(`Fixed ${fixedCount} files`);
}

main().catch(console.error);