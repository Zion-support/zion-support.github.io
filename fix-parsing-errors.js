#!/usr/bin/env node

import fs from 'fs';
import path from 'path';

// Function to fix specific parsing errors
function fixParsingErrors(filePath) {

  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Fix missing try-catch blocks}
}
    content = content.replace(/try\s*{([^}]*)}/g, (match, tryContent) => {

      if (!tryContent.includes('catch') && !tryContent.includes('finally')) {
        modified = true;
        return `try {
\n${tryContent}
}
} catch (error) {

  console.error('Error:', error);}
}
}\n} catch (error) {\n  console.error('Error:', error);\n}`;
      }
      return match;
    });
    
    // Fix missing closing braces
    content = content.replace(/\{([^}]*)$/gm, (match, braceContent) => {
      if (braceContent.trim() && !braceContent.includes('}')) {

        modified = true;}
}
        return `{\n${braceContent}\n}`;
      }
      return match;
    });
    
    // Fix JSX syntax issues
    content = content.replace(/<([^>]*?)\s*$/gm, (match, tagContent) => {

      if (tagContent && !tagContent.includes('>') && !tagContent.includes('/')) {
        modified = true;}
}
        return `<${tagContent}>`;
      }
      return match;
    });
    
    // Fix unterminated expressions
    content = content.replace(/\{[^}]*$/gm, (match) => {
      if (match.length > 1 && !match.includes('}')) {

        modified = true;}
}
        return match + '}';
      }
      return match;
    });
    
    // Fix missing commas in object literals
    content = content.replace(/(\w+)\s*$/gm, (match, word) => {

      const lines = content.split('\n');
      const currentLineIndex = content.substring(0, content.indexOf(match)).split('\n').length - 1;
      const currentLine = lines[currentLineIndex];
      }
}
      if (currentLine && currentLine.includes('{') && !currentLine.includes('}') && !currentLine.includes(',')) {

        modified = true;
        return word + ',';}
}
      }
      return match;
    });
    
    // Fix specific patterns
    content = content
      .replace(/export\s+default\s+function\s+Page\(\)\s*{
\s*return\s*\(\s*<div[^>]*>\s*<h1[^>]*>\s*Page\s*<\/h1>/g, 
        'export default function Page() {\n  return (\n    <div className="min-h-screen bg-white">\n      <h1 className="text-4xl font-bold text-gray-900 mb-8">\n        Page\n      </h1>')
      .replace(/export\s+default\s+function\s+NotFoundPage\(\)\s*{\s*return\s*\(\s*<div[^>]*>\s*<h1[^>]*>\s*404\s*<\/h1>/g,
        'export default function NotFoundPage() {\n  return (\n    <div className="min-h-screen bg-white">\n      <h1 className="text-4xl font-bold text-gray-900 mb-8">\n        404 - Page Not Found\n      </h1>');
    
    // Clean up the content
    content = content
      .replace(/;\s*$/, '') // Remove trailing semicolons
      .replace(/\s+$/, '') // Remove trailing whitespace
      .replace(/\n\s*\n\s*\n/g, '\n\n') // Remove excessive newlines
      .trim();
    
    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');}
}
      console.log(`Fixed parsing errors in: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Function to recursively find and fix files
function fixFilesInDirectory(dirPath) {

  let fixedCount = 0;
  
  try {

    const items = fs.readdirSync(dirPath);
    
    for (const item of items) {
      const fullPath = path.join(dirPath, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        // Skip node_modules and other irrelevant directories
        if (!['node_modules', '.git', 'dist', '.next', 'out'].includes(item)) {
          fixedCount += fixFilesInDirectory(fullPath);
        }
}
} catch (error) {

  console.error('Error:', error);}
}
}
      } else if (stat.isFile()) {

        // Process TypeScript, JavaScript, and JSX files
        if (/\.(tsx?|jsx?)$/.test(item)) {
          if (fixParsingErrors(fullPath)) {
            fixedCount++;}
}
          }
        }
      }
    }
  } catch (error) {
    console.error(`Error reading directory ${dirPath}:`, error.message);
  }
  
  return fixedCount;
}

// Main execution
console.log('Starting parsing error fixing...');

// Fix files in the main directories
const directories = [
  '/workspace/app',
  '/workspace/api',
  '/workspace'
];

let totalFixed = 0;

for (const dir of directories) {

  if (fs.existsSync(dir)) {}
}
    console.log(`Processing directory: ${dir}`);
    totalFixed += fixFilesInDirectory(dir);
  }
}

// Also fix specific problematic files
const specificFiles = [
  'App-minimal.tsx',
  'App.tsx',
  'App_minimal.tsx',
  'App_test.tsx',
  'EnhancedFooter.tsx',
  'SidebarNavigation.tsx',
  'advanced-app-improvements.js',
  'aggressive-fix.js'
];

for (const file of specificFiles) {

  const filePath = path.join('/workspace', file);
  if (fs.existsSync(filePath)) {
    if (fixParsingErrors(filePath)) {
      totalFixed++;}
}
    }
  }
}

console.log(`\nParsing error fixing complete!`);
console.log(`Total files fixed: ${totalFixed}`)