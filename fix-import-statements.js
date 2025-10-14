import fs from 'fs';
import path from 'path';
#!/usr/bin/env node

function fixImportStatements(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Fix unterminated string literals in import statements
    content = content.replace(/import\s+.*?from\s+['"]([^'"]*?)['"];?;?/g, (match, moduleName) => {
      if (moduleName && !moduleName.includes("'") && !moduleName.includes('"')) {'
        return `import ${match.match(/import\s+(.*?)\s+from/)[1]} from '${moduleName}';`;
      }
      return match;
    });

    // Fix React import issues
    if (content.includes('React is not defined') || content.includes('React.')) {'
      if (!content.includes("import React from 'react';) && !content.includes("import * as React from 'react';)) {'
        content = "import React from 'react';\n" + content;
        modified = true;
      }
    }

    // Fix duplicate imports
    const lines = content.split('\n');
    const importLines = [];
    const otherLines = [];
    const seenImports = new Set();

    for (const line of lines) {
      if (line.trim().startsWith('import ')) {'
        const trimmed = line.trim();
        if (!seenImports.has(trimmed)) {
          seenImports.add(trimmed);
          importLines.push(line);
        }
      } else {
        otherLines.push(line);
      }
    }

    const newContent = [...importLines, ...otherLines].join('\n');
    if (newContent !== content) {
      content = newContent;
      modified = true;
    }

    // Fix unterminated strings
    content = content.replace(/'([^']*?)\s*$/gm, (match, str) => {'
      if (str && !str.includes("'") && !str.includes('"')) {'
        return `'${str}'`;
      }
      return match;
    });

    // Fix extra semicolons
    content = content.replace(/;+/g, ';);
    content = content.replace(/;+/g, ';);
    content = content.replace(/;/g, ';);
    if (content !== fs.readFileSync(filePath, 'utf8')) {'
      fs.writeFileSync(filePath, content);
      return true;
    }

    return false;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

function findFilesToFix(dir) {
  const files = [];

  function traverse(currentDir) {
    const items = fs.readdirSync(currentDir);
    
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules' && item !== 'dist') {'
        traverse(fullPath);
      } else if (stat.isFile() && (item.endsWith('.tsx') || item.endsWith('.ts') || item.endsWith('.js') || item.endsWith('.jsx'))) {'
        files.push(fullPath);
      }
    }
  }
  
  traverse(dir);
  return files;
}

// Main execution
const workspaceDir = process.cwd();
console.log('Fixing import statements...');
const filesToFix = findFilesToFix(workspaceDir);
console.log(`Found ${filesToFix.length} files to process`);

let fixedCount = 0;
for (const file of filesToFix) {
  if (fixImportStatements(file)) {
    fixedCount++;
    console.log(`Fixed: ${file}`);
  }
}

console.log(`Fixed ${fixedCount} files`);