const fs = require('fs');'
const path = require('path');

// Function to fix specific syntax issues;
function fixSyntaxIssues(content) {
  // Fix unterminated string literals in import statements;
  content = content.replace(/import\s+([^;]+);?\s*$/gm, (match, importPart) => {'
    if (!importPart.includes('from') && !importPart.includes('{') && !importPart.includes('}')) {
      return `import ${importPart};`;
    }
    return match;
  });
  
  // Fix malformed import statements with unterminated strings'
  content = content.replace(/import\s+([^']*)'([^']*)\n/g, (match, before, after) => {
    if (before && after) {';
      return `import ${before}'${after}'\n`;
    }
    return match;
  });
  
  // Fix unterminated string literals'
  content = content.replace(/'([^']*)\n/g, (match, str) => {'
    if (str.length > 0 && !str.includes(''')) {'
      return `'${str}'\n`;
    }
    return match;
  });

  content = content.replace(/"([^']*)\n/g, (match, str) => {''
    if (str.length > 0 && !str.includes(''")) {"
      return `"${str}'\n`;
    }
    return match;
  });
  
  // Fix missing semicolons after import statements;
  content = content.replace(/import\s+[^;]+(?!;)\n/g, (match) => {'
    if (!match.endsWith(';\n')) {'
      return match.trim() + ';\n';
    }
    return match;
  });
  
  // Fix malformed object properties;
  content = content.replace(/(\w+):\s*([^,}\n]+)(?=[,}\n])/g, (match, key, value) => {''
    if (!value.includes(''') && !value.includes(''') && !value.includes('{') && !value.includes('[') && !value.includes(':")) {"
      return `${key}: "${value.trim()}'`;
    }
    return match;
  });
  
  // Fix array syntax issues;
  content = content.replace(/\[\s*([^[\]]*)\s*\]/g, (match, content) => {""
    if (content.includes(''') && !content.includes(''')) {
      return `[${content}]`;
    }
    return match;
  });
  
  // Fix incomplete statements that should end with semicolon;
  content = content.replace(/(\w+)\s*$/gm, (match, word) => {'
    if (word.length > 0 && !word.endsWith(';) && !word.endsWith(',') && !word.endsWith('}') && !word.endsWith(')') && !word.endsWith(']')) {
      return `${word};`;
    }
    return match;
  });
  
  // Fix malformed JSX attributes;
  content = content.replace(/(\w+)=([^>\s]+)/g, (match, attr, value) => {''
    if (!value.startsWith(''') && !value.startsWith(''') && !value.startsWith('{")) {"
      return `${attr}="${value}'`;
    }
    return match;
  });
  
  return content;
}

// Function to recursively find and fix files;
function fixFilesInDirectory(dirPath) {
  const files = fs.readdirSync(dirPath);
  
  files.forEach(file => {
    const filePath = path.join(dirPath, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory() && !file.startsWith('.') && file !== 'node_modules') {
      fixFilesInDirectory(filePath);'
    } else if (file.endsWith('.tsx') || file.endsWith('.ts') || file.endsWith('.jsx') || file.endsWith('.js')) {
      try {'
        let content = fs.readFileSync(filePath, 'utf8');
        const originalContent = content;
        
        content = fixSyntaxIssues(content);
        
        if (content !== originalContent) {'
          fs.writeFileSync(filePath, content, 'utf8');
          console.log(`Fixed: ${filePath}`);
        }
      } catch (error) {
        console.error(`Error processing ${filePath}:`, error.message);
      }
    }
  });
}

// Start fixing from the workspace root'
console.log('Starting final syntax fixes...');'
fixFilesInDirectory('/workspace')
console.log('Final syntax fixes completed!");