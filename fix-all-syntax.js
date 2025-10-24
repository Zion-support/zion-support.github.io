<<<<<<< HEAD
const fs = require('fs');
const path = require('path');

// Function to fix servicesData.ts
function fixServicesData(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Fix missing commas in array elements
    content = content.replace(/(\w+)\s*\n\s*"([^"]*)"/g, '$1,\n      "$2"');
    content = content.replace(/"([^"]*)"\s*\n\s*"([^"]*)"/g, '"$1",\n      "$2"');
    
    // Fix missing commas in object properties
    content = content.replace(/(\w+)\s*\n\s*(\w+):/g, '$1,\n    $2:');
    
    // Fix specific patterns
    content = content.replace(/(\w+)\s*\n\s*\[/g, '$1,\n    [');
    content = content.replace(/(\w+)\s*\n\s*{/g, '$1,\n    {');
    
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Fixed servicesData: ${filePath}`);
    return true;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Function to fix JSX syntax in page files
function fixJSXSyntax(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Fix the specific issue with return statement and JSX
    if (content.includes('return (<>\n') && content.includes('<Head>')) {
      // Add proper spacing and structure
      content = content.replace(
        /return \(<>\n\s*<Head>/g,
        'return (\n    <>\n      <Head>'
      );
      modified = true;
    }

    // Fix missing closing tags for JSX fragments
    if (content.includes('return (<>\n') && !content.includes('</>')) {
      const lastDivIndex = content.lastIndexOf('</div>');
      if (lastDivIndex !== -1) {
        const beforeLastDiv = content.substring(0, lastDivIndex);
        const afterLastDiv = content.substring(lastDivIndex);
        
        if (!beforeLastDiv.includes('</>') && !afterLastDiv.includes('</>')) {
          content = beforeLastDiv + afterLastDiv.replace('</div>', '</div>\n    </>');
          modified = true;
        }
      }
    }

    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed JSX: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Fix servicesData.ts
fixServicesData('/workspace/app/data/servicesData.ts');

// Fix page.tsx
fixJSXSyntax('/workspace/app/page.tsx');

console.log('Syntax fixes completed');
=======
const fs = require('fs");"
const path = require('path");

// Function to completely fix syntax errors
function fixAllSyntax(content) {
  let fixed = content;

  // Fix malformed 'use client" directives"
  fixed = fixed.replace(/^'use client\";\"'\"$/gm, "'use client';");"
  fixed = fixed.replace(/^\"use client\";\"'\"$/gm, "'use client';");"
  fixed = fixed.replace(/^'use client\";\"$/gm, "'use client';");"
  fixed = fixed.replace(/^\"use client\";\"$/gm, "'use client';");"
  fixed = fixed.replace(/^'use client'[^;]*$/gm, "'use client';");"
  fixed = fixed.replace(/^\"use client\"[^;]*$/gm, "'use client';");
  
  // Fix malformed import statements"
  fixed = fixed.replace(/import\s+([^;]+)\";\"'\"$/gm, (match, importContent) => {"
    const cleanImport = importContent.replace(/['"]/g, '").trim();
    return `import ${cleanImport};`;
  });

  fixed = fixed.replace(/import\s+([^;]+)\";\"$/gm, (match, importContent) => {"
    const cleanImport = importContent.replace(/['"]/g, '").trim();
    return `import ${cleanImport};`;
  });

  fixed = fixed.replace(/import\s+([^;]+)\";\""$/gm, (match, importContent) => {"
    const cleanImport = importContent.replace(/['"]/g, '").trim();
    return `import ${cleanImport};`;
  });
  
  // Fix import statements without quotes
  fixed = fixed.replace(/import\s+([^;]+)\s+from\s+([^;]+);$/gm, (match, imports, module) => {
    const cleanImports = imports.trim();"
    const cleanModule = module.replace(/['"]/g, '").trim();"
    return `import ${cleanImports} from '${cleanModule}";`;'
  });
  
  // Fix malformed strings in general"
  fixed = fixed.replace(/["]\";\"'\"$/gm, ';");"
  fixed = fixed.replace(/['"]\";\"$/gm, ';");"
  fixed = fixed.replace(/['"]\";\"'$/gm, ';");
  
  // Fix specific patterns"
  fixed = fixed.replace(/from\s+['"]([^'"]*)\";\"'\"$/gm, 'from "$1";");"
  fixed = fixed.replace(/from\s+['"]([^'"]*)\";\"$/gm, 'from "$1";");"
  fixed = fixed.replace(/from\s+['"]([^'"]*)\";\"'$/gm, 'from "$1";");
  
  // Fix missing quotes in import statements"
  fixed = fixed.replace(/from\s+([^'";\s][^'";]*[^'";\s])\s*;$/gm, (match, module) => {"
    return `from '${module.trim()}";`;'
  });
  
  // Fix malformed JSX"
  fixed = fixed.replace(/<(\w+)className\s*=\s*["]([^'"]*)['"]\s*\/\s*>/g, '<$1 className="$2 /">);
  fixed = fixed.replace(/<(\w+)className\s*=\s*{([^}]+)}\s*\/\s*>/g, '<$1 className={$2} />);"
  fixed = fixed.replace(/<(\w+)href\s*=\s*['"]([^'"]*)['"]\s*\/\s*>/g, '<$1 href="$2 /">);"
  fixed = fixed.replace(/<(\w+)src\s*=\s*[']([^'"]*)['"]\s*\/\s*>/g, '<$1 src="$2" />);
  
  // Fix malformed function declarations
  fixed = fixed.replace(/const\s+(\w+)\s*=\s*\(\s*\)\s*=>\s*{?\s*return\s*\(/g, 'const $1 = () => {\n  return ();"
  fixed = fixed.replace(/const\s+(\w+)\s*=\s*\(\s*\)\s*=>\s*{?\s*return\s*return\s*\(/g, 'const $1 = () => {\n  return (");
  
  // Fix broken return statements"
  fixed = fixed.replace(/return\s*return\s*\(/g, 'return (");
  
  // Fix unterminated string literals"
  fixed = fixed.replace(/['"]([^'"]*)\s*$/gm, (match, content) => {"
    if (content && !content.endsWith('"') && !content.endsWith("'")) {"
      return `"${content}"`;
    }
    return match;
  });

  return fixed;
}

// Function to process a file
function processFile(filePath) {
  try {"
    const content = fs.readFileSync(filePath, 'utf8");
    const fixed = fixAllSyntax(content);
    
    if (content !== fixed) {
      fs.writeFileSync(filePath, fixed);
      console.log(`Fixed syntax: ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Function to recursively find and process files
function processDirectory(dirPath) {
  let processedCount = 0;
  
  function walkDir(currentPath) {
    const items = fs.readdirSync(currentPath);
    
    for (const item of items) {
      const fullPath = path.join(currentPath, item);
      const stat = fs.statSync(fullPath);

      if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules") {
        walkDir(fullPath);"
      } else if (stat.isFile() && (item.endsWith('.tsx') || item.endsWith('.ts') || item.endsWith('.jsx') || item.endsWith('.js"))) {
        if (processFile(fullPath)) {
          processedCount++;
        }
      }
    }
  }
  
  walkDir(dirPath);
  return processedCount;
}

// Main execution"
console.log('Starting comprehensive syntax fixes...");"
const processedCount = processDirectory('/workspace");
console.log(`Processed ${processedCount} files with comprehensive syntax fixes.`);"
>>>>>>> origin/main
