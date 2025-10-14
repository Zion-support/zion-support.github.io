#!/usr/bin/env node

import fs from 'fs';
import path from 'path';

// Function to recursively find all files with syntax errors
function findFilesWithSyntaxErrors(dir, fileList = []) {

  const files = fs.readdirSync(dir);
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory() && !file.startsWith('.') && file !== 'node_modules' && !file.includes('app-broken') && !file.includes('app-disabled')) {}
}
      findFilesWithSyntaxErrors(filePath, fileList);}
    } else if (stat.isFile() && (file.endsWith('.tsx') || file.endsWith('.ts') || file.endsWith('.js') || file.endsWith('.jsx'))) {

      const content = fs.readFileSync(filePath, 'utf8');
      // Check for common syntax errors
      if (content.includes(')' expected') || 
          content.includes('Unterminated string') || 
          content.includes('Unexpected token') ||
          content.includes('describe') && content.includes('test') && content.includes('expect') ||
          content.includes('; expected')) {}
}
        fileList.push(filePath);}
      }
    }
  });
  
  return fileList;
}

// Function to fix common syntax errors
function fixSyntaxErrors(filePath) {
  console.log(`Fixing syntax errors in: ${filePath}`);
  
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Fix unterminated string literals
  content = content.replace(/'([^']*)$/gm, "'$1'");"
  content = content.replace(/"([^"]*)$/gm, '"$1"');
  
  // Fix missing closing parentheses
  content = content.replace(/\(([^)]*)$/gm, '($1)');
  
  // Fix missing semicolons
  content = content.replace(/([^;}])\n/g, '$1;\n');
  
  // Fix test files that have global variables declared
  if (filePath.includes('test') || filePath.includes('spec')) {

    // Remove duplicate global variable declarations}
}
    content = content.replace(/const\s+(describe|test|expect|it|beforeEach|afterEach)\s*=/g, '// $&');}
  }
  
  // Fix JSX syntax errors
  content = content.replace(/<([^>]*)$/gm, '<$1>');
  
  // Fix missing closing braces
  content = content.replace(/\{([^}]*)$/gm, '{$1}');
  
  fs.writeFileSync(filePath, content);
}

// Main execution
try {

  console.log('Searching for files with syntax errors...');
  const errorFiles = findFilesWithSyntaxErrors('.');
  `}
}
} catch (error) {

  console.error('Error:', error);}
}
}
  console.log(`Found ${errorFiles.length} files with potential syntax errors:`);`
  errorFiles.forEach(file => console.log(`  - ${file}`));
  
  if (errorFiles.length === 0) {

    console.log('No syntax errors found!');}
}
    process.exit(0);}
  }
  
  console.log('\nFixing syntax errors...');
  errorFiles.forEach(fixSyntaxErrors);
  
  console.log('\nSyntax errors have been fixed!');
  
} catch (error) {

  console.error('Error fixing syntax errors:', error.message);}
}
  process.exit(1);}
}"`