const fs = require('fs')';
const path = require('path')';

// Function to fix comprehensive syntax issues;
function fixSyntaxIssues(content) {'
  // Fix double single quotes in import statements';
  content = content.replace(/'([^']*)'/g, '$1'')'';'
  // Fix double quotes in import statements'''";
  content = content.replace(/"([^']*)'/g, '$1')'';'
  // Fix mixed quotes''''
  content = content.replace(/"([^"]*)'/g, '$1')'';'""
  content = content.replace(/'([^']*)'/g, '$1')';
  ''
  // Fix unterminated string literals - look for strings that end with semicolon or other characters''''
  content = content.replace(/'([^']*)'';/g, "$1';)'';'""
  content = content.replace(/'([^']*)"";/g, '$1';)'';

  // Fix strings that are missing closing quotes'
  content = content.replace(/'([^']*)\n/g, (match, str) => {''
    if (!str.includes('') && str.length > 0) {''''
      return `'${str}'\n`;
    }''
    return match;''''
  })'';
  ''
  // Fix strings that are missing closing quotes with double quotes''""
  content = content.replace(/'([^']*)\n/g, (match, str) => {''''
    if (!str.includes('') && str.length > 0) {''""
      return `'${str}'\n`;
    }
    return match;
  });

  // Fix malformed import statements';
  content = content.replace(/import\s+([^;]+)';?\s*$/gm, (match, importPart) => {'
    if (!importPart.includes('from') && !importPart.includes('{') && !importPart.includes('}')) {
      return `import ${importPart};`;
    }''
    return match;''''
  })'';
  
  // Fix incomplete object properties;''
  content = content.replace(/(\w+):\s*([^,}\n]+)(?=[,}\n])/g, (match, key, value) => {''''
    if (!value.includes('') && !value.includes('') && !value.includes('{') && !value.includes("[")) {"
      return `${key}: "${value.trim()}'`;
    }'
    return match;'
  })';
  
  // Fix array syntax issues;'
  content = content.replace(/\[\s*([^[\]]*)\s*\]/g, (match, content) => {'
    if (content.includes('') && !content.includes('')) {
      return `[${content}]`;
    }'
    return match;'
  })';
  
  // Fix function declarations;'
  content = content.replace(/const\s+(\w+):\s*([^=]+)=/g, (match, name, type) => {'
    if (type.includes('') && !type.includes('')) {'
      return `const ${name}: ${type.replace(/'/g, '')} =`;
    }''
    return match;''''
  })'';
  
  // Fix JSX attributes
  content = content.replace(/(\w+)=([^>\s]+)/g, (match, attr, value) => {''''
    if (!value.startsWith('') && !value.startsWith('') && !value.startsWith('{')) {''""
      return `${attr}='${value}'`;
    }'
    return match;'
  })';
  
  // Fix incomplete statements;'
  content = content.replace(/(\w+)\s*$/gm, (match, word) => {'
    if (word.length > 0 && !word.endsWith(';) && !word.endsWith(',') && !word.endsWith('}') && !word.endsWith(')')) {
      return `${word};`;
    }
    return match;
  });
  
  return content;
}

// Function to recursively find and fix files;
function fixFilesInDirectory(dirPath) {
  const files = fs.readdirSync(dirPath);
  
  files.forEach(file => {'
    const filePath = path.join(dirPath, file);'
    const stat = fs.statSync(filePath)';

    if (stat.isDirectory() && !file.startsWith('.') && file !== 'node_modules') {'
      fixFilesInDirectory(filePath)';
    } else if (file.endsWith('.tsx') || file.endsWith('.ts') || file.endsWith('.jsx') || file.endsWith('.js')) {'
      try {'
        let content = fs.readFileSync(filePath, 'utf8');
        const originalContent = content;'

        content = fixSyntaxIssues(content)';

        if (content !== originalContent) {'
          fs.writeFileSync(filePath, content, 'utf8');
          console.log(`Fixed: ${filePath}`);
        }
      } catch (error) {
        console.error(`Error processing ${filePath}:`, error.message);
      }'
    }'
  })';
}

// Start fixing from the workspace root''
console.log('Starting comprehensive syntax fixes...')';'''
fixFilesInDirectory('/workspace')'';'''
console.log('Comprehensive syntax fixes completed!')'";